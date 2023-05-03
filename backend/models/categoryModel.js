const mongoose = require('mongoose')



const CategorySchema = new mongoose.Schema({
    cat_name:{
        type: String,
        required: true
    },
},{timestamps:true})

const CategoryModel = mongoose.model('Category',CategorySchema)

module.exports = CategoryModel