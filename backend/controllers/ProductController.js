const ProductModel = require('../models/ProductModel')
// const FeatureController = require("./FeatureController");
const cloudinary = require('cloudinary').v2

cloudinary.config({
  cloud_name: 'dnv0hhw7g',
  api_key: '241382133611984',
  api_secret: 'vVA2So6dqHk_y7hkGwMwzQnY5-0',
})

class ProductController {
  static GetAllProduct = async (req, res) => {
    try {
      //   const productCounts = await ProductModel.countDocuments();
      //   const resultperpage = 3;
      //   const feature = new FeatureController(ProductModel.find(), req.query).search().filter().pagination(resultperpage);

      const allProducts = await ProductModel.find()

      res.status(200).json({
        success: true,
        allProducts,
      })
    } catch (err) {
      console.log(err)
    }
  }

  // ADMIN
  static CreateProduct = async (req, res) => {
    try {
      const file = req.files.image
      //console.log(file)
      const myimage = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: 'productimage',
      })
      //console.log(myimage)
      const result = new ProductModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock,
        numOfReviews: req.body.numOfReviews,
        image: {
          public_id: myimage.public_id,
          url: myimage.secure_url,
        },
      })
      //saving data
      await result.save()
      res.status(201).send({
        status: 'success',
        message: 'Product Created Successfully 😃🍻',
        result,
      })
    } catch (err) {
      console.log(err)
    }
  }

  static GetProductDetail = async (req, res) => {
    try {
      //console.log(req.params.id)
      const productDetail = await ProductModel.findById(req.params.id)
      //console.log(productDetail);
      res.status(200).json({
        success: true,
        productDetail,
      })
    } catch (err) {
      console.log(err)
    }
  }

  // ADMIN
  static GetAdminProducts = async (req, res) => {
    try {
      const data = await ProductModel.find()
      if (data) {
        res.status(200).json({
          success: true,
          data,
        })
      } else {
        res.status(400).json({
          success: true,
          message: 'only admin can view',
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  // ADMIN PRODUCT UPDATE
  static UpdateProducts = async (req, res) => {
    try {
      const result = await ProductModel.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).json({
        success: true,
        result,
      })
    } catch (err) {
      console.log(err)
    }
  }

  // ADMIN PRODUCT DELETE
  static DeleteProducts = async (req, res) => {
    try {
      const result = await ProductModel.findByIdAndDelete(req.params.id)
      console.log(result)
      res.status(200).json({
        success: true,
        message: 'Item deleted succesfully ',
      })
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = ProductController
