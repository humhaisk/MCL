const http=require('http');
const express = require('express')
const bodyParser= require('body-parser')
const {Server}=require('socket.io')
const mongoose=require('mongoose')
const path = require('path')
const cors = require('cors')

const PORT= 5000;

const app=express()
const server=http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*', // Allow all origins (adjust as needed for security)
        methods: ['GET', 'POST'],
    },
});
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    return res.render('home')
})

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('l-bar-up', () => {
        io.emit('l-bar-up');
    });
    socket.on('l-bar-down', () => {
        io.emit('l-bar-down');
    });
    socket.on('r-bar-up', () => {
        io.emit('r-bar-up');
    });
    socket.on('r-bar-down', () => {
        io.emit('r-bar-down');
    });
})

app.set('view engine','ejs')
app.set('views',path.resolve('./views'))

server.listen(PORT,()=>{
    console.log('server is running on PORT :',PORT)
})