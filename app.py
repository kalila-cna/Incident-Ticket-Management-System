from flask import Flask, jsonify,request
from flask_cors import CORS
from flask_pymongo import pymongo

mongodb_url="mongodb+srv://cnakalila:incident@cluster0.m8jke8b.mongodb.net/?retryWrites=true&w=majority"
mongoDB=pymongo.MongoClient(mongodb_url)
db=mongoDB['itms']
user=db.user
admin=db.admin

# user.insert_one({'name':'god'})
# admin.insert_one({'id2':'hello'})


print("db connected successfully!")




app = Flask(__name__)
CORS(app)

@app.route('/signin_admin',methods=['POST'])
def valid_admin_login():
        if request.method == 'POST':
             
            email = request.form['email']
            password =request.form['password']

            for users in admin.find():
                 print(users)
                 if(users['email_id'] == email and users['password']== password):
                      return jsonify("valid login")
                 elif(users['emailid'] == email and users['password']!= password):
                      return jsonify("Password is incorrect")
            return jsonify("Sorry, user with this email id does not exist")
        
@app.route('/signin_user',methods=['POST'])
def valid_user_login():
        if request.method == 'POST':
             
            email = request.form['email']
            password =request.form['password']

            for users in user.find():
                 if(users['emailid'] == email and users['password']== password):
                      return jsonify("valid login")
                 elif(users['emailid'] == email and users['password']!= password):
                      return jsonify("Password is incorrect")
            return jsonify("Sorry, user with this email id does not exist")
        
@app.route('/user_data',methods=['POST'])
def insert_user_data():
        if request.method == 'POST':
             
            email_value = request.form['email_value']
            user_id=request.form['user_id']
            title=request.form['title']
            priority=request.form['priority']
            category=request.form['category']
            description=request.form['description']

            data= {'user_id':user_id,
                           'title':title,
                           'priority':priority,
                           'category':category,
                           'description':description}
            user.insert_one(data)
            return jsonify("Ticket raised")



        return jsonify("Sorry, user with this email id does not exist")

@app.route('/admin_data',methods=['GET'])
def admin_data():
        if request.method == 'POST':
             data=[]
             for document in user:
                  data.append(document)
             return jsonify(data)
                  


        return jsonify("Done successfully")

@app.route('/accept',methods=['POST'])
def accept():
        if request.method == 'POST':
           user_id=request.form['user_id']  

           user.update_one({"user_id": user_id}, {"$set": {"status": 'accept'}})

           return jsonify("status updated successfully")

                  


        return jsonify("Done successfully")

@app.route('/reject',methods=['POST'])
def reject():
        if request.method == 'POST':
           user_id=request.form['user_id']  
           user.update_one({"user_id": user_id}, {"$set": {"status": 'reject'}})

           return jsonify("status updated successfully")

                  


        return jsonify("Done successfully")

@app.route('/check',methods=['POST'])
def check():
        if request.method == 'POST':
           user_id=request.form['user_id']  
           if user['user_id'] == user_id and user['status'] == "accept":
                return jsonify("accepted")
        return jsonify("rejected")

@app.route('/admin_signup',methods=['POST'])
def admin_signup():
        if request.method == 'POST':
              email_value=request.form['user_id']
              password=request.form['password']
              data= {'email_id':email_value,
                     'password':password}
              admin.insert_one(data)
              return jsonify("success")
              
        return jsonify("Signup failed")




if __name__ == '__main__':
   app.run(debug = True)