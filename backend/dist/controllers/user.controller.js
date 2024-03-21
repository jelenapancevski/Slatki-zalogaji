"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const mongodb_1 = require("mongodb");
const user_1 = __importDefault(require("../models/user"));
class UserController {
    constructor() {
        // get all users
        // returns all users 
        this.get = (req, res) => {
            user_1.default.find({}, (err, users) => {
                if (err)
                    console.log(err);
                else
                    return res.json(users);
            });
        };
        // login
        this.login = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            user_1.default.findOne({ "username": username, "password": password }, (err, user) => {
                if (err)
                    console.log(err);
                else {
                    if (user == null) {
                        return res.json("Incorrect credentials");
                    }
                    else
                        res.json(user);
                }
            });
        };
        // check if username and email are unique
        this.checkavailability = (req, res) => {
            user_1.default.find({ $or: [{ "username": req.body.username }, { "email": req.body.email }] }, (err, user) => {
                if (err)
                    console.log(err);
                else if (user) {
                    res.json(user);
                }
            });
        };
        // register / add new user
        this.register = (req, res) => {
            let request = new user_1.default(req.body.user);
            request.save().then(user => {
                res.status(200).json(request._id);
            }).catch(err => {
                res.status(400).json({ message: "error" });
            });
        };
        // change password
        this.changePassword = (req, res) => {
            user_1.default.collection.updateOne({ "_id": new mongodb_1.ObjectId(req.body.id) }, { $set: { password: req.body.newpassword } }, (err, user) => {
                if (err) {
                    console.log(err);
                }
                else
                    return res.json("Password update successful");
            });
        };
        // edit personal info
        this.edit = (req, res) => {
            console.log(req.body.user._id);
            user_1.default.collection.updateOne({ "_id": new mongodb_1.ObjectId(req.body.user._id) }, { $set: {
                    'username': req.body.user.username,
                    'password': req.body.user.password,
                    'firstname': req.body.user.firstname,
                    'lastname': req.body.user.lastname,
                    'address': req.body.user.address,
                    'phone': req.body.user.phone,
                    'email': req.body.user.email
                } }, (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    return res.json("Personal data updated successfuly");
                }
            });
        };
        // get user
        this.user = (req, res) => {
            user_1.default.findById(new mongodb_1.ObjectId(req.body.id), (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
        /* uploadFile=(req:express.Request,res:express.Response)=>{
         }*/
        this.delete = (req, res) => {
            user_1.default.collection.deleteOne({ "_id": new mongodb_1.ObjectId(req.body._id) }, (err) => {
                if (err)
                    console.log(err);
                else
                    return res.json("User succesfully deleted");
            });
        };
        // returns staff
        this.staff = (req, res) => {
            user_1.default.find({ type: 'staff' }, (err, users) => {
                if (err)
                    console.log(err);
                else
                    return res.json(users);
            });
        };
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map