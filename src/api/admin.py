  
import os
from flask_admin import Admin
from .db import db
from .user import User
from .Calendar import Calendar
from .employees import Employees
from .Events import Events
from .Exercises import Exercises
from .favorites import Favorites
from .Nutrition import Nutrition
from .Papers import Papers
from .Professionals import Professionals
from .programs import Programs
from .progress import Progress
from flask_admin.contrib.sqla import ModelView
from flask_admin.menu import MenuCategory, MenuView, MenuLink

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Programs, db.session))
    admin.add_view(ModelView(Calendar, db.session))
    admin.add_view(ModelView(Events, db.session))
    admin.add_view(ModelView(Exercises, db.session))
    admin.add_view(ModelView(Employees, db.session))
    admin.add_view(ModelView(Professionals, db.session))
    admin.add_view(ModelView(Nutrition, db.session))
    admin.add_view(ModelView(Papers, db.session))
    admin.add_view(ModelView(Progress, db.session))
    

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))
    admin.add_link(MenuLink(name='Home Page Backend', url='/'))