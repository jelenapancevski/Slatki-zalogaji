"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonationController = void 0;
const donations_1 = __importDefault(require("../models/donations"));
const mongodb_1 = require("mongodb");
class DonationController {
    constructor() {
        // adds new donation 
        this.add = (req, res) => {
            req.body.donation.donator = new mongodb_1.ObjectId(req.body.donation.donator);
            req.body.donation.date = new Date(req.body.donation.date);
            donations_1.default.collection.insertOne(req.body.donation, (err, donation) => {
                if (err)
                    console.log(err);
                else
                    return res.json("Donation succesfully added");
            });
        };
        // get all donations
        this.get = (req, res) => {
            donations_1.default.find({}, (err, donations) => {
                if (err)
                    console.log(err);
                else
                    return res.json(donations);
            });
        };
    }
}
exports.DonationController = DonationController;
//# sourceMappingURL=donations.controller.js.map