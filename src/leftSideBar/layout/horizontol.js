// import React, { Component } from 'react'

// export default class Horizontol extends Component {
//  render() {
//   return (
//     <>
//    <div  >

//     <div id="wrapper">


//      <header id="topnav">


//       <div className="navbar-custom">
//        <div className="container-fluid">
//         <ul className="list-unstyled topnav-menu float-right mb-0">

//          <li className="dropdown notification-list">

//           <a className="navbar-toggle nav-link">
//            <div className="lines">
//             <span></span>
//             <span></span>
//             <span></span>
//            </div>
//           </a>

//          </li>

//          <li className="d-none d-sm-block">
//           <form className="app-search">
//            <div className="app-search-box">
//             <div className="input-group">
//              <input type="text" className="form-control" placeholder="Search..." />
//              <div className="input-group-append">
//               <button className="btn" type="submit">
//                <i className="fe-search"></i>
//               </button>
//              </div>
//             </div>
//            </div>
//           </form>
//          </li>

//          <li className="dropdown notification-list">
//           <a className="nav-link dropdown-toggle waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
//            <i className="fe-bell noti-icon"></i>
//            <span className="badge badge-danger rounded-circle noti-icon-badge">9</span>
//           </a>
//           <div className="dropdown-menu dropdown-menu-right dropdown-lg">


//            <div className="dropdown-item noti-title">
//             <h5 className="m-0">
//              <span className="float-right">
//               <a href="" className="text-dark">
//                <small>Clear All</small>
//               </a>
//              </span>Notification
//                                         </h5>
//            </div>

//            <div className="slimscroll noti-scroll">


//             <a href="javascript:void(0);" className="dropdown-item notify-item active">
//              <div className="notify-icon">
//               <img src="assets/images/users/user-1.jpg" className="img-fluid rounded-circle" alt="" /> </div>
//              <p className="notify-details">Cristina Pride</p>
//              <p className="text-muted mb-0 user-msg">
//               <small>Hi, How are you? What about our next meeting</small>
//              </p>
//             </a>


//             <a href="javascript:void(0);" className="dropdown-item notify-item">
//              <div className="notify-icon bg-primary">
//               <i className="mdi mdi-comment-account-outline"></i>
//              </div>
//              <p className="notify-details">Caleb Flakelar commented on Admin
//                                                 <small className="text-muted">1 min ago</small>
//              </p>
//             </a>


//             <a href="javascript:void(0);" className="dropdown-item notify-item">
//              <div className="notify-icon">
//               <img src="assets/images/users/user-4.jpg" className="img-fluid rounded-circle" alt="" /> </div>
//              <p className="notify-details">Karen Robinson</p>
//              <p className="text-muted mb-0 user-msg">
//               <small>Wow ! this admin looks good and awesome design</small>
//              </p>
//             </a>


//             <a href="javascript:void(0);" className="dropdown-item notify-item">
//              <div className="notify-icon bg-warning">
//               <i className="mdi mdi-account-plus"></i>
//              </div>
//              <p className="notify-details">New user registered.
//                                                 <small className="text-muted">5 hours ago</small>
//              </p>
//             </a>


//             <a href="javascript:void(0);" className="dropdown-item notify-item">
//              <div className="notify-icon bg-info">
//               <i className="mdi mdi-comment-account-outline"></i>
//              </div>
//              <p className="notify-details">Caleb Flakelar commented on Admin
//                                                 <small className="text-muted">4 days ago</small>
//              </p>
//             </a>


//             <a href="javascript:void(0);" className="dropdown-item notify-item">
//              <div className="notify-icon bg-secondary">
//               <i className="mdi mdi-heart"></i>
//              </div>
//              <p className="notify-details">Carlos Crouch liked
//                                                 <b>Admin</b>
//               <small className="text-muted">13 days ago</small>
//              </p>
//             </a>
//            </div>


//            <a href="javascript:void(0);" className="dropdown-item text-center text-primary notify-item notify-all">
//             View all
//                                         <i className="fi-arrow-right"></i>
//            </a>

//           </div>
//          </li>

//          <li className="dropdown notification-list">
//           <a className="nav-link dropdown-toggle nav-user mr-0 waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
//            <img src="assets/images/users/user-1.jpg" alt="user-image" className="rounded-circle" />
//            <span className="pro-user-name ml-1">
//             Nowak <i className="mdi mdi-chevron-down"></i>
//            </span>
//           </a>
//           <div className="dropdown-menu dropdown-menu-right profile-dropdown ">

//            <div className="dropdown-header noti-title">
//             <h6 className="text-overflow m-0">Welcome !</h6>
//            </div>


//            <a href="javascript:void(0);" className="dropdown-item notify-item">
//             <i className="fe-user"></i>
//             <span>My Account</span>
//            </a>


//            <a href="javascript:void(0);" className="dropdown-item notify-item">
//             <i className="fe-settings"></i>
//             <span>Settings</span>
//            </a>


//            <a href="javascript:void(0);" className="dropdown-item notify-item">
//             <i className="fe-lock"></i>
//             <span>Lock Screen</span>
//            </a>

//            <div className="dropdown-divider"></div>


//            <a href="javascript:void(0);" className="dropdown-item notify-item">
//             <i className="fe-log-out"></i>
//             <span>Logout</span>
//            </a>

//           </div>
//          </li>

//          <li className="dropdown notification-list">
//           <a href="javascript:void(0);" className="nav-link right-bar-toggle waves-effect">
//            <i className="fe-settings noti-icon"></i>
//           </a>
//          </li>

//         </ul>


//         <div className="logo-box">
//          <a href="index.html" className="logo logo-light">
//           <span className="logo-lg">
//            <img src="assets/images/logo-light.png" alt="" height="16" />
//           </span>
//           <span className="logo-sm">
//            <img src="assets/images/logo-sm.png" alt="" height="24" />
//           </span>
//          </a>
//          <a href="index.html" className="logo logo-dark">
//           <span className="logo-lg">
//            <img src="assets/images/logo-dark.png" alt="" height="16" />
//           </span>
//           <span className="logo-sm">
//            <img src="assets/images/logo-sm.png" alt="" height="24" />
//           </span>
//          </a>
//         </div>

//         <div className="clearfix"></div>
//        </div>
//       </div>


//       <div className="topbar-menu">
//        <div className="container-fluid">
//         <div id="navigation">

//          <ul className="navigation-menu">

//           <li className="has-submenu">
//            <a href="index.html"><i className="mdi mdi-view-dashboard"></i>Dashboard</a>
//           </li>

//           <li className="has-submenu">
//            <a href="#"> <i className="mdi mdi-invert-colors"></i>User Interface  <div className="arrow-down"></div></a>
//            <ul className="submenu megamenu">
//             <li>
//              <ul>
//               <li>
//                <a href="ui-buttons.html">Buttons</a>
//               </li>
//               <li>
//                <a href="ui-cards.html">Cards</a>
//               </li>
//               <li>
//                <a href="ui-draggable-cards.html">Draggable Cards</a>
//               </li>
//               <li>
//                <a href="ui-checkbox-radio.html">Checkboxs-Radios</a>
//               </li>
//               <li>
//                <a href="ui-material-icons.html">Material Design</a>
//               </li>
//               <li>
//                <a href="ui-font-awesome-icons.html">Font Awesome 5</a>
//               </li>
//              </ul>
//             </li>
//             <li>
//              <ul>
//               <li>
//                <a href="ui-dripicons.html">Dripicons</a>
//               </li>
//               <li>
//                <a href="ui-themify-icons.html">Themify Icons</a>
//               </li>
//               <li>
//                <a href="ui-feather-icons.html">Feather Icons</a>
//               </li>
//               <li>
//                <a href="ui-modals.html">Modals</a>
//               </li>
//               <li>
//                <a href="ui-notification.html">Notification</a>
//               </li>
//               <li>
//                <a href="ui-range-slider.html">Range Slider</a>
//               </li>
//              </ul>
//             </li>
//             <li>
//              <ul>
//               <li>
//                <a href="ui-components.html">Components</a>
//               </li>
//               <li>
//                <a href="ui-sweetalert.html">Sweet Alert</a>
//               </li>
//               <li>
//                <a href="ui-treeview.html">Tree view</a>
//               </li>
//               <li>
//                <a href="ui-widgets.html">Widgets</a>
//               </li>
//               <li>
//                <a href="ui-typography.html">Typography</a>
//               </li>
//              </ul>
//             </li>
//            </ul>
//           </li>

