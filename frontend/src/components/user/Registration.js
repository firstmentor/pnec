// import React from 'react';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../redux/action/UserAction'
import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom'
import { clearErrors } from '../../redux/action/UserAction'

function Registration() {
  const alert = useAlert()
  const history = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [avatar, setImage] = useState('')
  const [cpassword, setCpassword] = useState('')
  const dispatch = useDispatch()
  const { isAuthenticated, error } = useSelector((state) => state.auth)
  console.log(isAuthenticated)
  const submitHandler = (e) => {
    e.preventDefault()
    // console.log(name, email, password, cpassword)
    // console.log(image)

    const myForm = new FormData()
    myForm.append('name', name)
    myForm.append('email', email)
    myForm.append('password', password)
    myForm.append('cpassword', cpassword)
    myForm.append('avatar', avatar)

    dispatch(register(myForm))
  }

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors)
    }
    if (isAuthenticated) {
      history('/login')
    }
  }, [dispatch, alert, error, isAuthenticated, history])

  return (
    <>
      <div class="contant">
        <div id="banner-part" class="banner inner-banner">
          <div class="container">
            <div class="bread-crumb-main">
              <h1 class="banner-title">Register</h1>
              <div class="breadcrumb">
                <ul class="inline">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Register</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="ptb-100">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-6 col-lg-8 col-md-8 ">
                <form onSubmit={submitHandler} class="main-form full">
                  <div class="row">
                    <div class="col-12 mb-20">
                      <div class="heading-part align-center">
                        <h2 class="heading">Create account</h2>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="name">
                          Username <span>**</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={name}
                          placeholder="Enter Username"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-group">
                        <label for="email-id">
                          Email Address <span>**</span>
                        </label>
                        <input
                          id="email-id"
                          name="email"
                          value={email}
                          type="text"
                          placeholder="Email address..."
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="pass">
                          Password <span>**</span>{' '}
                        </label>
                        <input
                          name="password"
                          value={password}
                          id="password"
                          type="password"
                          placeholder="Enter password..."
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="pass">
                          Re-enter Password <span>**</span>
                        </label>
                        <input
                          name="cpassword"
                          value={cpassword}
                          id="pass"
                          type="password"
                          placeholder="Enter password..."
                          onChange={(e) => setCpassword(e.target.value)}
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
                    <div class="col-12">
                      <div class="mb-30 dit w-100">
                        <div class="check-box left-side mt-15">
                          <span>
                            <input
                              type="checkbox"
                              name="remember_me"
                              id="remember_me"
                              class="checkbox"
                            />
                            <label for="remember_me" class="mb-0">
                              Remember Me
                            </label>
                          </span>
                        </div>
                        <button
                          name="submit"
                          type="submit"
                          class="btn-color right-side"
                        >
                          Sign up
                        </button>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="new-account align-center mt-20">
                        {' '}
                        <span>Already have an account with us</span>
                        <a class="link" title="Login Here" href="/login">
                          Login Here
                        </a>{' '}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Registration
