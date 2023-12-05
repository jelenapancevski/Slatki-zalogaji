import * as express from 'express';
import { ObjectId } from 'mongodb';
import Product from '../models/product';
export class ProductController {
    // returns all products in zoo
    get = (req: express.Request, res: express.Response) => {
        Product.find({}, (err, products) => {
            if (err) console.log(err);
            else return res.json(products);
        })
    }
    // returns all products from the given type
    type = (req: express.Request, res: express.Response) => {
        Product.find({type:req.body.type}, (err, products) => {
            if (err) console.log(err);
            else return res.json(products);
        })
    }
    
    // returns info of specific product by id
    product = (req: express.Request, res: express.Response) => {
        let id = req.body.id;
        Product.findById(id, (err, product) => {
            if (err) console.log(err);
            else return res.json(product);
        })
    }
    // adds comment to product given by id
    comment = (req: express.Request, res: express.Response) => {
        req.body.comment.username = new ObjectId(req.body.comment.username);
        req.body.comment.date = new Date(req.body.comment.date);
        Product.collection.updateOne({ "_id": new ObjectId(req.body.id) }, { $push: {comments:req.body.comment} }, (err, product) => {
            if (err) console.log(err);
            else return res.json("Added comment");
        })
    }
    // adds new product 
    add =(req: express.Request, res: express.Response) => {

        Product.collection.insertOne(req.body.product, (err, product) => {
            if (err) console.log(err);
            else  return res.json(product.insertedId);
            
        })
    }

   /* // edits existing comment
    editcomment = (req: express.Request, res: express.Response) => {
        Product.collection.updateOne({ "_id": new ObjectId(req.body.id),'comments':{ $elemMatch: {"username": new ObjectId(req.body.comment.username),"date":req.body.comment.date}}, }, { $set: {"comments.$.comment" : req.body.newcomment, "comments.$.edited":true} }, (err, product) => {
            if (err) console.log(err);
            else return res.json("Updated comment");
        })
    }*/
}