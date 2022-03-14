const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost/AlienDBex', {useNewUrlParser:true})
.then(()=>console.log("connected"))
.catch((err)=>console.log("err"));

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)

app.listen(9000, () => {
    console.log('Server started')
})