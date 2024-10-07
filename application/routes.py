from application import app
from flask import render_template , redirect ,url_for , jsonify , request, send_from_directory #easier to handle request and files with these import
from sqlalchemy import desc # makes querying database easier
from application.models import User # have to import each table/object unless find another way 


@app.route("/")
def hello_world():
    return render_template("index.html")


@app.route("/rain")
def rain():
    return {}



#sample route with query and parameter in url
@app.route("/account/<user_id>")
def account(user_id) : 
    farmer = User.query.filter_by(id=user_id).one_or_404()
    return render_template("account.html" , user=farmer)