//           <li className="has-submenu">
//            <a href="#">
//             <i className="mdi mdi-lifebuoy"></i>Components <div className="arrow-down"></div></a>
//            <ul className="submenu">
//             <li className="has-submenu">
//              <a href="#">Forms <div className="arrow-down"></div></a>
//              <ul className="submenu">
//               <li>
//                <a href="form-elements.html">General Elements</a>
//               </li>
//               <li>
//                <a href="form-advanced.html">Advanced Form</a>
//               </li>
//               <li>
//                <a href="form-validation.html">Form Validation</a>
//               </li>
//               <li>
//                <a href="form-wizard.html">Form Wizard</a>
//               </li>
//               <li>
//                <a href="form-fileupload.html">Form Uploads</a>
//               </li>
//               <li>
//                <a href="form-quilljs.html">Quilljs Editor</a>
//               </li>
//               <li>
//                <a href="form-xeditable.html">X-editable</a>
//               </li>
//              </ul>
//             </li>
//             <li className="has-submenu">
//              <a href="#">Tables <div className="arrow-down"></div></a>
//              <ul className="submenu">
//               <li>
//                <a href="tables-basic.html">Basic Tables</a>
//               </li>
//               <li>
//                <a href="tables-datatable.html">Data Tables</a>
//               </li>
//               <li>
//                <a href="tables-responsive.html">Responsive Table</a>
//               </li>
//               <li>
//                <a href="tables-editable.html">Editable Table</a>
//               </li>
//               <li>
//                <a href="tables-tablesaw.html">Tablesaw Table</a>
//               </li>
//              </ul>
//             </li>
//             <li>
//              <a href="apps-chat.html">Chat</a>
//             </li>
//             <li>
//              <a href="calendar.html">Calendar</a>
//             </li>
//             <li>
//              <a href="inbox.html">Mail</a>
//             </li>

//            </ul>
//           </li>

//           <li className="has-submenu">
//            <a href="#"> <i className="mdi mdi-chart-donut-variant"></i>Charts <div className="arrow-down"></div></a>
//            <ul className="submenu">
//             <li>
//              <a href="charts-flot.html">Flot Charts</a>
//             </li>
//             <li>
//              <a href="charts-morris.html">Morris Charts</a>
//             </li>
//             <li>
//              <a href="charts-chartist.html">Chartist Charts</a>
//             </li>
//             <li>
//              <a href="charts-chartjs.html">Chartjs Charts</a>
//             </li>
//             <li>
//              <a href="charts-other.html">Other Charts</a>
//             </li>
//            </ul>
//           </li>

//           <li className="has-submenu">
//            <a href="#"> <i className="mdi mdi-cards-outline"></i>Pages <div className="arrow-down"></div></a>
//            <ul className="submenu megamenu">
//             <li>
//              <ul>
//               <li>
//                <a href="pages-starter.html">Starter Page</a>
//               </li>
//               <li>
//                <a href="pages-login.html">Login</a>
//               </li>
//               <li>
//                <a href="pages-register.html">Register</a>
//               </li>
//               <li>
//                <a href="pages-recoverpw.html">Recover Password</a>
//               </li>
//               <li>
//                <a href="pages-lock-screen.html">Lock Screen</a>
//               </li>
//               <li>
//                <a href="pages-confirm-mail.html">Confirm Mail</a>
//               </li>
//               <li>
//                <a href="pages-404.html">Error 404</a>
//               </li>
//               <li>
//                <a href="pages-500.html">Error 500</a>
//               </li>
//              </ul>
//             </li>
//             <li>
//              <ul>
//               <li>
//                <a href="extras-projects.html">Projects</a>
//               </li>
//               <li>
//                <a href="extras-tour.html">Tour</a>
//               </li>
//               <li>
//                <a href="extras-taskboard.html">Taskboard</a>
//               </li>
//               <li>
//                <a href="extras-taskdetail.html">Task Detail</a>
//               </li>
//               <li>
//                <a href="extras-profile.html">Profile</a>
//               </li>
//               <li>
//                <a href="extras-maps.html">Maps</a>
//               </li>
//               <li>
//                <a href="extras-contact.html">Contact list</a>
//               </li>
//               <li>
//                <a href="extras-pricing.html">Pricing</a>
//               </li>

//              </ul>
//             </li>
//             <li>
//              <ul>
//               <li>
//                <a href="extras-timeline.html">Timeline</a>
//               </li>
//               <li>
//                <a href="extras-invoice.html">Invoice</a>
//               </li>
//               <li>
//                <a href="extras-faq.html">FAQs</a>
//               </li>
//               <li>
//                <a href="extras-gallery.html">Gallery</a>
//               </li>
//               <li>
//                <a href="extras-email-templates.html">Email Templates</a>
//               </li>
//               <li>
//                <a href="extras-maintenance.html">Maintenance</a>
//               </li>
//               <li>
//                <a href="extras-comingsoon.html">Coming Soon</a>
//               </li>
//              </ul>
//             </li>
//            </ul>
//           </li>

