import * as express from 'express';
import Order from '../models/order';
import { ObjectId } from 'mongodb';
export class OrderController {
    // get all pending orders 
    orders = (req: express.Request, res: express.Response) => {
        Order.find({status:'pending'}, (err, orders) => {
            if (err) console.log(err);
            else return res.json(orders);
        })
    }

    add = (req: express.Request, res: express.Response) => {
        let order = new Order(req.body.order);
        order.save().then(ord => {
            res.status(200).json( "Order succesfully added" );
        }
        ).catch(err => {
            res.status(400).json( "error" )
        })
    }
    deny = (req: express.Request, res: express.Response) => {
        Order.collection.updateOne({ "_id": new ObjectId(req.body.orderid)}, { $set: { status: "denied", notified: false } }, (err, order) => {
            if (err) {
                console.log(err);

            }
            else return res.json({ message: "Order succesfully denied" });
        });

    }
    
    accept = (req: express.Request, res: express.Response) => {
        Order.collection.updateOne({ "_id": new ObjectId(req.body.orderid) }, { $set: { status: "accepted", notified: false } }, (err, order) => {
            if (err) {
                console.log(err);

            }
            else {
            }
        });

    }

    // notifications for given user id
    notifications = (req: express.Request, res: express.Response) => {
        Order.find({ buyer:  new ObjectId(req.body.id), notified: false }, (err, orders) => {
            if (err) console.log(err);
            else return res.json(orders);
        })
    }

    // update that user was notified 
    notified = (req: express.Request, res: express.Response) => {
        Order.collection.updateOne({ _id:new ObjectId( req.body.id )}, {
            '$set': {
                notified: true
            }
        }, (err, order) => {
            if (err) console.log(err);
            else return res.json({ "message": "Order succesfully notified" });
        })
    }


    // pending orders for given user id
    pending = (req: express.Request, res: express.Response) => {
        Order.find({buyer: new ObjectId(req.body.id), status:'pending',}, (err, orders) => {
            if (err) console.log(err);
            else return res.json(orders);
        })
    }

    // get user history of purchased products for given user id 
    history = (req: express.Request, res: express.Response) => {
        Order.find({buyer: new ObjectId(req.body.id), status:'accepted', notified:true}, (err, applications) => {
            if (err) console.log(err);
            else return res.json(applications);
        })
    }

     
}