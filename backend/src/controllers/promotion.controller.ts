import * as express from 'express';
import Promotion from '../models/promotion';
import { ObjectId } from 'mongodb';

export class PromotionController {
    // returns all promotions 
    get = (req: express.Request, res: express.Response) => {
        Promotion.find({}, (err, promotions) => {
            if (err) console.log(err);
            else return res.json(promotions);
        })
    }
    // returns all promotions that are valid
    valid =  (req: express.Request, res: express.Response) => {
        Promotion.find({valid: true}, (err, promotions) => {
            if (err) console.log(err);
            else return res.json(promotions);
        })
    }
    // adds new rule 
    add =(req: express.Request, res: express.Response) => {

        Promotion.collection.insertOne(req.body.promotion, (err, promotion) => {
            if (err) console.log(err);
            else  return res.json( "Promo code succesfully added");
            
        })
    }
   
}