//           <li className="has-submenu">
//            <a href="#"> <i className="mdi mdi-card-bulleted-settings-outline"></i>Layouts <div className="arrow-down"></div></a>
//            <ul className="submenu">
//             <li><a href="layouts-horizontal.html">Horizontal</a></li>
//             <li><a href="layouts-sidebar-sm.html">Small Sidebar</a></li>
//             <li><a href="layouts-dark-sidebar.html">Dark Sidebar</a></li>
//             <li><a href="layouts-dark-topbar.html">Dark Topbar</a></li>
//             <li><a href="layouts-preloader.html">Preloader</a></li>
//             <li><a href="layouts-sidebar-collapsed.html">Sidebar Collapsed</a></li>
//             <li><a href="layouts-boxed.html">Boxed</a></li>
//            </ul>
//           </li>

//          </ul>


//          <div className="clearfix"></div>
//         </div>

//        </div>

//       </div>


//      </header>

//      <div className="content-page">
//       <div className="content">


//        <div className="container-fluid">


//         <div className="row">
//          <div className="col-12">
//           <div className="page-title-box d-flex align-items-center justify-content-between">
//            <h4 className="page-title">Horizontal Layout</h4>

//            <div className="page-title-right">
//             <ol className="breadcrumb m-0">
//              <li className="breadcrumb-item"><a href="javascript: void(0);">Layouts</a></li>
//              <li className="breadcrumb-item active">Horizontal Layout</li>
//             </ol>
//            </div>

//           </div>
//          </div>
//         </div>


//         <div className="row">

//          <div className="col-xl-3 col-md-6">
//           <div className="card-box">
//            <div className="dropdown float-right">
//             <a href="#" className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
//              <i className="mdi mdi-dots-vertical"></i>
//             </a>
//             <div className="dropdown-menu dropdown-menu-right">

//              <a href="javascript:void(0);" className="dropdown-item">Action</a>

//              <a href="javascript:void(0);" className="dropdown-item">Another action</a>

//              <a href="javascript:void(0);" className="dropdown-item">Something else</a>

//              <a href="javascript:void(0);" className="dropdown-item">Separated link</a>
//             </div>
//            </div>

//            <h4 className="header-title mt-0 mb-4">Total Revenue</h4>

//            <div className="widget-chart-1">
//             <div className="widget-chart-box-1 float-left" dir="ltr">
//              <input data-plugin="knob" data-width="80" data-height="80" data-fgColor="#f05050 "
//               data-bgColor="#F9B9B9" value="58"
//               data-skin="tron" data-angleOffset="180" data-readOnly={true}
//               data-thickness=".15" />
//             </div>

//             <div className="widget-detail-1 text-right">
//              <h2 className="font-weight-normal pt-2 mb-1"> 256 </h2>
//              <p className="text-muted mb-1">Revenue today</p>
//             </div>
//            </div>
//           </div>

//          </div>

//          <div className="col-xl-3 col-md-6">
//           <div className="card-box">
//            <div className="dropdown float-right">
//             <a href="#" className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
//              <i className="mdi mdi-dots-vertical"></i>
//             </a>
//             <div className="dropdown-menu dropdown-menu-right">

//              <a href="javascript:void(0);" className="dropdown-item">Action</a>

//              <a href="javascript:void(0);" className="dropdown-item">Another action</a>

//              <a href="javascript:void(0);" className="dropdown-item">Something else</a>

//              <a href="javascript:void(0);" className="dropdown-item">Separated link</a>
//             </div>
//            </div>

//            <h4 className="header-title mt-0 mb-3">Sales Analytics</h4>

//            <div className="widget-box-2">
//             <div className="widget-detail-2 text-right">
//              <span className="badge badge-success badge-pill float-left mt-3">32% <i className="mdi mdi-trending-up"></i> </span>
//              <h2 className="font-weight-normal mb-1"> 8451 </h2>
//              <p className="text-muted mb-3">Revenue today</p>
//             </div>
//             <div className="progress progress-bar-alt-success progress-sm">
//              <div className="progress-bar bg-success" role="progressbar"
//               aria-valuenow="77" aria-valuemin="0" aria-valuemax="100"
//               style={{ width: "77%" }}>
//               <span className="sr-only">77% Complete</span>
//              </div>
//             </div>
//            </div>
//           </div>

