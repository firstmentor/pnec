import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatePassword } from '../../../redux/action/UserAction'
import { updateProfile } from '../../../redux/action/UserAction'

function Profile() {
  const dispatch = useDispatch()

  const [oldpassword, setOldpassword] = useState('')
  const [newpassword, setNewpassword] = useState('')
  const [confirmPassword, setConfirmpassword] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [avatar, setAvatar] = useState('')

  const submitHandler = (e) => {
    // e.preventDefault()
    console.log(oldpassword,newpassword)

    const myForm = new FormData()
    myForm.append('oldpassword', oldpassword)
    myForm.append('newpassword', newpassword)
    myForm.append('confirmPassword', confirmPassword)
    
    dispatch(updatePassword(myForm))
  }
  const submitProfileHandler =(e)=>{
    console.log(avatar)
    e.preventDefault()
    const myForm = new FormData()
    myForm.append('name', name)
    myForm.append('email', email)
    myForm.append('avatar', avatar)
    dispatch(updateProfile(myForm))
  }
  const { user } = useSelector((state) => state.auth)

  return (
    <div>
      <br />
      <br />

      <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">
          <div class="col-md-4 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="img-fluid m"
                src={user && user.avatar ? user.avatar.url : 'user'}
                alt={user && user.name}
              />
              <span
                class="font-weight-bold"
                style={{
                  textShadow: '0 0 3px #FF0000, 0 0 5px #0000FF',
                  fontSize: '22px',
                }}
              >
                {' '}
                {user && user.name}
              </span>
              <span class="text-black-50"> {user && user.email}</span>
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
                  Profile Settings
                </h4>
              </div>
              <div class="row mt-2">
                <div class="col-md-12">
                  <label class="labels font-weight-bold">Name</label>
                  <input
                    type="text"
                    class="form-control font-weight-bold "
                    placeholder="Enter Name"
                    value={user && user.name}
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels font-weight-bold">Email ID</label>
                  <input
                    type="text"
                    class="form-control font-weight-bold"
                    placeholder="Enter Email Id"
                    value={user && user.email}
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels font-weight-bold">Role</label>
                  <input
                    type="text"
                    class="form-control font-weight-bold"
                    placeholder="User Role"
                    value={user && user.role}
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
                  Update Profile
                </button>

                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <form onSubmit={submitProfileHandler}>
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Update Profile
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
                            Email
                          </label>
                          <input
                            type="email"
                            class="form-control font-weight-bold"
                            placeholder="Email"
                            value={email}
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>

                        <div class="col-md-12 text-left">
                          <label class="  font-weight-bold ">Avatar</label>
                          <input
                            type="file"
                            class="form-control font-weight-bold"
                            placeholder="Avatar"
                            
                            name="avatar"
                            onChange={(e) => setAvatar(e.target.files[0])}
                          />
                        </div>
                      </div>
                      <div class="modal-footer">
                        
                        <button
                          type="submit"
                          class="btn btn-primary profile-button"
                        >
                          Save changes22
                        </button>
                      </div>
                    </div>
                  </div>
                  </form>
                </div>

                {/* ---------------------------------------------- */}
                <span className="ml-5">
                  <button
                    type="button"
                    class="btn btn-primary profile-button"
                    data-toggle="modal"
                    data-target="#exampleModal1"
                  >
                    Change Password
                  </button>

                  <div
                    class="modal fade"
                    id="exampleModal1"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <form onClick={submitHandler} method="post">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel1">
                              Change Password
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
                              <label class=" font-weight-bold">
                                Old Password
                              </label>
                              <input
                                type="password"
                                class="form-control font-weight-bold "
                                placeholder="Old Password"
                                value={oldpassword}
                                name="oldpassword"
                                onChange={(e) => setOldpassword(e.target.value)}
                              />
                            </div>{' '}
                            <div class="col-md-12 text-left">
                              <label class=" font-weight-bold">
                                New Password
                              </label>
                              <input
                                type="password"
                                class="form-control font-weight-bold "
                                placeholder="New Password"
                                value={newpassword}
                                name="newpassword"
                                onChange={(e) => setNewpassword(e.target.value)}
                              />
                            </div>
                            <div class="col-md-12 text-left">
                              <label class=" font-weight-bold">
                                Comfirm Password
                              </label>
                              <input
                                type="password"
                                class="form-control font-weight-bold "
                                placeholder="New Password"
                                value={confirmPassword}
                                name="confirmPassword"
                                onChange={(e) => setConfirmpassword(e.target.value)}
                              />
                            </div>
                          </div>
                          <div class="modal-footer">
                           
                            <button
                              type="submit"
                              class="btn btn-primary profile-button"
                            >
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </span>
                {/* ---------------------------------------------- */}
              </div>
            </div>
          </div>
          {/* <div class="col-md-4">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center experience">
                <span>Edit Experience</span>
                <span class="border px-3 p-1 add-experience">
                  <i class="fa fa-plus"></i>&nbsp;Experience
                </span>
              </div>
              <br />
              <div class="col-md-12">
                <label class="labels">Experience in Designing</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="experience"
                  value=""
                />
              </div>{" "}
              <br />
              <div class="col-md-12">
                <label class="labels">Additional Details</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="additional details"
                  value=""
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Profile
