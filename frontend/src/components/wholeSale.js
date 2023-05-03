// import React from 'react'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { contactRegister } from '../redux/action/ContactAction'
import { useAlert } from 'react-alert'
// import { useNavigate } from 'react-router-dom'
import { clearErrors } from '../redux/action/ContactAction'


function WholeSale() {
  const alert = useAlert()
  // const history = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()
  const { isAuthenticated, error } = useSelector((state) => state.auth)
  console.log(isAuthenticated)
  const submitHandler = (e) => {
    e.preventDefault()

    const myForm = new FormData()
    myForm.append('name', name)
    myForm.append('email', email)
    myForm.append('message', message)

    dispatch(contactRegister(myForm))
  }

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors)
    }
    // if (isAuthenticated) {
    //   history('/login')
    // }
  }, [dispatch, alert, error])
  return (
    <>
       
      {/* < class="container"> */}
        {/* <!--<div style="position:relative" align="right"><img src="images/ban2.jpg"></div>--> */}
        <div class="contant">
        <div id="banner-part" class="banner inner-banner">
          <div class="container">
            <div class="bread-crumb-main">
              <h1 class="banner-title">WholeSale enquiry</h1>
              <div class="breadcrumb">
                <ul class="inline">
                  <li><a href="index.html">Home</a></li>
                  <li>Contact us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="contact-part pt-100">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="add-map pb-100">
                  {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.1812836849363!2d144.95343106869794!3d-37.81739907631358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121+King+St%2C+Melbourne+VIC+3000%2C+Australia!5e0!3m2!1sen!2sin!4v1562916623921!5m2!1sen!2sin" height="585" style="border:0;width:100%;" allowfullscreen></iframe> */}
                </div>
                <div class="pb-100">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="contact-box mb-sm-20">
                        <ul>
                          <li>
                            <div class="contact-thumb">
                              <img src="images/address-icon.svg" alt="xpoge"/>
                            </div>
                            <div class="contact-box-detail">
                              <h4 class="contact-title">Visit Office</h4>
                              <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                            </div>
                          </li>
                          
                          <li>
                            <div class="contact-thumb">
                              <img src="images/mail-icon.svg" alt="xpoge"/>
                            </div>
                            <div class="contact-box-detail">
                              <h4 class="contact-title">Email</h4>
                              <p>xxxx@xxxx.com</p>
                            </div>
                          </li>
                          <li>
                            <div class="contact-thumb">
                              <img src="images/phone-icon.svg" alt="xpoge"/>
                            </div>
                            <div class="contact-box-detail">
                              <h4 class="contact-title">Call Us</h4>
                              <p>+91 xxxxxxxxxx</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="heading-part mb-30">
                        <h3>Leave a message</h3>
                      </div>
                      <div class="form-detail">
                      <form onSubmit={submitHandler}class="main-form">
                          <div class="row">
                            <div class="col-lg-4 col-md-6 col-12">
                                <div class="form-group">
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
                            
                              <div class="col-lg-4 col-12">
                                <div class="form-group">
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
                                  <textarea placeholder="Message" rows="4" required="" onChange={(e) => setMessage(e.target.value)}> 
                                  
                                  </textarea>
                              </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn-color">Send Massage</button>
                              </div>
                          </div>
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
    
    </>
  )
}

export default WholeSale
