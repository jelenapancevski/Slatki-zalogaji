import express from 'express';
import { PromotionController } from '../controllers/promotion.controller';

const promocodeRouter = express.Router();

promocodeRouter.route('/get').get((req, res) => new PromotionController().get(req, res));

promocodeRouter.route('/add').post((req, res) => new PromotionController().add(req, res));


 // returns all promocodes that are valid
promocodeRouter.route('/valid').get((req, res) => new PromotionController().valid(req, res));


export default promocodeRouter;