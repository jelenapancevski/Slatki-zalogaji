"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationController = void 0;
const mongodb_1 = require("mongodb");
const application_1 = __importDefault(require("../models/application"));
class ApplicationController {
    constructor() {
        // send application for given position
        this.apply = (req, res) => {
            let application = req.body.application;
            application.positionid = new mongodb_1.ObjectId(application.positionid);
            application.volunteer = new mongodb_1.ObjectId(application.volunteer);
            application_1.default.collection.insertOne(application, (err, retval) => {
                if (err)
                    console.log(err);
                else
                    return res.json("Application sent");
            });
        };
        // already sent application for given position
        this.exists = (req, res) => {
            application_1.default.collection.findOne({ positionid: new mongodb_1.ObjectId(req.body.positionid), volunteer: new mongodb_1.ObjectId(req.body.volunteer) }, (err, application) => {
                if (err)
                    console.log(err);
                else
                    return res.json(application);
            });
        };
        // get all pending apllications for given volunteering position
        this.applications = (req, res) => {
            application_1.default.find({ positionid: new mongodb_1.ObjectId(req.body.id), status: 'pending' }, (err, applications) => {
                if (err)
                    console.log(err);
                else
                    return res.json(applications);
            });
        };
        // deny application
        this.deny = (req, res) => {
            application_1.default.collection.updateOne({ _id: new mongodb_1.ObjectId(req.body.id) }, {
                '$set': {
                    status: 'denied',
                    notified: false
                }
            }, (err, application) => {
                if (err)
                    console.log(err);
                else
                    return res.json("Application succesfully denied");
            });
        };
        // accept application
        this.accept = (req, res) => {
            application_1.default.collection.updateOne({ _id: new mongodb_1.ObjectId(req.body.id) }, {
                '$set': {
                    status: 'accepted',
                    notified: false
                }
            }, (err, application) => {
                if (err)
                    console.log(err);
                else
                    return res.json("Application succesfully accepted");
            });
        };
        // notifications for given user id
        this.notifications = (req, res) => {
            application_1.default.find({ volunteer: new mongodb_1.ObjectId(req.body.id), notified: false, $or: [{ status: 'denied' }, { status: 'accepted' }] }, (err, applications) => {
                if (err)
                    console.log(err);
                else
                    return res.json(applications);
            });
        };
        // pending applications for given user id
        this.pending = (req, res) => {
            application_1.default.find({ volunteer: new mongodb_1.ObjectId(req.body.id), status: 'pending', }, (err, applications) => {
                if (err)
                    console.log(err);
                else
                    return res.json(applications);
            });
        };
        // get user history volunteering for given user id 
        this.history = (req, res) => {
            application_1.default.find({ volunteer: new mongodb_1.ObjectId(req.body.id), status: 'accepted', notified: true }, (err, applications) => {
                if (err)
                    console.log(err);
                else
                    return res.json(applications);
            });
        };
        // update that user was notified 
        this.notified = (req, res) => {
            application_1.default.collection.updateOne({ _id: new mongodb_1.ObjectId(req.body.id) }, {
                '$set': {
                    notified: true
                }
            }, (err, application) => {
                if (err)
                    console.log(err);
                else
                    return res.json({ "message": "Application succesfully notified" });
            });
        };
    }
}
exports.ApplicationController = ApplicationController;
//# sourceMappingURL=application.controller.js.map