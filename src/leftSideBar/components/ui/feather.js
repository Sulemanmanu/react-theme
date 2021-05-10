import React, { Component } from 'react'

export default class Feather extends Component {
 render() {
  return (
   <div>
    <div id="wrapper">

     <div className="navbar-custom">
      <ul className="list-unstyled topnav-menu float-right mb-0">

       <li className="d-none d-sm-block">
        <form className="app-search">
         <div className="app-search-box">
          <div className="input-group">
           <input type="text" className="form-control" placeholder="Search..." />
           <div className="input-group-append">
            <button className="btn" type="submit">
             <i className="fe-search"></i>
            </button>
           </div>
          </div>
         </div>
        </form>
       </li>

       <li className="dropdown notification-list">
        <a className="nav-link dropdown-toggle  waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
         <i className="fe-bell noti-icon"></i>
         <span className="badge badge-danger rounded-circle noti-icon-badge">9</span>
        </a>
        <div className="dropdown-menu dropdown-menu-right dropdown-lg">


         <div className="dropdown-item noti-title">
          <h5 className="m-0">
           <span className="float-right">
            <a href="" className="text-dark">
             <small>Clear All</small>
            </a>
           </span>Notification
                                </h5>
         </div>

         <div className="slimscroll noti-scroll">


          <a href="javascript:void(0);" className="dropdown-item notify-item active">
           <div className="notify-icon">
            <img src="assets/images/users/user-1.jpg" className="img-fluid rounded-circle" alt="" /> </div>
           <p className="notify-details">Cristina Pride</p>
           <p className="text-muted mb-0 user-msg">
            <small>Hi, How are you? What about our next meeting</small>
           </p>
          </a>


          <a href="javascript:void(0);" className="dropdown-item notify-item">
           <div className="notify-icon bg-primary">
            <i className="mdi mdi-comment-account-outline"></i>
           </div>
           <p className="notify-details">Caleb Flakelar commented on Admin
                                        <small className="text-muted">1 min ago</small>
           </p>
          </a>


          <a href="javascript:void(0);" className="dropdown-item notify-item">
           <div className="notify-icon">
            <img src="assets/images/users/user-4.jpg" className="img-fluid rounded-circle" alt="" /> </div>
           <p className="notify-details">Karen Robinson</p>
           <p className="text-muted mb-0 user-msg">
            <small>Wow ! this admin looks good and awesome design</small>
           </p>
          </a>


          <a href="javascript:void(0);" className="dropdown-item notify-item">
           <div className="notify-icon bg-warning">
            <i className="mdi mdi-account-plus"></i>
           </div>
           <p className="notify-details">New user registered.
                                        <small className="text-muted">5 hours ago</small>
           </p>
          </a>


          <a href="javascript:void(0);" className="dropdown-item notify-item">
           <div className="notify-icon bg-info">
            <i className="mdi mdi-comment-account-outline"></i>
           </div>
           <p className="notify-details">Caleb Flakelar commented on Admin
                                        <small className="text-muted">4 days ago</small>
           </p>
          </a>


          <a href="javascript:void(0);" className="dropdown-item notify-item">
           <div className="notify-icon bg-secondary">
            <i className="mdi mdi-heart"></i>
           </div>
           <p className="notify-details">Carlos Crouch liked
                                        <b>Admin</b>
            <small className="text-muted">13 days ago</small>
           </p>
          </a>
         </div>

         <a href="javascript:void(0);" className="dropdown-item text-center text-primary notify-item notify-all">
          View all
                                <i className="fi-arrow-right"></i>
         </a>

        </div>
       </li>

       <li className="dropdown notification-list">
        <a className="nav-link dropdown-toggle nav-user mr-0 waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
         <img src="assets/images/users/user-1.jpg" alt="user-image" className="rounded-circle" />
         <span className="pro-user-name ml-1">
          Nowak <i className="mdi mdi-chevron-down"></i>
         </span>
        </a>
        <div className="dropdown-menu dropdown-menu-right profile-dropdown ">

         <div className="dropdown-header noti-title">
          <h6 className="text-overflow m-0">Welcome !</h6>
         </div>


         <a href="javascript:void(0);" className="dropdown-item notify-item">
          <i className="fe-user"></i>
          <span>My Account</span>
         </a>


         <a href="javascript:void(0);" className="dropdown-item notify-item">
          <i className="fe-settings"></i>
          <span>Settings</span>
         </a>


         <a href="javascript:void(0);" className="dropdown-item notify-item">
          <i className="fe-lock"></i>
          <span>Lock Screen</span>
         </a>

         <div className="dropdown-divider"></div>


         <a href="javascript:void(0);" className="dropdown-item notify-item">
          <i className="fe-log-out"></i>
          <span>Logout</span>
         </a>

        </div>
       </li>

       <li className="dropdown notification-list">
        <a href="javascript:void(0);" className="nav-link right-bar-toggle waves-effect">
         <i className="fe-settings noti-icon"></i>
        </a>
       </li>


      </ul>

      <div className="logo-box">
       <a href="index.html" className="logo logo-dark text-center">
        <span className="logo-lg">
         <img src="assets/images/logo-dark.png" alt="" height="16" />
        </span>
        <span className="logo-sm">
         <img src="assets/images/logo-sm.png" alt="" height="24" />
        </span>
       </a>
       <a href="index.html" className="logo logo-light text-center">
        <span className="logo-lg">
         <img src="assets/images/logo-light.png" alt="" height="16" />
        </span>
        <span className="logo-sm">
         <img src="assets/images/logo-sm.png" alt="" height="24" />
        </span>
       </a>
      </div>

      <ul className="list-unstyled topnav-menu topnav-menu-left mb-0">
       <li>
        <button className="button-menu-mobile disable-btn waves-effect">
         <i className="fe-menu"></i>
        </button>
       </li>

       <li>
        <h4 className="page-title-main">Feather Icons</h4>
       </li>

      </ul>

     </div>

     <div className="left-side-menu">

      <div className="slimscroll-menu">

       <div className="user-box text-center">
        <img src="assets/images/users/user-1.jpg" alt="user-img" title="Mat Helme" className="rounded-circle img-thumbnail avatar-md"/>
         <div className="dropdown">
          <a href="#" className="user-name dropdown-toggle h5 mt-2 mb-1 d-block" data-toggle="dropdown" aria-expanded="false">Nowak Helme</a>
          <div className="dropdown-menu user-pro-dropdown">


           <a href="javascript:void(0);" className="dropdown-item notify-item">
            <i className="fe-user mr-1"></i>
            <span>My Account</span>
           </a>


           <a href="javascript:void(0);" className="dropdown-item notify-item">
            <i className="fe-settings mr-1"></i>
            <span>Settings</span>
           </a>


           <a href="javascript:void(0);" className="dropdown-item notify-item">
            <i className="fe-lock mr-1"></i>
            <span>Lock Screen</span>
           </a>


           <a href="javascript:void(0);" className="dropdown-item notify-item">
            <i className="fe-log-out mr-1"></i>
            <span>Logout</span>
           </a>

          </div>
         </div>
         <p className="text-muted">Admin Head</p>
         <ul className="list-inline">
          <li className="list-inline-item">
           <a href="#" className="text-muted">
            <i className="mdi mdi-cog"></i>
           </a>
          </li>

          <li className="list-inline-item">
           <a href="#">
            <i className="mdi mdi-power"></i>
           </a>
          </li>
         </ul>
                    </div>

        <div id="sidebar-menu">

         <ul className="metismenu" id="side-menu">

          <li className="menu-title">Navigation</li>

          <li>
           <a href="index.html">
            <i className="mdi mdi-view-dashboard"></i>
            <span> Dashboard </span>
           </a>
          </li>

          <li>
           <a href="javascript: void(0);">
            <i className="mdi mdi-page-layout-sidebar-left"></i>
            <span> Layouts </span>
            <span className="menu-arrow"></span>
           </a>
           <ul className="nav-second-level" aria-expanded="false">
            <li><a href="layouts-horizontal.html">Horizontal</a></li>
            <li><a href="layouts-sidebar-sm.html">Small Sidebar</a></li>
            <li><a href="layouts-dark-sidebar.html">Dark Sidebar</a></li>
            <li><a href="layouts-dark-topbar.html">Dark Topbar</a></li>
            <li><a href="layouts-preloader.html">Preloader</a></li>
            <li><a href="layouts-sidebar-collapsed.html">Sidebar Collapsed</a></li>
            <li><a href="layouts-boxed.html">Boxed</a></li>
           </ul>
          </li>

          <li className="menu-title">Apps</li>

          <li>
           <a href="apps-chat.html">
            <i className="mdi mdi-forum"></i>
            <span className="badge badge-purple float-right">New</span>
            <span> Chat </span>
           </a>
          </li>

          <li>
           <a href="calendar.html">
            <i className="mdi mdi-calendar"></i>
            <span> Calendar </span>
           </a>
          </li>

          <li>
           <a href="inbox.html">
            <i className="mdi mdi-email"></i>
            <span> Mail </span>
           </a>
          </li>

          <li className="menu-title">Components</li>

          <li>
           <a href="ui-typography.html">
            <i className="mdi mdi-format-font"></i>
            <span> Typography </span>
           </a>
          </li>

          <li>
           <a href="javascript: void(0);">
            <i className="mdi mdi-invert-colors"></i>
            <span> User Interface </span>
            <span className="menu-arrow"></span>
           </a>
           <ul className="nav-second-level" aria-expanded="false">
            <li><a href="ui-buttons.html">Buttons</a></li>
            <li><a href="ui-cards.html">Cards</a></li>
            <li><a href="ui-draggable-cards.html">Draggable Cards</a></li>
            <li><a href="ui-checkbox-radio.html">Checkboxs-Radios</a></li>
            <li><a href="ui-material-icons.html">Material Design</a></li>
            <li><a href="ui-font-awesome-icons.html">Font Awesome 5</a></li>
            <li><a href="ui-dripicons.html">Dripicons</a></li>
            <li><a href="ui-feather-icons.html">Feather Icons</a></li>
            <li><a href="ui-themify-icons.html">Themify Icons</a></li>
            <li><a href="ui-modals.html">Modals</a></li>
            <li><a href="ui-notification.html">Notification</a></li>
            <li><a href="ui-range-slider.html">Range Slider</a></li>
            <li><a href="ui-components.html">Components</a></li>
            <li><a href="ui-sweetalert.html">Sweet Alert</a></li>
            <li><a href="ui-treeview.html">Tree view</a></li>
            <li><a href="ui-widgets.html">Widgets</a></li>
           </ul>
          </li>

          <li>
           <a href="javascript: void(0);">
            <i className="mdi mdi-texture"></i>
            <span className="badge badge-warning float-right">7</span>
            <span> Forms </span>
           </a>
           <ul className="nav-second-level" aria-expanded="false">
            <li><a href="form-elements.html">General Elements</a></li>
            <li><a href="form-advanced.html">Advanced Form</a></li>
            <li><a href="form-validation.html">Form Validation</a></li>
            <li><a href="form-wizard.html">Form Wizard</a></li>
            <li><a href="form-fileupload.html">Form Uploads</a></li>
            <li><a href="form-quilljs.html">Quilljs Editor</a></li>
            <li><a href="form-xeditable.html">X-editable</a></li>
           </ul>
          </li>

          <li>
           <a href="javascript: void(0);">
            <i className="mdi mdi-view-list"></i>
            <span> Tables </span>
            <span className="menu-arrow"></span>
           </a>
           <ul className="nav-second-level" aria-expanded="false">
            <li><a href="tables-basic.html">Basic Tables</a></li>
            <li><a href="tables-datatable.html">Data Tables</a></li>
            <li><a href="tables-responsive.html">Responsive Table</a></li>
            <li><a href="tables-editable.html">Editable Table</a></li>
            <li><a href="tables-tablesaw.html">Tablesaw Table</a></li>
           </ul>
          </li>

          <li>
           <a href="javascript: void(0);">
            <i className="mdi mdi-chart-donut-variant"></i>
            <span> Charts </span>
            <span className="menu-arrow"></span>
           </a>
           <ul className="nav-second-level" aria-expanded="false">
            <li><a href="charts-flot.html">Flot Charts</a></li>
            <li><a href="charts-morris.html">Morris Charts</a></li>
            <li><a href="charts-chartist.html">Chartist Charts</a></li>
            <li><a href="charts-chartjs.html">Chartjs Charts</a></li>
            <li><a href="charts-other.html">Other Charts</a></li>
           </ul>
          </li>


          <li>
           <a href="javascript: void(0);">
            <i className="mdi mdi-file-multiple"></i>
            <span> Pages </span>
            <span className="menu-arrow"></span>
           </a>
           <ul className="nav-second-level" aria-expanded="false">
            <li><a href="pages-starter.html">Starter Page</a></li>
            <li><a href="pages-login.html">Login</a></li>
            <li><a href="pages-register.html">Register</a></li>
            <li><a href="pages-recoverpw.html">Recover Password</a></li>
            <li><a href="pages-lock-screen.html">Lock Screen</a></li>
            <li><a href="pages-confirm-mail.html">Confirm Mail</a></li>
            <li><a href="pages-404.html">Error 404</a></li>
            <li><a href="pages-500.html">Error 500</a></li>
           </ul>
          </li>

          <li>
           <a href="javascript: void(0);">
            <i className="mdi mdi-layers"></i>
            <span> Extra Pages </span>
            <span className="menu-arrow"></span>
           </a>
           <ul className="nav-second-level" aria-expanded="false">
            <li><a href="extras-projects.html">Projects</a></li>
            <li><a href="extras-tour.html">Tour</a></li>
            <li><a href="extras-taskboard.html">Taskboard</a></li>
            <li><a href="extras-taskdetail.html">Task Detail</a></li>
            <li><a href="extras-profile.html">Profile</a></li>
            <li><a href="extras-maps.html">Maps</a></li>
            <li><a href="extras-contact.html">Contact list</a></li>
            <li><a href="extras-pricing.html">Pricing</a></li>
            <li><a href="extras-timeline.html">Timeline</a></li>
            <li><a href="extras-invoice.html">Invoice</a></li>
            <li><a href="extras-faq.html">FAQs</a></li>
            <li><a href="extras-gallery.html">Gallery</a></li>
            <li><a href="extras-email-templates.html">Email Templates</a></li>
            <li><a href="extras-maintenance.html">Maintenance</a></li>
            <li><a href="extras-comingsoon.html">Coming Soon</a></li>
           </ul>
          </li>

          <li>
           <a href="javascript: void(0);">
            <i className="mdi mdi-share-variant"></i>
            <span> Multi Level </span>
            <span className="menu-arrow"></span>
           </a>
           <ul className="nav-second-level nav" aria-expanded="false">
            <li>
             <a href="javascript: void(0);">Level 1.1</a>
            </li>
            <li>
             <a href="javascript: void(0);" aria-expanded="false">Level 1.2
                                            <span className="menu-arrow"></span>
             </a>
             <ul className="nav-third-level nav" aria-expanded="false">
              <li>
               <a href="javascript: void(0);">Level 2.1</a>
              </li>
              <li>
               <a href="javascript: void(0);">Level 2.2</a>
              </li>
             </ul>
            </li>
           </ul>
          </li>
         </ul>

        </div>

        <div className="clearfix"></div>

       </div>

      </div>


      <div className="content-page">
       <div className="content">

        <div className="container-fluid">

         <div className="row">
          <div className="col-12">
           <div className="card-box">
            <div className="row icons-list-demo">
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-alert-octagon"></i> fe-alert-octagon
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-alert-circle"></i> fe-alert-circle
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-activity"></i> fe-activity
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-alert-triangle"></i> fe-alert-triangle
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-align-center"></i> fe-align-center
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-airplay"></i> fe-airplay
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-align-justify"></i> fe-align-justify
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-align-left"></i> fe-align-left
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-align-right"></i> fe-align-right
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-arrow-down-left"></i> fe-arrow-down-left
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-arrow-down-right"></i> fe-arrow-down-right
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-anchor"></i> fe-anchor
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-aperture"></i> fe-aperture
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-arrow-left"></i> fe-arrow-left
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-arrow-right"></i> fe-arrow-right
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-arrow-down"></i> fe-arrow-down
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-arrow-up-left"></i> fe-arrow-up-left
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-arrow-up-right"></i> fe-arrow-up-right
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-arrow-up"></i> fe-arrow-up
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-award"></i> fe-award
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-bar-chart"></i> fe-bar-chart
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-at-sign"></i> fe-at-sign
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-bar-chart-2"></i> fe-bar-chart-2
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-battery-charging"></i> fe-battery-charging
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-bell-off"></i> fe-bell-off
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-battery"></i> fe-battery
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-bluetooth"></i> fe-bluetooth
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-bell"></i> fe-bell
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-book"></i> fe-book
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-briefcase"></i> fe-briefcase
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-camera-off"></i> fe-camera-off
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-calendar"></i> fe-calendar
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-bookmark"></i> fe-bookmark
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-box"></i> fe-box
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-camera"></i> fe-camera
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-check-circle"></i> fe-check-circle
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-check"></i> fe-check
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-check-square"></i> fe-check-square
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-cast"></i> fe-cast
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-chevron-down"></i> fe-chevron-down
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-chevron-left"></i> fe-chevron-left
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-chevron-right"></i> fe-chevron-right
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-chevron-up"></i> fe-chevron-up
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-chevrons-down"></i> fe-chevrons-down
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-chevrons-right"></i> fe-chevrons-right
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-chevrons-up"></i> fe-chevrons-up
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-chevrons-left"></i> fe-chevrons-left
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-circle"></i> fe-circle
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-clipboard"></i> fe-clipboard
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-chrome"></i> fe-chrome
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-clock"></i> fe-clock
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-cloud-lightning"></i> fe-cloud-lightning
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-cloud-drizzle"></i> fe-cloud-drizzle
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-cloud-rain"></i> fe-cloud-rain
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-cloud-off"></i> fe-cloud-off
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-codepen"></i> fe-codepen
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-cloud-snow"></i> fe-cloud-snow
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-compass"></i> fe-compass
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-copy"></i> fe-copy
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-corner-down-right"></i> fe-corner-down-right
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-corner-down-left"></i> fe-corner-down-left
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-corner-left-down"></i> fe-corner-left-down
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-corner-left-up"></i> fe-corner-left-up
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-corner-up-left"></i> fe-corner-up-left
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-corner-up-right"></i> fe-corner-up-right
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-corner-right-down"></i> fe-corner-right-down
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-corner-right-up"></i> fe-corner-right-up
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-cpu"></i> fe-cpu
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-credit-card"></i> fe-credit-card
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-crosshair"></i> fe-crosshair
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-disc"></i> fe-disc
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-delete"></i> fe-delete
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-download-cloud"></i> fe-download-cloud
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-download"></i> fe-download
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-droplet"></i> fe-droplet
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-edit-2"></i> fe-edit-2
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-edit"></i> fe-edit
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-edit-1"></i> fe-edit-1
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-external-link"></i> fe-external-link
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-eye"></i> fe-eye
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-feather"></i> fe-feather
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-facebook"></i> fe-facebook
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-file-minus"></i> fe-file-minus
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-eye-off"></i> fe-eye-off
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-fast-forward"></i> fe-fast-forward
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-file-text"></i> fe-file-text
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-film"></i> fe-film
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-file"></i> fe-file
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-file-plus"></i> fe-file-plus
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-folder"></i> fe-folder
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-filter"></i> fe-filter
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-flag"></i> fe-flag
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-globe"></i> fe-globe
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-grid"></i> fe-grid
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-heart"></i> fe-heart
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-home"></i> fe-home
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-github"></i> fe-github
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-image"></i> fe-image
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-inbox"></i> fe-inbox
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-layers"></i> fe-layers
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-info"></i> fe-info
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-instagram"></i> fe-instagram
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-layout"></i> fe-layout
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-link-2"></i> fe-link-2
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-life-buoy"></i> fe-life-buoy
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-link"></i> fe-link
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-log-in"></i> fe-log-in
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-list"></i> fe-list
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-lock"></i> fe-lock
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-log-out"></i> fe-log-out
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-loader"></i> fe-loader
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-mail"></i> fe-mail
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-maximize-2"></i> fe-maximize-2
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-map"></i> fe-map
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-maximize"></i> fe-maximize
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-map-pin"></i> fe-map-pin
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-menu"></i> fe-menu
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-message-circle"></i> fe-message-circle
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-message-square"></i> fe-message-square
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-minimize-2"></i> fe-minimize-2
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-minimize"></i> fe-minimize
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-mic-off"></i> fe-mic-off
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-minus-circle"></i> fe-minus-circle
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-mic"></i> fe-mic
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-minus-square"></i> fe-minus-square
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-minus"></i> fe-minus
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-moon"></i> fe-moon
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-monitor"></i> fe-monitor
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-more-vertical"></i> fe-more-vertical
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-more-horizontal"></i> fe-more-horizontal
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-move"></i> fe-move
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-music"></i> fe-music
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-navigation-2"></i> fe-navigation-2
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-navigation"></i> fe-navigation
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-octagon"></i> fe-octagon
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-package"></i> fe-package
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-pause-circle"></i> fe-pause-circle
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-pause"></i> fe-pause
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-percent"></i> fe-percent
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-phone-call"></i> fe-phone-call
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-phone-forwarded"></i> fe-phone-forwarded
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-phone-missed"></i> fe-phone-miss
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-phone-off"></i> fe-phone-off
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-phone-incoming"></i> fe-phone-incoming
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-phone"></i> fe-phone
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-phone-outgoing"></i> fe-phone-outgoing
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-pie-chart"></i> fe-pie-chart
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-play-circle"></i> fe-play-circle
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-play"></i> fe-play
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-plus-square"></i> fe-plus-square
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-plus-circle"></i> fe-plus-circle
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-plus"></i> fe-plus
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-pocket"></i> fe-pocket
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-printer"></i> fe-printer
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-power"></i> fe-power
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-radio"></i> fe-radio
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-repeat"></i> fe-repeat
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-refresh-ccw"></i> fe-refresh-ccw
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-rewind"></i> fe-rewind
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-rotate-ccw"></i> fe-rotate-ccw
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-refresh-cw"></i> fe-refresh-cw
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-rotate-cw"></i> fe-rotate-cw
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-save"></i> fe-save
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-search"></i> fe-search
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-server"></i> fe-server
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-scissors"></i> fe-scissors
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-share-2"></i> fe-share-2
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-share"></i> fe-share
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-shield"></i> fe-shield
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-settings"></i> fe-settings
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-skip-back"></i> fe-skip-back
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-shuffle"></i> fe-shuffle
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-sidebar"></i> fe-sidebar
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-skip-forward"></i> fe-skip-forward
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-slack"></i> fe-slack
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-slash"></i> fe-slash
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-smartphone"></i> fe-smartphone
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-square"></i> fe-square
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-speaker"></i> fe-speaker
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-star"></i> fe-star
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-stop-circle"></i> fe-stop-circle
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-sun"></i> fe-sun
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-sunrise"></i> fe-sunrise
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-tablet"></i> fe-tablet
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-tag"></i> fe-tag
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-sunset"></i> fe-sunset
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-target"></i> fe-target
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-thermometer"></i> fe-thermometer
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-thumbs-up"></i> fe-thumbs-up
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-thumbs-down"></i> fe-thumbs-down
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-toggle-left"></i> fe-toggle-left
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-toggle-right"></i> fe-toggle-right
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-trash-2"></i> fe-trash-2
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-trash"></i> fe-trash
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-trending-up"></i> fe-trending-up
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-trending-down"></i> fe-trending-down
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-triangle"></i> fe-triangle
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-type"></i> fe-type
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-twitter"></i> fe-twitter
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-upload"></i> fe-upload
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-umbrella"></i> fe-umbrella
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-upload-cloud"></i> fe-upload-cloud
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-unlock"></i> fe-unlock
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-user-check"></i> fe-user-check
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-user-minus"></i> fe-user-minus
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-user-plus"></i> fe-user-plus
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-user-x"></i> fe-user-x
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-user"></i> fe-user
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-users"></i> fe-users
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-video-off"></i> fe-video-off
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-video"></i> fe-video
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-voicemail"></i> fe-voicemail
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-volume-x"></i> fe-volume-x
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-volume-1"></i> fe-volume-1
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-volume-2"></i> fe-volume-2
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-volume"></i> fe-volume
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-watch"></i> fe-watch
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-wifi"></i> fe-wifi
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-x-square"></i> fe-x-square
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-wind"></i> fe-wind
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-x"></i> fe-x
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-x-circle"></i> fe-x-circle
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-zap"></i> fe-zap
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-zoom-in"></i> fe-zoom-in
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-zoom-out"></i> fe-zoom-out
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-command"></i> fe-command
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-cloud"></i> fe-cloud
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-hash"></i> fe-hash
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-headphones"></i> fe-headphones
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-underline"></i> fe-underline
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-italic"></i> fe-italic
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-bold"></i> fe-bold
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-crop"></i> fe-crop
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-help-circle"></i> fe-help-circle
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-paperclip"></i> fe-paperclip
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-shopping-cart"></i> fe-shopping-cart
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-tv"></i> fe-tv
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-wifi-off"></i> fe-wifi-off
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-gitlab"></i> fe-gitlab
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-sliders"></i> fe-sliders
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-star-on"></i> fe-star-on
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-heart-on"></i> fe-heart-on
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-archive"></i> fe-archive
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-arrow-down-circle"></i> fe-arrow-down-circle
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-arrow-up-circle"></i> fe-arrow-up-circle
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-arrow-left-circle"></i> fe-arrow-left-circle
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-arrow-right-circle"></i> fe-arrow-right-circle
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-bar-chart-line-"></i> fe-bar-chart-line-
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-bar-chart-line"></i> fe-bar-chart-line
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-book-open"></i> fe-book-open
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-code"></i> fe-code
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-database"></i> fe-database
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-dollar-sign"></i> fe-dollar-sign
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-folder-plus"></i> fe-folder-plus
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-gift"></i> fe-gift
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-folder-minus"></i> fe-folder-minus
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-git-commit"></i> fe-git-commit
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-git-branch"></i> fe-git-branch
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-git-pull-request"></i> fe-git-pull-request
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-git-merge"></i> fe-git-merge
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-linkedin"></i> fe-linkedin
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-hard-drive"></i> fe-hard-drive
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-more-vertical-"></i> fe-more-vertical-
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-more-horizontal-"></i> fe-more-horizontal-
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-rss"></i> fe-rss
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-send"></i> fe-send
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-shield-off"></i> fe-shield-off
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-shopping-bag"></i> fe-shopping-bag
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-terminal"></i> fe-terminal
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-truck"></i> fe-truck
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-zap-off"></i> fe-zap-off
                                        </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="fe-youtube"></i> fe-youtube
                                        </div>

            </div>

           </div>
          </div>
         </div>


        </div>

       </div>

       <footer className="footer">
        <div className="container-fluid">
         <div className="row">
          <div className="col-md-6">
           2016 - 2020 &copy; Adminto theme by <a href="">Coderthemes</a>
          </div>
          <div className="col-md-6">
           <div className="text-md-right footer-links d-none d-sm-block">
            <a href="javascript:void(0);">About Us</a>
            <a href="javascript:void(0);">Help</a>
            <a href="javascript:void(0);">Contact Us</a>
           </div>
          </div>
         </div>
        </div>
       </footer>

      </div>

     </div>

     <div className="right-bar">
      <div className="rightbar-title">
       <a href="javascript:void(0);" className="right-bar-toggle float-right">
        <i className="mdi mdi-close"></i>
       </a>
       <h4 className="font-16 m-0 text-white">Theme Customizer</h4>
      </div>
      <div className="slimscroll-menu">

       <div className="p-3">
        <div className="alert alert-warning" role="alert">
         <strong>Customize </strong> the overall color scheme, layout, etc.
                    </div>
        <div className="mb-2">
         <img src="assets/images/layouts/light.png" className="img-fluid img-thumbnail" alt="" />
        </div>
        <div className="custom-control custom-switch mb-3">
         <input type="checkbox" className="custom-control-input theme-choice" id="light-mode-switch" checked />
         <label className="custom-control-label" for="light-mode-switch">Light Mode</label>
        </div>

        <div className="mb-2">
         <img src="assets/images/layouts/dark.png" className="img-fluid img-thumbnail" alt="" />
        </div>
        <div className="custom-control custom-switch mb-3">
         <input type="checkbox" className="custom-control-input theme-choice" id="dark-mode-switch" data-bsStyle="assets/css/bootstrap-dark.min.css"
          data-appStyle="assets/css/app-dark.min.css" />
         <label className="custom-control-label" for="dark-mode-switch">Dark Mode</label>
        </div>

        <div className="mb-2">
         <img src="assets/images/layouts/rtl.png" className="img-fluid img-thumbnail" alt="" />
        </div>
        <div className="custom-control custom-switch mb-3">
         <input type="checkbox" className="custom-control-input theme-choice" id="rtl-mode-switch" data-appStyle="assets/css/app-rtl.min.css" />
         <label className="custom-control-label" for="rtl-mode-switch">RTL Mode</label>
        </div>

        <div className="mb-2">
         <img src="assets/images/layouts/dark-rtl.png" className="img-fluid img-thumbnail" alt="" />
        </div>
        <div className="custom-control custom-switch mb-5">
         <input type="checkbox" className="custom-control-input theme-choice" id="dark-rtl-mode-switch" data-bsStyle="assets/css/bootstrap-dark.min.css"
          data-appStyle="assets/css/app-dark-rtl.min.css" />
         <label className="custom-control-label" for="dark-rtl-mode-switch">Dark RTL Mode</label>
        </div>

        <a href="https://1.envato.market/k0YEM" className="btn btn-danger btn-block mt-3" target="_blank"><i className="mdi mdi-download mr-1"></i> Download Now</a>
       </div>
      </div>
     </div>

     <div className="rightbar-overlay"></div>

     <a href="javascript:void(0);" className="right-bar-toggle demos-show-btn">
      <i className="mdi mdi-cog-outline mdi-spin"></i> &nbsp;Choose Demos
        </a>

    </div>
        )
    }
}
