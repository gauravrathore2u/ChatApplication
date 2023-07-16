import { Server } from "socket.io";


const io = new Server(9000, {
    cors: {
        origin: 'http://localhost:3000'
    }
})


var users = [];

const addUser = (userData, socketId)=>{
    (!users.some((user)=> user.email === userData.email) && userData.email !== '') && users.push({...userData, socketId})
}


const getUser = (userEmail)=>{
    // console.log(users);
    return users.find((user)=> user.email === userEmail);
}

io.on('connection', (socket)=>{
    console.log('user connected to socket');

    socket.on('addUsers', (userData)=>{
        addUser(userData, socket.id);

        io.emit('getUsers', users);
    })

    socket.on('sendMessage', (data)=>{
        const user = getUser(data.recieverEmail);
        // console.log(data);
        // console.log(user);
        io.to(user.socketId).emit('getMessage', data);
    })
})