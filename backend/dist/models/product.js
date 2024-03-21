"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Product = new Schema({
    ingridents: [
        {
            type: String
        }
    ],
    name: {
        type: String
    },
    description: {
        type: String
    },
    type: {
        type: String
    },
    image: {
        type: String
    },
    price: {
        type: Number
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
            /*  edited:{
                  type:Boolean
              }*/
        }
    ]
});
exports.default = mongoose_1.default.model('Product', Product, 'products');
//# sourceMappingURL=product.js.map