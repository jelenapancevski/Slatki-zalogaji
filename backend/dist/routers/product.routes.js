"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controllers/product.controller");
const productRouter = express_1.default.Router();
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './../cakeshop/src/assets/products/');
    },
    filename: (req, file, cb) => {
        cb(null, req.body.filename);
    }
});
var upload = multer({ storage: storage });
productRouter.route('/get').get((req, res) => new product_controller_1.ProductController().get(req, res));
productRouter.route('/type').post((req, res) => new product_controller_1.ProductController().type(req, res));
productRouter.route('/product').post((req, res) => new product_controller_1.ProductController().product(req, res));
productRouter.route('/comment').post((req, res) => new product_controller_1.ProductController().comment(req, res));
productRouter.route('/add').post((req, res) => new product_controller_1.ProductController().add(req, res));
//productRouter.route('/editcomment').post((req,res)=>new ProductController().editcomment(req,res));
productRouter.post('/upload', upload.single('file'), (req, res, next) => {
});
exports.default = productRouter;
//# sourceMappingURL=product.routes.js.map