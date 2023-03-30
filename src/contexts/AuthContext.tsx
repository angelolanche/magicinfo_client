import { api, baseURL } from '@components/services/api'
import axios from 'axios'
import {
    ReactNode,
    createContext,
    useContext,
    useState,
    useEffect,
} from 'react'

interface AuthProviderProps {
    children: ReactNode
}

interface AuthContextProps {
    accessToken: string
    imageUpdateService: any
}

export const AuthContext = createContext({} as AuthContextProps)

export const useAPI = () => useContext(AuthContext)

export function Authprovider({ children }: AuthProviderProps) {
    const [accessToken, setAccessToken] = useState('')

    useEffect(() => {
        api.post('/auth', {
            "username": process.env.NEXT_PUBLIC_USER_NAME,
            "password": process.env.NEXT_PUBLIC_USER_PASSWORD
        }).then(response => {
            const { token } = response.data

            setAccessToken(token)
        }).catch(error => {
            console.error(error)
        })
    }, [])
 "files=@Screenshot from 2023-03-06 14-15-25.png;type=image/png"


    const imageUpdateService = (image: any) => (
        axios.post(`${baseURL}/cms/contents/files`, {
            contentType: 'IMAGE',
            files: image,
            groupId: 0
        }, {
            headers: {
                'api_key': `${accessToken}`,
                'accept': 'application/json; charset=UTF-8',
                'Content-Type': 'multipart/form-data',
            },
        }
        )
    ).then(response => {
        const data = response.data
        console.log('sucesso: ', data)
    }).catch(error => {
        console.log('token: ', accessToken)
        console.error('error: ', error)
    })

    return (
        <AuthContext.Provider value={{ accessToken, imageUpdateService }}>
            {children}
        </AuthContext.Provider>
    )
}
