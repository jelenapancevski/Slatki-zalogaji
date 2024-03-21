import express from 'express';
import { PromotionController } from '../controllers/promotion.controller';

const promotionRouter = express.Router();

promotionRouter.route('/get').get((req, res) => new PromotionController().get(req, res));


export default promotionRouter;