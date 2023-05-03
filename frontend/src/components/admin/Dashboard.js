import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
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
                  <h1>Welcome in Dashboard NAME HERE</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard
