"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const events_controller_1 = require("../controllers/events.controller");
const eventRouter = express_1.default.Router();
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './../../zoo/frontend/zoo/src/assets/events/');
        //'
    },
    filename: (req, file, cb) => {
        // console.log(req.body.filename);
        cb(null, req.body.filename);
    }
});
var upload = multer({ storage: storage });
eventRouter.route('/get').get((req, res) => new events_controller_1.EventController().get(req, res));
eventRouter.route('/add').post((req, res) => new events_controller_1.EventController().add(req, res));
eventRouter.route('/event').post((req, res) => new events_controller_1.EventController().event(req, res));
eventRouter.route('/like').post((req, res) => new events_controller_1.EventController().like(req, res));
eventRouter.route('/dislike').post((req, res) => new events_controller_1.EventController().dislike(req, res));
eventRouter.route('/apply').post((req, res) => new events_controller_1.EventController().apply(req, res));
eventRouter.route('/notifications').post((req, res) => new events_controller_1.EventController().notifications(req, res));
eventRouter.route('/myevents').post((req, res) => new events_controller_1.EventController().myevents(req, res));
eventRouter.route('/notified').post((req, res) => new events_controller_1.EventController().notified(req, res));
eventRouter.route('/updateactive').post((req, res) => new events_controller_1.EventController().updateactive(req, res));
eventRouter.post('/upload', upload.single('file'), (req, res, next) => {
});
exports.default = eventRouter;
//# sourceMappingURL=events.routes.js.map