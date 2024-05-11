from models.person import Person
import uuid
from app import Base
import jwt
from datetime import datetime, timedelta
from flask import current_app

class PersonaControl():

    def listar(self):
        return Person.query.all()
    
#guardar una persona ingresando datos
    def guardarPersona(self, data):
        correo = Person.query.filter_by(email = data['email']).first()
        dni = Person.query.filter_by(dni = data['dni']).first()

        if correo:
            return -41
        elif dni:
            return -42
        elif len(data['dni']) > 10:
          return -42
        else:  

            persona = Person()
            persona.uid = uuid.uuid4()
            persona.name = data['name'] 
            persona.dni = data['dni']
            persona.last_name = data['last_name']
            persona.email = data['email']
            persona.password = data['password']
            persona.status = True

            Base.session.add(persona)
            Base.session.commit()
            
            return persona.id   


    def modificarPersona(self, uid, data):
        persona = Person.query.filter_by(uid=uid).first()
        if persona:
            dni = Person.query.filter_by(dni = data['dni']).first()
            if dni:
                return -41
            elif len(data['dni']) > 10:
                return -42
            else:
                persona.uid = uuid.uuid4()
                persona.name = data['name'] 
                persona.dni = data['dni']
                persona.last_name = data['last_name']
                Base.session.merge(persona)
                Base.session.commit()
                return persona.id
        else:
            return -40
        
    def modificarCorreoPersona(self, uid, data):
        persona = Person.query.filter_by(uid=uid).first()
        if persona:
            correo = Person.query.filter_by(email = data['email']).first()
            if correo:
                return -41
            else:
                persona.uid = uuid.uuid4()
                persona.email = data['email'] 
                persona.password = data['password']  
                Base.session.merge(persona)
                Base.session.commit()
                return persona.id
        else:
            return -40
        
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
            return -40
        
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
                return -40
        else:
            return -40
        
