"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RescueController = void 0;
const mongodb_1 = require("mongodb");
const rescue_1 = __importDefault(require("../models/rescue"));
class RescueController {
    constructor() {
        // send rescue form
        this.add = (req, res) => {
            req.body.rescue.user = new mongodb_1.ObjectId(req.body.rescue.user);
            rescue_1.default.collection.insertOne(req.body.rescue, (err, retval) => {
                if (err)
                    console.log(err);
                else
                    return res.json("Resuce form sent");
            });
        };
        // get all pending rescue forms 
        this.get = (req, res) => {
            rescue_1.default.find({ status: 'pending' }, (err, forms) => {
                if (err)
                    console.log(err);
                else
                    return res.json(forms);
            });
        };
        // respond to given form 
        this.respond = (req, res) => {
            rescue_1.default.collection.updateOne({ _id: new mongodb_1.ObjectId(req.body.id) }, {
                '$set': {
                    status: 'notify',
                    response: req.body.response
                }
            }, (err, application) => {
                if (err)
                    console.log(err);
                else
                    return res.json({ "message": "Response succesfully set" });
            });
        };
        // notifications for given user id
        this.notifications = (req, res) => {
            rescue_1.default.find({ user: new mongodb_1.ObjectId(req.body.id), status: 'notify' }, (err, forms) => {
                if (err)
                    console.log(err);
                else
                    return res.json(forms);
            });
        };
        // history of rescues for given user id
        this.history = (req, res) => {
            rescue_1.default.find({ user: new mongodb_1.ObjectId(req.body.id), status: 'notified' }, (err, forms) => {
                if (err)
                    console.log(err);
                else
                    return res.json(forms);
            });
        };
        // update that user was notified 
        this.notified = (req, res) => {
            rescue_1.default.collection.updateOne({ _id: new mongodb_1.ObjectId(req.body.id) }, {
                '$set': {
                    status: 'notified'
                }
            }, (err, form) => {
                if (err)
                    console.log(err);
                else
                    return res.json({ "message": "Resuce form succesfully notified" });
            });
        };
    }
}
exports.RescueController = RescueController;
//# sourceMappingURL=rescue.controller.js.map