import { Router } from 'express';
import { AuthController } from './controllers/AuthController';
import { ImageUpdateController } from './controllers/UpdateImageController';
import multer from 'multer'
import { verifyPasswordMiddleware } from './middlewares/verifyPassword';
import * as dotenv from 'dotenv'

const routes = Router();

dotenv.config()
const authController = new AuthController()
const imageUpdateController = new ImageUpdateController()

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

routes.post('/auth', verifyPasswordMiddleware, authController.getAccessToken);
routes.post('/imageUpdate', upload.single('image'), verifyPasswordMiddleware, imageUpdateController.imageUpdate);

export { routes }
