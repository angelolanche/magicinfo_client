import axios from 'axios'

export const baseURL = ""

export const api = axios.create(
    {
        baseURL,
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    }
)
