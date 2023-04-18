import {Router} from 'express';
import {AuthController} from './controllers/AuthController';
import {ImageUpdateController} from './controllers/UpdateImageController';
import multer from 'multer'

const routes = Router();
const authController = new AuthController()
const imageUpdateController = new ImageUpdateController()

const storage = multer.memoryStorage()
const upload = multer({storage: storage})

routes.get('/auth', authController.getAccessToken);
routes.post('/imageUpdate', upload.single('image'), imageUpdateController.imageUpdate);

export {routes}
