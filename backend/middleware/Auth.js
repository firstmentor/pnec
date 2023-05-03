const jwt = require('jsonwebtoken')
const UserModel = require('../models/UserModel')

const changeuserauth = async (req, res, next) => {
  //console.log("hello")

  const { token } = req.cookies
  //console.log(token)
  if (!token) {
    return res
      .status(401)
      .json({ status: 'failed', message: 'unauthorized user, no token' })
  } else {
    const authdata = jwt.verify(token, 'fuyrhusuiwmnmhjuekumnjheu')
    //console.log(data)
    req.user = await UserModel.findById(authdata.userid)
    //console.log(req.user)
    next()
  }
}
const authorizeRoles = (roles) => {
  return (req, res, next) => {
    //console.log(req.user.role)
    if (!roles.includes(req.user.role)) {
      return res
        .status(401)
        .send({
          status: 'failed',
          message: '  is not allowed to access this resouce',
        })
    }
    next()
  }
}

module.exports ={
  changeuserauth,
  authorizeRoles
} 
