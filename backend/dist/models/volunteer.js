"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Volunteer = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    startDate: {
        type: Date
    },
    /*time: {
        type:Time  // 12:00
    },*/
    duration: {
        type: String // e.g. 3 weeks
    },
    active: {
        type: Boolean // if startDate > today
    }
});
exports.default = mongoose_1.default.model('Volunteer', Volunteer, 'volunteers');
//# sourceMappingURL=volunteer.js.map