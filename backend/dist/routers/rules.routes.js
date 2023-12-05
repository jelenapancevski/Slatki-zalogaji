"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rules_controller_1 = require("../controllers/rules.controller");
const ruleRouter = express_1.default.Router();
ruleRouter.route('/get').get((req, res) => new rules_controller_1.RuleController().get(req, res));
ruleRouter.route('/add').post((req, res) => new rules_controller_1.RuleController().add(req, res));
exports.default = ruleRouter;
//# sourceMappingURL=rules.routes.js.map