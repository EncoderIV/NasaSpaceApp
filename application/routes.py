from application import app
from flask import render_template , redirect ,url_for , jsonify , request, send_from_directory #easier to handle request and files with these import
from sqlalchemy import desc # makes querying database easier
from application.models import User # have to import each table/object unless find another way 
import datetime
import requests
#import meteomatics.api as api


#Valid until 2024-10-12
username = 'camara_ibrahim'
password = 'Zb3nuJ52qG'



@app.route("/")
def hello_world():
    return render_template("index.html")


@app.route("/rain/", methods=["GET", "POST"])
def rain():
    coords = request.json

    validdatetime = "2024-10-06T22:05:00.000-04:00"
    parameters =  't_2m:C,rain_water:kgm2' 
    location = str(coords["_northEast"]["lat"]) + "," + str(coords["_northEast"]["lng"]) # check if underscore when dubg
    format = "json"

    api_url = f'https://api.meteomatics.com/{validdatetime}/{parameters}/{location}/{format}' # ?{optionals}

    response =  requests.get(api_url , auth=(username,password))

    
    if response.status_code == 200:
        return jsonify(response.json())  # Return the data as JSON
    else:
        return jsonify({"error": "Failed to fetch weather data"}), response.status_code





#sample route with query and parameter in url
@app.route("/account/<user_id>")
def account(user_id) : 
    farmer = User.query.filter_by(id=user_id).one_or_404()
    return render_template("account.html" , user=farmer)
