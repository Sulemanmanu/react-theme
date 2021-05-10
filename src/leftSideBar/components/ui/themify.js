import React, { Component } from 'react'

export default class Themify extends Component {
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
        <h4 className="page-title-main">Themify Icons</h4>
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
            <h4 className="mt-0 header-title">Arrows & Direction Icons</h4>
            <p className="text-muted mb-4 font-13">
             Use  <code>&lt;i className="ti-arrow-up"&gt;&lt;/i&gt;</code>.
                            </p>
            <div className="row icons-list-demo">
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-arrow-up"></i> ti-arrow-up
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-arrow-right"></i> ti-arrow-right
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-arrow-left"></i> ti-arrow-left
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-arrow-down"></i> ti-arrow-down
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-arrows-vertical"></i> ti-arrows-vertical
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-arrows-horizontal"></i> ti-arrows-horizontal
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-angle-up"></i> ti-angle-up
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-angle-right"></i> ti-angle-right
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-angle-left"></i> ti-angle-left
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-angle-down"></i> ti-angle-down
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-angle-double-up"></i> ti-angle-double-up
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-angle-double-right"></i> ti-angle-double-right
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-angle-double-left"></i> ti-angle-double-left
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-angle-double-down"></i> ti-angle-double-down
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-move"></i> ti-move
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-fullscreen"></i> ti-fullscreen
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-arrow-top-right"></i> ti-arrow-top-right
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-arrow-top-left"></i> ti-arrow-top-left
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-arrow-circle-up"></i> ti-arrow-circle-up
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-arrow-circle-right"></i> ti-arrow-circle-right
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-arrow-circle-left"></i> ti-arrow-circle-left
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-arrow-circle-down"></i> ti-arrow-circle-down
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-arrows-corner"></i> ti-arrows-corner
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-split-v"></i> ti-split-v
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-split-v-alt"></i> ti-split-v-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-split-h"></i> ti-split-h
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-hand-point-up"></i> ti-hand-point-up
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-hand-point-right"></i> ti-hand-point-right
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-hand-point-left"></i> ti-hand-point-left
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-hand-point-down"></i> ti-hand-point-down
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-back-right"></i> ti-back-right
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-back-left"></i> ti-back-left
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-exchange-vertical"></i> ti-exchange-vertical
                                </div>
            </div>


