import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { clearErrors, login } from '../../redux/action/UserAction'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom'

export default function Login() {

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
  
	const dispatch = useDispatch()
	const alert = useAlert()
	const history = useNavigate()
  
	const { isAuthenticated, error } = useSelector((state) => state.auth)
  
	useEffect(() => {
	  if (error) {
		alert.error(error)
		dispatch(clearErrors())
	  }
	  if (isAuthenticated) {
		history('/')
	  }
	}, [dispatch, alert, error, isAuthenticated, history])
  
	const submitHandler = (e) => {
	  e.preventDefault()
	  // console.log(name,email,password,confirmpassword)
	  // console.log(image)
	  dispatch(login(email, password))
  
	}

  return (
    <>
    
    <div class="contant">
				<div id="banner-part" class="banner inner-banner">
					<div class="container">
						<div class="bread-crumb-main">
							<h1 class="banner-title">Login</h1>
							<div class="breadcrumb">
			                    <ul class="inline">
			                        <li><a href="index.html">Home</a></li>
			                        <li>Login</li>
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
				                      <h2 class="heading">Customer Login</h2>
				                    </div>
				                  </div>
				                  <div class="col-12">
				                    <div class="form-group">
				                      <label for="login-email">Email address</label>
				                      <input id="login-email" type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} required="" placeholder="Email Address"/>
				                    </div>
				                  </div>
				                  <div class="col-12">
				                    <div class="form-group">
				                      <label for="login-pass">Password</label>
				                      <input id="login-pass" type="password" required="" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your Password"/>
				                    </div>
				                  </div>
				                  <div class="col-12">
				                  	<div class="mb-30 dit w-100">
					                    <div class="check-box left-side mt-15"> 
					                      <span>
					                        <input type="checkbox" name="remember_me" id="remember_me" class="checkbox"/>
					                        <label for="remember_me" class="mb-0">Remember Me</label>
					                      </span>
					                    </div>
					                    <button name="submit" type="submit" class="btn-color right-side">Log In</button>
				                    </div>
				                  </div>
				                  <div class="col-12"> 
				                
				                  	<div class="align-center mt-20">
				                  		<Link title="Forgot Password" class="link forgot-password mtb-20" to="#">Forgot your password?</Link>
				                  	</div>
				                  </div>
				                  <div class="col-12">
				                    <div class="new-account align-center mt-20"> <span>Don't have an account?</span> 
				                    	<Link class="link" title="Create New Account" to="/register">Create New Account</Link> </div>
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
