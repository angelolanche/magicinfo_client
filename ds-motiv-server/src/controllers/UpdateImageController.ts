import { Request, Response } from 'express'
import { uploadImageService } from './../services/uploadImageService'
import { io } from '../http'

export class ImageUpdateController {
    async imageUpdate(req: Request, res: Response) {
        const image = req.file
         
        if (image) {
            try {
                const imageUploadResponse = await uploadImageService({ image })
                io.emit('imageUpdated', {message: 'image updated'})
                
                return res.json(imageUploadResponse)
            } catch (error) {
                console.error("unable to upload image: ", error)
            }
        }
    }
}
