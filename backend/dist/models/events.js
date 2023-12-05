"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Event = new Schema({
    title: {
        type: String
    },
    subtitle: {
        type: String
    },
    description: {
        type: String
    },
    date: {
        type: Date
    },
    /*time: {
        type: Timestamp
    }, //?*/
    image: {
        type: String
    },
    video: {
        type: String
    },
    type: {
        type: String // news, event 
    },
    likes: [
        {
            type: mongodb_1.ObjectId // user _id
        }
    ],
    active: {
        type: Boolean
    },
    capacity: {
        type: Number
    },
    visitors: [
        {
            visitor: {
                type: mongodb_1.ObjectId // user _id
            },
            notified: {
                type: Boolean
            }
        }
    ]
});
exports.default = mongoose_1.default.model('Event', Event, 'events');
//# sourceMappingURL=events.js.map