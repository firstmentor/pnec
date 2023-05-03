import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getProductDetail } from '../../redux/action/Action'
import { addItemsToCart } from '../../redux/action/CartAction'
// import { productDetailReducer } from '../../redux/reducers/ProductReducer'

function Product_Details() {
  const { id } = useParams()
  console.log(id)
  const { productDetail } = useSelector((state) => state.pdetail)

  const [quantity, setQuantity] = useState(1)
  console.log(quantity)

  const increaseQty = () => {
    if (productDetail.stock <= quantity) return
    const qty = quantity + 1
    setQuantity(qty)
  }
  const decreaseQty = () => {
    if (1 >= quantity) return
    const qty = quantity - 1
    setQuantity(qty)
  }

  //   console.log(productDetail);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductDetail(id))
  }, [dispatch, id])

  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity))
    // alert.success('ITEM ADDED TO CART')
  }

  return (
    <>
      <div class="contant">
        <div id="banner-part" class="banner inner-banner">
          <div class="container">
            <div class="bread-crumb-main">
              <h1 class="banner-title">Shop</h1>
              <div class="breadcrumb">
                <ul class="inline">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="shop.html">Shop</a>
                  </li>
                  <li>Shop Detail</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="ptb-100">
          <div class="container">
            <div class="row">
              <div class="col-lg-5 col-md-6 col-12">
                <div class="align-center mb-md-30">
                  <ul id="glasscase" class="gc-start">
                    <li>
                      {/* <Carousel> */}
                        {productDetail.image &&
                          productDetail.image.map((image) => (
                            // <Carousel.Item key={image.public_id}>
                              <img
                                className="d-block w-100"
                                src={image.url}
                                alt={productDetail.name}
                              />
                              ))}
                            {/* </Carousel.Item> */}
                      {/* </Carousel> */}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-7 col-md-6 col-12">
                <div class="product-detail-main">
                  <div class="product-item-details">
                    <h1 class="product-item-name">{productDetail.name} </h1>
                    <div class="price-box">
                      {' '}
                      <span class="price"></span>
                      <span class="price old-price">{`₹${productDetail.price}`}</span>
                    </div>
                    <div class="rating-main">
                      <div class="rating-summary-block">
                        <div title="53%" class="rating-result">
                          {' '}
                          <span style={{ width: '53%' }}></span>{' '}
                        </div>
                      </div>
                      <span>1 Review (s)</span>
                    </div>
                    <div class="product-des">
                      <p>Product Code : SVH23</p>
                    </div>
                    <ul class="product-list">
                      <li>
                        <i class="fa fa-check"></i> Satisfaction 100% Guaranteed
                      </li>
                      <li>
                        <i class="fa fa-check"></i> Free shipping on orders over
                        $99
                      </li>
                      <li>
                        <i class="fa fa-check"></i> 14 day easy Return
                      </li>
                    </ul>
                    <hr class="mb-20" />
                    <div class="row">
                      <div class="col-12">
                        <div class="table-listing qty mb-20">
                          <div class="row">
                            <div class="col-xl-2 col-md-3 col-sm-12">
                              <span>Qty:</span>
                            </div>
                            <div class="col-xl-10 col-md-9 col-sm-12">
                              <div class="custom-qty">
                                <button
                                  onClick={decreaseQty}
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
                                  value={quantity}
                                  maxlength="8"
                                  id="qty1"
                                  name="qty"
                                />
                                <button
                                  onClick={increaseQty}
                                  class="increase items"
                                  type="button"
                                >
                                  {' '}
                                  <i class="fa fa-plus"></i>{' '}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr class="mb-20" />
                    <div class="product-details-btn">
                      <ul>
                        <li class="icon cart-icon">
                          <Link
                            to="/cart"
                            class="btn btn-color"
                            onClick={addToCartHandler}
                          >
                            <span></span>Add to cart
                          </Link>
                        </li>
                        <li class="icon wishlist-icon">
                          <a href="wishlist.html" class="btn btn-transparent">
                            <span></span>
                          </a>
                        </li>
                        <li class="icon compare-icon">
                          <Link to="#" class="btn btn-transparent">
                            <span></span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="product-tab-part position-r pb-100">
        <div class="container">
          <div class="product-tab-inner">
            <div class="row">
              <div class="col-12">
                <div id="tabs">
                  <ul class="nav nav-tabs">
                    <li>
                      <Link
                        class="tab-Description selected"
                        title="Description"
                      >
                        Description
                      </Link>
                    </li>
                    <li>
                      <Link class="tab-Tags" title="Tags">
                        Product Tags
                      </Link>
                    </li>
                    <li>
                      <Link class="tab-Review" title="Review">
                        Review
                      </Link>
                    </li>
                  </ul>
                </div>
                <div id="items">
                  <div class="tab_content">
                    <ul>
                      <li>
                        <div class="items-Description selected">
                          Pellentesque habitant morbi tristique senectus et
                          netus et malesuada fames ac turpis egestas. Vestibulum
                          tortor quam, feugiat vitae, ultricies eget, tempor sit
                          amet, ante. Donec eu libero sit amet quam egestas
                          semper. Aenean ultricies mi vitae est. Mauris placerat
                          eleifend leo. Pellentesque habitant morbi tristique
                          senectus et netus et malesuada fames ac turpis
                          egestas. Vestibulum tortor quam, feugiat vitae,
                          ultricies eget, tempor sit amet, ante. Donec eu libero
                          sit amet quam egestas semper. Aenean ultricies mi
                          vitae est. Mauris placerat eleifend leo.
                        </div>
                      </li>
                      <li>
                        <div class="items-Tags">
                          <p>
                            Mauris felis neque, hendrerit id velit a,
                            sollicitudin gravida nunc in velit lectus, varius
                            quis pretium fermentum, faucibus vel ante etiam
                            justo nulla, condimentum sit amet urna eget, rutrum
                            auctor massa suspendisse sit amet odio et dui
                            lobortis iaculis phasellus sagittis interdum neque,
                            fermentum gravida ante maximus sed nunc lobortis
                            bibendum elementum integer rhoncus et libero ut
                            suscipit aliquam non ligula id dui consequat viverra
                            a ut sem pellentesque et sapien eget lorem viverra
                            dignissim.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div class="items-Review">
                          <div class="comment-part">
                            <h3 class="head-three">03 Comments</h3>
                            <ul class="comment-list mt-30">
                              <li>
                                <div class="comment-user">
                                  <img
                                    src="images/comment-img1.jpg"
                                    alt="comment-img"
                                  />
                                </div>
                                <div class="comment-detail">
                                  <span class="commenter">
                                    <span>John Doe</span> (05 Jan 2020)
                                  </span>
                                  <p>
                                    Lorem ipsum dolor sit amet adipiscing elit
                                    labore dolore that sed do eiusmod tempor
                                    labore dolore that magna aliqua. Ut enim ad
                                    minim veniam, exercitation.
                                  </p>
                                  <Link
                                    to="/"
                                    class="reply-btn btn btn-color small"
                                  >
                                    Reply
                                  </Link>
                                </div>
                                <div class="clearfix"></div>
                              </li>
                              <li>
                                <ul class="comment-list child-comment">
                                  <li>
                                    <div class="comment-user">
                                      <img
                                        src="images/comment-img2.jpg"
                                        alt="comment-img"
                                      />
                                    </div>
                                    <div class="comment-detail">
                                      <span class="commenter">
                                        <span>John Doe</span> (12 Jan 2020)
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet adipiscing
                                        elit labore dolore that sed do eiusmod
                                        tempor labore dolore that magna aliqua.
                                        Ut enim ad minim veniam, exercitation.
                                      </p>
                                      <Link
                                        to="/"
                                        class="reply-btn btn btn-color small"
                                      >
                                        Reply
                                      </Link>
                                    </div>
                                    <div class="clearfix"></div>
                                  </li>
                                  <li>
                                    <div class="comment-user">
                                      <img
                                        src="images/comment-img3.jpg"
                                        alt="comment-img"
                                      />
                                    </div>
                                    <div class="comment-detail">
                                      <span class="commenter">
                                        <span>John Doe</span> (15 Jan 2020)
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet adipiscing
                                        elit labore dolore that sed do eiusmod
                                        tempor labore dolore that magna aliqua.
                                        Ut enim ad minim veniam, exercitation.
                                      </p>
                                      <Link
                                        to="/"
                                        class="reply-btn btn btn-color small"
                                      >
                                        Reply
                                      </Link>
                                    </div>
                                    <div class="clearfix"></div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          <div class="leave-comment-part pt-100">
                            <h3 class="head-three">Leave A Comment</h3>
                            <form class="main-form">
                              <div class="row">
                                <div class="col-md-4">
                                  <div class="form-group mb-30">
                                    <input
                                      type="text"
                                      placeholder="Name"
                                      required=""
                                    />
                                  </div>
                                </div>
                                <div class="col-md-4">
                                  <div class="form-group mb-30">
                                    <input
                                      type="text"
                                      placeholder="Subject"
                                      required=""
                                    />
                                  </div>
                                </div>
                                <div class="col-md-4">
                                  <div class="form-group mb-30">
                                    <input
                                      type="text"
                                      placeholder="Email"
                                      required=""
                                    />
                                  </div>
                                </div>
                                <div class="col-12">
                                  <div class="form-group mb-30">
                                    <textarea
                                      placeholder="Message"
                                      rows="5"
                                      required=""
                                    ></textarea>
                                  </div>
                                </div>
                                <div class="col-12">
                                  <button type="submit" class="btn-color">
                                    Post Comment
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Product_Details
