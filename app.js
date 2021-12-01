// basicallY, we have to send a request from client to server
// client has to use an URL
// tHE url ,we will use is http://localhost:9000

//IF this a get request to fetch all the aliens from database
// GET : http://localhost:9000/aliens

const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/DBex'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected..')
})

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens', alienRouter)

app.listen(9000, () => {
    console.log('server started')
})

