import axios from 'axios'

export const baseURL = process.env.NEXT_PUBLIC_API_ADDRESS

export const api = axios.create(
    {
        baseURL,
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    }
)

 
