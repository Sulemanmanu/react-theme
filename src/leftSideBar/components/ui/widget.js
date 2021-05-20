import React, { Component } from 'react'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'
import Footer from '../../../common/home/footer'
import RightSide from '../../../common/home/rightSide'


export default class Widget extends Component {
 render() {
  return (
   <div>
    <div id="wrapper">
<Topbar/>
<Sidebar/>
     <div className="content-page">
      <div className="content">

       {/* <!-- Start Content--> */}
       <div className="container-fluid">

        <div className="row">

         <div className="col-xl-3 col-md-6">
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

           <h4 className="header-title mt-0 mb-4">Total Revenue</h4>

           <div className="widget-chart-1">
            <div className="widget-chart-box-1 float-left" dir="ltr">
             <input data-plugin="knob" data-width="80" data-height="80" data-fgColor="#f05050 "
              data-bgColor="#F9B9B9"  defaultValue="58"
              data-skin="tron" data-angleOffset="180" data-readOnly={true}
              data-thickness=".15" />
            </div>

            <div className="widget-detail-1 text-right">
             <h2 className="font-weight-normal pt-2 mb-1"> 256 </h2>
             <p className="text-muted mb-1">Revenue today</p>
            </div>
           </div>
          </div>
         </div>

         <div className="col-xl-3 col-md-6">
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

           <h4 className="header-title mt-0 mb-4">Statistics</h4>

           <div className="widget-chart-1">
            <div className="widget-chart-box-1 float-left" dir="ltr">
             <input data-plugin="knob" data-width="80" data-height="80" data-fgColor="#ffbd4a"
              data-bgColor="#FFE6BA" defaultValue="80"
              data-skin="tron" data-angleOffset="180" data-readOnly={true}
              data-thickness=".15" />
            </div>
            <div className="widget-detail-1 text-right">
             <h2 className="font-weight-normal pt-2 mb-1"> 4569 </h2>
             <p className="text-muted mb-1">Revenue today</p>
            </div>
           </div>
          </div>
         </div>


         <div className="col-xl-3 col-md-6">
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

           <h4 className="header-title mt-0 mb-4">Total Revenue</h4>

           <div className="widget-chart-1">
            <div className="widget-chart-box-1 float-left" dir="ltr">
             <input data-plugin="knob" data-width="80" data-height="80" data-fgColor="#35b8e0 "
              data-bgColor="#B8E6F4" defaultValue="77"
              data-skin="tron" data-angleOffset="180" data-readOnly={true}
              data-thickness=".15" />
            </div>

            <div className="widget-detail-1 text-right">
             <h2 className="font-weight-normal pt-2 mb-1"> 8545 </h2>
             <p className="text-muted mb-1">Revenue today</p>
            </div>
           </div>
          </div>
         </div>


         <div className="col-xl-3 col-md-6">
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

           <h4 className="header-title mt-0 mb-4">Statistics</h4>

           <div className="widget-chart-1">
            <div className="widget-chart-box-1 float-left" dir="ltr">
             <input data-plugin="knob" data-width="80" data-height="80" data-fgColor="#10c469"
              data-bgColor="#AAE2C6" defaultValue="65"
              data-skin="tron" data-angleOffset="180" data-readOnly={true}
              data-thickness=".15" />
            </div>
            <div className="widget-detail-1 text-right">
             <h2 className="font-weight-normal pt-2 mb-1"> 3562 </h2>
             <p className="text-muted mb-1">Revenue today</p>
            </div>
           </div>
          </div>
         </div>

        </div>



        <div className="row">

         <div className="col-xl-3 col-md-6">
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

           <h4 className="header-title mt-0 mb-3">Daily Sales</h4>

           <div className="widget-box-2">
            <div className="widget-detail-2 text-right">
             <span className="badge badge-pink badge-pill float-left mt-3">32% <i className="mdi mdi-trending-up"></i> </span>
             <h2 className="font-weight-normal mb-1"> 158 </h2>
             <p className="text-muted mb-3">Revenue today</p>
            </div>
            <div className="progress progress-bar-alt-pink progress-sm">
             <div className="progress-bar bg-pink" role="progressbar"
              aria-valuenow="77" aria-valuemin="0" aria-valuemax="100"
              style={{ width: "77%" }}>
              <span className="sr-only">77% Complete</span>
             </div>
            </div>
           </div>
          </div>
         </div>

         <div className="col-xl-3 col-md-6">
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

           <h4 className="header-title mt-0 mb-3">Sales Analytics</h4>

           <div className="widget-box-2">
            <div className="widget-detail-2 text-right">
             <span className="badge badge-success badge-pill float-left mt-3">32% <i className="mdi mdi-trending-up"></i> </span>
             <h2 className="font-weight-normal mb-1"> 8451 </h2>
             <p className="text-muted mb-3">Revenue today</p>
            </div>
            <div className="progress progress-bar-alt-success progress-sm">
             <div className="progress-bar bg-success" role="progressbar"
              aria-valuenow="77" aria-valuemin="0" aria-valuemax="100"
              style={{ width: "77%" }}>
              <span className="sr-only">77% Complete</span>
             </div>
            </div>
           </div>
          </div>
         </div>

         <div className="col-xl-3 col-md-6">
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

           <h4 className="header-title mt-0 mb-3">Sales Analytics</h4>

           <div className="widget-box-2">
            <div className="widget-detail-2 text-right">
             <span className="badge badge-primary badge-pill float-left mt-3">32% <i className="mdi mdi-trending-up"></i> </span>
             <h2 className="font-weight-normal mb-1"> 7540 </h2>
             <p className="text-muted mb-3">Revenue today</p>
            </div>
            <div className="progress progress-bar-alt-primary progress-sm">
             <div className="progress-bar progress-bar-primary" role="progressbar"
              aria-valuenow="77" aria-valuemin="0" aria-valuemax="100"
              style={{ width: "77%" }}>
              <span className="sr-only">77% Complete</span>
             </div>
            </div>
           </div>
          </div>
         </div>

         <div className="col-xl-3 col-md-6">
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

           <h4 className="header-title mt-0 mb-3">Daily Sales</h4>

           <div className="widget-box-2 text-right">
            <div className="widget-detail-2">
             <span className="badge badge-dark badge-pill float-left mt-3">32% <i className="mdi mdi-trending-up"></i> </span>
             <h2 className="font-weight-normal mb-1"> 9841 </h2>
             <p className="text-muted mb-3">Revenue today</p>
            </div>
            <div className="progress progress-bar-alt-dark progress-sm">
             <div className="progress-bar bg-dark" role="progressbar"
              aria-valuenow="77" aria-valuemin="0" aria-valuemax="100"
              style={{ width: "77%" }}>
              <span className="sr-only">77% Complete</span>
             </div>
            </div>
           </div>
          </div>
         </div>

        </div>



        <div className="row">
         <div className="col-xl-3 col-md-6">
          <div className="card-box widget-user">
           <div className="media">
            <div className="avatar-lg mr-3">
             <img src="assets/images/users/user-3.jpg" className="img-fluid rounded-circle" alt="user" />
            </div>
            <div className="media-body overflow-hidden">
             <h5 className="mt-0 mb-1">Chadengle</h5>
             <p className="text-muted mb-2 font-13 text-truncate">coderthemes@gmail.com</p>
             <small className="text-warning"><b>Admin</b></small>
            </div>
           </div>
          </div>
         </div>

         <div className="col-xl-3 col-md-6">
          <div className="card-box widget-user">
           <div className="media">
            <div className="avatar-lg mr-3">
             <img src="assets/images/users/user-2.jpg" className="img-fluid rounded-circle" alt="user" />
            </div>
            <div className="media-body overflow-hidden">
             <h5 className="mt-0 mb-1"> Michael Zenaty</h5>
             <p className="text-muted mb-2 font-13 text-truncate">coderthemes@gmail.com</p>
             <small className="text-pink"><b>Support Lead</b></small>
            </div>
           </div>
          </div>
         </div>

         <div className="col-xl-3 col-md-6">
          <div className="card-box widget-user">
           <div className="media">
            <div className="avatar-lg mr-3">
             <img src="assets/images/users/user-1.jpg" className="img-fluid rounded-circle" alt="user" />
            </div>
            <div className="media-body overflow-hidden">
             <h5 className="mt-0 mb-1">Stillnotdavid</h5>
             <p className="text-muted mb-2 font-13 text-truncate">coderthemes@gmail.com</p>
             <small className="text-success"><b>Designer</b></small>
            </div>
           </div>
          </div>
         </div>

         <div className="col-xl-3 col-md-6">
          <div className="card-box widget-user">
           <div className="media">
            <div className="avatar-lg mr-3">
             <img src="assets/images/users/user-10.jpg" className="img-fluid rounded-circle" alt="user" />
            </div>
            <div className="media-body overflow-hidden">
             <h5 className="mt-0 mb-1">Tomaslau</h5>
             <p className="text-muted mb-2 font-13 text-truncate">coderthemes@gmail.com</p>
             <small className="text-info"><b>Developer</b></small>
            </div>
           </div>
          </div>
         </div>

        </div>




        <div className="row">
         <div className="col-xl-3 col-md-6">
          <div className="card-box widget-user">
           <div className="text-center">
            <h2 className="font-weight-normal text-primary" data-plugin="counterup">6599</h2>
            <h5>Statistics</h5>
           </div>
          </div>
         </div>

         <div className="col-xl-3 col-md-6">
          <div className="card-box widget-user">
           <div className="text-center">
            <h2 className="font-weight-normal text-pink" data-plugin="counterup">5894</h2>
            <h5>Total Revenue</h5>
           </div>
          </div>
         </div>

         <div className="col-xl-3 col-md-6">
          <div className="card-box widget-user">
           <div className="text-center">
            <h2 className="font-weight-normal text-warning" data-plugin="counterup">452</h2>
            <h5>Sales Analytics</h5>
           </div>
          </div>
         </div>

         <div className="col-xl-3 col-md-6">
          <div className="card-box widget-user">
           <div className="text-center">
            <h2 className="font-weight-normal text-info" data-plugin="counterup">1254</h2>
            <h5>Daily Sales</h5>
           </div>
          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-xl-3 col-md-6">
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

           <h4 className="header-title mt-0 mb-3">Team Members</h4>

           <ul className="list-group mb-0 user-list">
            <li className="list-group-item">
             <a href="#" className="user-list-item">
              <div className="user avatar-sm float-left mr-2">
               <img src="assets/images/users/user-2.jpg" alt="" className="img-fluid rounded-circle" />
              </div>
              <div className="user-desc">
               <h5 className="name mt-0 mb-1">Michael Zenaty</h5>
               <p className="desc text-muted mb-0 font-12">CEO</p>
              </div>
             </a>
            </li>

            <li className="list-group-item">
             <a href="#" className="user-list-item">
              <div className="user avatar-sm float-left mr-2">
               <img src="assets/images/users/user-3.jpg" alt="" className="img-fluid rounded-circle" />
              </div>
              <div className="user-desc">
               <h5 className="name mt-0 mb-1">James Neon</h5>
               <p className="desc text-muted mb-0 font-12">Web Designer</p>
              </div>
             </a>
            </li>

            <li className="list-group-item">
             <a href="#" className="user-list-item">
              <div className="user avatar-sm float-left mr-2">
               <img src="assets/images/users/user-5.jpg" alt="" className="img-fluid rounded-circle" />
              </div>
              <div className="user-desc">
               <h5 className="name mt-0 mb-1">John Smith</h5>
               <p className="desc text-muted mb-0 font-12">Web Developer</p>
              </div>
             </a>
            </li>

            <li className="list-group-item">
             <a href="#" className="user-list-item">
              <div className="user avatar-sm float-left mr-2">
               <img src="assets/images/users/user-6.jpg" alt="" className="img-fluid rounded-circle" />
              </div>
              <div className="user-desc">
               <h5 className="name mt-0 mb-1">Michael Zenaty</h5>
               <p className="desc text-muted mb-0 font-12">Programmer</p>
              </div>
             </a>
            </li>

            <li className="list-group-item">
             <a href="#" className="user-list-item">
              <div className="user avatar-sm float-left mr-2">
               <img src="assets/images/users/user-1.jpg" alt="" className="img-fluid rounded-circle" />
              </div>
              <div className="user-desc">
               <h5 className="name mt-0 mb-1">Mat Helme</h5>
               <p className="desc text-muted mb-0 font-12">Manager</p>
              </div>
             </a>
            </li>
           </ul>
          </div>
         </div>

         <div className="col-xl-3 col-md-6">
          <div className="text-center card-box">
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
           <div>
            <img src="assets/images/users/user-9.jpg" className="rounded-circle avatar-xl img-thumbnail mb-3" alt="profile-image" />

            <p className="text-muted font-13 mb-4">
             Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
                                        </p>

            <div className="text-left">
             <p className="text-muted font-13"><strong>Full Name :</strong> <span className="ml-2">Johnathan Deo</span></p>

             <p className="text-muted font-13"><strong>Mobile :</strong><span className="ml-2">(123) 123 1234</span></p>

             <p className="text-muted font-13"><strong>Email :</strong> <span className="ml-2">coderthemes@gmail.com</span></p>

             <p className="text-muted font-13 m-b-5"><strong>Location :</strong> <span className="ml-2">USA</span></p>

            </div>

           </div>

          </div>
         </div>

         <div className="col-xl-3 col-md-6">
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

           <h4 className="header-title mt-0 mb-4">Progressbars</h4>

           <h5 className="mt-0">iMacs <span className="text-primary float-right">80%</span></h5>
           <div className="progress progress-bar-alt-primary progress-sm mt-0 mb-3">
            <div className="progress-bar bg-primary progress-animated wow animated animated" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%", visibility: "visible", animationname: "animationProgress" }}>
            </div>
           </div>

           <h5 className="mt-0">iBooks <span className="text-pink float-right">50%</span></h5>
           <div className="progress progress-bar-alt-pink progress-sm mt-0 mb-3">
            <div className="progress-bar bg-pink progress-animated wow animated animated" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%", visibility: "visible", animationname: "animationProgress" }}>
            </div>
           </div>

           <h5 className="mt-0">iPhone 5s <span className="text-info float-right">70%</span></h5>
           <div className="progress progress-bar-alt-info progress-sm mt-0 mb-3">
            <div className="progress-bar bg-info progress-animated wow animated animated" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%", visibility: "visible", animationname: "animationProgress" }}>
            </div>
           </div>

           <h5 className="mt-0">iPhone 6 <span className="text-warning float-right">65%</span></h5>
           <div className="progress progress-bar-alt-warning progress-sm mt-0 mb-3">
            <div className="progress-bar bg-warning progress-animated wow animated animated" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{ width: "65%", visibility: "visible", animationname: "animationProgress" }}>
            </div>
           </div>

           <h5 className="mt-0">iPhone 4 <span className="text-danger float-right">65%</span></h5>
           <div className="progress progress-bar-alt-danger progress-sm mt-0 mb-3">
            <div className="progress-bar bg-danger progress-animated wow animated animated" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{ width: "65%", visibility: "visible", animationname: "animationProgress" }}>
            </div>
           </div>

