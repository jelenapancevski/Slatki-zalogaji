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
        // returns all promotions that are valid
        this.valid = (req, res) => {
            promotion_1.default.find({ valid: true }, (err, promotions) => {
                if (err)
                    console.log(err);
                else
                    return res.json(promotions);
            });
        };
        // adds new rule 
        this.add = (req, res) => {
            promotion_1.default.collection.insertOne(req.body.promotion, (err, promotion) => {
                if (err)
                    console.log(err);
                else
                    return res.json("Promo code succesfully added");
            });
        };
    }
}
exports.PromotionController = PromotionController;
//# sourceMappingURL=promotion.controller.js.map