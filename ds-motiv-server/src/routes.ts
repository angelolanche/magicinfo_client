import { Router } from 'express';
import { ImageUpdateController } from './controllers/UpdateImageController';
import multer from 'multer'
import { verifyPasswordMiddleware } from './middlewares/verifyPassword';
import * as dotenv from 'dotenv'

const routes = Router();

dotenv.config()
const imageUpdateController = new ImageUpdateController()

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

routes.post('/imageUpdate', upload.single('image'), verifyPasswordMiddleware, imageUpdateController.imageUpdate);
routes.get('/getImage')
export { routes }
