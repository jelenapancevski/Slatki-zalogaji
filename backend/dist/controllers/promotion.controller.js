"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionController = void 0;
const promotion_1 = __importDefault(require("../models/promotion"));
class PromotionController {
    constructor() {
        // returns all promotions 
        this.get = (req, res) => {
            promotion_1.default.find({}, (err, promotions) => {
                if (err)
                    console.log(err);
                else
                    return res.json(promotions);
            });
        };
    }
}
exports.PromotionController = PromotionController;
//# sourceMappingURL=promotion.controller.js.map