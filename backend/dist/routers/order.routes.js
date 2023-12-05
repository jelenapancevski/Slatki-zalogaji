"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("../controllers/order.controller");
const orderRouter = express_1.default.Router();
orderRouter.route('/orders').get((req, res) => new order_controller_1.OrderController().orders(req, res));
orderRouter.route('/add').post((req, res) => new order_controller_1.OrderController().add(req, res));
orderRouter.route('/deny').post((req, res) => new order_controller_1.OrderController().deny(req, res));
orderRouter.route('/accept').post((req, res) => new order_controller_1.OrderController().accept(req, res));
orderRouter.route('/notifications').post((req, res) => new order_controller_1.OrderController().notifications(req, res));
orderRouter.route('/notified').post((req, res) => new order_controller_1.OrderController().notified(req, res));
orderRouter.route('/pending').post((req, res) => new order_controller_1.OrderController().pending(req, res));
orderRouter.route('/history').post((req, res) => new order_controller_1.OrderController().history(req, res));
exports.default = orderRouter;
//# sourceMappingURL=order.routes.js.map