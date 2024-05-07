from app import Base
from models.sensor import Sensor
from models.person import Person
import uuid
from app import Base

class ControllerSensor():

    def listSensor(self):
        return Sensor.query.all()
    
    def saveSensor(self,data):
        sensor= Sensor()
        person = Person.query.filter_by(uid=data["uid"]).first()
        if person:
            sensor.ip = data['ip']
            sensor.element_type = data['element_type']
            sensor.status = True
            sensor.uid = uuid.uuid4
            sensor.person_id= person.id
            Base.session.add(sensor)
            Base.session.commit()
            return sensor.id
        else:
            return -11

