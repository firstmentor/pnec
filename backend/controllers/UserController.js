const UserModel = require('../models/UserModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cloudinary = require('cloudinary').v2

class UserController {
  //get all user
  static GetallUser = async (req, res) => {
    const { _id, name, email } = req.user
    try {
      const users = await UserModel.find()
      res.status(201).json({
        status: 'success',
        message: 'successful',
        users,
      })
    } catch (error) {
      console.log(error)
    }
  }
  //get all user end

  //get user details
  static GetUserDetails = async (req, res) => {
    const { _id, name, email } = req.user
    try {
      const user = await UserModel.findById(_id)
      res.status(200).json({
        success: true,
        user,
      })
    } catch (error) {
      console.log(error)
    }
  }

  // get user details end

  //get single user start
  static GetsingleUser = async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.id)
      res.status(200).json({
        success: true,
        user,
      })
    } catch (error) {
      console.log(error)
    }
  }
  //get single use end

  //registration start
  static UserRegister = async (req, res) => {
    const file = req.files.avatar
    // console.log(file);
    // console.log(req.body)
    const myCloud = await cloudinary.uploader.upload(file.tempFilePath, {
      folder: 'avatars',
    })

    //console.log(myCloud);
    const { name, password, cpassword, email } = req.body
    const user = await UserModel.findOne({ email: email })
    // /console.log(user)
    if (user) {
      return res
        .status(400)
        .json({ status: 'failed', message: 'This email already exist' })
    } else {
      if (name && email && password && cpassword) {
        if (password === cpassword) {
          try {
            //used for encrypting
            //hash chnges password
            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(password, salt)
            const result = new UserModel({
              name: name,
              password: hashPassword,
              email: email,
              avatar: {
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
              },
            })
            await result.save()
            res.status(201).json({
              status: 'success',
              message: 'Registration successfully',

              result,
            })
          } catch (err) {
            console.log(err)
          }
        } else {
          return res.status(400).json({
            success: false,
            message: 'Password And Confirm Password Does Not Match',
            user,
          })
        }
      } else {
        return res
          .status(400)
          .json({ status: 'failed', message: 'All The Fields Are Required' })
      }
    }
  }
  //registration end

  //Login start
  static UserLogin = async (req, res) => {
    try {
      // console.log(req.body)

      const { email, password } = req.body
      if (email && password) {
        const user = await UserModel.findOne({ email: email })
        if (user != null) {
          const ismatched = await bcrypt.compare(password, user.password)
          if (ismatched) {
            const token = jwt.sign(
              { userid: user._id },
              'fuyrhusuiwmnmhjuekumnjheu',
            )
            res.cookie('token', token)
            // console.log(token)
            res.status(201).json({
              status: 'success',
              message: 'successful',
              token: token,
              user,
            })
            // res.redirect("/")
          } else {
            res.status(401).json({
              message: 'email or password are not matched',
            })
          }
        } else {
          res.status(401).json({
            message: 'email or password are not matched',
          })
        }
      }
    } catch (error) {
      console.log(error)
      res.send(error)
    }
  }
  //login end

  //update password
  static UpdatePassword = async (req, res) => {
    //console.log(req.body)

    try {
      const { id } = req.user
      const { oldpassword, newpassword, confirmPassword } = req.body
      // console.log(req.body)
      if (oldpassword && newpassword && confirmPassword) {
        // const user = await UserModel.findById(req.user.id);
        const user = await UserModel.findById(id)
        //console.log(user);

        const isMatch = await bcrypt.compare(oldpassword, user.password)
        if (!isMatch) {
          return res.status(400).json({
            status: 'failed',
            message: 'OLD PASSWORD IS INCORRECT 😓🍻',
          })
        } else {
          if (newpassword !== confirmPassword) {
            return res.status(400).json({
              status: 'failed',
              message: 'NEW PASSWORD & CONFIM PASSWORD DOES NOT MATCH 😓🍻',
            })
          } else {
            const salt = await bcrypt.genSalt(10)
            const newHashpaswd = await bcrypt.hash(newpassword, salt)
            const result = await UserModel.findByIdAndUpdate(id, {
              $set: { password: newHashpaswd },
            })
            return res.status(201).json({
              status: 'success',
              message: 'PASSWORD UPDATED SUCCESSFULLY 😃',
              result,
            })
          }
        }
      } else {
        return res.status(400).json({
          status: 'failed',
          message: 'All fiels required',
        })
      }
    } catch (err) {
      console.log(err)
    }
  }
  //update password end

  // update Profile start
  static UpdateProfile = async (req, res) => {
    try {
      // console.log(req.files.avatar)
      // console.log(req.body)
      const { id } = req.user
      if (req.files) {
        // Update the profile of user
        const user = await UserModel.findById(id)
        const image_id = user.avatar.public_id
        // console.log(image_id)
        await cloudinary.uploader.destroy(image_id)
        const file = req.files.avatar
        const myCloud = await cloudinary.uploader.upload(file.tempFilePath, {
          folder: 'avatars',
          width: 150,
          crop: 'scale',
        })

        var data = {
          name: req.body.name,
          email: req.body.email,

          avatar: {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
          },
        }
      } else {
        var data = {
          name: req.body.name,
          email: req.body.email,
        }
      }

      // Update Code
      const result = await UserModel.findByIdAndUpdate(id, data)

      res.status(200).json({
        success: true,
        message: 'Profile  updated sucessfully',
        result,
      })
    } catch (err) {
      console.log(err)
    }
  }
  //update Profile end

  //update userrole start
  static UpdateUserRole = async (req, res) => {
    try {
      const user = await UserModel.findByIdAndUpdate(req.params.id, {
        role: req.body.role,
      })
      // console.log(user);
      res.json({
        status: 400,
        message: 'user role  updated sucessfully',
        user,
      })
    } catch (err) {
      console.log(err)
    }
  }
  //update user end

  //delete user start
  static DeleteUser = async (req, res) => {
    try {
      const userDelete = await UserModel.findById(req.params.id)

      if (!userDelete) {
        return res
          .status(500)
          .json({ status: '500', message: 'user not !! found  😪  ' })
      }
      // To delete the data from database
      await UserModel.deleteOne(userDelete)

      res.status(200).json({
        status: 'deleted successfully',
        message: '  Successfully user deleted 🥂🍻',
      })
    } catch (err) {
      console.log(err)
    }
  }
  //delete user end

  //logout start

  static Logout = async (req, res) => {
    try {
      res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      })

      res.status(200).json({
        success: true,
        message: 'Logged Out',
      })
    } catch (err) {
      console.log(error)
    }
  }

  //logout end
}

module.exports = UserController
