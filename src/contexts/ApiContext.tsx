import { baseURL } from '@components/services/api'
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
    imageUpdateService: (data: Data) => Promise<any>;
}

interface Data {
    image: FileList,
    password: string
}

export const ApiContext = createContext({} as ApiContextProps)

export const useAPI = () => useContext(ApiContext)

export function ApiProvider({ children }: ApiProviderProps) {
    async function authentication(password: string) {
        return axios.post(baseURL + '/auth', { password }, {
        }).then(response => {
            const { access_token } = response.data

            return access_token
        }).catch(errorObj => {
            console.error(errorObj)
            const { response: { status }, response: { data: { error } } } = errorObj

            return { error, status }
        })
    }

    const imageUpdateService = async (data: Data) => {
        const { password } = data;
        const access_token = await authentication(password)

        if (!access_token.error) {
            const image = data.image[0]
            const formDataImage = new FormData()

            formDataImage.append('image', image)
            const imageUpdate = await axios.post(baseURL + '/imageUpdate', {
                image: image,
                access_token,
                password
            }, {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'multipart/form-data'
                }
            }
            ).then(response => {
                const data = { error: '', status: response.status }

                return data;
            }).catch(error => {
                console.error('error: ', error)
                return error
            })

            return imageUpdate
        }

        return access_token
    }

    return (
        <ApiContext.Provider value={{ imageUpdateService }}>
            {children}
        </ApiContext.Provider>
    )
}
