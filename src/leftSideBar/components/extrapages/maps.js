import React, { Component } from 'react'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'
import RightSide from '../../../common/home/rightSide'
import Footer from '../../../common/home/footer'

export default class Maps extends Component {
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
         <div className="col-xl-6">
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

           <h4 className="header-title mt-0 mb-3">Markers</h4>

           <div id="gmaps-markers" className="gmaps"></div>
          </div>
         </div>

         <div className="col-xl-6">
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

           <h4 className="header-title mt-0 mb-3">Overlays</h4>

           <div id="gmaps-overlay" className="gmaps"></div>
          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-xl-6">
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

           <h4 className="header-title mt-0 mb-3">Street View Panoramas</h4>

           <div id="panorama" className="gmaps-panaroma"></div>
          </div>
         </div>

         <div className="col-xl-6">
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

           <h4 className="header-title mt-0 mb-3">Map Types</h4>

           <div id="gmaps-types" className="gmaps"></div>
          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-sm-12">
          <h4 className="page-header my-2 header-title">Vector Maps</h4>
         </div>
        </div>



        <div className="row">
         <div className="col-lg-12">
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

           <h4 className="header-title mt-0 mb-3">World Map</h4>

           <div id="world-map-markers" style={{ height: "420px" }}></div>
          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-xl-6">
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

           <h4 className="header-title mt-0 mb-3">USA Map</h4>

           <div id="usa" style={{ height: "320px" }}></div>
          </div>
         </div>

         <div className="col-xl-6">
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

           <h4 className="header-title mt-0 mb-3">Canada Map</h4>

           <div id="canada" style={{ height: "320px" }}></div>
          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-xl-6">
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

           <h4 className="header-title mt-0 mb-3">UK Map</h4>

           <div id="uk" style={{ height: "320px" }}></div>
          </div>
         </div>

         <div className="col-xl-6">
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

           <h4 className="header-title mt-0 mb-3">Australia Map</h4>

           <div id="australia" style={{ height: "320px" }}></div>
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
