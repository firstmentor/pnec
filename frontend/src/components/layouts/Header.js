import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../redux/action/UserAction'
import { useAlert } from 'react-alert'

function Header() {
  const dispatch = useDispatch()
  const alert = useAlert()

  const { user, loading } = useSelector((state) => state.auth)

  const { cartItems } = useSelector((state) => state.cart)
  console.log(cartItems)
  console.log(user)

  const Logout = () => {
    dispatch(logout())
    alert.success('LOGOUT SUCCESSFULLY')
  }

  return (
    <>
      <header id="header">
        <div className="container position-r">
          <div className="row m-0">
            <div className="col-lg-3 col-md-4 col-4 p-0">
              <div className="navbar-header">
                <Link className="navbar-brand page-scroll" href="index.html">
                  <img className="logo" alt="logo" src="/images/logo.png" />
                </Link>
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-8 p-0 position-initial">
              <div className="right-side">
                <button
                  data-target=".navbar-collapse"
                  data-toggle="collapse"
                  className="navbar-toggle d-block d-lg-none d-xl-none"
                  type="button"
                >
                  <i className="fa fa-bars"></i>
                </button>
                <div className="overlay"></div>
                <div id="menu" className="navbar-collapse collapse">
                  <ul className="nav navbar-nav">
                    <li className="level">
                      <Link to="/" className="nav-link">
                        HOME
                      </Link>
                    </li>
                    <li className="level">
                      <Link to="about" className="nav-link">
                        ABOUT
                      </Link>
                    </li>
                    <li className="level">
                      <Link to="index.html" className="nav-link">
                        SHOP
                      </Link>
                    </li>
                    <li className="level">
                      <Link to="wholesale" className="nav-link">
                        WHOLESALE
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="header-right-link">
                  <ul>
                    <li className="search-box">
                      <Link href="/">
                        <span></span>
                      </Link>
                    </li>
                    <li class="account-icon">
                      <a href="/">
                        <span></span>
                      </a>
                      <div class="header-link-dropdown account-link-dropdown">
                        <ul class="link-dropdown-list">
                          {user ? (
                            <li> 
                              {' '}
                              <span class="dropdown-title">
                                {user && user.name}
                              </span>
                              {
                                user && user.role !== 'admin' ? (

                                  <li>
                                    <Link to="login.html">orders</Link>
                                  </li>



                                ) : (
                                  <li>
                                    <Link to="/admin/dashboard">DASHBOARD</Link>
                                  </li>
                                )
                              }
                              <li>
                                <Link to="/profile">profile</Link>
                              </li>
                              <li>
                                <Link to="/"
                                  onClick={Logout}>logout</Link>
                              </li>

                            </li>
                          ) : (
                            !loading && <Link to="/login">login</Link>
                            
                          )}
                        </ul>
                      </div>
                    </li>
                    {/* <li>
                      
                      {user ? (
                        <div class="btn-group">
                          
                          <button
                            type="button"
                            class="btn btn-sm  dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            {user && user.name}
                          </button>
                          <div className="header-link-dropdown account-link-dropdown">
                            {user && user.role !== 'admin' ? (
                              <li>
                                <Link to="/" class="dropdown-item">
                                  ORDERS
                                </Link>
                              </li>
                            ) : (
                              <li>
                                <Link to="/" class="dropdown-item">
                                  DASHBOARD
                                </Link>
                              </li>
                            )}

                            <hr class="dropdown-divider" />
                            <li>
                              <Link to="/profile" class="dropdown-item">
                                PROFILE
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/"
                                onClick={Logout}
                                class="dropdown-item"
                              >
                                LOGOUT
                              </Link>
                            </li>
                          </div>
                        </div>
                      ) : (
                        !loading && (
                          <Link
                            to="/login"
                            className="nav-link text-dark fw-bold"
                          >
                            Login
                          </Link>
                        )
                      )}
                    </li> */}

                    {/* /cart  */}

                    <li className="cart-icon">
                      <Link to="/cart">
                        {' '}
                        <span>
                          {' '}
                          {' '}
                        </span>{' '}
                      </Link>
                      
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
