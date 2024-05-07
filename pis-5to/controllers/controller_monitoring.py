from models.monitoring import Monitoring
from flask import current_app
from models.monitoring import Monitoring
from models.sensor import Sensor

import uuid
from app import Base
import jwt
from datetime import datetime, timedelta
from .schemas.schemas_monitoring import monitoring_save

class ControllerMonitoring:

    def list(self):
        return Monitoring.query.all()
    

    def save(self, data):
        monitoring = Monitoring()
        
        sensor_uid = data.get("uid") 
        sensor = Sensor.query.filter_by(sensor_uid = sensor_uid).first()
        
        if sensor:
            if data["start_date"] and data["end_date"]:
                start_date = datetime.strptime(data['start_date'], "%Y-%m-%d")
                end_date = datetime.strptime(data['end_date'], "%Y-%m-%d")
                
                if end_date > start_date:
                    monitoring.latitude = data['latitude']
                    monitoring.longitude = data['longitude']
                    monitoring.start_date = start_date
                    monitoring.end_date = end_date
                    monitoring.data = data['data']
                    monitoring.uid = uuid.uuid4()

                    monitoring.sensor_id = sensor.id
                    Base.session.add(monitoring)
                    Base.session.commit()
                    return monitoring.id
                else:
                    return -1  # La fecha de finalización es anterior a la fecha de inicio
            else:
                return -2  # Las fechas no están presentes en los datos
        else:
            return -3 # No se encontró el sensor con el uid proporcionado
        


    def modify(self, uid, data):
        # Recuperar el censo existente de la base de datos utilizando external_id
        monitoring = Monitoring.query.filter_by(uid = uid).first()
        
        if monitoring is None:
            return -4  # Código de error para indicar que no se encontró el censo
        
        # Hacer una copia del censo existente
        new_monitoring = monitoring.copy()
        
        # Verificar si el motivo ya existe
        sensor_uid = data.get("uid") 
        sensor = Sensor.query.filter_by(external_id=sensor_uid).first()
                
        if sensor:
            if data["start_date"] and data["end_date"]:
                start_date = datetime.strptime(data['start_date'], "%Y-%m-%d")
                end_date = datetime.strptime(data['end_date'], "%Y-%m-%d")
                        
                if end_date > start_date:
                    monitoring.uid = data['uid']
                    monitoring.latitude = data['latitude']
                    monitoring.longitude = data['longitude']
                    monitoring.start_date = data['start_date']
                    monitoring.end_date = data['end_date']
                    monitoring.data = data['data']
                    monitoring.sensor_id = sensor.id
                    Base.session.merge(monitoring)
                    Base.session.commit()
                    return monitoring.id

                else:
                    return -5  # Código de error para indicar que la fecha de fin no es posterior a la fecha de inicio
        else:
            return -6  # Código de error para indicar que no se ingresó fecha de inicio


    



