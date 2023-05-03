const express = require('express')
const ProductController = require('../controllers/ProductController')
const StudentController = require('../controllers/StudentController')
const UserController = require('../controllers/UserController')
const ContactController=require('../controllers/ContactController')
const OrdersController = require('../controllers/OrdersController')
const { changeuserauth } = require('../middleware/Auth')
const PaymentController = require('../controllers/PaymentController')
const router = express.Router()

router.post('/insertstudent', StudentController.InsertStudent)
router.get('/displaystudent', StudentController.DisplayStudent)
router.get('/viewstudent/:id', StudentController.ViewStudent)
router.post('/updatestudent/:id', StudentController.UpdateStudent)
router.delete('/deletestudent/:id', StudentController.DeleteStudent)
router.post('/editstudent/:id', StudentController.EditStudent)

//user controller
router.post('/registration', UserController.UserRegister)
router.post('/login', UserController.UserLogin)
router.get('/GetAllUser', changeuserauth, UserController.GetallUser)
router.get('/GetSingleUser/:id', UserController.GetsingleUser)
router.post('/UpdateUserRole/:id', UserController.UpdateUserRole)
router.get('/logout', UserController.Logout)
router.delete('/delete/:id', UserController.DeleteUser)
router.get('/GetUserDetails', changeuserauth, UserController.GetUserDetails)
router.post('/updatepassword', changeuserauth, UserController.UpdatePassword)
router.post('/UpdateProfile',changeuserauth,UserController.UpdateProfile)

//Admin Controller
// router.get('/admin/GetSingleUser/:id' , UserController.GetSingleUser)
// router.post('/admin/UpdateUserRole/:id' , UserController.UpdateUserRole)
// router.delete('/admin/DeleteUser/:id' , UserController.DeleteUser)
// router.get('/GetAllUser',UserController.GetallUser)
// router.get('/GetSingleUser/:id',UserController.GetsingleUser)
// router.get('/UpdateUser',UserController.UpdateUser)

// // ProductController
router.post('/CreateProduct', ProductController.CreateProduct)
router.get('/GetAllProduct', ProductController.GetAllProduct)
router.post('/UpdateProducts/:id', ProductController.UpdateProducts)
router.get('/getproductdetail/:id', ProductController.GetProductDetail)
router.delete('/DeleteProducts/:id', ProductController.DeleteProducts)
// router.get("/admin/GetAdminProducts",  ProductController.GetAdminProducts);

//contactController
router.post('/contact', ContactController.contactRegister)

//ordercontroller
router.post('/order/new',changeuserauth,OrdersController.neworder)

router.get('/order/:id',changeuserauth,OrdersController.get_single_order)
router.get('/deleteorder/:id',OrdersController.delete_order);
router.get('/orders/me',changeuserauth,OrdersController.my_order);
router.get('/admin/allorders',changeuserauth,OrdersController.get_all_order);



//payment
router.post('/payment/process',changeuserauth,PaymentController.processPayment)
router.get('/stripeapiKey',changeuserauth,PaymentController.sendStripeApiKey)



module.exports = router
