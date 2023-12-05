"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleController = void 0;
const rules_1 = __importDefault(require("../models/rules"));
class RuleController {
    constructor() {
        // returns all rules
        this.get = (req, res) => {
            rules_1.default.find({}, (err, rules) => {
                if (err)
                    console.log(err);
                else
                    return res.json(rules);
            });
        };
        // adds new rule 
        this.add = (req, res) => {
            rules_1.default.collection.insertOne(req.body.rule, (err, rule) => {
                if (err)
                    console.log(err);
                else
                    return res.json({ "message": "Rule succesfully added" });
            });
        };
    }
}
exports.RuleController = RuleController;
//# sourceMappingURL=rules.controller.js.map