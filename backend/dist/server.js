"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors")); //za omogucavanje cros origin domena, front je na 4200 a back  na 4000 to su dva razlicita domena pa moramo omoguciti mogucnost deljenja podataka izmedju dva razlicita domena.
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_routes_1 = __importDefault(require("./routers/user.routes"));
const product_routes_1 = __importDefault(require("./routers/product.routes"));
const promotion_routes_1 = __importDefault(require("./routers/promotion.routes"));
const order_routes_1 = __importDefault(require("./routers/order.routes"));
const path = require("path");
const app = (0, express_1.default)(); //Kreiramo express applikaciju koja komunicira s mongodb bazom podataka
app.use((0, cors_1.default)()); //koristi crossorigin domain 
app.use(body_parser_1.default.json()); //podaci se salju u json formatu
app.use(body_parser_1.default.urlencoded({ extended: true }));
mongoose_1.default.connect('mongodb://localhost:27017/cakeshop');
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    //kada se jednom otvori konekcija da ispisemo da je otvorena
    console.log("db connection ok");
});
//Preko express-a kreiramo api
const router = express_1.default.Router(); //preusmerava zahteve ka odgovarajucim ruterima
router.use('/product', product_routes_1.default);
router.use('/order', order_routes_1.default);
router.use('/promotion', promotion_routes_1.default);
router.use('/user', user_routes_1.default);
app.use('/', router);
app.get('/api/promotions/:name', (req, res) => {
    const name = req.params.name;
    const imagePath = path.join(__dirname, '/../../cakeshop/src/assets/promotions/', name);
    //console.log(imagePath)
    const fs = require('fs');
    // Check if the file exists
    if (fs.existsSync(imagePath)) {
        // Serve the file
        res.sendFile(imagePath);
    }
    else {
        res.status(404).send('Image not found');
    }
});
app.get('/api/products/:name', (req, res) => {
    const name = req.params.name;
    const imagePath = path.join(__dirname, '/../../cakeshop/src/assets/products/', name);
    //console.log(imagePath)
    const fs = require('fs');
    // Check if the file exists
    if (fs.existsSync(imagePath)) {
        // Serve the file
        res.sendFile(imagePath);
    }
    else {
        res.status(404).send('Image not found');
    }
});
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map