"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Rescue = new Schema({
    user: {
        type: mongodb_1.ObjectId
    },
    type: {
        type: String
    },
    found: {
        type: Boolean
    },
    description: {
        type: String
    },
    status: {
        type: String //pending, notify,notified
    },
    response: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Rescue', Rescue, 'rescues');
//# sourceMappingURL=rescue.js.map