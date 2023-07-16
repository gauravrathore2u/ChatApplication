import {io} from 'socket.io-client'

const socketConn = io('ws://localhost:9000');

export default socketConn;