import express from 'express';
import { OrderController } from '../controllers/order.controller';

const orderRouter = express.Router();

orderRouter.route('/orders').get((req, res) => new OrderController().orders(req, res));

orderRouter.route('/add').post((req, res) => new OrderController().add(req, res));

orderRouter.route('/deny').post((req, res) => new OrderController().deny(req, res));

orderRouter.route('/accept').post((req, res) => new OrderController().accept(req, res));

orderRouter.route('/notifications').post((req, res) => new OrderController().notifications(req, res));

orderRouter.route('/notified').post((req, res) => new OrderController().notified(req, res));

orderRouter.route('/pending').post((req, res) => new OrderController().pending(req, res));

orderRouter.route('/history').post((req, res) => new OrderController().history(req, res));


export default orderRouter;