import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createProduct } from '../../redux/action/Action'

function Createproduct() {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const [numOfReviews, setNumOfReviews] = useState('')
  const [image, setImage] = useState('')

  const submitHandlerProduct = (e) => {
    // console.log('hello')
    e.preventDefault()

    console.log(name, description, price, stock, numOfReviews)
    console.log(image)

    const myForm = new FormData()
    myForm.append('name', name)
    myForm.append('description', description)
    myForm.append('price', price)
    myForm.append('stock', stock)
    myForm.append('numOfReviews', numOfReviews)
    myForm.append('image', image)
    // console.log(myForm)
    dispatch(createProduct(myForm))
    console.log(myForm)
  }
  return (
    <>
    <br></br>
      <br></br>
      <br></br>
      <section className="dashboard-wrap mtb-40">
        <div className="container">
          <div className="body-content">
            <div className="row">
              <div className="col-md-3">
                <div className="dash-left">
                  <ul>
                    <li className="active">
                      <Link to="/admin/dashboard" class="active">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link to="/admin/createproduct">Create Product</Link>
                    </li>
                    <li>
                      <Link to="/admin/displayproduct">Display Product</Link>
                    </li>
                    <li>
                      <Link to="/admin/display_contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/logout">Logout</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-9">
                <div className="dash-right">
                  
                <div class="ptb-100">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8 col-md-8 ">
              <form onSubmit={submitHandlerProduct} class="main-form full">
                <div class="row">
                  <div class="col-12 mb-20">
                    <div class="heading-part align-center">
                      <h2 class="heading">Create account</h2>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label for="name">
                        NAME <span>**</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={name}
                        placeholder="NAME"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-group">
                      <label>
                        DESCRIPTION <span>**</span>
                      </label>
                      <input
                        type="text"
                        name="description"
                        value={description}
                        placeholder="DESCRIPTION"
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label>
                        price <span>**</span>{' '}
                      </label>
                      <input
                        type="number"
                        name="price"
                        value={price}
                        placeholder="price"
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label>
                        stock <span>**</span>{' '}
                      </label>
                      <input
                        type="number"
                        name="stock"
                        value={stock}
                        placeholder="stock"
                        onChange={(e) => setStock(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label>
                        numOfReviews <span>**</span>{' '}
                      </label>
                      <input
                        type="number"
                        name="numOfReviews"
                        value={numOfReviews}
                        placeholder="numOfReviews"
                        onChange={(e) => setNumOfReviews(e.target.value)}
                      />
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-group">
                      <label for="img">
                        Upload Image <span>**</span>
                      </label>
                      <input
                        id="img"
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    </div>
                  </div>
                </div>
                <button className="btn btn-info" type="submit">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
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

export default Createproduct
