from flask import Blueprint
from controllers.controller_test import ControllerTest

url_test = Blueprint('url_test', __name__)
'''
@url_test.route('/')
def index():
    
    person = ControllerTest.create_test()
    
    return {
        'Person': person,
        'Status Code': 200,
    }
'''