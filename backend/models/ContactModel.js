const mongoose=require('mongoose')

const ContactSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    message:{
        type:String,
        required:true
    },
 
},{timestamps:true})

const UserModel=mongoose.model('contact',ContactSchema)
module.exports=UserModel