//          </div>

//          <div className="col-xl-3 col-md-6">
//           <div className="card-box">
//            <div className="dropdown float-right">
//             <a href="#" className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
//              <i className="mdi mdi-dots-vertical"></i>
//             </a>
//             <div className="dropdown-menu dropdown-menu-right">

//              <a href="javascript:void(0);" className="dropdown-item">Action</a>

//              <a href="javascript:void(0);" className="dropdown-item">Another action</a>

//              <a href="javascript:void(0);" className="dropdown-item">Something else</a>

//              <a href="javascript:void(0);" className="dropdown-item">Separated link</a>
//             </div>
//            </div>

//            <h4 className="header-title mt-0 mb-4">Statistics</h4>

//            <div className="widget-chart-1">
//             <div className="widget-chart-box-1 float-left" dir="ltr">
//              <input data-plugin="knob" data-width="80" data-height="80" data-fgColor="#ffbd4a"
//               data-bgColor="#FFE6BA" value="80"
//               data-skin="tron" data-angleOffset="180" data-readOnly={true}
//               data-thickness=".15" />
//             </div>
//             <div className="widget-detail-1 text-right">
//              <h2 className="font-weight-normal pt-2 mb-1"> 4569 </h2>
//              <p className="text-muted mb-1">Revenue today</p>
//             </div>
//            </div>
//           </div>

//          </div>

//          <div className="col-xl-3 col-md-6">
//           <div className="card-box">
//            <div className="dropdown float-right">
//             <a href="#" className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
//              <i className="mdi mdi-dots-vertical"></i>
//             </a>
//             <div className="dropdown-menu dropdown-menu-right">

//              <a href="javascript:void(0);" className="dropdown-item">Action</a>

//              <a href="javascript:void(0);" className="dropdown-item">Another action</a>

//              <a href="javascript:void(0);" className="dropdown-item">Something else</a>

//              <a href="javascript:void(0);" className="dropdown-item">Separated link</a>
//             </div>
//            </div>

//            <h4 className="header-title mt-0 mb-3">Daily Sales</h4>

//            <div className="widget-box-2">
//             <div className="widget-detail-2 text-right">
//              <span className="badge badge-pink badge-pill float-left mt-3">32% <i className="mdi mdi-trending-up"></i> </span>
//              <h2 className="font-weight-normal mb-1"> 158 </h2>
//              <p className="text-muted mb-3">Revenue today</p>
//             </div>
//             <div className="progress progress-bar-alt-pink progress-sm">
//              <div className="progress-bar bg-pink" role="progressbar"
//               aria-valuenow="77" aria-valuemin="0" aria-valuemax="100"
//               style={{ width: "77%" }}>
//               <span className="sr-only">77% Complete</span>
//              </div>
//             </div>
//            </div>
//           </div>

//          </div>

//         </div>


//         <div className="row">
//          <div className="col-xl-4">
//           <div className="card-box">
//            <div className="dropdown float-right">
//             <a href="#" className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
//              <i className="mdi mdi-dots-vertical"></i>
//             </a>
//             <div className="dropdown-menu dropdown-menu-right">

//              <a href="javascript:void(0);" className="dropdown-item">Action</a>

//              <a href="javascript:void(0);" className="dropdown-item">Another action</a>

//              <a href="javascript:void(0);" className="dropdown-item">Something else</a>

//              <a href="javascript:void(0);" className="dropdown-item">Separated link</a>
//             </div>
//            </div>

//            <h4 className="header-title mt-0">Daily Sales</h4>

//            <div className="widget-chart text-center">
//             <div id="morris-donut-example" dir="ltr" style={{ height: "245px" }} className="morris-chart"></div>
//             <ul className="list-inline chart-detail-list mb-0">
//              <li className="list-inline-item">
//               <h5 style={{ color: " #ff8acc" }}><i className="fa fa-circle mr-1"></i>Series A</h5>
//              </li>
//              <li className="list-inline-item">
//               <h5 style={{ color: "#5b69bc" }}><i className="fa fa-circle mr-1"></i>Series B</h5>
//              </li>
//             </ul>
//            </div>
//           </div>
//          </div>

//          <div className="col-xl-4">
//           <div className="card-box">
//            <div className="dropdown float-right">
//             <a href="#" className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
//              <i className="mdi mdi-dots-vertical"></i>
//             </a>
//             <div className="dropdown-menu dropdown-menu-right">

