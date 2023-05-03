const express = require('express')
const connectDB = require('./db/connectdb')
const app = express()



const web =require('./routes/web')
const cookieParser = require('cookie-parser')
const cors=require('cors')
const fileUpload = require("express-fileupload");


connectDB()//database connection
app.use(fileUpload({ useTempFiles: true }));
app.use(cors())
app.use(express.json()) 
app.use(cookieParser())

app.use('/api',web)
  


module.exports = app