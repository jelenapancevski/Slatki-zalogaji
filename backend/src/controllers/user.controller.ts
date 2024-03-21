import * as express from 'express';
import { ObjectId } from 'mongodb';
import User from '../models/user';

export class UserController{
    // get all users

    // returns all users 
    get = (req: express.Request, res: express.Response) => {
        User.find({}, (err, users) => {
            if (err) console.log(err);
            else return res.json(users);
        })
    }

    // login
     login = (req:express.Request,res:express.Response)=>{
         let username = req.body.username;
         let password= req.body.password; 
         User.findOne({"username":username, "password":password}, (err,user)=>{
              if(err) console.log(err);
              else {
                if(user==null){
                   return res.json("Incorrect credentials");  
                }else
                res.json(user);}
              
         });
         
     }
    // check if username and email are unique
    checkavailability=(req:express.Request,res:express.Response)=>{
       User.find({$or:[{"username":req.body.username},{"email":req.body.email}]},(err,user)=>{
            if(err) console.log(err);
            else if(user){
                 res.json(user);

            }
        });
        
    }
    // register / add new user
     register=(req:express.Request,res:express.Response)=>{
        let request = new User(
           req.body.user 
       );
       
       request.save().then(user=>{
        res.status(200).json(request._id);}
        ).catch(err=>{
            res.status(400).json({message:"error"})
        })
    }
    // change password
    changePassword=(req:express.Request,res:express.Response)=>{
        User.collection.updateOne({"_id":new ObjectId(req.body.id)},{$set:{password:req.body.newpassword}},(err,user)=>{
            if(err){
                console.log(err);
                
            }
            else  return res.json("Password update successful");
        });
        
    }
    // edit personal info
    edit= (req:express.Request,res:express.Response)=>{
        console.log(req.body.user._id)
        User.collection.updateOne({"_id":new ObjectId(req.body.user._id)},{$set:{
            'username':req.body.user.username,
            'password':req.body.user.password,
            'firstname':req.body.user.firstname,
            'lastname':req.body.user.lastname,
            'address':req.body.user.address,
            'phone':req.body.user.phone,
            'email':req.body.user.email
        }},(err,result)=>{
            if(err){
                console.log(err);
                
            }
            else  {
                return res.json("Personal data updated successfuly");
            }
        });
    }
    // get user
    user=(req:express.Request,res:express.Response)=>{
        User.findById(new ObjectId(req.body.id),(err,user)=>{
         if(err) console.log(err);
         else res.json(user);
        })
 }
   /* uploadFile=(req:express.Request,res:express.Response)=>{
    }*/
    
    delete =(req:express.Request,res:express.Response)=>{
    
        User.collection.deleteOne({"_id":new ObjectId(req.body._id)},(err)=>{
            if(err) console.log(err);
                else return res.json("User succesfully deleted");
                
            });
    }
     
     // returns staff
     staff = (req: express.Request, res: express.Response) => {
        User.find({type:'staff'}, (err, users) => {
            if (err) console.log(err);
            else return res.json(users);
        })
    }
}
