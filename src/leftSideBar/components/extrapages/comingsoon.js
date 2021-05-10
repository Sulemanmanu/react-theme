import React, { Component } from 'react'

export default class Comingsoon extends Component {
  render() {
    return (
      <div className="authentication-bg">
        <div className="mt-5 mb-5">
          <div className="container">
            <div className="row">
              <div className="col-12">

                <div className="text-center">
                  <a href="index.html" className="logo">
                    <img src="assets/images/logo-light.png" alt="" height="22" className="logo-light mx-auto" />
                    <img src="assets/images/logo-dark.png" alt="" height="22" className="logo-dark mx-auto" />
                  </a>

                  <h3 className="mt-4">Stay tunned, we're launching very soon</h3>
                  <p className="text-muted">We're making the system more awesome.</p>

                </div>
              </div>
            </div>
            <div className="row mt-5 justify-content-center">
              <div className="col-md-8 text-center">
                <div data-countdown="2021/01/17" className="counter-number"></div>
              </div>
            </div>

          </div>
        </div>

      </div>
    )
  }
}
