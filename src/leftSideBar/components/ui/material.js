import React, { Component } from 'react'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'
import RightSide from '../../../common/home/rightSide'
import Footer from '../../../common/home/footer'

export default class Material extends Component {
 render() {
  return (
   <div>
    <div id="wrapper">

<Topbar/>
<Sidebar/>




     <div className="content-page">
      <div className="content">


       <div className="container-fluid">

        <div className="row">
         <div className="col-12">
          <div className="card">
           <div className="card-body">
            <h4 className="header-title mb-4">New Icons v5.0.45</h4>
            <div className="row icons-list-demo" id="newIcons"> </div>
           </div>
          </div>
          <div className="card">
           <div className="card-body">
            <h4 className="header-title mb-4">All Icons</h4>
            <div className="row icons-list-demo" id="icons"> </div>
           </div>
          </div>
         </div>
        </div>

        <div className="row">
         <div className="col-12">
          <div className="card">

           <div className="card-body">
            <h4 className="header-title mb-4">Size</h4>

            <div className="row icons-list-demo">
             <div className="col-sm-6 col-md-4 col-lg-3">
              <i className="mdi mdi-18px mdi-account"></i> mdi-18px
                                            </div>

             <div className="col-sm-6 col-md-4 col-lg-3">
              <i className="mdi mdi-24px mdi-account"></i> mdi-24px
                                            </div>

             <div className="col-sm-6 col-md-4 col-lg-3">
              <i className="mdi mdi-36px mdi-account"></i> mdi-36px
                                            </div>

             <div className="col-sm-6 col-md-4 col-lg-3">
              <i className="mdi mdi-48px mdi-account"></i> mdi-48px
                                            </div>
            </div>
           </div>
          </div>
         </div>
        </div>


        <div className="row">
         <div className="col-12">
          <div className="card">

           <div className="card-body">
            <h4 className="header-title mb-4">Rotate</h4>

            <div className="row icons-list-demo">
             <div className="col-sm-6 col-md-4 col-lg-3">
              <i className="mdi mdi-rotate-45 mdi-account"></i> mdi-rotate-45
                                            </div>
             <div className="col-sm-6 col-md-4 col-lg-3">
              <i className="mdi mdi-rotate-90 mdi-account"></i> mdi-rotate-90
                                            </div>
             <div className="col-sm-6 col-md-4 col-lg-3">
              <i className="mdi mdi-rotate-135 mdi-account"></i> mdi-rotate-135
                                            </div>
             <div className="col-sm-6 col-md-4 col-lg-3">
              <i className="mdi mdi-rotate-180 mdi-account"></i> mdi-rotate-180
                                            </div>
             <div className="col-sm-6 col-md-4 col-lg-3">
              <i className="mdi mdi-rotate-225 mdi-account"></i> mdi-rotate-225
                                            </div>
             <div className="col-sm-6 col-md-4 col-lg-3">
              <i className="mdi mdi-rotate-270 mdi-account"></i> mdi-rotate-270
                                            </div>
             <div className="col-sm-6 col-md-4 col-lg-3">
              <i className="mdi mdi-rotate-315 mdi-account"></i> mdi-rotate-315
                                            </div>
            </div>
           </div>
          </div>
         </div>
        </div>


        <div className="row">
         <div className="col-12">
          <div className="card">

           <div className="card-body">
            <h4 className="header-title mb-4">Spin</h4>

            <div className="row icons-list-demo">
             <div className="col-sm-6 col-md-4 col-lg-3">
              <i className="mdi mdi-spin mdi-loading"></i> mdi-spin
                                            </div>
             <div className="col-sm-6 col-md-4 col-lg-3">
              <i className="mdi mdi-spin mdi-star"></i> mdi-spin
                                            </div>
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
    {/* <!-- END wrapper --> */}

 <RightSide/>

   </div>
  )
 }
}