           <h5 className="mt-0">iPhone 6s <span className="text-success float-right">40%</span></h5>
           <div className="progress progress-bar-alt-success progress-sm mt-0">
            <div className="progress-bar bg-success progress-animated wow animated animated" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: "40%", visibility: "visible", animationname: "animationProgress" }}>
            </div>
           </div>


          </div>
         </div>


         <div className="col-xl-3 col-md-6">
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

           <h4 className="header-title mt-0 mb-3"><i className="mdi mdi-notification-clear-all mr-1"></i> Upcoming Reminders</h4>

           <ul className="list-group mb-0 user-list">
            <li className="list-group-item">
             <a href="#" className="user-list-item">
              <div className="user float-left mr-3">
               <i className="mdi mdi-circle text-primary"></i>
              </div>
              <div className="user-desc overflow-hidden">
               <h5 className="name mt-0 mb-1">Meet Manager</h5>
               <span className="desc text-muted font-12 text-truncate d-block">February 24, 2019 - 10:30am to 12:45pm</span>
              </div>
             </a>
            </li>

            <li className="list-group-item">
             <a href="#" className="user-list-item">
              <div className="user float-left mr-3">
               <i className="mdi mdi-circle text-success"></i>
              </div>
              <div className="user-desc overflow-hidden">
               <h5 className="name mt-0 mb-1">Project Discussion</h5>
               <span className="desc text-muted font-12 text-truncate d-block">February 25, 2019 - 10:30am to 12:45pm</span>
              </div>
             </a>
            </li>

            <li className="list-group-item">
             <a href="#" className="user-list-item">
              <div className="user float-left mr-3">
               <i className="mdi mdi-circle text-pink"></i>
              </div>
              <div className="user-desc overflow-hidden">
               <h5 className="name mt-0 mb-1">Meet Manager</h5>
               <span className="desc text-muted font-12 text-truncate d-block">February 26, 2019 - 10:30am to 12:45pm</span>
              </div>
             </a>
            </li>

            <li className="list-group-item">
             <a href="#" className="user-list-item">
              <div className="user float-left mr-3">
               <i className="mdi mdi-circle text-muted"></i>
              </div>
              <div className="user-desc overflow-hidden">
               <h5 className="name mt-0 mb-1">Project Discussion</h5>
               <span className="desc text-muted font-12 text-truncate d-block">February 27, 2019 - 10:30am to 12:45pm</span>
              </div>
             </a>
            </li>

            <li className="list-group-item">
             <a href="#" className="user-list-item">
              <div className="user float-left mr-3">
               <i className="mdi mdi-circle text-danger"></i>
              </div>
              <div className="user-desc overflow-hidden">
               <h5 className="name mt-0 mb-1">Meet Manager</h5>
               <span className="desc text-muted font-12 text-truncate d-block">February 28, 2019 - 10:30am to 12:45pm</span>
              </div>
             </a>
            </li>
           </ul>
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
