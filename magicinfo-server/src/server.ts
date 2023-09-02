import express from 'express';
import cors from 'cors';
import { routes } from './routes'

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

app.listen(3333, () => console.log("Server is running"));
