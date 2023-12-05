"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketController = void 0;
const ticket_1 = __importDefault(require("../models/ticket"));
class TicketController {
    constructor() {
        // returns all tickets in zoo
        this.get = (req, res) => {
            ticket_1.default.find({}, (err, tickets) => {
                if (err)
                    console.log(err);
                else
                    return res.json(tickets);
            });
        };
        // returns info of specific ticket by id
        this.ticket = (req, res) => {
            let id = req.body.id;
            ticket_1.default.findById(id, (err, ticket) => {
                if (err)
                    console.log(err);
                else
                    return res.json(ticket);
            });
        };
        // adds new ticket 
        this.add = (req, res) => {
            ticket_1.default.collection.insertOne(req.body.ticket, (err, ticket) => {
                if (err)
                    console.log(err);
                else
                    return res.json(ticket.insertedId);
            });
        };
    }
}
exports.TicketController = TicketController;
//# sourceMappingURL=ticket.controller.js.map