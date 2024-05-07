import uuid
from datetime import datetime

from app import Base
from .element_type import ElementType

class Sensor(Base.Model):

    # table name
    __tablename__ = 'sensor'

    # fields
    id           = Base.Column(Base.Integer, primary_key = True)
    uid          = Base.Column(Base.String(60), default = str(uuid.uuid4()), nullable = False)
    name         = Base.Column(Base.String(50), nullable = False)
    element_type = Base.Column(Base.Enum(ElementType), nullable = False)
    status       = Base.Column(Base.Boolean, nullable = False)
    ip           = Base.Column(Base.String(20), nullable = False)
    person_id    = Base.Column(Base.Integer, Base.ForeignKey('person.id'), nullable = False)

    # audit fields
    created_at = Base.Column(Base.DateTime, default = datetime.now)
    updated_at = Base.Column(Base.DateTime, default = datetime.now, onupdate = datetime.now)
    
    # parent relationships
    monitoring = Base.relationship("Monitoring", back_populates="sensor")
    
    # child relationships
    person = Base.relationship("Person", back_populates="sensors")
    
    # methods
    @property
    def serialize(self):
        return {
            'uid'          : self.uid,
            'name'         : self.name,
            'status'       : self.status,
            'element_type' : self.element_type,
            'ip'           : self.last_name,
        }
    
    
    def copy(self):
    
        copy_sensor = Sensor(
            id           = self.id,
            uid          = self.uid,
            name         = self.name,
            element_type = self.element_type,
            status       = self.status,
            ip           = self.ip,
            person_id    = self.person_id,
        )
    
        return copy_sensor