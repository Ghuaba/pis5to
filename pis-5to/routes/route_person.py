from flask import Blueprint, jsonify, make_response, request
from flask_expects_json import expects_json
from controllers.control_person import PersonaControl

api_persona = Blueprint('api_persona_persona', __name__)

personaC = PersonaControl()


schema_save_person = {
    'type' : 'object',
    'propierties' : {
        'name': {'type' : 'string'},
        'dni': {'type' : 'string'},
        'last_name': {'type' : 'string'},
        'email': {'type' : 'string'},
        'password': {'type' : 'string'}
    },
    'required' : ['name','dni', 'last_name','email', 'password']
}

@api_persona.route('/persona')
def home():
    return make_response(
        jsonify({"msg" : "OK", "code" : 200, "datos" : ([i.serialize for i in personaC.listar()])}), 
        200
    )


@api_persona.route('/persona/guardar'   , methods = ["POST"])
@expects_json(schema_save_person)
def guardar_persona():
    data = request.json 
    id = personaC.guardarPersona(data = data)
    if(id >= 0):
        return make_response(
                jsonify({"msg" : "OK", "code" : 200, "datos" : {"tag" : "datos guardados"}}), 
                200
        )
    else:
        return make_response(
                jsonify({"msg" : "ERROR", "code" : 400, "datos" :{"error" : #Errors.error[str(id)]}
                                                                  'error'}}), 
                400
    )

