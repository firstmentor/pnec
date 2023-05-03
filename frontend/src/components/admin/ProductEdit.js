import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetail, updateProduct } from '../../redux/action/Action'
import { useParams } from 'react-router-dom'
function ProductEdit() {
  const { id } = useParams()

  const dispatch = useDispatch()

  const { productDetail } = useSelector((state) => state.pdetail)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const [numOfReviews, setNumOfReviews] = useState('')
  const [rating, setRating] = useState('')
  const [image, setImage] = useState('')

  const submitProductHandler = (e) => {
    e.preventDefault()
    console.log(name, description)
    console.log(image)
    const myForm = new FormData()
    myForm.append('name', name)
    myForm.append('description', description)
    myForm.append('price', price)
    myForm.append('stock', stock)
    myForm.append('numOfReviews', numOfReviews)
    myForm.append('rating', rating)
    myForm.append('image', image)
    dispatch(updateProduct(myForm))
  }

  useEffect(() => {
    dispatch(getProductDetail(id))
  }, [dispatch, id])

  return (
    <>
      <div>
        <br />
        <br />

        <div class="container rounded bg-white mt-5 mb-5">
          <div class="row">
            <div class="col-md-4 border-right">
              <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                <br />
                <br />
                <br />

                {productDetail.image &&
                  productDetail.image.map((image) => (
                    <img
                      className="img-fluid m mt-5"
                      src={image.url}
                      alt={productDetail.name}
                    />
                  ))}
                {/* <img
                  className="img-fluid m mt-5"
                //   src={productDetail.image[0].url}
                  alt={productDetail && productDetail.name}
                /> */}
                <span
                  class="font-weight-bold"
                  style={{
                    textShadow: '0 0 3px #FF0000, 0 0 5px #0000FF',
                    fontSize: '22px',
                  }}
                >
                  {' '}
                  {/* {user && user.name} */}
                </span>
                <span class="text-black-50">{/* {user && user.email} */}</span>
                <span> </span>
              </div>
            </div>
            <div class="col-md-8 border-right">
              <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4
                    class="text-center"
                    style={{ fontSize: '30px', fontWeight: 'bold' }}
                  >
                    Edit Product
                  </h4>
                </div>
                <div class="row mt-2">
                  <div class="col-md-12">
                    <label class="labels font-weight-bold">Name</label>
                    <input
                      type="text"
                      class="form-control font-weight-bold "
                      placeholder="Enter Name"
                      value={productDetail && productDetail.name}
                    />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-12">
                    <label class="labels font-weight-bold">Description</label>
                    <input
                      type="text"
                      class="form-control font-weight-bold"
                      placeholder="Description"
                      value={productDetail && productDetail.description}
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels font-weight-bold">Price</label>
                    <input
                      type="text"
                      class="form-control font-weight-bold"
                      placeholder="Price"
                      value={productDetail && productDetail.price}
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels font-weight-bold">Stock</label>
                    <input
                      type="text"
                      class="form-control font-weight-bold"
                      placeholder="Stock"
                      value={productDetail && productDetail.stock}
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels font-weight-bold">NumOfReviews</label>
                    <input
                      type="text"
                      class="form-control font-weight-bold"
                      placeholder="NumOfReviews"
                      value={productDetail && productDetail.numOfReviews}
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels font-weight-bold">Rating</label>
                    <input
                      type="text"
                      class="form-control font-weight-bold"
                      placeholder="Rating"
                      value={productDetail && productDetail.rating}
                    />
                  </div>
                </div>
                {/* ------------------------------------------------------------------------------------------------- */}
                <div class="mt-5 text-center">
                  <button
                    type="button"
                    class="btn btn-primary profile-button"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Update Product
                  </button>

                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <form onSubmit={submitProductHandler}>
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              Update Product
                            </h5>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <div class="col-md-12 text-left">
                              <label class=" text-right  font-weight-bold ">
                                Name
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
                            <div class="col-md-12 text-left ">
                              <label for="email" class="  font-weight-bold">
                                Description
                              </label>
                              <input
                                type="text"
                                class="form-control font-weight-bold"
                                placeholder="Description"
                                value={description}
                                name="description"
                                onChange={(e) => setDescription(e.target.value)}
                              />
                            </div>
                            <div class="col-md-12 text-left ">
                              <label for="email" class="  font-weight-bold">
                                Price
                              </label>
                              <input
                                type="number"
                                class="form-control font-weight-bold"
                                placeholder="Price"
                                value={price}
                                name="price"
                                onChange={(e) => setPrice(e.target.value)}
                              />
                            </div>
                            <div class="col-md-12 text-left ">
                              <label for="email" class="  font-weight-bold">
                                Stock
                              </label>
                              <input
                                type="number"
                                class="form-control font-weight-bold"
                                placeholder="Stock"
                                value={stock}
                                name="stock"
                                onChange={(e) => setStock(e.target.value)}
                              />
                            </div>
                            <div class="col-md-12 text-left ">
                              <label for="email" class="  font-weight-bold">
                                NumOfReviews
                              </label>
                              <input
                                type="number"
                                class="form-control font-weight-bold"
                                placeholder="NumOfReviews"
                                value={numOfReviews}
                                name="numOfReviews"
                                onChange={(e) =>
                                  setNumOfReviews(e.target.value)
                                }
                              />
                            </div>

                            <div class="col-md-12 text-left ">
                              <label for="email" class="  font-weight-bold">
                                Rating
                              </label>
                              <input
                                type="number"
                                class="form-control font-weight-bold"
                                placeholder="Rating"
                                value={rating}
                                name="rating"
                                onChange={(e) => setRating(e.target.value)}
                              />
                            </div>

                            <div class="col-md-12 text-left">
                              <label class="  font-weight-bold ">Image</label>
                              <input
                                type="file"
                                class="form-control font-weight-bold"
                                placeholder="Image"
                                name="image"
                                onChange={(e) => setImage(e.target.files[0])}
                              />
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="submit"
                              class="btn btn-primary profile-button"
                            >
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                  {/* ---------------------------------------------- */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductEdit
