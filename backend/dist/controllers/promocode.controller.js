"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromoCodeController = void 0;
const promocode_1 = __importDefault(require("../models/promocode"));
const mongodb_1 = require("mongodb");
class PromoCodeController {
    constructor() {
        // returns all promocodes 
        this.get = (req, res) => {
            promocode_1.default.find({}, (err, promocodes) => {
                if (err)
                    console.log(err);
                else
                    return res.json(promocodes);
            });
        };
        // returns all promocodes that are valid
        this.valid = (req, res) => {
            promocode_1.default.find({ valid: true }, (err, promocodes) => {
                if (err)
                    console.log(err);
                else
                    return res.json(promocodes);
            });
        };
        // adds new rule 
        this.add = (req, res) => {
            promocode_1.default.collection.insertOne(req.body.promocode, (err, promocode) => {
                if (err)
                    console.log(err);
                else
                    return res.json("Promo code succesfully added");
            });
        };
        this.cancel = (req, res) => {
            promocode_1.default.updateOne({ "_id": new mongodb_1.ObjectId(req.body._id) }, { $set: { valid: false } }, (err, promocodes) => {
                if (err)
                    console.log(err);
                else
                    return res.json(promocodes);
            });
        };
    }
}
exports.PromoCodeController = PromoCodeController;
//# sourceMappingURL=promocode.controller.js.map