//              <a href="javascript:void(0);" className="dropdown-item">Action</a>

//              <a href="javascript:void(0);" className="dropdown-item">Another action</a>

//              <a href="javascript:void(0);" className="dropdown-item">Something else</a>

//              <a href="javascript:void(0);" className="dropdown-item">Separated link</a>
//             </div>
//            </div>
//            <h4 className="header-title mt-0">Statistics</h4>
//            <div id="morris-bar-example" dir="ltr" style={{ height: "280px" }} className="morris-chart"></div>
//           </div>
//          </div>

//          <div className="col-xl-4">
//           <div className="card-box">
//            <div className="dropdown float-right">
//             <a href="#" className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
//              <i className="mdi mdi-dots-vertical"></i>
//             </a>
//             <div className="dropdown-menu dropdown-menu-right">

//              <a href="javascript:void(0);" className="dropdown-item">Action</a>

//              <a href="javascript:void(0);" className="dropdown-item">Another action</a>

//              <a href="javascript:void(0);" className="dropdown-item">Something else</a>

//              <a href="javascript:void(0);" className="dropdown-item">Separated link</a>
//             </div>
//            </div>
//            <h4 className="header-title mt-0">Total Revenue</h4>
//            <div id="morris-line-example" dir="ltr" style={{ height: "280px" }} className="morris-chart"></div>
//           </div>
//          </div>

//         </div>



//         <div className="row">
//          <div className="col-xl-3 col-md-6">
//           <div className="card-box widget-user">
//            <div className="media">
//             <div className="avatar-lg mr-3">
//              <img src="assets/images/users/user-3.jpg" className="img-fluid rounded-circle" alt="user" />
//             </div>
//             <div className="media-body overflow-hidden">
//              <h5 className="mt-0 mb-1">Chadengle</h5>
//              <p className="text-muted mb-2 font-13 text-truncate">coderthemes@gmail.com</p>
//              <small className="text-warning"><b>Admin</b></small>
//             </div>
//            </div>
//           </div>
//          </div>

//          <div className="col-xl-3 col-md-6">
//           <div className="card-box widget-user">
//            <div className="media">
//             <div className="avatar-lg mr-3">
//              <img src="assets/images/users/user-2.jpg" className="img-fluid rounded-circle" alt="user" />
//             </div>
//             <div className="media-body overflow-hidden">
//              <h5 className="mt-0 mb-1"> Michael Zenaty</h5>
//              <p className="text-muted mb-2 font-13 text-truncate">coderthemes@gmail.com</p>
//              <small className="text-pink"><b>Support Lead</b></small>
//             </div>
//            </div>
//           </div>
//          </div>

//          <div className="col-xl-3 col-md-6">
//           <div className="card-box widget-user">
//            <div className="media">
//             <div className="avatar-lg mr-3">
//              <img src="assets/images/users/user-1.jpg" className="img-fluid rounded-circle" alt="user" />
//             </div>
//             <div className="media-body overflow-hidden">
//              <h5 className="mt-0 mb-1">Stillnotdavid</h5>
//              <p className="text-muted mb-2 font-13 text-truncate">coderthemes@gmail.com</p>
//              <small className="text-success"><b>Designer</b></small>
//             </div>
//            </div>
//           </div>
//          </div>

//          <div className="col-xl-3 col-md-6">
//           <div className="card-box widget-user">
//            <div className="media">
//             <div className="avatar-lg mr-3">
//              <img src="assets/images/users/user-10.jpg" className="img-fluid rounded-circle" alt="user" />
//             </div>
//             <div className="media-body overflow-hidden">
//              <h5 className="mt-0 mb-1">Tomaslau</h5>
//              <p className="text-muted mb-2 font-13 text-truncate">coderthemes@gmail.com</p>
//              <small className="text-info"><b>Developer</b></small>
//             </div>
//            </div>
//           </div>
//          </div>

//         </div>



//         <div className="row">
//          <div className="col-xl-4">
//           <div className="card-box">
//            <div className="dropdown float-right">
//             <a href="#" className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
//              <i className="mdi mdi-dots-vertical"></i>
//             </a>
//             <div className="dropdown-menu dropdown-menu-right">

//              <a href="javascript:void(0);" className="dropdown-item">Action</a>

//              <a href="javascript:void(0);" className="dropdown-item">Another action</a>

//              <a href="javascript:void(0);" className="dropdown-item">Something else</a>

