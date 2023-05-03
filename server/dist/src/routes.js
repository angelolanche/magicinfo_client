"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const AuthController_1 = require("./controllers/AuthController");
const UpdateImageController_1 = require("./controllers/UpdateImageController");
const multer_1 = __importDefault(require("multer"));
const routes = (0, express_1.Router)();
exports.routes = routes;
const authController = new AuthController_1.AuthController();
const imageUpdateController = new UpdateImageController_1.ImageUpdateController();
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage: storage });
routes.get('/auth', authController.getAccessToken);
routes.post('/imageUpdate', upload.single('image'), imageUpdateController.imageUpdate);
//# sourceMappingURL=routes.js.map