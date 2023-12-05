"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const volunteer_controller_1 = require("../controllers/volunteer.controller");
const volunteerRouter = express_1.default.Router();
volunteerRouter.route('/get').get((req, res) => new volunteer_controller_1.VolunteerController().get(req, res));
volunteerRouter.route('/add').post((req, res) => new volunteer_controller_1.VolunteerController().add(req, res));
volunteerRouter.route('/volunteer').post((req, res) => new volunteer_controller_1.VolunteerController().volunteer(req, res));
volunteerRouter.route('/openpositions').get((req, res) => new volunteer_controller_1.VolunteerController().openpositions(req, res));
volunteerRouter.route('/close').post((req, res) => new volunteer_controller_1.VolunteerController().close(req, res));
exports.default = volunteerRouter;
//# sourceMappingURL=volunteer.routes.js.map