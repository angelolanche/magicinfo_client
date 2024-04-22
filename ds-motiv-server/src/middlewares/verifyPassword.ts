import { NextFunction, Request, Response } from "express";

export const verifyPasswordMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { password } = req.body
    if (password === process.env.SUBMIT_IMAGE_PASSWORD) {
        next()
    }
    else {
        return res.status(401).json({ error: 'Invalid password' })
    }
}