//              <a href="javascript:void(0);" className="dropdown-item">Separated link</a>
//             </div>
//            </div>

//            <h4 className="header-title mb-3">Inbox</h4>

//            <div className="inbox-widget">

//             <div className="inbox-item">
//              <a href="#">
//               <div className="inbox-item-img"><img src="assets/images/users/user-1.jpg" className="rounded-circle" alt="" /></div>
//               <h5 className="inbox-item-author mt-0 mb-1">Chadengle</h5>
//               <p className="inbox-item-text">Hey! there I'm available...</p>
//               <p className="inbox-item-date">13:40 PM</p>
//              </a>
//             </div>

//             <div className="inbox-item">
//              <a href="#">
//               <div className="inbox-item-img"><img src="assets/images/users/user-2.jpg" className="rounded-circle" alt="" /></div>
//               <h5 className="inbox-item-author mt-0 mb-1">Tomaslau</h5>
//               <p className="inbox-item-text">I've finished it! See you so...</p>
//               <p className="inbox-item-date">13:34 PM</p>
//              </a>
//             </div>

//             <div className="inbox-item">
//              <a href="#">
//               <div className="inbox-item-img"><img src="assets/images/users/user-3.jpg" className="rounded-circle" alt="" /></div>
//               <h5 className="inbox-item-author mt-0 mb-1">Stillnotdavid</h5>
//               <p className="inbox-item-text">This theme is awesome!</p>
//               <p className="inbox-item-date">13:17 PM</p>
//              </a>
//             </div>

//             <div className="inbox-item">
//              <a href="#">
//               <div className="inbox-item-img"><img src="assets/images/users/user-4.jpg" className="rounded-circle" alt="" /></div>
//               <h5 className="inbox-item-author mt-0 mb-1">Kurafire</h5>
//               <p className="inbox-item-text">Nice to meet you</p>
//               <p className="inbox-item-date">12:20 PM</p>
//              </a>
//             </div>

//             <div className="inbox-item">
//              <a href="#">
//               <div className="inbox-item-img"><img src="assets/images/users/user-5.jpg" className="rounded-circle" alt="" /></div>
//               <h5 className="inbox-item-author mt-0 mb-1">Shahedk</h5>
//               <p className="inbox-item-text">Hey! there I'm available...</p>
//               <p className="inbox-item-date">10:15 AM</p>
//              </a>
//             </div>
//            </div>
//           </div>
//          </div>

//          <div className="col-xl-8">
//           <div className="card-box">
//            <div className="dropdown float-right">
//             <a href="#" className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
//              <i className="mdi mdi-dots-vertical"></i>
//             </a>
//             <div className="dropdown-menu dropdown-menu-right">

//              <a href="javascript:void(0);" className="dropdown-item">Action</a>

//              <a href="javascript:void(0);" className="dropdown-item">Another action</a>

//              <a href="javascript:void(0);" className="dropdown-item">Something else</a>

//              <a href="javascript:void(0);" className="dropdown-item">Separated link</a>
//             </div>
//            </div>

//            <h4 className="header-title mt-0 mb-3">Latest Projects</h4>

//            <div className="table-responsive">
//             <table className="table table-hover mb-0">
//              <thead>
//               <tr>
//                <th>#</th>
//                <th>Project Name</th>
//                <th>Start Date</th>
//                <th>Due Date</th>
//                <th>Status</th>
//                <th>Assign</th>
//               </tr>
//              </thead>
//              <tbody>
//               <tr>
//                <td>1</td>
//                <td>Adminto Admin v1</td>
//                <td>01/01/2017</td>
//                <td>26/04/2017</td>
//                <td><span className="badge badge-danger">Released</span></td>
//                <td>Coderthemes</td>
//               </tr>
//               <tr>
//                <td>2</td>
//                <td>Adminto Frontend v1</td>
//                <td>01/01/2017</td>
//                <td>26/04/2017</td>
//                <td><span className="badge badge-success">Released</span></td>
//                <td>Adminto admin</td>
//               </tr>
//               <tr>
//                <td>3</td>
//                <td>Adminto Admin v1.1</td>
//                <td>01/05/2017</td>
//                <td>10/05/2017</td>
//                <td><span className="badge badge-pink">Pending</span></td>
//                <td>Coderthemes</td>
//               </tr>
//               <tr>
//                <td>4</td>
//                <td>Adminto Frontend v1.1</td>
//                <td>01/01/2017</td>
//                <td>31/05/2017</td>
//                <td><span className="badge badge-purple">Work in Progress</span>
//                </td>
//                <td>Adminto admin</td>
//               </tr>
//               <tr>
//                <td>5</td>
//                <td>Adminto Admin v1.3</td>
//                <td>01/01/2017</td>
//                <td>31/05/2017</td>
//                <td><span className="badge badge-warning">Coming soon</span></td>
//                <td>Coderthemes</td>
//               </tr>

