"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const AuthController_1 = require("./controllers/AuthController");
const UpdateImageController_1 = require("./controllers/UpdateImageController");
const multer_1 = __importDefault(require("multer"));
const verifyPassword_1 = require("./middlewares/verifyPassword");
const dotenv = __importStar(require("dotenv"));
const routes = (0, express_1.Router)();
exports.routes = routes;
dotenv.config();
const authController = new AuthController_1.AuthController();
const imageUpdateController = new UpdateImageController_1.ImageUpdateController();
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage: storage });
routes.post('/auth', verifyPassword_1.verifyPasswordMiddleware, authController.getAccessToken);
routes.post('/imageUpdate', upload.single('image'), verifyPassword_1.verifyPasswordMiddleware, imageUpdateController.imageUpdate);
//# sourceMappingURL=routes.js.map