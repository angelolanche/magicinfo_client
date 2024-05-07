import { serverHTTP } from './http';
import './websocket';

serverHTTP.listen(3333, () => console.log("Server is running"));