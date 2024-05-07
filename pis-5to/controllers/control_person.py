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

        
        persona = Person()
        try:
            
            persona.uid = uuid.uuid4()
            persona.name = data['name'] #parte izquierda viene de la bd y apellidos viene del frontend del usuario
            persona.dni = data['dni']
            persona.last_name = data['last_name']
            persona.email = data['email']
            persona.password = data['password']
            persona.status = True

            Base.session.add(persona)
            Base.session.commit()
            
            return persona.id   
        
        except:
            return -1

