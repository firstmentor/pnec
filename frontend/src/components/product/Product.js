import React from 'react'
import { Link } from 'react-router-dom';
// import ReactStars from "react-rating-stars-component";

function Product({product}) {
  return (
    <>
    
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <div class="col-lg-3 col-md-4 col-6">
        <div class="product-item">
          <div class="product-image">
            <div class="new-label">
              <span>New</span>
            </div>
              <Link to={`ProductDetails/${product._id}`}>
               <img className='proimg' src={product.image[0].url} alt="course-avatar" />
               </Link> 
           </div>
          <div class="product-details-outer">
            <div class="product-details">
              <div class="product-title">
              <Link to={`ProductDetails/${product._id}`}>{product.name}</Link>

              </div>
              <div class="price-box">
              <Link to={`ProductDetails/${product._id}`}>
              {`₹${product.price}`}
                  </Link>
                <span class="price">
                  
                </span>
                {/* <del class="price old-price">Rs.7600</del> */}
              </div>
            </div>
            <div class="product-details-btn">
              <ul>
                <li class="icon cart-icon">
                  <Link to={`ProductDetails/${product._id}`}>
                    <span></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
