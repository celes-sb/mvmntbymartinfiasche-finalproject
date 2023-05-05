from flask_sqlalchemy import SQLAlchemy
from .db import db
class Favorites(db.Model):
    __tablename__='favorites' 
    id = db.Column(db.Integer, primary_key=True)
    exercise_id = db.Column(db.Integer, db.ForeignKey('exercises.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    
    def serialize(self):
        return {
            "id": self.id,
            "exercise_name": self.exercise_name,
        }