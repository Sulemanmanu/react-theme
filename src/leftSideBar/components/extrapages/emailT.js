import React, { Component } from 'react'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'
import RightSide from '../../../common/home/rightSide'
import Footer from '../../../common/home/footer'

export default class Emailtemplate extends Component {
 render() {
  return (
   <div>
   <div id="wrapper">
    <Topbar/>
    <Sidebar/>

    <div class="content-page">
     <div class="content">

      <div class="container-fluid">

       <div class="row">
        <div class="col-md-12">
         <div class="card-box">
          <div class="row">
           <div class="col-md-4">
            <h4 class="mb-3 header-title">Basic action email</h4>
            <a href="email-templates-action.html" target="_blank"> <img src="assets/images/email/1.png" class="img-fluid" alt=""/> </a>
                                        </div>
            <div class="col-md-4">
             <h4 class="mb-3 header-title">Email alert</h4>
             <a href="email-templates-alert.html" target="_blank"> <img src="assets/images/email/2.png" class="img-fluid" alt=""/> </a>
                                        </div>
             <div class="col-md-4">
              <h4 class="mb-3 header-title">Billing email</h4>
              <a href="email-templates-billing.html" target="_blank"> <img src="assets/images/email/3.png" class="img-fluid" alt=""/> </a>
                                        </div>
             </div>
            </div>
           </div>
          </div>

         </div>

        </div>

       </div>
       <Footer/>
       </div>
       <RightSide/>
       </div>

        )
    }
}
