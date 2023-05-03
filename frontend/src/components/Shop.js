import React from 'react'

function Shop() {
  return (
    <>
      {/* <!-- Product list contant start --> */}
			<div class="contant">
				<div id="banner-part" class="banner inner-banner">
					<div class="container">
						<div class="bread-crumb-main">
							<h1 class="banner-title">Shop</h1>
							<div class="breadcrumb">
			                    <ul class="inline">
			                        <li><a href="index.html">Home</a></li>
			                        <li>Shop</li>
			                    </ul>
			                </div>
		                </div>
					</div>
				</div>
				<div class="ptb-100">
					<div class="container">
						<div class="row">
							<div class="col-12 col-lg-4 col-xl-3">
								<div class="sidebar mb-md-30">
	                                <div class="sidebar-category sidebar-default">
	                                    <div class="category-content">
                                            <h2 class="cat-title">Categories</h2>
                                            <ul class="pl-0 mb-0">
                                                <li><a href="/">Men</a></li>
                                                <li><a href="/">Women</a></li>
                                                <li><a href="/">Juniors</a></li>
                                                <li><a href="/">Accessories</a></li>
                                            </ul>
	                                    </div>
	                                </div>
	                                {/* <div class="sidebar-default">
	                                    <div class="category-content">
	                                        <h2 class="cat-title">Filter By</h2>
	                                        <a class="btn btn-color small btn-filter mb-20" href="/"><i class="fa fa-close"></i><span>Clear all</span></a>
	                                        <div class="mb-20">
						                    	<div class="inner-title">Types</div>
							                    <ul>
							                        <li>
							                          <div class="check-box"> 
							                            <span>
							                              <input type="checkbox" class="checkbox" id="type1" name="type1"/>
							                              <label for="type1">Top <span>(05)</span></label>
							                            </span>
							                          </div>
							                        </li>
							                        <li>
							                          <div class="check-box"> 
							                            <span>
							                              <input type="checkbox" class="checkbox" id="type2" name="type2"/>
							                              <label for="type2">T-shirt <span>(02)</span></label>
							                            </span>
							                          </div>
							                        </li>
							                        <li>
							                          <div class="check-box"> 
							                            <span>
							                              <input type="checkbox" class="checkbox" id="type3" name="type3"/>
							                              <label for="type3">Shirt <span>(07)</span></label>
							                            </span>
							                          </div>
							                        </li>
							                        <li>
							                          <div class="check-box"> 
							                            <span>
							                              <input type="checkbox" class="checkbox" id="type4" name="type4"/>
							                              <label for="type4">Jeans <span>(03)</span></label>
							                            </span>
							                          </div>
							                        </li>
							                    </ul>
						                    </div>
						                    <div class="mb-20">
						                    	<div class="inner-title">Price</div>
							                    <ul>
							                        <li>
							                          <div class="check-box"> 
							                            <span>
							                              <input type="checkbox" class="checkbox" id="price1" name="price1"/>
							                              <label for="price1">$68.00 - $72.00 <span>(02)</span></label>
							                            </span>
							                          </div>
							                        </li>
							                        <li>
							                          <div class="check-box"> 
							                            <span>
							                              <input type="checkbox" class="checkbox" id="price2" name="price2"/>
							                              <label for="price2">$86.00 - $89.00 <span>(13)</span></label>
							                            </span>
							                          </div>
							                        </li>
							                        <li>
							                          <div class="check-box"> 
							                            <span>
							                              <input type="checkbox" class="checkbox" id="price3" name="price3"/>
							                              <label for="price3">$99.00 - $103.00 <span>(08)</span></label>
							                            </span>
							                          </div>
							                        </li>
							                        <li>
							                          <div class="check-box"> 
							                            <span>
							                              <input type="checkbox" class="checkbox" id="price4" name="price4"/>
							                              <label for="price4">$104.00 - $108.00 <span>(04)</span></label>
							                            </span>
							                          </div>
							                        </li>
							                        <li>
							                          <div class="check-box"> 
							                            <span>
							                              <input type="checkbox" class="checkbox" id="price5" name="price5"/>
							                              <label for="price5">$109.00 - $113.00 <span>(09)</span></label>
							                            </span>
							                          </div>
							                        </li>
							                    </ul>
						                    </div>
	                                        <div class="mb-20">
						                    	<div class="inner-title">Brand</div>
							                    <ul>
							                        <li>
							                          <div class="check-box"> 
							                            <span>
							                              <input type="checkbox" class="checkbox" id="brand1" name="brand1"/>
							                              <label for="brand1">Puma <span>(02)</span></label>
							                            </span>
							                          </div>
							                        </li>
							                        <li>
							                          <div class="check-box"> 
							                            <span>
							                              <input type="checkbox" class="checkbox" id="brand2" name="brand2"/>
							                              <label for="brand2">Roadster <span>(13)</span></label>
							                            </span>
							                          </div>
							                        </li>
							                        <li>
							                          <div class="check-box"> 
							                            <span>
							                              <input type="checkbox" class="checkbox" id="brand3" name="brand3"/>
							                              <label for="brand3">Here&amp;Now <span>(08)</span></label>
							                            </span>
							                          </div>
							                        </li>
							                        <li>
							                          <div class="check-box"> 
							                            <span>
							                              <input type="checkbox" class="checkbox" id="brand4" name="brand4"/>
							                              <label for="brand4">DressBerry <span>(04)</span></label>
							                            </span>
							                          </div>
							                        </li>
							                        <li>
							                          <div class="check-box"> 
							                            <span>
							                              <input type="checkbox" class="checkbox" id="brand5" name="brand5"/>
							                              <label for="brand5">John Players <span>(09)</span></label>
							                            </span>
							                          </div>
							                        </li>
							                    </ul>
						                    </div>
						                    <div class="">
						                    	<div class="inner-title">Color</div>
							                    <ul>
							                        <li>
							                          <div class="check-box"> 
							                            <span>
							                              <input type="checkbox" class="checkbox" id="color1" name="color1"/>
							                              <label for="color1" class="orange">Orange</label>
							                            </span>
							                          </div>
							                        </li>
							                        <li>
							                          <div class="check-box"> 
							                            <span>
							                              <input type="checkbox" class="checkbox" id="color2" name="color2"/>
							                              <label for="color2" class="sky-blue">Sky Blue</label>
							                            </span>
							                          </div>
							                        </li>
							                        <li>
							                          <div class="check-box"> 
							                            <span>
							                              <input type="checkbox" class="checkbox" id="color3" name="color3"/>
							                              <label for="color3" class="black">Black</label>
							                            </span>
							                          </div>
							                        </li>
							                        <li>
							                          <div class="check-box"> 
							                            <span>
							                              <input type="checkbox" class="checkbox" id="color4" name="color4"/>
							                              <label for="color4" class="green">Green</label>
							                            </span>
							                          </div>
							                        </li>
							                        <li>
							                          <div class="check-box"> 
							                            <span>
							                              <input type="checkbox" class="checkbox" id="color5" name="color5"/>
							                              <label for="color5" class="pink">Pink</label>
							                            </span>
							                          </div>
							                        </li>
							                    </ul>
						                    </div>
	                                    </div>
	                                </div> */}
	                                <div class="sidebar-default sidebar-banner d-none d-lg-block">
                                		<link href="">
                                			<img src="images/sidebar-banner.jpg" alt="Xpoge"/>
                                		</link>
	                                </div>
	                                <div class="sidebar-default">
	                                    <div class="sidebar-product">
	                                        <h2 class="cat-title">Latest products</h2>
	                                        <ul>
								                <li>
								                    <div class="pro-media"> <a href="product-page.html"><img alt="Xpoge" src="images/1.jpg"/></a> </div>
								                    <div class="pro-detail-info"> <a href="product-page.html" class="product-title">Women's Cotton Plain T-Shirts</a>
								                      <div class="price-box">
								                      	<span class="price">$65.23</span>
								                      	<del class="price old-price">$70.00</del>
								                      </div>
								                      <div class="cart-link">
								                        <form>
								                          <button title="Add to Cart">Add To Cart</button>
								                        </form>
								                      </div>
								                    </div>
								                </li>
								                <li>
								                    <div class="pro-media"> <a href="product-page.html"><img alt="T-shirt" src="images/2.jpg"/></a> </div>
								                    <div class="pro-detail-info"> <a href="product-page.html" class="product-title">Men's Printed Regular Shirt</a>
								                      <div class="price-box"> <span class="price">$80.00</span> </div>
								                      <div class="cart-link">
								                        <form>
								                          <button title="Add to Cart">Add To Cart</button>
								                        </form>
								                      </div>
								                    </div>
								                </li>
								                <li>
								                    <div class="pro-media"> <a href="product-page.html"><img alt="T-shirt" src="images/3.jpg"/></a> </div>
								                    <div class="pro-detail-info"> <a href="product-page.html" class="product-title">Black African Print</a>
								                      <div class="price-box"> <span class="price">$80.00</span> </div>
								                      <div class="cart-link">
								                        <form>
								                          <button title="Add to Cart">Add To Cart</button>
								                        </form>
								                      </div>
								                    </div>
								                </li>
							                </ul>
	                                    </div>
	                                </div>
		                        </div>
							</div>
							<div class="col-12 col-lg-8 col-xl-9">
								<div class="shorting mb-30">
						            <div class="row">
						              <div class="col-lg-6">
						                <div class="view">
						                  <div class="list-types grid active "> <a href="shop.html">
						                    <div class="grid-icon list-types-icon"></div>
						                    </a> </div>
						                  <div class="list-types list"> <a href="shop-list.html">
						                    <div class="list-icon list-types-icon"></div>
						                    </a> </div>
						                </div>
						                
						              </div>
						              <div class="col-lg-6">
						                <div class="show-item right-side float-left-md"> <span>Show</span>
						                  <div class="select-item">
						                    <select>
						                      <option value="" selected="selected">24</option>
						                      <option value="">12</option>
						                      <option value="">6</option>
						                    </select>
						                  </div>
						                  <span>Per Page</span>
						                  <div class="compare float-right-sm"> <a href="/" class="btn btn-color">Compare (0)</a> </div>
						                </div>
						              </div>
						            </div>
						        </div>
								<div class="product-section grid-view">
									<div class="row">
					                	
					                </div>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Product list contant end --> */}
    </>
  )
}

export default Shop
