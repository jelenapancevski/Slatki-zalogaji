"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const promocode_controller_1 = require("../controllers/promocode.controller");
const promocodeRouter = express_1.default.Router();
promocodeRouter.route('/get').get((req, res) => new promocode_controller_1.PromoCodeController().get(req, res));
promocodeRouter.route('/add').post((req, res) => new promocode_controller_1.PromoCodeController().add(req, res));
// returns all promocodes that are valid
promocodeRouter.route('/valid').get((req, res) => new promocode_controller_1.PromoCodeController().valid(req, res));
promocodeRouter.route('/cancel').post((req, res) => new promocode_controller_1.PromoCodeController().cancel(req, res));
exports.default = promocodeRouter;
//# sourceMappingURL=promocode.routes.js.map