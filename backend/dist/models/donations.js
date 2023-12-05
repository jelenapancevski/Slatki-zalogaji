"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Donation = new Schema({
    donator: {
        type: mongodb_1.ObjectId
    },
    amount: {
        type: Number
    },
    date: {
        type: Date
    }
});
exports.default = mongoose_1.default.model('Donation', Donation, 'donations');
//# sourceMappingURL=donations.js.map