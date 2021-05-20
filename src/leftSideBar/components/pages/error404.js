import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Error404 extends Component {
 render() {
  return (
   <div>
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

          <div className="text-center">
           <h1 className="text-error">404</h1>
           <h3 className="mt-3 mb-2">Page not Found</h3>
           <p className="text-muted mb-3">It's looking like you may have taken a wrong turn. Don't worry... it happens to
           the best of us. You might want to check your internet connection. Here's a little tip that might
                                            help you get back on track.</p>

           <Link to="/" className="btn btn-danger waves-effect waves-light"><i className="fas fa-home mr-1"></i> Back to Home</Link>
          </div>


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
