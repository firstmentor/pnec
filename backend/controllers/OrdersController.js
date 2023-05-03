const  OrderModel = require('../models/OrderModel')

class ordercontroller{
    static neworder = async (req, res) => {  //order insert 
        console.log(req.body)
        const {
            shippingInfo,
            orderItems,
            paymentInfo,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        } = req.body;
        try {
            const order = await OrderModel.create({
                shippingInfo,
                orderItems,
                paymentInfo,
                itemsPrice,
                // taxPrice,
                // shippingPrice,
                totalPrice,
                paidAt: Date.now(),
                user: req.user._id,
            });
            res.status(201).json({
                success: true,
                order,
            });
        } catch (error) {
            console.log(error)
        }
    }
    
    static get_single_order = async (req, res) => {
        try {
            const order = await OrderModel.findById(req.params.id);
            if (!order) {
                res.status(400).json({
                    success: true,
                    message: "ORDER NOT FOUND",
                })
            }
            res.status(201).json({
                success: true,
                order
            })
        }
        catch (err) {
            console.log(err);
        }
    }


    static my_order = async (req, res) => { // user apna order dekh skta hai 
        try {
            const orders = await OrderModel.find({user:req.user._id}) 
             //console.log(req.user._id)
            res.status(201).json({
                success: true,
                orders
            })
        } catch (error) {
            console.log(error)
        }

    }


    static get_all_order = async (req, res) => { // yeh admin k liye hoga

        try {
            const allorders = await OrderModel.find();
            res.status(201).json({
                success: true,
                allorders
            })
        }
        catch (err) {
            console.log(err);
        }
    }

    static delete_order = async (req, res) => { // yeh admin delete karega user k order ko 

        try {
            const orderdel = await OrderModel.findById(req.params.id);
            if (!orderdel) {
                res.status(401).json({
                    success: true,
                    message: "ORDER NOT FOUND",
                })
            } else {
                await orderdel.remove();
                res.status(201).json({
                    success: true,
                    message: "Order DELETED SUCCESSFULLY",
                })
            }
        } catch (err) {
            console.log(err);
        }
    }


   
}


module.exports= ordercontroller;