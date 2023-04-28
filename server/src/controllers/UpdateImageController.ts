import { Request, Response } from 'express'
import dotenv from 'dotenv'
import { updatePlaylistService } from './../services/updatePlaylistService'
import { AddImageToPlaylistService } from '../services/addImageToPlaylistService'
import { uploadImageService } from './../services/uploadImageService'

export class ImageUpdateController {
    async imageUpdate(req: Request, res: Response) {
        dotenv.config()
        
        const { access_token } = req.body
        const image = req.file
        const playlistId = process.env.PORSCHE_PLAYLIST_ID as string

        if (image) {
            try {
                const contentId = await uploadImageService({ accessToken: access_token, image })
                await AddImageToPlaylistService({ accessToken: access_token, contentId, playlistId })
                const updatedPlaylist = await updatePlaylistService({ accessToken: access_token, playlistId })

                return res.json(updatedPlaylist)
            } catch (error) {
                console.error(error)
            }
        }
    }
}
