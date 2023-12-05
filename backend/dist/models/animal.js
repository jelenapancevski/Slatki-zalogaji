"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Animal = new Schema({
    name: {
        type: String
    },
    latin: {
        type: String
    },
    description: {
        type: String
    },
    habitat: {
        type: String
    },
    origin: {
        type: String
    },
    size: {
        type: String
    },
    diet: {
        type: String
    },
    endangered: {
        type: String
    },
    group: {
        type: String
    },
    video: {
        type: String
    },
    image: [
        {
            type: String
        }
    ],
    facts: [
        {
            type: String
        }
    ],
    coordinates: {
        x: {
            type: Number
        },
        y: {
            type: Number
        }
    },
    comments: [
        {
            username: {
                type: mongodb_1.ObjectId
            },
            comment: {
                type: String
            },
            /*review:{
                type:Number
            },*/
            date: {
                type: Date
            },
            edited: {
                type: Boolean
            }
        }
    ]
});
exports.default = mongoose_1.default.model('Animal', Animal, 'animals');
//# sourceMappingURL=animal.js.map