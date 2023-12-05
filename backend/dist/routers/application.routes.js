"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const application_controller_1 = require("../controllers/application.controller");
const applicationRouter = express_1.default.Router();
applicationRouter.route('/apply').post((req, res) => new application_controller_1.ApplicationController().apply(req, res));
applicationRouter.route('/exists').post((req, res) => new application_controller_1.ApplicationController().exists(req, res));
applicationRouter.route('/applications').post((req, res) => new application_controller_1.ApplicationController().applications(req, res));
applicationRouter.route('/deny').post((req, res) => new application_controller_1.ApplicationController().deny(req, res));
applicationRouter.route('/accept').post((req, res) => new application_controller_1.ApplicationController().accept(req, res));
applicationRouter.route('/notifications').post((req, res) => new application_controller_1.ApplicationController().notifications(req, res));
applicationRouter.route('/pending').post((req, res) => new application_controller_1.ApplicationController().pending(req, res));
applicationRouter.route('/history').post((req, res) => new application_controller_1.ApplicationController().history(req, res));
applicationRouter.route('/notified').post((req, res) => new application_controller_1.ApplicationController().notified(req, res));
applicationRouter.route('/exists').post((req, res) => new application_controller_1.ApplicationController().exists(req, res));
exports.default = applicationRouter;
//# sourceMappingURL=application.routes.js.map