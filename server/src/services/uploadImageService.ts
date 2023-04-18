import axios from 'axios'
import dotenv from 'dotenv'

interface iUploadImageService {
    accessToken: string,
    image: any
}

async function uploadImageService({ accessToken, image }: iUploadImageService) {
    dotenv.config()
    const baseUrl = process.env.API_ADDRESS

    const data = new FormData()
    const blob = new Blob([image.buffer], { type: image.mimetype })

    data.append('contentType', 'IMAGE')
    data.append('files', blob, image.originalname)
    data.append('groupId', '0')

    const contentId = await axios.post(baseUrl + '/cms/contents/files', data,
        {
            headers: {
                'api_key': accessToken,
                'Accept': 'application/json; charset=utf-8',
                'Content-Type': 'multipart/form-data',
            }
        }).then((response) => {
            const { contentId } = response.data.items

            return contentId
        }).catch((error) => {
            console.error(error)
        })

    return contentId
}

export { uploadImageService }
