from models.person import Person
import uuid
from app import Base
import jwt
from datetime import datetime, timedelta
from flask import current_app
from .utils.errors import Errors

class PersonaControl():

    def listar(self):
        return Person.query.all()
    
#guardar una persona ingresando datos
    def guardarPersona(self, data):
        correo = Person.query.filter_by(email = data['email']).first()
        dni = Person.query.filter_by(dni = data['dni']).first()

        if correo:
            return -2
        elif dni:
            return -7
        elif len(data['dni']) > 10:
          return -8
        else:  

            hash_password = generate_password_hash(data['password'], method='sha256')
            
            persona = Person()
            persona.uid = uuid.uuid4()
            persona.name = data['name'] 
            persona.dni = data['dni']
            persona.last_name = data['last_name']
            persona.email = data['email']
            persona.password = hash_password
            persona.status = True

            Base.session.add(persona)
            Base.session.commit()
            
            return persona.id   


    def modificarPersona(self, uid, data):
        persona = Person.query.filter_by(uid=uid).first()
        if persona:
            dni = Person.query.filter_by(dni = data['dni']).first()
            if dni:
                return -2
            elif len(data['dni']) > 10:
                return -8
            else:
                persona.uid = uuid.uuid4()
                persona.name = data['name'] 
                persona.dni = data['dni']
                persona.last_name = data['last_name']
                Base.session.merge(persona)
                Base.session.commit()
                return persona.id
        else:
            return -1
        
    def modificarCorreoPersona(self, uid, data):
        persona = Person.query.filter_by(uid=uid).first()
        if persona:
            correo = Person.query.filter_by(email = data['email']).first()
            if correo:
                return -2
            else:
                persona.uid = uuid.uuid4()
                persona.email = data['email'] 
                persona.password = data['password']  
                Base.session.merge(persona)
                Base.session.commit()
                return persona.id
        else:
            return -1
        
    def buscarPersona(delf, cedula):
        persona = Person.query.filter_by(dni=cedula).first()
        if persona:
            info = {
                "name": persona.name,
                "dni": persona.dni,
                "last_name": persona.last_name
            }
            return info
        else:
            return -1
        
    def cambiar_estado_persona(self, uid):
        persona = Person.query.filter_by(uid=uid).first()
        if persona:
            try:
                persona.uid = uuid.uuid4()
                if persona.status:
                    persona.status = False
                    id = 1
                else:
                    persona.status = True
                    id = 2
                Base.session.merge(persona)
                Base.session.commit()
                return id
            except:
                return -1
        else:
            return -1   
        
    
    def login(values):
            
        person = Person.query.filter_by(email = values['email']).first()

        pass_unhash = check_password_hash(person.password , values['password'])
            
        if not person:
            return {'msg': 'error', 'code' : 400, 'data': {'error' : Errors.error[str(-11)]}}
            
        if not pass_unhash:
            return {'msg': 'error', 'code' : 400, 'data': {'error' : Errors.error[str(-11)]}}
            
        token = jwt.encode(
            {
            'uid' : person.uid,
            'exp' : datetime.utcnow() + timedelta(minutes = 5)
            },
            key = current_app.config['SECRET_KEY'],
            algorithm = 'HS512',
        )

        return {
            'token'   : token,
            'code'    : 200,
            'person' : person.name +" "+ person.last_name
        }
