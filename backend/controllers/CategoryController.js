const ContactModel = require('../models/categoryModel')

class CatogaryController{

    static catogoryDisplay=(req,res)=>{
        res.render('/Views/admin/category')
    }
}
module.exports=CatogaryController