//               <tr>
//                <td>6</td>
//                <td>Adminto Admin v1.3</td>
//                <td>01/01/2017</td>
//                <td>31/05/2017</td>
//                <td><span className="badge badge-primary">Coming soon</span></td>
//                <td>Adminto admin</td>
//               </tr>

//              </tbody>
//             </table>
//            </div>
//           </div>
//          </div>

//         </div>


//        </div>

//       </div>
//       <footer className="footer">
//        <div className="container-fluid">
//         <div className="row">
//          <div className="col-md-6">
//           2016 - 2020 &copy; Adminto theme by <a href="">Coderthemes</a>
//          </div>
//          <div className="col-md-6">
//           <div className="text-md-right footer-links d-none d-sm-block">
//            <a href="javascript:void(0);">About Us</a>
//            <a href="javascript:void(0);">Help</a>
//            <a href="javascript:void(0);">Contact Us</a>
//           </div>
//          </div>
//         </div>
//        </div>
//       </footer>


//      </div>




//     </div>

//     <div className="right-bar">
//      <div className="rightbar-title">
//       <a href="javascript:void(0);" className="right-bar-toggle float-right">
//        <i className="mdi mdi-close"></i>
//       </a>
//       <h4 className="font-16 m-0 text-white">Theme Customizer</h4>
//      </div>
//      <div className="slimscroll-menu">

//       <div className="p-3">
//        <div className="alert alert-warning" role="alert">
//         <strong>Customize </strong> the overall color scheme, layout, etc.
//                     </div>
//        <div className="mb-2">
//         <img src="assets/images/layouts/light.png" className="img-fluid img-thumbnail" alt="" />
//        </div>
//        <div className="custom-control custom-switch mb-3">
//         <input type="checkbox" className="custom-control-input theme-choice" id="light-mode-switch" checked />
//         <label className="custom-control-label" for="light-mode-switch">Light Mode</label>
//        </div>

//        <div className="mb-2">
//         <img src="assets/images/layouts/dark.png" className="img-fluid img-thumbnail" alt="" />
//        </div>
//        <div className="custom-control custom-switch mb-3">
//         <input type="checkbox" className="custom-control-input theme-choice" id="dark-mode-switch" data-bsStyle="assets/css/bootstrap-dark.min.css"
//          data-appStyle="assets/css/app-dark.min.css" />
//         <label className="custom-control-label" for="dark-mode-switch">Dark Mode</label>
//        </div>

//        <div className="mb-2">
//         <img src="assets/images/layouts/rtl.png" className="img-fluid img-thumbnail" alt="" />
//        </div>
//        <div className="custom-control custom-switch mb-3">
//         <input type="checkbox" className="custom-control-input theme-choice" id="rtl-mode-switch" data-appStyle="assets/css/app-rtl.min.css" />
//         <label className="custom-control-label" for="rtl-mode-switch">RTL Mode</label>
//        </div>

//        <div className="mb-2">
//         <img src="assets/images/layouts/dark-rtl.png" className="img-fluid img-thumbnail" alt="" />
//        </div>
//        <div className="custom-control custom-switch mb-5">
//         <input type="checkbox" className="custom-control-input theme-choice" id="dark-rtl-mode-switch" data-bsStyle="assets/css/bootstrap-dark.min.css"
//          data-appStyle="assets/css/app-dark-rtl.min.css" />
//         <label className="custom-control-label" for="dark-rtl-mode-switch">Dark RTL Mode</label>
//        </div>

//        <a href="https://1.envato.market/k0YEM" className="btn btn-danger btn-block mt-3" target="_blank"><i className="mdi mdi-download mr-1"></i> Download Now</a>
//       </div>
//      </div>
//     </div>



//     <div className="rightbar-overlay"></div>

//     <a href="javascript:void(0);" className="right-bar-toggle demos-show-btn">
//      <i className="mdi mdi-cog-outline mdi-spin"></i> &nbsp;Choose Demos
//         </a>


//    </div>
//    </>
//   )
//  }
// }
