const ContactModel = require('../models/ContactModel')
// const jwt = require('jsonwebtoken')
 

class ContactController {


static contactRegister = async (req, res) => {
    try{
        console.log(req.body)
        const result = new ContactModel({
            ///secode way to data inserting
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
    });
    await result.save()
    res.status(201).json({
        status:"success",
        Message:" successfully submitted"
    })

}catch(error){
        console.log(error)
    }
  }

}
  module.exports= ContactController