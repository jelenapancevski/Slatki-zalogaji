"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventController = void 0;
const mongodb_1 = require("mongodb");
const events_1 = __importDefault(require("../models/events"));
class EventController {
    constructor() {
        // returns all events in zoo
        this.get = (req, res) => {
            events_1.default.find({}, (err, events) => {
                if (err)
                    console.log(err);
                else
                    return res.json(events);
            });
        };
        // add new event
        this.add = (req, res) => {
            req.body.event.date = new Date(req.body.event.date);
            events_1.default.collection.insertOne(req.body.event, (err, event) => {
                if (err)
                    console.log(err);
                else
                    return res.json(event.insertedId);
            });
        };
        // returns info of specific event by id
        this.event = (req, res) => {
            let id = req.body.id;
            events_1.default.findById(id, (err, event) => {
                if (err)
                    console.log(err);
                else
                    return res.json(event);
            });
        };
        // like event 
        this.like = (req, res) => {
            events_1.default.collection.updateOne({ _id: new mongodb_1.ObjectId(req.body.event) }, { $push: { likes: new mongodb_1.ObjectId(req.body.user) } }, (err, event) => {
                if (err)
                    console.log(err);
                else
                    return res.json("Event succesfully liked");
            });
        };
        // dislike event 
        this.dislike = (req, res) => {
            events_1.default.collection.updateOne({ _id: new mongodb_1.ObjectId(req.body.event) }, { $pull: { likes: new mongodb_1.ObjectId(req.body.user) } }, (err, event) => {
                if (err)
                    console.log(err);
                else
                    return res.json("Event succesfully disliked");
            });
        };
        // apply to active event
        this.apply = (req, res) => {
            events_1.default.collection.updateOne({ _id: new mongodb_1.ObjectId(req.body.event) }, {
                $push: {
                    visitors: {
                        "visitor": new mongodb_1.ObjectId(req.body.visitor),
                        notified: false
                    }
                }
            }, (err, event) => {
                if (err)
                    console.log(err);
                else
                    return res.json("Succesfully applied for the event");
            });
        };
        // notifications for given user
        this.notifications = (req, res) => {
            events_1.default.find({ 'visitors': { $elemMatch: { "visitor": new mongodb_1.ObjectId(req.body.visitor),
                        "notified": false } } }, (err, events) => {
                if (err)
                    console.log(err);
                else {
                    return res.json(events);
                }
            });
        };
        // user notified
        this.notified = (req, res) => {
            events_1.default.collection.updateOne({ _id: new mongodb_1.ObjectId(req.body.event), 'visitors.visitor': new mongodb_1.ObjectId(req.body.visitor) }, {
                '$set': {
                    'visitors.$.notified': true
                }
            }, (err, event) => {
                if (err)
                    console.log(err);
                else
                    return res.json({ "message": "Notified succesfully changed to true" });
            });
        };
        // user my events 
        this.myevents = (req, res) => {
            events_1.default.find({ 'visitors': { $elemMatch: { "visitor": new mongodb_1.ObjectId(req.body.visitor),
                        "notified": true } }, "active": true }, (err, events) => {
                if (err)
                    console.log(err);
                //{"visitors.visitor": new ObjectId(req.body.visitor) , "visitors.$.notified": true, 'active': true }
                else {
                    return res.json(events);
                }
            });
        };
        // set active to false
        this.updateactive = (req, res) => {
            events_1.default.collection.updateOne({ _id: new mongodb_1.ObjectId(req.body.event) }, {
                '$set': {
                    'active': false
                }
            }, (err, event) => {
                if (err)
                    console.log(err);
                else
                    return res.json({ "message": "Activity succesfully changed to false" });
            });
        };
    }
}
exports.EventController = EventController;
//# sourceMappingURL=events.controller.js.map