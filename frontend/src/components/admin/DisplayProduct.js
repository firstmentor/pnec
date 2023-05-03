import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { GetProduct } from '../../redux/action/Action'

function DisplayProduct() {
  const { products } = useSelector((state) => state.p)
  console.log(products)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetProduct())
  }, [dispatch])
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
                <br></br>
                <div className="dash-right">
                  <table class="table">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Image</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products &&
                        products.map((p) => (
                          <tr>
                            <td>{p._id}</td>
                            <td>{p.name}</td>
                            <td></td>
                            <td>
                              <img src={p.image[0].url} alt="" />
                            </td>
                            <td>
                              <Link
                                to={`/admin/productview/${p._id}`}
                                className="btn btn-info"
                              >
                                view
                              </Link>
                              <Link
                                to={`/admin/productedit/${p._id}`}
                                className="btn btn-success"
                              >
                                Edit
                              </Link>
                            </td>
                          </tr>
                        ))}
                      ;
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DisplayProduct
