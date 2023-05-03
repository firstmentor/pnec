import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { GetProduct } from '../redux/action/Action'
import Product from './product/Product'

function Home() {
  const {products} = useSelector((state) => state.p)
  console.log(products)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetProduct())
  }, [dispatch])
  return (
    <>
      {/* banner satrt */}
      <section id="banner-part" class="menu-section pb-100">
        <div class="banner main-banner owl-carousel">
          <div class="banner-1">
            <img src="images/h7.jpg" alt="img" />
            <div class="banner-detail">
              <div class="container">
                <div class="row">
                  <div class="col-12">
                    <div class="banner-detail-inner">
                      <span class="subtitle1">Women Style</span>
                      <h1 class="banner-title">Big sale</h1>
                      <div class="subtitle2">
                        <span class="part1">Summer</span>
                        <span class="part2">Collection</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="banner-2">
            <img src="/images/h2.jpg" alt="img" />
            {/* <div class="banner-detail">
              <div class="container">
                <div class="row">
                  <div class="col-12">
                    <div class="banner-detail-inner">
                      <span class="subtitle1">Up to 40% Off</span>
                      <h1 class="banner-title">Men Suit</h1>
                      <div class="subtitle2">
                        <span class="part1">New</span>
                        <span class="part2">Collection</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <div class="sub-banner-part pb-100">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="sub-banner-box">
                <a href="shop.html">
                  <img
                    class="d-none d-md-block"
                    src="/images/h16.jpg"
                    alt="img"
                  />
                  <img
                    class="d-block d-md-none"
                    src="images/sub-responsive-banner1.jpg"
                    alt="img"
                  />
                </a>
              </div>
            </div>
            <div class="col-md-8">
              <div class="row">
                <div class="col-md-8">
                  <div class="sub-banner-box">
                    <a href="shop.html">
                      <img
                        class="d-none d-md-block"
                        src="/images/h2.jpg"
                        alt="img"
                      />
                      <img
                        class="d-block d-md-none"
                        src="images/sub-responsive-banner2.jpg"
                        alt="img"
                      />
                    </a>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="sub-banner-box">
                    <a href="shop.html">
                      <img
                        class="d-none d-md-block th"
                        src="/images/h14.jpg"
                        alt="img"
                      />
                      <img
                        class="d-block d-md-none "
                        src="images/sub-responsive-banner3.jpg"
                        alt="img"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="sub-banner-box">
                    <img
                      class="d-none d-md-block fo"
                      src="images/ban.jpg"
                      alt="img"
                    />
                    <img
                      class="d-block d-md-none"
                      src="images/sub-responsive-banner4.jpg"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}

      {/* Site Services Block Start */}

      <section
        id="services-part"
        class="menu-section services-part position-r pb-100"
      >
        <div class="container">
          <div class="ser-feature-block mb_-30 center-sm">
            <div class="row">
              <div class="col-lg-4 col-12">
                <div class="services-box mb-30">
                  <div class="services-box-inner">
                    <div class="services-icon services1">
                      <img src="images/ser-icon1.svg" alt="img" />
                    </div>
                    <div class="services-detail">
                      <h3 class="ser-title">Free Shipping</h3>
                      <div class="ser-subtitle">Free Shipping in India</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-12">
                <div class="services-box mb-30">
                  <div class="services-box-inner">
                    <div class="services-icon services2">
                      <img src="images/ser-icon2.svg" alt="img" />
                    </div>
                    <div class="services-detail">
                      <h3 class="ser-title">Payment Method</h3>
                      <div class="ser-subtitle">Secure Payment</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-12">
                <div class="services-box mb-30">
                  <div class="services-box-inner">
                    <div class="services-icon services3">
                      <img src="images/ser-icon3.svg" alt="img" />
                    </div>
                    <div class="services-detail">
                      <h3 class="ser-title">Help Center</h3>
                      <div class="ser-subtitle">24/7 Support System</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Site Services Block Start end */}

      {/* product start */}
      <section class="product-section pb-100">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="heading-part text-center mb-30 mb-sm-20">
                <h2 class="main_title">OUR Collection</h2>
              </div>
            </div>
          </div>
          <div class="row">
            {products &&
              products.map((p) => (
                
                <Product  product={p} />
                
              ))}
            ;
          </div>
          <div class="row">
            <div class="col-12">
              <div class="align-center">
                <a href="shop.html" class="btn btn-color">
                  See more Products
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* product end */}
    </>
  )
}

export default Home
