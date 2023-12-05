"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const information_controller_1 = require("../controllers/information.controller");
const informationRouter = express_1.default.Router();
informationRouter.route('/get').get((req, res) => new information_controller_1.InformationController().get(req, res));
exports.default = informationRouter;
//# sourceMappingURL=information.routes.js.map