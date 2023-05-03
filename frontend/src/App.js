import { React } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import Home from './components/Home'
import ProductDetails from './components/product/Product_Details'
import Cart from './components/cart/Cart'
import Login from './components/user/Login'
import Registration from './components/user/Registration'
import CheckOut from './components/cart/CheckOut'
import About from './components/About'
import WholeSale from './components/wholeSale'
import Product from './components/product/Product'
import Shop from './components/Shop'
import { useEffect, useState } from 'react'
import { loadUser } from './redux/action/UserAction'
import store from './redux/Store'
import Profile from './components/user/Profile/Profile'
import Dashboard from './components/admin/Dashboard'
import Createproduct from './components/admin/Createproduct'
import DisplayProduct from './components/admin/DisplayProduct'
import Productview from './components/admin/Productview'
import ProductEdit from './components/admin/ProductEdit'
import axios from 'axios'
import Payment from './components/cart/Payment'

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Success from './components/cart/Success'

function App() {
  //payment apikey get
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/stripeapiKey");

    setStripeApiKey(data.stripeApiKey);
  }
  console.log(stripeApiKey)

  useEffect(() => {
    store.dispatch(loadUser())
    getStripeApiKey();
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/wholeSale" element={<WholeSale />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<CheckOut />} />

        {/* payment route */}


        {/* <Route path="/process/payment" element={<Payment />} /> */}
        {stripeApiKey && (


          <Route path="/process/payment" element={

            <Elements stripe={loadStripe(stripeApiKey)}>
              <Payment />
            </Elements>

          } />

        )}
        <Route path="/success" element={<Success />} />


        {/* admin part */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/createproduct" element={<Createproduct />} />
        <Route path="/admin/displayproduct" element={<DisplayProduct />} />
        <Route path="/admin/productview/:id" element={<Productview />} />
        <Route path="/admin/productedit/:id" element={<ProductEdit />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
