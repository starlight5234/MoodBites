from . import db

class Login(db.Model):
    email = db.Column(db.String(), primary_key=True)
    password = db.Column(db.String(8), nullable=False)