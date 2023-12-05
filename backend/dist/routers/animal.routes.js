"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const animal_controller_1 = require("../controllers/animal.controller");
const animalRouter = express_1.default.Router();
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './../../zoo/frontend/zoo/src/assets/animals/');
    },
    filename: (req, file, cb) => {
        cb(null, req.body.filename);
    }
});
var upload = multer({ storage: storage });
animalRouter.route('/get').get((req, res) => new animal_controller_1.AnimalController().get(req, res));
animalRouter.route('/group').post((req, res) => new animal_controller_1.AnimalController().group(req, res));
animalRouter.route('/search').post((req, res) => new animal_controller_1.AnimalController().search(req, res));
animalRouter.route('/animal').post((req, res) => new animal_controller_1.AnimalController().animal(req, res));
animalRouter.route('/comment').post((req, res) => new animal_controller_1.AnimalController().comment(req, res));
animalRouter.route('/add').post((req, res) => new animal_controller_1.AnimalController().add(req, res));
animalRouter.route('/editcomment').post((req, res) => new animal_controller_1.AnimalController().editcomment(req, res));
animalRouter.post('/upload', upload.single('file'), (req, res, next) => {
});
exports.default = animalRouter;
//# sourceMappingURL=animal.routes.js.map