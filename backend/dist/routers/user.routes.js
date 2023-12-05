"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const userRouter = express_1.default.Router();
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './../../zoo/frontend/zoo/src/assets/users/');
        //'
    },
    filename: (req, file, cb) => {
        // console.log(req.body.filename);
        cb(null, req.body.filename);
    }
});
var upload = multer({ storage: storage });
userRouter.route('/get').get((req, res) => new user_controller_1.UserController().get(req, res));
userRouter.route('/login').post((req, res) => new user_controller_1.UserController().login(req, res));
userRouter.route('/checkavailability').post((req, res) => new user_controller_1.UserController().checkavailability(req, res));
userRouter.route('/register').post((req, res) => new user_controller_1.UserController().register(req, res));
userRouter.route('/changePassword').post((req, res) => new user_controller_1.UserController().changePassword(req, res));
userRouter.route('/edit').post((req, res) => new user_controller_1.UserController().edit(req, res));
userRouter.route('/user').post((req, res) => new user_controller_1.UserController().user(req, res));
/*userRouter.route('/uploadFile').post((req,res)=> new UserController().uploadFile(req,res));*/
userRouter.post('/upload', upload.single('file'), (req, res, next) => {
});
userRouter.route('/delete').post((req, res) => new user_controller_1.UserController().delete(req, res));
userRouter.route('/staff').get((req, res) => new user_controller_1.UserController().staff(req, res));
exports.default = userRouter;
//# sourceMappingURL=user.routes.js.map