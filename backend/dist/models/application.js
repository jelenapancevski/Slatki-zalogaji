"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Application = new Schema({
    positionid: {
        type: mongodb_1.ObjectId
    },
    volunteer: {
        type: mongodb_1.ObjectId
    },
    letter: {
        type: String
    },
    status: {
        type: String // denied, accepted, pending
    },
    notified: {
        type: Boolean //true false
    }
});
exports.default = mongoose_1.default.model('Application', Application, 'applications');
//# sourceMappingURL=application.js.map