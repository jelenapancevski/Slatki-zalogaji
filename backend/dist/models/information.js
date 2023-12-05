"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Information = new Schema({
    weekdays: {
        from: {
            type: String
        },
        to: {
            type: String
        }
    },
    saturday: {
        from: {
            type: String
        },
        to: {
            type: String
        }
    },
    sunday: {
        from: {
            type: String
        },
        to: {
            type: String
        }
    },
    location: {
        type: String //?
    },
    mail: {
        type: String
    },
    phone: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Information', Information, 'information');
//# sourceMappingURL=information.js.map