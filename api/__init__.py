import os
from pathlib import Path
from flask import Flask
from .views import views_bp
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy

DB_NAME = "moodbites.db"
db = SQLAlchemy()

# Call all the required packages and classes to instantiate our Flask class
def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'Clowns'
    app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///../db/{DB_NAME}'
    
    # Load our root as /
    app.register_blueprint(views_bp, url_prefix='/')

    # Instantiate REST-ful API from Flask
    API = Api(app)

    from .api import LoginClass

    API.add_resource(LoginClass, '/api/login')

    # Database
    db.init_app(app=app)
    with app.app_context():
        if not os.path.exists(f'db/{DB_NAME}'):
            Path('db/').mkdir(parents=True, exist_ok=True)
            db.create_all()
            print('Created DB')

    return app