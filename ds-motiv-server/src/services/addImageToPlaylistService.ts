import axios from 'axios'
import * as dotenv from 'dotenv'

interface iAddImageToPlaylistService {
    accessToken: string,
    contentId: string,
    playlistId: string
}

async function AddImageToPlaylistService({ accessToken, contentId, playlistId }: iAddImageToPlaylistService) {
    console.log('entrou addImage')
    dotenv.config()
    const baseUrl = process.env.API_ADDRESS

    const contentData = {
        "contentIds": [contentId],
        "playlistIds": [playlistId]
    }
    
    console.log('contentData: ', contentData)
    await axios.put(baseUrl + '/cms/playlists/contents', contentData,
        {
            headers: {
                'api_key': accessToken,
                'Accept': 'application/json; charset=utf-8',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            console.log('res: ', response)
            const res = response.data

            return res
        }).catch(error => {
            console.error(error)
        })
}

export { AddImageToPlaylistService }
