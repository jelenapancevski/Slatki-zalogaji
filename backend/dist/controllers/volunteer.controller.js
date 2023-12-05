"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VolunteerController = void 0;
const mongodb_1 = require("mongodb");
const application_1 = __importDefault(require("../models/application"));
const volunteer_1 = __importDefault(require("../models/volunteer"));
class VolunteerController {
    constructor() {
        // get all volunteering positions
        this.get = (req, res) => {
            volunteer_1.default.find({}, (err, positions) => {
                if (err)
                    console.log(err);
                else
                    return res.json(positions);
            });
        };
        // add new volunteer
        this.add = (req, res) => {
            req.body.volunteer.startDate = new Date(req.body.volunteer.startDate);
            volunteer_1.default.collection.insertOne(req.body.volunteer, (err, volunteer) => {
                if (err)
                    console.log(err);
                else
                    return res.json(volunteer.insertedId);
            });
        };
        // get volunteer by id
        this.volunteer = (req, res) => {
            let id = req.body.id;
            volunteer_1.default.findById(new mongodb_1.ObjectId(id), (err, position) => {
                if (err)
                    console.log(err);
                else
                    return res.json(position);
            });
        };
        this.openpositions = (req, res) => {
            volunteer_1.default.find({ "active": true }, (err, positions) => {
                if (err)
                    console.log(err);
                else
                    return res.json(positions);
            });
        };
        // close position
        this.close = (req, res) => {
            volunteer_1.default.collection.updateOne({ _id: new mongodb_1.ObjectId(req.body.id) }, {
                '$set': {
                    'active': false
                }
            }, (err, position) => {
                if (err)
                    console.log(err);
                else {
                    application_1.default.collection.updateMany({ 'positionid': new mongodb_1.ObjectId(req.body.id), 'status': 'pending' }, {
                        '$set': {
                            'status': 'denied'
                        }
                    }, (err, position) => {
                        if (err)
                            console.log(err);
                        else
                            return res.json("Activity succesfully changed to false");
                    });
                }
            });
        };
    }
}
exports.VolunteerController = VolunteerController;
//# sourceMappingURL=volunteer.controller.js.map