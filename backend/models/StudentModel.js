const mongoose=require('mongoose')


//define schema (field)
//Blog Schema is a collection field
const StudentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
},{timestamps:true})//timestamps create two field automatic create and update date and time

//create collection
const StudentModel=mongoose.model('student',StudentSchema)// blog collection name 

module.exports=StudentModel
