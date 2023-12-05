"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalController = void 0;
const mongodb_1 = require("mongodb");
const animal_1 = __importDefault(require("../models/animal"));
class AnimalController {
    constructor() {
        // returns all animals in zoo
        this.get = (req, res) => {
            animal_1.default.find({}, (err, animals) => {
                if (err)
                    console.log(err);
                else
                    return res.json(animals);
            });
        };
        // returns all animals from the given group
        this.group = (req, res) => {
            animal_1.default.find({ group: req.body.group }, (err, animals) => {
                if (err)
                    console.log(err);
                else
                    return res.json(animals);
            });
        };
        // returns all animals with given name
        this.search = (req, res) => {
            //latin or name 
            animal_1.default.find({ $or: [{ "name": { $regex: new RegExp(req.body.name, "i") } }, { "latin": { $regex: new RegExp(req.body.name, "i") } }] }, (err, animals) => {
                if (err)
                    console.log(err);
                else
                    return res.json(animals);
            });
            // just by name 
            /*Animal.find({ "name": { $regex: new RegExp(req.body.name, "i") }}, (err, animals) => {
                 if (err) console.log(err);
                 else return res.json(animals);
     
             })*/
        };
        // returns info of specific animal by id
        this.animal = (req, res) => {
            let id = req.body.id;
            animal_1.default.findById(id, (err, animal) => {
                if (err)
                    console.log(err);
                else
                    return res.json(animal);
            });
        };
        // adds comment to animal given by id
        this.comment = (req, res) => {
            req.body.comment.username = new mongodb_1.ObjectId(req.body.comment.username);
            req.body.comment.date = new Date(req.body.comment.date);
            animal_1.default.collection.updateOne({ "_id": new mongodb_1.ObjectId(req.body.id) }, { $push: { comments: req.body.comment } }, (err, animal) => {
                if (err)
                    console.log(err);
                else
                    return res.json("Added comment");
            });
        };
        // adds new animal 
        this.add = (req, res) => {
            animal_1.default.collection.insertOne(req.body.animal, (err, animal) => {
                if (err)
                    console.log(err);
                else
                    return res.json(animal.insertedId);
            });
        };
        // edits existing comment
        this.editcomment = (req, res) => {
            animal_1.default.collection.updateOne({ "_id": new mongodb_1.ObjectId(req.body.id), 'comments': { $elemMatch: { "username": new mongodb_1.ObjectId(req.body.comment.username), "date": req.body.comment.date } }, }, { $set: { "comments.$.comment": req.body.newcomment, "comments.$.edited": true } }, (err, animal) => {
                if (err)
                    console.log(err);
                else
                    return res.json("Updated comment");
            });
        };
    }
}
exports.AnimalController = AnimalController;
//# sourceMappingURL=animal.controller.js.map