            <h4 className="header-title my-3">Web App Icons</h4>
            <div className="row icons-list-demo">
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-wand"></i> ti-wand
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-save"></i> ti-save
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-save-alt"></i> ti-save-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-direction"></i> ti-direction
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-direction-alt"></i> ti-direction-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-user"></i> ti-user
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-link"></i> ti-link
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-unlink"></i> ti-unlink
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-trash"></i> ti-trash
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-target"></i> ti-target
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-tag"></i> ti-tag
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-desktop"></i> ti-desktop
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-tablet"></i> ti-tablet
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-mobile"></i> ti-mobile
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-email"></i> ti-email
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-star"></i> ti-star
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-spray"></i> ti-spray
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-signal"></i> ti-signal
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-shopping-cart"></i> ti-shopping-cart
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-shopping-cart-full"></i> ti-shopping-cart-full
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-settings"></i> ti-settings
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-search"></i> ti-search
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-zoom-in"></i> ti-zoom-in
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-zoom-out"></i> ti-zoom-out
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-cut"></i> ti-cut
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-ruler"></i> ti-ruler
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-ruler-alt-2"></i> ti-ruler-alt-2
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-ruler-pencil"></i> ti-ruler-pencil
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-ruler-alt"></i> ti-ruler-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-bookmark"></i> ti-bookmark
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-bookmark-alt"></i> ti-bookmark-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-reload"></i> ti-reload
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-plus"></i> ti-plus
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-minus"></i> ti-minus
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-close"></i> ti-close
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-pin"></i> ti-pin
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-pencil"></i> ti-pencil
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-pencil-alt"></i> ti-pencil-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-paint-roller"></i> ti-paint-roller
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-paint-bucket"></i> ti-paint-bucket
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-na"></i> ti-na
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-medall"></i> ti-medall
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-medall-alt"></i> ti-medall-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-marker"></i> ti-marker
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-marker-alt"></i> ti-marker-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-lock"></i> ti-lock
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-unlock"></i> ti-unlock
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-location-arrow"></i> ti-location-arrow
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout"></i> ti-layout
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layers"></i> ti-layers
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layers-alt"></i> ti-layers-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-key"></i> ti-key
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-image"></i> ti-image
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-heart"></i> ti-heart
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-heart-broken"></i> ti-heart-broken
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-hand-stop"></i> ti-hand-stop
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-hand-open"></i> ti-hand-open
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-hand-drag"></i> ti-hand-drag
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-flag"></i> ti-flag
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-flag-alt"></i> ti-flag-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-flag-alt-2"></i> ti-flag-alt-2
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-eye"></i> ti-eye
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-import"></i> ti-import
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-export"></i> ti-export
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-cup"></i> ti-cup
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-crown"></i> ti-crown
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-comments"></i> ti-comments
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-comment"></i> ti-comment
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-comment-alt"></i> ti-comment-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-thought"></i> ti-thought
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-clip"></i> ti-clip
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-check"></i> ti-check
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-check-box"></i> ti-check-box
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-camera"></i> ti-camera
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-announcement"></i> ti-announcement
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-brush"></i> ti-brush
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-brush-alt"></i> ti-brush-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-palette"></i> ti-palette
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-briefcase"></i> ti-briefcase
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-bolt"></i> ti-bolt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-bolt-alt"></i> ti-bolt-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-blackboard"></i> ti-blackboard
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-bag"></i> ti-bag
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-world"></i> ti-world
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-wheelchair"></i> ti-wheelchair
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-car"></i> ti-car
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-truck"></i> ti-truck
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-timer"></i> ti-timer
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-ticket"></i> ti-ticket
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-thumb-up"></i> ti-thumb-up
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-thumb-down"></i> ti-thumb-down
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-stats-up"></i> ti-stats-up
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-stats-down"></i> ti-stats-down
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-shine"></i> ti-shine
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-shift-right"></i> ti-shift-right
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-shift-left"></i> ti-shift-left
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-shift-right-alt"></i> ti-shift-right-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-shift-left-alt"></i> ti-shift-left-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-shield"></i> ti-shield
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-notepad"></i> ti-notepad
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-server"></i> ti-server
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-pulse"></i> ti-pulse
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-printer"></i> ti-printer
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-power-off"></i> ti-power-off
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-plug"></i> ti-plug
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-pie-chart"></i> ti-pie-chart
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-panel"></i> ti-panel
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-package"></i> ti-package
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-music"></i> ti-music
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-music-alt"></i> ti-music-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-mouse"></i> ti-mouse
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-mouse-alt"></i> ti-mouse-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-money"></i> ti-money
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-microphone"></i> ti-microphone
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-menu"></i> ti-menu
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-menu-alt"></i> ti-menu-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-map"></i> ti-map
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-map-alt"></i> ti-map-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-location-pin"></i> ti-location-pin
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-light-bulb"></i> ti-light-bulb
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-info"></i> ti-info
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-infinite"></i> ti-infinite
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-id-badge"></i> ti-id-badge
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-hummer"></i> ti-hummer
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-home"></i> ti-home
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-help"></i> ti-help
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-headphone"></i> ti-headphone
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-harddrives"></i> ti-harddrives
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-harddrive"></i> ti-harddrive
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-gift"></i> ti-gift
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-game"></i> ti-game
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-filter"></i> ti-filter
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-files"></i> ti-files
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-file"></i> ti-file
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-zip"></i> ti-zip
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-folder"></i> ti-folder
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-envelope"></i> ti-envelope
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-dashboard"></i> ti-dashboard
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-cloud"></i> ti-cloud
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-cloud-up"></i> ti-cloud-up
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-cloud-down"></i> ti-cloud-down
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-clipboard"></i> ti-clipboard
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-calendar"></i> ti-calendar
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-book"></i> ti-book
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-bell"></i> ti-bell
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-basketball"></i> ti-basketball
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-bar-chart"></i> ti-bar-chart
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-bar-chart-alt"></i> ti-bar-chart-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-archive"></i> ti-archive
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-anchor"></i> ti-anchor
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-alert"></i> ti-alert
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-alarm-clock"></i> ti-alarm-clock
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-agenda"></i> ti-agenda
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-write"></i> ti-write
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-wallet"></i> ti-wallet
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-video-clapper"></i> ti-video-clapper
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-video-camera"></i> ti-video-camera
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-vector"></i> ti-vector
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-support"></i> ti-support
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-stamp"></i> ti-stamp
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-slice"></i> ti-slice
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-shortcode"></i> ti-shortcode
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-receipt"></i> ti-receipt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-pin2"></i> ti-pin2
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-pin-alt"></i> ti-pin-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-pencil-alt2"></i> ti-pencil-alt2
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-eraser"></i> ti-eraser
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-more"></i> ti-more
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-more-alt"></i> ti-more-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-microphone-alt"></i> ti-microphone-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-magnet"></i> ti-magnet
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-line-double"></i> ti-line-double
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-line-dotted"></i> ti-line-dotted
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-line-dashed"></i> ti-line-dashed
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-ink-pen"></i> ti-ink-pen
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-info-alt"></i> ti-info-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-help-alt"></i> ti-help-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-headphone-alt"></i> ti-headphone-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-gallery"></i> ti-gallery
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-face-smile"></i> ti-face-smile
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-face-sad"></i> ti-face-sad
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-credit-card"></i> ti-credit-card
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-comments-smiley"></i> ti-comments-smiley
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-time"></i> ti-time
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-share"></i> ti-share
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-share-alt"></i> ti-share-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-rocket"></i> ti-rocket
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-new-window"></i> ti-new-window
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-rss"></i> ti-rss
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-rss-alt"></i> ti-rss-alt
                                </div>

