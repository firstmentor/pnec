// import React from 'react'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { addItemsToCart } from '../../redux/action/CartAction'
import { createOrder } from '../../redux/action/OrderAction'
import { saveShippingInfo } from '../../redux/action/CartAction'
// import { clearErrors } from '../../redux/action/OrderAction'

function CheckOut() {
  const history = useNavigate()

  const dispatch = useDispatch()
  
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [phone, setPhone] = useState('')
  const [pincode, setPincode] = useState('')
  const [address, setAddress] = useState('')


  const { cartItems } = useSelector((state) => state.cart)
  //const { isAuthenticated, error } = useSelector((state) => state.auth)

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  // const shippingCharges = subtotal > 1000 ? 0 : 200;

  //const tax = subtotal * 0.18;

  //const totalPrice = subtotal + tax + shippingCharges;
  const totalPrice = subtotal;

  const proceedToPayment = (e) => {
    e.preventDefault()
    //console.log(phone)
    const data = {
      subtotal,
      //shippingCharges,
      //tax,
      totalPrice,
    };
    dispatch(
      saveShippingInfo({ address, city,country, pincode, phone })
    )
   

    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    history("/process/payment");
  };




  // const shippingSubmit = (e) => {
  //   e.preventDefault()
  //   //console.log(name,email)
  //   SAVE_SHIPPING_INFO({ address, city, state, country, pinCode, phoneNo })
  // }

  return (
    <>
      <div className="contant">
        <div id="banner-part" className="banner inner-banner">
          <div className="container">
            <div className="bread-crumb-main">
              <h1 className="banner-title">Checkout</h1>
              <div className="breadcrumb">
                <ul className="inline">
                  <li>
                    <Link to="index.html">Home</Link>
                  </li>
                  <li>
                    <Link to="cart.html">Cart</Link>
                  </li>
                  <li>Checkout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout-part ptb-100">
          <div className="container">
            <form className="main-form" encType="multipart/form-data" onSubmit={proceedToPayment}>
              <div className="row">
                <div className="col-12 col-lg-8">
                  <div className="mb-md-30">
                    <div className="mb-60">
                      <div className="row">
                        <div className="col-12">
                          <div className="heading-part mb-30 mb-sm-20">
                            <h3>Billing Details</h3>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        
                          {/* <div className="col-12">
                            <div className="form-group">
                              <label for="full-name">Name</label>
                              <input
                                name="name"
                                onChange={(e) => setName(e.target.value)}
                                id="full-name"
                                value={name}
                                type="text"
                                required=""
                              />
                            </div>
                          </div> */}
                          {/* <div className="col-12">
                            <div className="form-group">
                              <label for="company-name">Company Name</label>
                              <input
                                onChange={(e) => setCompany(e.target.value)}
                                name="company"
                                value={company}
                                id="company-name"
                                type="text"
                                required=""
                              />
                            </div>
                          </div> */}
                          {/* <div className="col-12">
                            <div className="form-group">
                              <label for="email">Email</label>
                              <input
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                                value={email}
                                id="email"
                                type="text"
                                required=""
                              />
                            </div>
                          </div> */}
                          <div className="col-12">
                            <div className="form-group">
                              <label for="phone-no">Phone No*</label>
                              <input
                                onChange={(e) => setPhone(e.target.value)}
                                name="phone"
                                id="phone-no"
                                value={phone}
                                type="text"
                                required=""
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label for="country">Country*</label>
                              <input
                                onChange={(e) => setCountry(e.target.value)}
                                name="country"
                                id="country"
                                value={country}
                                type="text"
                                required=""
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label for="address">Address*</label>
                              <input
                                onChange={(e) => setAddress(e.target.value)}
                                name="address"
                                id="address"
                                value={address}
                                type="text"
                                required=""
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-12">
                            <div className="form-group">
                              <label for="zip">Pincode / Zip*</label>
                              <input
                                onChange={(e) => setPincode(e.target.value)}
                                name="pincode"
                                id="zip"
                                value={pincode}
                                type="text"
                                required=""
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-12">
                            <div className="form-group">
                              <label for="city">Town / City*</label>
                              <input
                                onChange={(e) => setCity(e.target.value)}
                                id="city"
                                value={city}
                                name="city"
                                type="text"
                                required=""
                              />
                            </div>
                          </div>
                          {/* <div className="col-12">
                            <div className="check-box mt-n2">
                              <span>
                                <input
                                  type="checkbox"
                                  className="checkbox"
                                  id="create-account"
                                  name="Create an Account?"
                                />
                                <label for="create-account" className="mb-0">
                                  Create an Account?
                                </label>
                              </span>
                            </div>
                          </div> */}
                          
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="heading-part mb-30 mb-sm-20">
                    <h3>Your order</h3>
                  </div>
                  <div className="checkout-products sidebar-product mb-60">
                    {cartItems.map((item) => (
                      <ul>
                        <li>
                          <div className="pro-media">
                            {' '}
                            <a href="/productdetail">
                              <img alt="T-shirt" src={item.image} />
                            </a>{' '}
                          </div>
                          <div className="pro-detail-info">
                            {' '}
                            <a
                              href="product-page.html"
                              className="product-title"
                            >
                              {item.name}
                            </a>
                            <div className="price-box">
                              {' '}
                              <span className="price">{item.price}</span>{' '}
                            </div>
                            <div className="checkout-qty">
                              <div>
                                <label>Qty: </label>
                                <span className="info-deta">
                                  {item.quantity}
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    ))}
                  </div>
                  <div className="complete-order-detail commun-table gray-bg mb-30">
                    <div className="table-responsive">
                      <table className="table m-0">
                        <tbody>
                          <tr>
                            <td>
                              <b>Order Places :</b>
                            </td>
                            <td>17 February 2020</td>
                          </tr>
                          <tr>
                            <td>
                              <b>Total :</b>
                            </td>
                            <td>
                              <div className="price-box">
                                {' '}
                                <span className="price">{`₹${cartItems.reduce(
                                  (acc, item) =>
                                    acc + item.quantity * item.price,
                                  0,
                                )}`}</span>{' '}
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Payment :</b>
                            </td>
                            <td>COD</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <button className="btn full btn-color" type='submit'>
                    Place order
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckOut
