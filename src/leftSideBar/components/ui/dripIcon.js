import React, { Component } from 'react'

export default class Dripicon extends Component {
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
           <input type="text" className="form-control" placeholder="Search..."/>
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
          <img src="assets/images/users/user-1.jpg" alt="user-image" className="rounded-circle"/>
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
          <h4 className="page-title-main">Dripicons</h4>
         </li>

        </ul>

            </div>

       <div className="left-side-menu">

        <div className="slimscroll-menu">

         <div className="user-box text-center">
          <img src="assets/images/users/user-1.jpg" alt="user-img" title="Mat Helme" className="rounded-circle img-thumbnail avatar-md" />
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
            <div className="card">
             <div className="card-body">
              <h4 className="mt-0 header-title">Examples</h4>
              <p className="text-muted mb-4">Use <code>&lt;i className="dripicons-alarm"&gt;&lt;/i&gt;</code>.
                                        </p>
              <div className="row icons-list-demo">
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-alarm"></i> dripicons-alarm
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-align-center"></i> dripicons-align-center
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-align-justify"></i> dripicons-align-justify
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-align-left"></i> dripicons-align-left
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-align-right"></i> dripicons-align-right
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-anchor"></i> dripicons-anchor
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-archive"></i> dripicons-archive
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-arrow-down"></i> dripicons-arrow-down
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-arrow-left"></i> dripicons-arrow-left
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-arrow-right"></i> dripicons-arrow-right
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-arrow-thin-down"></i> dripicons-arrow-thin-down
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-arrow-thin-left"></i> dripicons-arrow-thin-left
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-arrow-thin-right"></i> dripicons-arrow-thin-right
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-arrow-thin-up"></i> dripicons-arrow-thin-up
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-arrow-up"></i> dripicons-arrow-up
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-article"></i> dripicons-article
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-backspace"></i> dripicons-backspace
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-basket"></i> dripicons-basket
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-basketball"></i> dripicons-basketball
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-battery-empty"></i> dripicons-battery-empty
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-battery-full"></i> dripicons-battery-full
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-battery-low"></i> dripicons-battery-low
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-battery-medium"></i> dripicons-battery-medium
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-bell"></i> dripicons-bell
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-blog"></i> dripicons-blog
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-bluetooth"></i> dripicons-bluetooth
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-bold"></i> dripicons-bold
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-bookmark"></i> dripicons-bookmark
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-bookmarks"></i> dripicons-bookmarks
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-box"></i> dripicons-box
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-briefcase"></i> dripicons-briefcase
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-brightness-low"></i> dripicons-brightness-low
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-brightness-max"></i> dripicons-brightness-max
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-brightness-medium"></i> dripicons-brightness-medium
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-broadcast"></i> dripicons-broadcast
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-browser"></i> dripicons-browser
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-browser-upload"></i> dripicons-browser-upload
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-brush"></i> dripicons-brush
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-calendar"></i> dripicons-calendar
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-camcorder"></i> dripicons-camcorder
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-camera"></i> dripicons-camera
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-card"></i> dripicons-card
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-cart"></i> dripicons-cart
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-checklist"></i> dripicons-checklist
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-checkmark"></i> dripicons-checkmark
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-chevron-down"></i> dripicons-chevron-down
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-chevron-left"></i> dripicons-chevron-left
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-chevron-right"></i> dripicons-chevron-right
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-chevron-up"></i> dripicons-chevron-up
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-clipboard"></i> dripicons-clipboard
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-clock"></i> dripicons-clock
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-clockwise"></i> dripicons-clockwise
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-cloud"></i> dripicons-cloud
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-cloud-download"></i> dripicons-cloud-download
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-cloud-upload"></i> dripicons-cloud-upload
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-code"></i> dripicons-code
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-contract"></i> dripicons-contract
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-contract-2"></i> dripicons-contract-2
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-conversation"></i> dripicons-conversation
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-copy"></i> dripicons-copy
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-crop"></i> dripicons-crop
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-cross"></i> dripicons-cross
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-crosshair"></i> dripicons-crosshair
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-cutlery"></i> dripicons-cutlery
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-device-desktop"></i> dripicons-device-desktop
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-device-mobile"></i> dripicons-device-mobile
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-device-tablet"></i> dripicons-device-tablet
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-direction"></i> dripicons-direction
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-disc"></i> dripicons-disc
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-document"></i> dripicons-document
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-document-delete"></i> dripicons-document-delete
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-document-edit"></i> dripicons-document-edit
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-document-new"></i> dripicons-document-new
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-document-remove"></i> dripicons-document-remove
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-dot"></i> dripicons-dot
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-dots-2"></i> dripicons-dots-2
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-dots-3"></i> dripicons-dots-3
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-download"></i> dripicons-download
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-duplicate"></i> dripicons-duplicate
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-enter"></i> dripicons-enter
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-exit"></i> dripicons-exit
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-expand"></i> dripicons-expand
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-expand-2"></i> dripicons-expand-2
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-experiment"></i> dripicons-experiment
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-export"></i> dripicons-export
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-feed"></i> dripicons-feed
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-flag"></i> dripicons-flag
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-flashlight"></i> dripicons-flashlight
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-folder"></i> dripicons-folder
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-folder-open"></i> dripicons-folder-open
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-forward"></i> dripicons-forward
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-gaming"></i> dripicons-gaming
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-gear"></i> dripicons-gear
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-graduation"></i> dripicons-graduation
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-graph-bar"></i> dripicons-graph-bar
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-graph-line"></i> dripicons-graph-line
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-graph-pie"></i> dripicons-graph-pie
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-headset"></i> dripicons-headset
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-heart"></i> dripicons-heart
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-help"></i> dripicons-help
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-home"></i> dripicons-home
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-hourglass"></i> dripicons-hourglass
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-inbox"></i> dripicons-inbox
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-information"></i> dripicons-information
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-italic"></i> dripicons-italic
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-jewel"></i> dripicons-jewel
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-lifting"></i> dripicons-lifting
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-lightbulb"></i> dripicons-lightbulb
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-link"></i> dripicons-link
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-link-broken"></i> dripicons-link-broken
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-list"></i> dripicons-list
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-loading"></i> dripicons-loading
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-location"></i> dripicons-location
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-lock"></i> dripicons-lock
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-lock-open"></i> dripicons-lock-open
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-mail"></i> dripicons-mail
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-map"></i> dripicons-map
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-media-loop"></i> dripicons-media-loop
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-media-next"></i> dripicons-media-next
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-media-pause"></i> dripicons-media-pause
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-media-play"></i> dripicons-media-play
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-media-previous"></i> dripicons-media-previous
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-media-record"></i> dripicons-media-record
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-media-shuffle"></i> dripicons-media-shuffle
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-media-stop"></i> dripicons-media-stop
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-medical"></i> dripicons-medical
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-menu"></i> dripicons-menu
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-message"></i> dripicons-message
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-meter"></i> dripicons-meter
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-microphone"></i> dripicons-microphone
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-minus"></i> dripicons-minus
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-monitor"></i> dripicons-monitor
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-move"></i> dripicons-move
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-music"></i> dripicons-music
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-network-1"></i> dripicons-network-1
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-network-2"></i> dripicons-network-2
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-network-3"></i> dripicons-network-3
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-network-4"></i> dripicons-network-4
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-network-5"></i> dripicons-network-5
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-pamphlet"></i> dripicons-pamphlet
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-paperclip"></i> dripicons-paperclip
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-pencil"></i> dripicons-pencil
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-phone"></i> dripicons-phone
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-photo"></i> dripicons-photo
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-photo-group"></i> dripicons-photo-group
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-pill"></i> dripicons-pill
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-pin"></i> dripicons-pin
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-plus"></i> dripicons-plus
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-power"></i> dripicons-power
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-preview"></i> dripicons-preview
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-print"></i> dripicons-print
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-pulse"></i> dripicons-pulse
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-question"></i> dripicons-question
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-reply"></i> dripicons-reply
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-reply-all"></i> dripicons-reply-all
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-return"></i> dripicons-return
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-retweet"></i> dripicons-retweet
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-rocket"></i> dripicons-rocket
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-scale"></i> dripicons-scale
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-search"></i> dripicons-search
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-shopping-bag"></i> dripicons-shopping-bag
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-skip"></i> dripicons-skip
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-stack"></i> dripicons-stack
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-star"></i> dripicons-star
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-stopwatch"></i> dripicons-stopwatch
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-store"></i> dripicons-store
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-suitcase"></i> dripicons-suitcase
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-swap"></i> dripicons-swap
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-tag"></i> dripicons-tag
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-tag-delete"></i> dripicons-tag-delete
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-tags"></i> dripicons-tags
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-thumbs-down"></i> dripicons-thumbs-down
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-thumbs-up"></i> dripicons-thumbs-up
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-ticket"></i> dripicons-ticket
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-time-reverse"></i> dripicons-time-reverse
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-to-do"></i> dripicons-to-do
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-toggles"></i> dripicons-toggles
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-trash"></i> dripicons-trash
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-trophy"></i> dripicons-trophy
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-upload"></i> dripicons-upload
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-user"></i> dripicons-user
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-user-group"></i> dripicons-user-group
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-user-id"></i> dripicons-user-id
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-vibrate"></i> dripicons-vibrate
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-view-apps"></i> dripicons-view-apps
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-view-list"></i> dripicons-view-list
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-view-list-large"></i> dripicons-view-list-large
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-view-thumb"></i> dripicons-view-thumb
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-volume-full"></i> dripicons-volume-full
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-volume-low"></i> dripicons-volume-low
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-volume-medium"></i> dripicons-volume-medium
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-volume-off"></i> dripicons-volume-off
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-wallet"></i> dripicons-wallet
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-warning"></i> dripicons-warning
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-web"></i> dripicons-web
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-weight"></i> dripicons-weight
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-wifi"></i> dripicons-wifi
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-wrong"></i> dripicons-wrong
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-zoom-in"></i> dripicons-zoom-in
                                            </div>
               <div className="col-xl-3 col-lg-4 col-sm-6">
                <i className="dripicons-zoom-out"></i> dripicons-zoom-out
                                            </div>

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
          <input type="checkbox" className="custom-control-input theme-choice" id="light-mode-switch" defaultChecked />
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
