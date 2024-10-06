from application import app


# check if file was executed voluntarely or ran while being imported
if __name__ == '__main__' :
    app.run(debug=True)