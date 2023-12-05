"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ticket_controller_1 = require("../controllers/ticket.controller");
const ticketRouter = express_1.default.Router();
ticketRouter.route('/get').get((req, res) => new ticket_controller_1.TicketController().get(req, res));
ticketRouter.route('/ticket').post((req, res) => new ticket_controller_1.TicketController().ticket(req, res));
ticketRouter.route('/add').post((req, res) => new ticket_controller_1.TicketController().add(req, res));
exports.default = ticketRouter;
//# sourceMappingURL=ticket.routes.js.map