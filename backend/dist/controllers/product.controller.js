"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const mongodb_1 = require("mongodb");
const product_1 = __importDefault(require("../models/product"));
class ProductController {
    constructor() {
        // returns all products in zoo
        this.get = (req, res) => {
            product_1.default.find({}, (err, products) => {
                if (err)
                    console.log(err);
                else
                    return res.json(products);
            });
        };
        // returns all products from the given type
        this.type = (req, res) => {
            product_1.default.find({ type: req.body.type }, (err, products) => {
                if (err)
                    console.log(err);
                else
                    return res.json(products);
            });
        };
        // returns info of specific product by id
        this.product = (req, res) => {
            let id = req.body.id;
            product_1.default.findById(id, (err, product) => {
                if (err)
                    console.log(err);
                else
                    return res.json(product);
            });
        };
        // adds comment to product given by id
        this.comment = (req, res) => {
            req.body.comment.username = new mongodb_1.ObjectId(req.body.comment.username);
            req.body.comment.date = new Date(req.body.comment.date);
            product_1.default.collection.updateOne({ "_id": new mongodb_1.ObjectId(req.body.id) }, { $push: { comments: req.body.comment } }, (err, product) => {
                if (err)
                    console.log(err);
                else
                    return res.json("Added comment");
            });
        };
        // adds new product 
        this.add = (req, res) => {
            product_1.default.collection.insertOne(req.body.product, (err, product) => {
                if (err)
                    console.log(err);
                else
                    return res.json(product.insertedId);
            });
        };
        /* // edits existing comment
         editcomment = (req: express.Request, res: express.Response) => {
             Product.collection.updateOne({ "_id": new ObjectId(req.body.id),'comments':{ $elemMatch: {"username": new ObjectId(req.body.comment.username),"date":req.body.comment.date}}, }, { $set: {"comments.$.comment" : req.body.newcomment, "comments.$.edited":true} }, (err, product) => {
                 if (err) console.log(err);
                 else return res.json("Updated comment");
             })
         }*/
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map