            </div>


            <h4 className="header-title my-3">Control Icons</h4>

            <div className="row icons-list-demo">

             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-control-stop"></i> ti-control-stop
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-control-shuffle"></i> ti-control-shuffle
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-control-play"></i> ti-control-play
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-control-pause"></i> ti-control-pause
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-control-forward"></i> ti-control-forward
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-control-backward"></i> ti-control-backward
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-volume"></i> ti-volume
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-control-skip-forward"></i> ti-control-skip-forward
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-control-skip-backward"></i> ti-control-skip-backward
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-control-record"></i> ti-control-record
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-control-eject"></i> ti-control-eject
                                </div>
            </div>


            <h4 className="header-title my-3">Text Editor</h4>

            <div className="row icons-list-demo">

             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-paragraph"></i> ti-paragraph
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-uppercase"></i> ti-uppercase
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-underline"></i> ti-underline
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-text"></i> ti-text
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-Italic"></i> ti-Italic
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-smallcap"></i> ti-smallcap
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-list"></i> ti-list
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-list-ol"></i> ti-list-ol
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-align-right"></i> ti-align-right
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-align-left"></i> ti-align-left
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-align-justify"></i> ti-align-justify
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-align-center"></i> ti-align-center
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-quote-right"></i> ti-quote-right
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-quote-left"></i> ti-quote-left
                                </div>

            </div>


            <h4 className="header-title my-3">Layout Icons</h4>

            <div className="row icons-list-demo">

             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-width-full"></i> ti-layout-width-full
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-width-default"></i> ti-layout-width-default
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-width-default-alt"></i> ti-layout-width-default-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-tab"></i> ti-layout-tab
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-tab-window"></i> ti-layout-tab-window
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-tab-v"></i> ti-layout-tab-v
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-tab-min"></i> ti-layout-tab-min
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-slider"></i> ti-layout-slider
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-slider-alt"></i> ti-layout-slider-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-sidebar-right"></i> ti-layout-sidebar-right
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-sidebar-none"></i> ti-layout-sidebar-none
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-sidebar-left"></i> ti-layout-sidebar-left
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-placeholder"></i> ti-layout-placeholder
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-menu"></i> ti-layout-menu
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-menu-v"></i> ti-layout-menu-v
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-menu-separated"></i> ti-layout-menu-separated
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-menu-full"></i> ti-layout-menu-full
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-media-right"></i> ti-layout-media-right
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-media-right-alt"></i> ti-layout-media-right-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-media-overlay"></i> ti-layout-media-overlay
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-media-overlay-alt"></i> ti-layout-media-overlay-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-media-overlay-alt-2"></i> ti-layout-media-overlay-alt-2
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-media-left"></i> ti-layout-media-left
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-media-left-alt"></i> ti-layout-media-left-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-media-center"></i> ti-layout-media-center
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-media-center-alt"></i> ti-layout-media-center-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-list-thumb"></i> ti-layout-list-thumb
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-list-thumb-alt"></i> ti-layout-list-thumb-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-list-post"></i> ti-layout-list-post
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-list-large-image"></i> ti-layout-list-large-image
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-line-solid"></i> ti-layout-line-solid
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-grid4"></i> ti-layout-grid4
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-grid3"></i> ti-layout-grid3
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-grid2"></i> ti-layout-grid2
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-grid2-thumb"></i> ti-layout-grid2-thumb
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-cta-right"></i> ti-layout-cta-right
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-cta-left"></i> ti-layout-cta-left
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-cta-center"></i> ti-layout-cta-center
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-cta-btn-right"></i> ti-layout-cta-btn-right
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-cta-btn-left"></i> ti-layout-cta-btn-left
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-column4"></i> ti-layout-column4
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-column3"></i> ti-layout-column3
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-column2"></i> ti-layout-column2
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-accordion-separated"></i> ti-layout-accordion-separated
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-accordion-merged"></i> ti-layout-accordion-merged
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-accordion-list"></i> ti-layout-accordion-list
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-widgetized"></i> ti-widgetized
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-widget"></i> ti-widget
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-widget-alt"></i> ti-widget-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-view-list"></i> ti-view-list
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-view-list-alt"></i> ti-view-list-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-view-grid"></i> ti-view-grid
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-upload"></i> ti-upload
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-download"></i> ti-download
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-loop"></i> ti-loop
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-sidebar-2"></i> ti-layout-sidebar-2
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-grid4-alt"></i> ti-layout-grid4-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-grid3-alt"></i> ti-layout-grid3-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-grid2-alt"></i> ti-layout-grid2-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-column4-alt"></i> ti-layout-column4-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-column3-alt"></i> ti-layout-column3-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-layout-column2-alt"></i> ti-layout-column2-alt
                                </div>

            </div>


            <h4 className="header-title my-3">Brand Icons</h4>

            <div className="row icons-list-demo">

             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-flickr"></i> ti-flickr
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-flickr-alt"></i> ti-flickr-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-instagram"></i> ti-instagram
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-google"></i> ti-google
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-github"></i> ti-github
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-facebook"></i> ti-facebook
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-dropbox"></i> ti-dropbox
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-dropbox-alt"></i> ti-dropbox-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-dribbble"></i> ti-dribbble
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-apple"></i> ti-apple
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-android"></i> ti-android
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-yahoo"></i> ti-yahoo
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-trello"></i> ti-trello
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-stack-overflow"></i> ti-stack-overflow
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-soundcloud"></i> ti-soundcloud
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-sharethis"></i> ti-sharethis
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-sharethis-alt"></i> ti-sharethis-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-reddit"></i> ti-reddit
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-microsoft"></i> ti-microsoft
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-microsoft-alt"></i> ti-microsoft-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-linux"></i> ti-linux
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-jsfiddle"></i> ti-jsfiddle
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-joomla"></i> ti-joomla
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-html5"></i> ti-html5
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-css3"></i> ti-css3
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-drupal"></i> ti-drupal
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-wordpress"></i> ti-wordpress
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-tumblr"></i> ti-tumblr
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-tumblr-alt"></i> ti-tumblr-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-skype"></i> ti-skype
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-youtube"></i> ti-youtube
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-vimeo"></i> ti-vimeo
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-vimeo-alt"></i> ti-vimeo-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-twitter"></i> ti-twitter
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-twitter-alt"></i> ti-twitter-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-linkedin"></i> ti-linkedin
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-pinterest"></i> ti-pinterest
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-pinterest-alt"></i> ti-pinterest-alt
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-themify-logo"></i> ti-themify-logo
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-themify-favicon"></i> ti-themify-favicon
                                </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
              <i className="ti-themify-favicon-alt"></i> ti-themify-favicon-alt
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
        <input type="checkbox" className="custom-control-input theme-choice" id="light-mode-switch" checked />
        <label className="custom-control-label" for="light-mode-switch">Light Mode</label>
       </div>

       <div className="mb-2">
        <img src="assets/images/layouts/dark.png" className="img-fluid img-thumbnail" alt="" />
       </div>
       <div className="custom-control custom-switch mb-3">
        <input type="checkbox" className="custom-control-input theme-choice" id="dark-mode-switch" data-bsstyle="assets/css/bootstrap-dark.min.css"
         data-appstyle="assets/css/app-dark.min.css" />
        <label className="custom-control-label" for="dark-mode-switch">Dark Mode</label>
       </div>

       <div className="mb-2">
        <img src="assets/images/layouts/rtl.png" className="img-fluid img-thumbnail" alt="" />
       </div>
       <div className="custom-control custom-switch mb-3">
        <input type="checkbox" className="custom-control-input theme-choice" id="rtl-mode-switch" data-appstyle="assets/css/app-rtl.min.css" />
        <label className="custom-control-label" for="rtl-mode-switch">RTL Mode</label>
       </div>

       <div className="mb-2">
        <img src="assets/images/layouts/dark-rtl.png" className="img-fluid img-thumbnail" alt="" />
       </div>
       <div className="custom-control custom-switch mb-5">
        <input type="checkbox" className="custom-control-input theme-choice" id="dark-rtl-mode-switch" data-bsstyle="assets/css/bootstrap-dark.min.css"
         data-appstyle="assets/css/app-dark-rtl.min.css" />
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
