from flask_sqlalchemy import SQLAlchemy
from .db import db

#en general serializar lo que esta como nullable false.. if in doubt, slack

class Papers(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), unique=False, nullable=False)
    url = db.Column(db.String(50), unique=False, nullable=False)
    description = db.Column(db.String(280), unique=True, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "url": self.url,
            "description": self.description,
        }