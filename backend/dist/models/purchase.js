"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Purchase = new Schema({
    orderid: {
        type: mongodb_1.ObjectId
    },
    ticketid: {
        type: mongodb_1.ObjectId
    },
    name: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Purchase', Purchase, 'purchases');
//# sourceMappingURL=purchase.js.map