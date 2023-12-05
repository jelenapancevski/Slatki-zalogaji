"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const promotion_controller_1 = require("../controllers/promotion.controller");
const promocodeRouter = express_1.default.Router();
promocodeRouter.route('/get').get((req, res) => new promotion_controller_1.PromotionController().get(req, res));
promocodeRouter.route('/add').post((req, res) => new promotion_controller_1.PromotionController().add(req, res));
// returns all promocodes that are valid
promocodeRouter.route('/valid').get((req, res) => new promotion_controller_1.PromotionController().valid(req, res));
exports.default = promocodeRouter;
//# sourceMappingURL=promotion.routes.js.map