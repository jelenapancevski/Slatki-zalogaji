import express from 'express';
import cors from "cors"; //za omogucavanje cros origin domena, front je na 4200 a back  na 4000 to su dva razlicita domena pa moramo omoguciti mogucnost deljenja podataka izmedju dva razlicita domena.
import bodyParser from 'body-parser'
import mongoose from 'mongoose' 
import userRouter from './routers/user.routes';
import productRouter from './routers/product.routes';
import promotionRouter from './routers/promotion.routes';
import orderRouter from './routers/order.routes';


const path = require("path");

const app = express(); //Kreiramo express applikaciju koja komunicira s mongodb bazom podataka

app.use(cors()); //koristi crossorigin domain 
app.use(bodyParser.json()); //podaci se salju u json formatu
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/cakeshop');

const connection = mongoose.connection;

connection.once('open',()=>{
//kada se jednom otvori konekcija da ispisemo da je otvorena
console.log("db connection ok");
});

//Preko express-a kreiramo api
const router = express.Router(); //preusmerava zahteve ka odgovarajucim ruterima

router.use('/product',productRouter);
router.use('/order',orderRouter);
router.use('/promotion',promotionRouter);
router.use('/user',userRouter);

app.use('/',router);

app.listen(4000, () => console.log(`Express server running on port 4000`));


