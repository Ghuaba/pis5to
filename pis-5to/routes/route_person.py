from flask import Blueprint, jsonify, make_response, request
from flask_expects_json import expects_json
from controllers.control_person import PersonaControl
from routes.schemas.schameas_person import save_person, edit_person, edit_person_email
from routes.schemas.schemes_auth import schema_login
from controllers.utils.errors import Errors

api_persona = Blueprint('api_persona_persona', __name__)

personaC = PersonaControl()


@api_persona.route('/persona')
def home():
    return make_response(
        jsonify({"msg" : "OK", "code" : 200, "datos" : ([i.serialize for i in personaC.listar()])}), 
        200
    )


@api_persona.route('/persona/guardar'   , methods = ["POST"])
@expects_json(save_person)
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
                jsonify({"msg" : "ERROR", "code" : 400, "datos" :{"error" : Errors.error[str(id)]}}), 
                400
    )


@api_persona.route('/persona/modificar/<external_id_persona>' , methods = ["POST"])
@expects_json(edit_person)
def modificar_persona(external_id_persona):
    data = request.json 
    id = personaC.modificarPersona(external_id_persona, data = data)
    if(id >= 0):
        return make_response(
                jsonify({"msg" : "OK", "code" : 200, "datos" : {"tag" : "datos guardados"}}), 
                200
        )
    else:
        return make_response(
                jsonify({"msg" : "ERROR", "code" : 400, "datos" :{"error" : Errors.error[str(id)]}}), 
                400
    )

@api_persona.route('/persona/modificar/correo/<external_id_persona>' , methods = ["POST"])
@expects_json(edit_person_email)
def modificar_correo_persona(external_id_persona):
    data = request.json 
    id = personaC.modificarCorreoPersona(external_id_persona, data = data)
    if(id >= 0):
        return make_response(
                jsonify({"msg" : "OK", "code" : 200, "datos" : {"tag" : "datos guardados"}}), 
                200
        )
    else:
        return make_response(
                jsonify({"msg" : "ERROR", "code" : 400, "datos" :{"error" : Errors.error[str(id)]}}), 
                400
    )

@api_persona.route('/persona/buscar/<cedula>' , methods = ["GET"])
def buscar_persona(cedula):
    persona = personaC.buscarPersona(cedula) 
    if type(persona)==int:
        return make_response(
                jsonify({"msg" : "ERROR", "code" : 400, "datos" :{"error" : Errors.error[str(persona)]}}), 
                400
        )
    else:
        return make_response(
            jsonify({"msg" : "OK", "code" : 200, "datos" : (persona)}), 
            200
        )
    
@api_persona.route('/persona/cambiar_estado/<external_id>' , methods = ["GET"])
def cambiar_estadoPersona(external_id):
    id = personaC.cambiar_estado_persona(external_id) 
    if(id == 1):
        return make_response(
                jsonify({"msg" : "OK", "code" : 200, "datos" : {"tag" : "persona desactivada"}}), 
                200
        )
    elif (id == 2):
        return make_response(
                jsonify({"msg" : "OK", "code" : 200, "datos" : {"tag" : "persona activada"}}), 
                200
        )
    else:
        return make_response(
                jsonify({"msg" : "ERROR", "code" : 400, "datos" :{"error" : Errors.error[str(id)]}}), 
                400
    )

@api_persona.route('/login', methods = ['POST'])
@expects_json(schema_login)
def login():

    values = request.json

    response = personaC.login(values = values)

    return make_response(jsonify(response), response['code'])
    
