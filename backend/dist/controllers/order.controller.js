"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const order_1 = __importDefault(require("../models/order"));
const mongodb_1 = require("mongodb");
class OrderController {
    constructor() {
        // get all pending orders 
        this.orders = (req, res) => {
            order_1.default.find({ status: 'pending' }, (err, orders) => {
                if (err)
                    console.log(err);
                else
                    return res.json(orders);
            });
        };
        this.add = (req, res) => {
            let order = new order_1.default(req.body.order);
            order.save().then(ord => {
                res.status(200).json("Order succesfully added");
            }).catch(err => {
                res.status(400).json("error");
            });
        };
        this.deny = (req, res) => {
            order_1.default.collection.updateOne({ "_id": new mongodb_1.ObjectId(req.body.orderid) }, { $set: { status: "denied", notified: false } }, (err, order) => {
                if (err) {
                    console.log(err);
                }
                else
                    return res.json({ message: "Order succesfully denied" });
            });
        };
        this.accept = (req, res) => {
            order_1.default.collection.updateOne({ "_id": new mongodb_1.ObjectId(req.body.orderid) }, { $set: { status: "accepted", notified: false } }, (err, order) => {
                if (err) {
                    console.log(err);
                }
                else {
                }
            });
        };
        // notifications for given user id
        this.notifications = (req, res) => {
            order_1.default.find({ buyer: new mongodb_1.ObjectId(req.body.id), notified: false }, (err, orders) => {
                if (err)
                    console.log(err);
                else
                    return res.json(orders);
            });
        };
        // update that user was notified 
        this.notified = (req, res) => {
            order_1.default.collection.updateOne({ _id: new mongodb_1.ObjectId(req.body.id) }, {
                '$set': {
                    notified: true
                }
            }, (err, order) => {
                if (err)
                    console.log(err);
                else
                    return res.json({ "message": "Order succesfully notified" });
            });
        };
        // pending orders for given user id
        this.pending = (req, res) => {
            order_1.default.find({ buyer: new mongodb_1.ObjectId(req.body.id), status: 'pending', }, (err, orders) => {
                if (err)
                    console.log(err);
                else
                    return res.json(orders);
            });
        };
        // get user history of purchased products for given user id 
        this.history = (req, res) => {
            order_1.default.find({ buyer: new mongodb_1.ObjectId(req.body.id), status: 'accepted', notified: true }, (err, applications) => {
                if (err)
                    console.log(err);
                else
                    return res.json(applications);
            });
        };
    }
}
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map