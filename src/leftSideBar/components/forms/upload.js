import React, { Component } from 'react'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'
import RightSide from '../../../common/home/rightSide'
import Footer from '../../../common/home/footer'

export default class Upload extends Component {
 render() {
  return (
   <div>
    <div id="wrapper">
     <Topbar />
     <Sidebar />

     <div className="content-page">
      <div className="content">

       {/* <!-- Start Content--> */}
       <div className="container-fluid">

        <div className="row">
         <div className="col-sm-12">
          <div className="card-box">

           <div className="dropdown float-right">
            <a href="#" className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
             <i className="mdi mdi-dots-vertical"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right">

             <a href="javascript:void(0);" className="dropdown-item">Action</a>

             <a href="javascript:void(0);" className="dropdown-item">Another action</a>

             <a href="javascript:void(0);" className="dropdown-item">Something else</a>

             <a href="javascript:void(0);" className="dropdown-item">Separated link</a>
            </div>
           </div>

           <h4 className="header-title mt-0 mb-3">Default</h4>

           <input type="file" className="dropify" data-height="300" />
          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-md-4">
          <div className="card-box">

           <div className="dropdown float-right">
            <a href="#" className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
             <i className="mdi mdi-dots-vertical"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right">

             <a href="javascript:void(0);" className="dropdown-item">Action</a>

             <a href="javascript:void(0);" className="dropdown-item">Another action</a>

             <a href="javascript:void(0);" className="dropdown-item">Something else</a>

             <a href="javascript:void(0);" className="dropdown-item">Separated link</a>
            </div>
           </div>

           <h4 className="header-title mt-0 mb-3">Default File</h4>

           <input type="file" className="dropify" data-default-file="assets/images/gallery/1.jpg" />
          </div>
         </div>

         <div className="col-md-4">
          <div className="card-box">

           <div className="dropdown float-right">
            <a href="#" className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
             <i className="mdi mdi-dots-vertical"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right">

             <a href="javascript:void(0);" className="dropdown-item">Action</a>

             <a href="javascript:void(0);" className="dropdown-item">Another action</a>

             <a href="javascript:void(0);" className="dropdown-item">Something else</a>

             <a href="javascript:void(0);" className="dropdown-item">Separated link</a>
            </div>
           </div>

           <h4 className="header-title mt-0 mb-3">Disabled the input</h4>

           <input type="file" className="dropify" disabled="disabled" />
          </div>
         </div>

         <div className="col-md-4">
          <div className="card-box">

           <div className="dropdown float-right">
            <a href="#" className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
             <i className="mdi mdi-dots-vertical"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right">

             <a href="javascript:void(0);" className="dropdown-item">Action</a>

             <a href="javascript:void(0);" className="dropdown-item">Another action</a>

             <a href="javascript:void(0);" className="dropdown-item">Something else</a>

             <a href="javascript:void(0);" className="dropdown-item">Separated link</a>
            </div>
           </div>

           <h4 className="header-title mt-0 mb-3">Max File size</h4>

           <input type="file" className="dropify" data-max-file-size="1M" />
          </div>
         </div>
        </div>



       </div>

      </div>
     </div>


     <Footer />
    </div>
    <RightSide />
   </div>

  )
 }
}
