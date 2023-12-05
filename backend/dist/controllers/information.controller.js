"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationController = void 0;
const information_1 = __importDefault(require("../models/information"));
class InformationController {
    constructor() {
        // returns zoo info
        this.get = (req, res) => {
            information_1.default.find({}, (err, information) => {
                if (err)
                    console.log(err);
                else
                    return res.json(information);
            });
        };
    }
}
exports.InformationController = InformationController;
//# sourceMappingURL=information.controller.js.map