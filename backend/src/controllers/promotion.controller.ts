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

   
}