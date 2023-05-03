import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import { GetProduct, getProductDetail } from '../../redux/action/Action'

function Productview() {
  const { id } = useParams()
  console.log(id)
  const { productDetail } = useSelector((state) => state.pdetail)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductDetail(id))
  }, [dispatch, id])

  return (
    <>
      <div class="ptb-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-6 col-12">
              <div class="align-center mb-md-30">
                <ul id="glasscase" class="gc-start">
                  <li>
                    {productDetail.image &&
                      productDetail.image.map((image) => (
                        // <Carousel.Item key={image.public_id}>
                        <img
                          className="d-block w-100"
                          src={image.url}
                          alt={productDetail.name}
                        />
                      ))}
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-7 col-md-6 col-12">
              <div class="product-detail-main">
                <div class="product-item-details">
                  <h1 class="product-item-name">Name:{productDetail.name} </h1>
                  <br />
                  <div class="items-Description selected">
                    Description:
                    {productDetail.description}
                  </div>
                  <br />
                  <div class="price-box">
                    {' '}
                    <span class="price"></span>
                    <span class="price old-price text-dark">
                      Price:{`₹${productDetail.price}`}
                    </span>
                  </div>
                  <br />
                  <div class="price-box">
                    {' '}
                    <span class="price"></span>
                    <span class="price old-price text-dark">
                      Stock:{productDetail.stock}
                    </span>
                  </div>
                  <br />
                  <div class="price-box">
                    {' '}
                    <span class="price"></span>
                    <span class="price old-price text-dark">
                      NumOfReviews:{productDetail.numOfReviews}
                    </span>
                  </div>
                  <br />
                  <div class="price-box">
                    {' '}
                    <span class="price"></span>
                    <span class="price old-price text-dark">
                      Rating: &nbsp;{productDetail.rating}/5
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Productview
