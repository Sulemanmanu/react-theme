import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Confirme extends Component {
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
        <div className="card text-center">

         <div className="card-body p-4">

          <div className="mb-4">
           <h4 className="text-uppercase mt-0">Confirm Email</h4>
          </div>
          <img src="assets/images/mail_confirm.png" alt="img" width="86" className="mx-auto d-block" />

          <p className="text-muted font-14 mt-2"> A email has been send to <b>youremail@domain.com</b>.
                                    Please check for an email from company and click on the included link to
                                    reset your password. </p>

          <Link to="/dashboard" className="btn btn-block btn-pink waves-effect waves-light mt-3">Back to Home</Link>

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
