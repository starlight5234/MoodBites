from flask import Blueprint

# Load our view in a Blueprint
views_bp = Blueprint('sample_blueprint', __name__)

@views_bp.route('/', methods=['GET', 'POST'])
def root():
    return f"Hello, Moodies! We are online"