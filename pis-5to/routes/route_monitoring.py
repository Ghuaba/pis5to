from flask import Blueprint, jsonify, make_response, request
#from controllers.utils.errors import Errors
from flask_expects_json import expects_json
from controllers.utils.errors import Errors


from controllers.controller_monitoring import ControllerMonitoring
from .schemas.schemas_monitoring import schema_save

url_monitoring = Blueprint('url_monitoring', __name__)


monitoringC = ControllerMonitoring()

@url_monitoring.route('/monitoring/list')
def listMonitoring():
    return make_response(
        jsonify({"msg" : "OK", "code" : 200, "datos" : ([i.serialize for i in monitoringC.list()])}), 

        200
    )


@url_monitoring.route('/monitoring/save', methods = ["POST"])
@expects_json(schema_save)
def saveMonitoring():
    data = request.json  # Supongamos que recibes los datos en formato JSON
    m = monitoringC.save(data=data)
    if m >= 0:
        return make_response(
            jsonify({"msg": "OK", "code": 200, "datos": {"tag": "datos guardados"}}),
            200
        )
    else:
        return make_response(
            jsonify({"msg": "ERROR", "code": 400, "datos": {"error": Errors.error.get(str(c))}}),
            400
        )

