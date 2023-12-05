"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Promocode = new Schema({
    name: {
        type: String
    },
    percentage: {
        type: Number
    },
    valid: {
        type: Boolean
    }
});
exports.default = mongoose_1.default.model('Promocode', Promocode, 'promocodes');
//# sourceMappingURL=promocode.js.map