from flask import Blueprint, jsonify, make_response, request
from controllers.controller_sensor import ControllerSensor
from .schemas.schemas_sensor import schema_save_sensor
from flask_expects_json import expects_json
from controllers.utils.errors import Errors

url_sensor = Blueprint('url_sensor', __name__)
sensorC= ControllerSensor()

@url_sensor.route('/listSensor')
def lista_censo():
    return make_response(
        jsonify({"msg" : "OK", "code" : 200, "datos" : ([i.serialize for i in sensorC.listSensor()])}), 

        200
    )
    
@url_sensor.route('/saveSensor', methods = ["POST"])
@expects_json(schema_save_sensor)
def save_motivo():
    data = request.json  
    c = sensorC.saveSensor(data=data)
    if c >= 0:
        return make_response(
            jsonify({"msg": "OK", "code": 200, "datos": {"tag": "datos guardados"}}),
            200
        )
    else:
        return make_response(
            jsonify({"msg": "ERROR", "code": 400, "datos": {"error": Errors.error.get(str(c))}}),
            400
        )