import { baseURL } from '../services/api.ts'
import axios from 'axios'
import {
    ReactNode,
    createContext,
    useContext,
} from 'react'

interface ApiProviderProps {
    children: ReactNode
}

interface ApiContextProps {
    imageUpdateService: (data: Data) => Promise<any>
}

export interface Data {
    image: FileList,
    password: string
}

export const ApiContext = createContext({} as ApiContextProps)

export const useAPI = () => useContext(ApiContext)

export function ApiProvider({ children }: ApiProviderProps) {
    const imageUpdateService = async (data: Data) => {
        const { password } = data;

        if (password) {
            const image = data.image[0]
            const formDataImage = new FormData()

            formDataImage.append('image', image)
            
            try {
                const imageUpdate = await axios.post(baseURL + '/imageUpdate', 
                {
                    image: image,
                    password
                }, {
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'multipart/form-data'
                    }
                })
                
                const data = { error: '', status: imageUpdate.status }
                
                return data;
            }
            
            catch(error) {
                const data = {error}
                
                return data
            }
        } 
    }

    return (
        <ApiContext.Provider value={{ imageUpdateService }}>
            {children}
        </ApiContext.Provider>
    )
}
