from application import db


# sample db table <-> python object
class User(db.Model) :
    id = db.Column(db.Integer, primary_key=True)
    farm_name = db.Column(db.String, nullable=False )
    email = db.Column(db.String(), unique=True, nullable = False)
    password_hash = db.Column(db.String(), nullable = False)
    

    # practical to have dictionnary for object we may send in request as json - but here just for showcasing purposes
    def to_dict(self) :
        return {
            "farm_name" : self.farm_name,
            "email" : self.email 
        }