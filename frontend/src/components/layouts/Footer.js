import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
     {/* Newslatter section start */}
	 <section class="newsletter-section align-center ptb-100 n">
	            <div class="container ">
                    <div class="row justify-content-center">
                        <div class="col-xl-7 col-lg-9 col-12">
                            <div class="newsletter-title">
                                <h2 class="main_title" style={{color:"#f70a4e"}}>Sign up for Newsletter </h2>
                                <p>Wants to get latest updates! sign up for Free </p>
                            </div>
                            <div class="newsletter-input">
                                <form>
                                    <div class="form-group m-0">
                                        <input type="email" placeholder="Your email address" required=""/>
                                    </div>
                                    <button type="submit" class="btn btn-color"><span class="d-none d-sm-block">Subscribe</span> <i class="fa fa-send d-block d-sm-none"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
	            </div>
	    </section>
      {/* Newslatter section start end */}
      <footer class="footer-part">
				<div class="container">
					<div class="footer-top ptb-100">
						<div class="mb_-30">
							<div class="row">
								<div class="col-12 col-lg-3 col-md-6">
									<div class="footer-about mb-sm-30">
										<div class="footer-logo">
											<Link to="index.html">
												<img src="images/logo.png" alt="logo"/>
											</Link>
										</div>
									</div>
								</div>
								<div class="col-12 col-lg-3 col-md-6">
									<div class="footer-static-block">
										<span class="opener plus"></span>
										<h3 class="head-three">Information</h3>
										<ul class="footer-menu footer-block-contant">
											<li><Link to="/wholeSale">Contact Us</Link></li>
											<li><Link to="">Brands</Link></li>
											
											<li><Link to="">Returns</Link></li>
											<li><Link to="">Privacy Policy</Link></li>
										</ul>
									</div>
								</div>
								<div class="col-12 col-lg-3 col-md-6">
									<div class="footer-static-block">
										<span class="opener plus"></span>
										<h3 class="head-three">My Account</h3>
										<ul class="footer-menu footer-block-contant">
											<li><Link to="">Order History</Link></li>
											<li><Link to="wishlist.html">Wish List</Link></li>
											<li><Link to="">Newsletter</Link></li>
											
										</ul>
									</div>
								</div>
								<div class="col-12 col-lg-3 col-md-6">
									<div class="footer-static-block">
										<span class="opener plus"></span>
										<h3 class="head-three">Contact us</h3>
										<div class="contact-box footer-block-contant">
				                			<ul>
				                				<li>
				                					<div class="contact-thumb">
				                						<img src="images/address-icon.svg" alt="xpoge"/>
				                					</div>
				                					<div class="contact-box-detail">
				                						<p>xxxxxxxxxxxxxxxxxxxxxxxxxx</p>
				                					</div>
				                				</li>
				                				<li>
				                					<div class="contact-thumb">
				                						<img src="images/phone-icon.svg" alt="xpoge"/>
				                					</div>
				                					<div class="contact-box-detail">
				                						<p>+91 xxxxxxxxx</p>
				                					</div>
				                				</li>
				                				<li>
				                					<div class="contact-thumb">
				                						<img src="images/mail-icon.svg" alt="xpoge"/>
				                					</div>
				                					<div class="contact-box-detail">
				                						<p>xxxxxxxxx</p>
				                					</div>
				                				</li>
				                			</ul>
				                		</div>
				                	</div>
								</div>
							</div>
						</div>
					</div>
					<div class="footer-bottom align-center">
						<div class="row">
							<div class="col-12">
								<div class="w-100">
									<p class="mb-0"> <Link to="https://TemplatesCoder.com/" target="_blank" title="TemplatesCoder">Get in touch</Link></p>
								</div>
							</div>
							<div class="col-12">
								<div class="social-media">
									<ul>
										<li><Link to="https://www.facebook.com/eCraftIndia"><i class="fa fa-facebook"></i></Link></li>
										<li><Link to="https://twitter.com/ecraftindia"><i class="fa fa-twitter"></i></Link></li>
										<li><Link to="https://www.instagram.com/eCraftIndia_/"><i class="fa fa-instagram"></i></Link></li>
										<li><Link to="https://www.youtube.com/channel/UC3hxVCIgQSECZwH_jpwzxMg"><i class="fa fa-youtube"></i></Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
	  </footer>
    </>
  )
}

export default Footer
