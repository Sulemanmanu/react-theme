import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div className="authentication-bg">

        <div className="account-pages mt-5 mb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="text-center">
                  <a href="index.html" className="logo">
                    <img src="assets/images/logo-light.png" alt="" height="22" className="logo-light mx-auto" />
                    <img src="assets/images/logo-dark.png" alt="" height="22" className="logo-dark mx-auto" />
                  </a>
                  <p className="text-muted mt-2 mb-4">Responsive Admin Dashboard</p>
                </div>
                <div className="card">

                  <div className="card-body p-4">

                    <div className="text-center mb-4">
                      <h4 className="text-uppercase mt-0">Sign In</h4>
                    </div>

                    <form action="#">

                      <div className="form-group mb-3">
                        <label for="emailaddress">Email address</label>
                        <input className="form-control" type="email" id="emailaddress" required="" placeholder="Enter your email" />
                      </div>

                      <div className="form-group mb-3">
                        <label for="password">Password</label>
                        <input className="form-control" type="password" required="" id="password" placeholder="Enter your password" />
                      </div>

                      <div className="form-group mb-3">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="checkbox-signin" defaultChecked />
                          <label className="custom-control-label" for="checkbox-signin">Remember me</label>
                        </div>
                      </div>

                      <div className="form-group mb-0 text-center">
                        <button className="btn btn-primary btn-block" type="submit"> Log In </button>
                      </div>

                    </form>

                  </div>
                </div>


                <div className="row mt-3">
                  <div className="col-12 text-center">
                    <p> <a href="pages-recoverpw.html" className="text-muted ml-1"><i className="fa fa-lock mr-1"></i>Forgot your password?</a></p>
                    <p className="text-muted">Don't have an account? <a href="pages-register.html" className="text-dark ml-1"><b>Sign Up</b></a></p>
                  </div>
                </div>


              </div>
            </div>

          </div>

        </div>

      </div>
    )
  }
}
