import express from 'express';
import { ProductController } from '../controllers/product.controller';

const productRouter = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req: express.Request, file: any, cb: any) => {
        cb(null, './../../zoo/frontend/zoo/src/assets/products/');
        
    },
    filename: (req: express.Request, file: any, cb: any) => {
        
        cb(null,  req.body.filename);
    }
});
var upload = multer({storage:storage});

productRouter.route('/get').get((req,res)=>new ProductController().get(req,res));

productRouter.route('/type').post((req,res)=>new ProductController().type(req,res));

productRouter.route('/product').post((req,res)=>new ProductController().product(req,res));

productRouter.route('/comment').post((req,res)=>new ProductController().comment(req,res));

productRouter.route('/add').post((req,res)=>new ProductController().add(req,res));

//productRouter.route('/editcomment').post((req,res)=>new ProductController().editcomment(req,res));

productRouter.post('/upload',upload.single('file'),(req: express.Request, res: express.Response, next) => {
   
});

export default productRouter;