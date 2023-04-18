import axios from 'axios'
import dotenv from 'dotenv'

interface iUpdatePlaylistSerivce {
    accessToken: string,
    playlistId: string
}

async function updatePlaylistService({ accessToken, playlistId }: iUpdatePlaylistSerivce) {
    dotenv.config()
    const baseUrl = process.env.API_ADDRESS
    const playlistDetails = await axios.get(baseUrl + `/cms/playlists/${playlistId}`,
        {
            headers: {
                'api_key': accessToken,
                'Accept': 'application/json; charset=utf-8',
                'Content-Type': 'application/json',
            }
        }
    ).then(response => {
        const res = response.data

        return res
    }).catch(error => {
        console.error(error)
    })

    const editedPlaylistDetails = (playlistDetails: any) => {
        const { items } = playlistDetails
        const { contents, contentCount } = playlistDetails.items

        const newContents = contents.pop()
        const newContentOrder = 1

        const finalContents = [{
            ...newContents,
            contentOrder: newContentOrder,
        }]

        const newContentCount = contentCount - 1

        const newPlaylistDetails = {
            ...items,
            shuffleFlag: false,
            contents: finalContents,
            contentCount: newContentCount
        }

        return newPlaylistDetails
    }

    const playListData = editedPlaylistDetails(playlistDetails)

    if (playListData) {
        await axios.put(baseUrl + `/cms/playlists/${playlistId}`, playListData, {
            headers: {
                'api_key': accessToken,
                'Accept': 'application/json; charset=utf-8',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            const res = response.data

            return res
        }).catch(error => {
            console.error(error)
        })
    }
}

export { updatePlaylistService }
