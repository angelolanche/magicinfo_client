import express from 'express';
import cors from 'cors';
import http from 'http';
import { routes } from './routes'
import {Server} from 'socket.io'

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST')
    res.header('Access-Control-Allow-Headers', 'X-PINGOTHER, Content-Type, Accept, Authorizarion')
    next()
})

const serverHTTP = http.createServer(app)
const io = new Server(serverHTTP, {
    cors: {
        origin: '*'
    }
})

export {serverHTTP, io}
