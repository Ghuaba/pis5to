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
        person = Person.query.filter_by(uid=data["person"]).first()
        if person:
            sensor.ip = data['ip']
            sensor.element_type = data['element_type']            
            sensor.name = data['name']

            sensor.status = True
            #sensor.uid = uuid.uuid4
            sensor.person_id= person.id
            Base.session.add(sensor)
            Base.session.commit()
            return sensor.id
        else:
            return -11

    def modifySensor(self,data, uid):
        sensor= Sensor.query.filter_by(uid= uid).first()
        if sensor is None:
            return -12
        else:
            new_sensor= sensor.copy()
            new_sensor.name= data.get('name', sensor.name)
            new_sensor.element_type= data.get('element_type', sensor.element_type)
            new_sensor.ip= data.get('ip', sensor.ip)
            new_sensor.uid= uuid.uuid4()
            Base.session.merge(new_sensor)
            Base.session.commit()
            return new_sensor.id
        
        
    
    def change_status(self,uid):
        sensor= Sensor.query.filter_by(uid=uid).first()
        if sensor is None:
            return -12
        else:
            new_sensor= sensor.copy()
            if new_sensor.status == True:
                new_sensor.status= False
                new_sensor.uid= uuid.uuid4()
                Base.session.merge(new_sensor)
                Base.session.commit()
            else:
                new_sensor.status= True
                new_sensor.uid= uuid.uuid4()
                Base.session.merge(new_sensor)
                Base.session.commit()
        return new_sensor.id


    def search_sensor_by_uid(self, sensor_uid):
        sensor = Sensor.query.filter_by(uid=sensor_uid).first()
        return sensor

    def search_sensor_by_name(self, sensor_name):
        sensor = Sensor.query.filter_by(name=sensor_name).first()
        return sensor
    
    
            


            
             
            
        
