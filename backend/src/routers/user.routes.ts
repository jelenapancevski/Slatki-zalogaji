import express from 'express';
import { UserController } from '../controllers/user.controller';

const userRouter = express.Router();
/*const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req: express.Request, file: any, cb: any) => {
        cb(null, './../../zoo/frontend/zoo/src/assets/users/');
        //'
    },
    filename: (req: express.Request, file: any, cb: any) => {
       // console.log(req.body.filename);
        cb(null,  req.body.filename);
    }
});
var upload = multer({storage:storage});*/

userRouter.route('/get').get((req,res)=>new UserController().get(req,res));

userRouter.route('/login').post((req,res)=>new UserController().login(req,res));

userRouter.route('/checkavailability').post((req,res)=> new UserController().checkavailability(req,res));

userRouter.route('/register').post((req,res)=> new UserController().register(req,res));

userRouter.route('/changePassword').post((req,res)=> new UserController().changePassword(req,res));

userRouter.route('/edit').post((req,res)=> new UserController().edit(req,res))

userRouter.route('/user').post((req,res)=> new UserController().user(req,res))

/*userRouter.route('/uploadFile').post((req,res)=> new UserController().uploadFile(req,res));*/

/*userRouter.post('/upload',upload.single('file'),(req: express.Request, res: express.Response, next) => {
   
});*/

userRouter.route('/delete').post((req,res)=> new UserController().delete(req,res))

userRouter.route('/staff').get((req,res)=>new UserController().staff(req,res));

export default userRouter;