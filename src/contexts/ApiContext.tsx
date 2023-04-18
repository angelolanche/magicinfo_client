import { api, baseURL } from '@components/services/api'
import axios from 'axios'
import {
    ReactNode,
    createContext,
    useContext,
    useState,
    useEffect,
} from 'react'

interface ApiProviderProps {
    children: ReactNode
}

interface ApiContextProps {
    accessToken: string
    imageUpdateService: any
}

interface Data {
    image: FileList
}

export const ApiContext = createContext({} as ApiContextProps)

export const useAPI = () => useContext(ApiContext)

export function ApiProvider({ children }: ApiProviderProps) {
    const [accessToken, setAccessToken] = useState('')
    
    useEffect(() => {
        api.get('/auth', {
        }).then(response => {
            const { access_token } = response.data

            setAccessToken(access_token)
        }).catch(error => {
            console.error(error)
        })
    }, [])

    const imageUpdateService = async (data: Data) => {
        const image = data.image[0]
        const formDataImage = new FormData()
        
        formDataImage.append('image', image)
        
        axios.post(baseURL + '/imageUpdate', {
            image: image,
            access_token: accessToken
        }, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            }
    }
        ).then(response => {
            const data = response.data
            console.log('sucesso: ', data)
        }).catch(error => {
            console.error('error: ', error)
        })
    }
    
    return (
        <ApiContext.Provider value={{ accessToken, imageUpdateService }}>
            {children}
        </ApiContext.Provider>
    )
}
