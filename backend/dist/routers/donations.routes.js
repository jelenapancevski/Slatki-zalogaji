"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const donations_controller_1 = require("../controllers/donations.controller");
const donationRouter = express_1.default.Router();
donationRouter.route('/add').post((req, res) => new donations_controller_1.DonationController().add(req, res));
donationRouter.route('/get').get((req, res) => new donations_controller_1.DonationController().get(req, res));
exports.default = donationRouter;
//# sourceMappingURL=donations.routes.js.map