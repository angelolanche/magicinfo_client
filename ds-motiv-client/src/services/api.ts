import axios from 'axios'

export const baseURL = import.meta.env.VITE_API_ADDRESS

export const api = axios.create(
    {
        baseURL,
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    }
)
