const mongoose = require('mongoose')
const url = "mongodb://127.0.0.1:27017/api"
const connectDB = ()=>{
    return mongoose.connect(url)
    .then(()=>{
        console.log('connection able')
    })
    .catch((error)=>{
        console.log(error)
    })

}
module.exports=connectDB