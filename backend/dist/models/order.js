"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Order = new Schema({
    buyer: {
        type: mongodb_1.ObjectId
    },
    products: [
        {
            productid: {
                type: mongodb_1.ObjectId
            },
            amount: {
                type: Number
            }
        }
    ],
    date: {
        type: Date
    },
    status: {
        type: String // pending, accepted, denied
    },
    notified: {
        type: Boolean
    }
});
exports.default = mongoose_1.default.model('Order', Order, 'orders');
//# sourceMappingURL=order.js.map