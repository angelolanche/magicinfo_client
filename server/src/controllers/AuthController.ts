import { Request, Response } from 'express'
import axios from 'axios'
import * as dotenv from 'dotenv'

export class AuthController {
    async getAccessToken(req: Request, res: Response) {
        dotenv.config()
        const username = process.env.USER_NAME
        const password = process.env.USER_PASSWORD
        const baseUrl = process.env.API_ADDRESS

        await axios.post(baseUrl + '/auth', {
            username,
            password,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }).then(response => {
            const { token } = response.data
            
            return res.json({'access_token': token})
        }).catch(error => {
            console.error(error)
        })
    }
}
