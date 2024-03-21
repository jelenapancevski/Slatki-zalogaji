"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const promotion_controller_1 = require("../controllers/promotion.controller");
const promotionRouter = express_1.default.Router();
promotionRouter.route('/get').get((req, res) => new promotion_controller_1.PromotionController().get(req, res));
exports.default = promotionRouter;
//# sourceMappingURL=promotion.routes.js.map