"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Ticket = new Schema({
    type: {
        type: String // single group seasonal
    },
    age: {
        type: String
    },
    price: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('Ticket', Ticket, 'tickets');
//# sourceMappingURL=ticket.js.map