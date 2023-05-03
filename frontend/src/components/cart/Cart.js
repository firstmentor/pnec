import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// import { useAlert } from 'react-alert'
import { addItemsToCart } from '../../redux/action/CartAction'

function Cart() {
  const dispatch = useDispatch()
  const history = useNavigate();
  const { cartItems } = useSelector((state) => state.cart)
  const { isAuthenticated } = useSelector((state) => state.auth)

  // const { product} = useSelector(state => state.pp)
  //console.log(cartItems)

  const decreaseQty = (id, quantity) => {
    const newQty = quantity - 1
    if (1 >= quantity) {
      return
    }
    dispatch(addItemsToCart(id, newQty))
  }
  const increaseQty = (id, quantity, stock) => {
    const newQty = quantity + 1
    if (stock <= quantity) {
      return
    }

    dispatch(addItemsToCart(id, newQty))
  }
  const checkoutHandler=()=>{
    if(isAuthenticated){
      history("/checkout");
    }else history("/login");
  }

  return (
    <>
      <div className="contant">
        <div id="banner-part" className="banner inner-banner">
          <div className="container">
            <div className="bread-crumb-main">
              <h1 className="banner-title">Shopping Cart</h1>
              <div className="breadcrumb">
                <ul className="inline">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Shopping Cart</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="ptb-100">
          <div className="container">
            {cartItems.length === 0 ? (
              <h2>Your Cart Is Empty</h2>
            ) : (
              <>
                <div className="cart-item-table commun-table">
                  <div className="table-responsive">
                    <table className="table border mb-0">
                      <thead>
                        <tr>
                          <th className="align-left">Product</th>
                          <th className="align-left">Product Name</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          {/* <th>Sub Total</th> */}
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item) => (
                          <>
                            <tr>
                              <td className="align-left">
                                <Link to="product-page.html">
                                  <div className="product-image">
                                    <img alt="Eshoper" src={item.image} />
                                  </div>
                                </Link>
                              </td>
                              <td className="align-left">
                                <div className="product-title">
                                  <Link to="/product">{item.name}</Link>
                                </div>
                              </td>
                              <td>
                                <ul>
                                  <li>
                                    <div className="base-price price-box">
                                      <span className="price">
                                        {`₹${item.price}`}
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                              </td>
                              <td>
                                <div class="col-xl-10 col-md-9 col-sm-12">
                                  <div class="custom-qty">
                                    <button
                                      onClick={() =>
                                        decreaseQty(item.product, item.quantity)
                                      }
                                      class="reduced items"
                                      type="button"
                                    >
                                      {' '}
                                      <i class="fa fa-minus"></i>{' '}
                                    </button>
                                    <input
                                      type="text"
                                      class="input-text qty"
                                      title="Qty"
                                      value={item.quantity}
                                      maxlength="8"
                                      id="qty1"
                                      name="qty"
                                    />
                                    <button
                                      onClick={() =>
                                        increaseQty(
                                          item.product,
                                          item.quantity,
                                          item.stock,
                                        )
                                      }
                                      class="increase items"
                                      type="button"
                                    >
                                      {' '}
                                      <i class="fa fa-plus"></i>{' '}
                                    </button>
                                  </div>
                                </div>
                              </td>
                              {/* <td>
                                <div className="total-price price-box">
                                  <span className="price">$80.00</span>
                                </div>
                              </td> */}
                              <td>
                                <Link to="/" className="btn small btn-color">
                                  <i
                                    title="Remove Item From Cart"
                                    data-id="100"
                                    className="fa fa-trash cart-remove-item"
                                  ></i>
                                </Link>
                              </td>
                            </tr>
                          </>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="mb-30">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mt-30">
                        <a href="/" className="btn btn-color">
                          <i className="fa fa-angle-left"></i>
                          <span>Continue Shopping</span>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mt-30 right-side float-none-sm">
                        <Link to="/" className="btn btn-color">
                          Update Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="mtb-30">
                  <div className="row">
                    <div className="col-md-6 mb-sm-20">
                      <div className="estimate">
                        <div className="heading-part mb-20">
                          <h3 className="sub-heading">
                            Estimate shipping and tax
                          </h3>
                        </div>
                        <form className="full">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="input-box mb-20">
                                <select id="country_id" className="full">
                                  <option selected="" value="">
                                    Select Country
                                  </option>
                                  <option value="1">India</option>
                                  <option value="2">China</option>
                                  <option value="3">Pakistan</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-box mb-20">
                                <select id="state_id" className="full">
                                  <option selected="" value="1">
                                    Select State/Province
                                  </option>
                                  <option value="2">---</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-box mb-20">
                                <select id="city_id" className="full">
                                  <option selected="" value="1">
                                    Select City
                                  </option>
                                  <option value="2">---</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="cart-total-table commun-table">
                        <div className="table-responsive">
                          <table className="table border">
                            <thead>
                              <tr>
                                <th colspan="2">Cart Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Item(s) Subtotal</td>
                                <td>
                                  <div className="price-box">
                                    <span className="price">
                                      {cartItems.reduce(
                                        (acc, item) =>
                                          acc + Number(item.quantity),
                                        0,
                                      )}
                                    </span>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>Shipping</td>
                                <td>
                                  <div className="price-box">
                                    <span className="price">{`₹${cartItems.reduce(
                                      (acc, item) =>
                                        acc + item.quantity * item.price,
                                      0,
                                    )}`}</span>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <b>Amount Payable</b>
                                </td>
                                <td>
                                  <div className="price-box">
                                    <span className="price">
                                      <b>$160.00</b>
                                    </span>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="mt-30">
                  <div className="row">
                    <div className="col-12">
                      <div className="right-side float-none-xs">
                        <button onClick={checkoutHandler} to="/checkout" className="btn btn-color">
                          Proceed to checkout
                          <span>
                            <i className="fa fa-angle-right"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
