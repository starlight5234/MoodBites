from flask_restful import Resource, reqparse
from . import db
from .models import Login

class LoginClass(Resource):
    def post(self):
        task_post_args = reqparse.RequestParser()
        task_post_args.add_argument("email", type=str, required=True)
        task_post_args.add_argument("pass", type=str, required=True)

        args = task_post_args.parse_args()
        
        # Check if email exists in DB
        # If it doesn't return error
        # If email exists but pass doesn't match, return failed
        # else success

        try:
            user = Login.query.filter_by(email=args["email"].strip()).first()
            if user.password == args["pass"].strip():
                return { 'login': 'success' }

        except Exception:
            return { 'login': "error" }

        return { 'login': 'failed' }