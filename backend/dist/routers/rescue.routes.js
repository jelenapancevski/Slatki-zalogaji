"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rescue_controller_1 = require("../controllers/rescue.controller");
const rescueRouter = express_1.default.Router();
rescueRouter.route('/add').post((req, res) => new rescue_controller_1.RescueController().add(req, res));
rescueRouter.route('/get').get((req, res) => new rescue_controller_1.RescueController().get(req, res));
rescueRouter.route('/respond').post((req, res) => new rescue_controller_1.RescueController().respond(req, res));
rescueRouter.route('/notifications').post((req, res) => new rescue_controller_1.RescueController().notifications(req, res));
rescueRouter.route('/history').post((req, res) => new rescue_controller_1.RescueController().history(req, res));
rescueRouter.route('/notified').post((req, res) => new rescue_controller_1.RescueController().notified(req, res));
exports.default = rescueRouter;
//# sourceMappingURL=rescue.routes.js.map