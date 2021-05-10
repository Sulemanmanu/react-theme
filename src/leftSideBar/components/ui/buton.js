import React, { Component } from 'react'

export default class Button extends Component {
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
        <h4 className="page-title-main">Buttons</h4>
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

           <h4 className="header-title mt-0">Default Buttons</h4>

           <p className="text-muted font-13">Use the button classNamees on an <code>&lt;a&gt;</code>, <code>&lt;button&gt;</code>, or <code>&lt;input&gt;</code> element.</p>

           <div className="button-list">
            <button type="button" className="btn btn-primary waves-effect width-md waves-light">Primary</button>
            <button type="button" className="btn btn-secondary waves-effect width-md">Secondary</button>
            <button type="button" className="btn btn-success waves-effect width-md waves-light">Success</button>
            <button type="button" className="btn btn-info waves-effect width-md waves-light">Info</button>
            <button type="button" className="btn btn-warning waves-effect width-md waves-light">Warning</button>
            <button type="button" className="btn btn-danger waves-effect width-md waves-light">Danger</button>
            <button type="button" className="btn btn-dark waves-effect width-md waves-light">Dark</button>
            <button type="button" className="btn btn-purple waves-effect width-md waves-light">Purple</button>
            <button type="button" className="btn btn-pink waves-effect width-md waves-light">Pink</button>
           </div>
          </div>
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

           <h4 className="header-title mt-0">Button Rounded</h4>

           <p className="text-muted font-13">Add <code>.btn-rounded</code> to default button to get rounded corners.</p>

           <div className="button-list">
            <button type="button" className="btn btn-primary btn-rounded width-md waves-effect waves-light">Primary</button>
            <button type="button" className="btn btn-secondary btn-rounded width-md waves-effect">Secondary</button>
            <button type="button" className="btn btn-success btn-rounded width-md waves-effect waves-light">Success</button>
            <button type="button" className="btn btn-info btn-rounded width-md waves-effect waves-light">Info</button>
            <button type="button" className="btn btn-warning btn-rounded width-md waves-effect waves-light">Warning</button>
            <button type="button" className="btn btn-danger btn-rounded width-md waves-effect waves-light">Danger</button>
            <button type="button" className="btn btn-dark btn-rounded width-md waves-effect waves-light">Dark</button>
            <button type="button" className="btn btn-purple btn-rounded width-md waves-effect waves-light">Purple</button>
            <button type="button" className="btn btn-pink btn-rounded width-md waves-effect waves-light">Pink</button>
           </div>
          </div>
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

           <h4 className="header-title mt-0">Button Bordered</h4>

           <p className="text-muted font-13">Use a classNamees <code>.btn-bordered</code> to quickly create a bordered buttons.</p>
           <div className="button-list">
            <button type="button" className="btn btn-bordered-primary waves-effect  width-md waves-light">Primary</button>
            <button type="button" className="btn btn-bordered-secondary waves-effect  width-md">Secondary</button>
            <button type="button" className="btn btn-bordered-success waves-effect  width-md waves-light">Success</button>
            <button type="button" className="btn btn-bordered-info waves-effect  width-md waves-light">Info</button>
            <button type="button" className="btn btn-bordered-warning waves-effect  width-md waves-light">Warning</button>
            <button type="button" className="btn btn-bordered-danger waves-effect  width-md waves-light">Danger</button>
            <button type="button" className="btn btn-bordered-dark waves-effect  width-md waves-light">Dark</button>
            <button type="button" className="btn btn-bordered-purple waves-effect  width-md waves-light">Purple</button>
            <button type="button" className="btn btn-bordered-pink waves-effect  width-md waves-light">Pink</button>
           </div>
          </div>
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

           <h4 className="header-title mt-0">Button Lighten</h4>

           <p className="text-muted font-13">Use a classNamees <code>.btn-lighten-</code> to quickly create a bordered buttons.</p>
           <div className="button-list">
            <button type="button" className="btn btn-lighten-primary waves-effect waves-primary  width-md">Primary</button>
            <button type="button" className="btn btn-lighten-secondary waves-effect  width-md">Secondary</button>
            <button type="button" className="btn btn-lighten-success waves-effect  width-md waves-success">Success</button>
            <button type="button" className="btn btn-lighten-info waves-effect  width-md waves-info">Info</button>
            <button type="button" className="btn btn-lighten-warning waves-effect  width-md waves-warning">Warning</button>
            <button type="button" className="btn btn-lighten-danger waves-effect  width-md waves-danger">Danger</button>
            <button type="button" className="btn btn-lighten-dark waves-effect  width-md waves-inverse">Dark</button>
            <button type="button" className="btn btn-lighten-purple waves-effect  width-md waves-purple">Purple</button>
            <button type="button" className="btn btn-lighten-pink waves-effect  width-md waves-pink">Pink</button>
           </div>
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

           <h4 className="header-title mt-0">Button Width</h4>

           <p className="text-muted font-13">
            Create buttons with minimum width by adding add <code>.width-xs</code>, <code>.width-sm</code>, <code>.width-md</code> or <code>.width-lg</code>.
                                    </p>
           <div className="button-list">
            <button type="button" className="btn btn-primary waves-effect waves-light width-xs">Xs</button>
            <button type="button" className="btn btn-purple waves-effect waves-light width-sm">Small</button>
            <button type="button" className="btn btn-info waves-effect waves-light width-md">Middle</button>
            <button type="button" className="btn btn-warning waves-effect waves-light width-lg">Large</button>
           </div>
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

           <h4 className="header-title mt-0">Button-Sizes</h4>

           <p className="text-muted font-13">
            Add <code>.btn-lg</code>, <code>.btn-sm</code>, or <code>.btn-xs</code> for additional sizes.
                                    </p>
           <div className="button-list">
            <button className="btn btn-primary waves-effect waves-light btn-lg">Large button</button>
            <button className="btn btn-danger waves-effect waves-light">Normal button</button>
            <button className="btn btn-success waves-effect waves-light btn-sm">Small button</button>
           </div>
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

           <h4 className="header-title mt-0 m-b-30">Button-Disabled</h4>

           <p className="text-muted font-13">
            Add the <code>disabled</code> attribute to <code>&lt;button&gt;</code> buttons.
                                    </p>
           <div className="button-list">
            <button type="button" className="btn btn-info disabled">Info</button>
            <button type="button" className="btn btn-purple disabled">Purple</button>
            <button type="button" className="btn btn-pink disabled">Pink</button>
            <button type="button" className="btn btn-dark disabled">Dark</button>
           </div>
          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-md-6">
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

           <h4 className="header-title mt-0">Icon Button</h4>

           <p className="text-muted font-13">
            Icon only button.
                                    </p>
           <div className="button-list">
            <button className="btn btn-icon waves-effect btn-secondary"> <i className="far fa-heart"></i> </button>
            <button className="btn btn-icon waves-effect waves-light btn-danger"> <i className="fas fa-times"></i> </button>
            <button className="btn btn-icon waves-effect waves-light btn-purple"> <i className="fa fa-music"></i> </button>
            <button className="btn btn-icon waves-effect waves-light btn-primary"> <i className="fa fa-star"></i> </button>
            <button className="btn btn-icon waves-effect waves-light btn-success"> <i className="far fa-thumbs-up"></i> </button>
            <button className="btn btn-icon waves-effect waves-light btn-info"> <i className="far fa-keyboard"></i> </button>
            <button className="btn btn-icon waves-effect waves-light btn-warning"> <i className="fa fa-wrench"></i> </button>
            <br/>
             <button className="btn btn-secondary waves-effect"> <i className="fa fa-heart mr-1"></i> <span>Like</span> </button>
             <button className="btn btn-dark waves-effect waves-light"> <i className="far fa-envelope mr-1"></i> <span>Share</span> </button>
             <button className="btn btn-warning waves-effect waves-light"> <i className="fa fa-rocket mr-1"></i> <span>Launch</span> </button>
             <button className="btn btn-info waves-effect waves-light"> <i className="fa fa-cloud mr-1"></i> <span>Cloud Hosting</span> </button>
             <button className="btn btn-pink waves-effect waves-light"> <span>Book Flight</span> <i className="fa fa-plane ml-1"></i> </button>
             <button className="btn btn-purple waves-effect waves-light"> <span>Donate Money</span> <i className="far fa-money-bill-alt ml-1"></i> </button>
                                    </div>
           </div>

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

            <h4 className="header-title mt-0">Block Button</h4>

            <p className="text-muted font-13">
             Create block level buttons,with by adding add <code>.btn-block</code>.
                                    </p>

            <button type="button" className="btn btn-block btn--md btn-pink waves-effect waves-light">Block Button</button>
            <button type="button" className="btn btn-block btn-sm btn-success waves-effect waves-light">Block Button</button>
            <button type="button" className="btn btn-block btn-xs btn-purple waves-effect waves-light">Block Button</button>

           </div>

          </div>


          <div className="col-md-6">
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

            <h4 className="header-title mt-0">Button Group</h4>

            <p className="text-muted font-13">
             Wrap a series of buttons with <code>.btn</code> in <code>.btn-group</code>.
                                    </p>


            <div className="btn-group mb-1">
             <button type="button" className="btn btn-secondary waves-effect">Left</button>
             <button type="button" className="btn btn-secondary waves-effect">Middle</button>
             <button type="button" className="btn btn-secondary waves-effect">Right</button>
            </div>
            <br/>

             <div className="btn-group mb-1">
              <button type="button" className="btn btn-secondary waves-effect">1</button>
              <button type="button" className="btn btn-secondary waves-effect">2</button>
              <button type="button" className="btn btn-dark waves-effect waves-light">3</button>
              <button type="button" className="btn btn-secondary waves-effect">4</button>
             </div>
             <div className="btn-group mb-1">
              <button type="button" className="btn btn-secondary waves-effect">5</button>
              <button type="button" className="btn btn-dark waves-effect waves-light">6</button>
              <button type="button" className="btn btn-secondary waves-effect">7</button>
             </div>
             <div className="btn-group mb-1">
              <button type="button" className="btn btn-secondary waves-effect">8</button>
             </div>
             <br/>
              <div className="btn-group mb-1">
               <button type="button" className="btn btn-secondary waves-effect">1</button>
               <button type="button" className="btn btn-primary waves-effect waves-light">2</button>
               <button type="button" className="btn btn-secondary waves-effect">3</button>
               <div className="btn-group">
                <button type="button" className="btn btn-secondary dropdown-toggle waves-effect" data-toggle="dropdown" aria-expanded="false"> Dropdown <i className="mdi mdi-chevron-down"></i> </button>
                <div className="dropdown-menu">

                 <a href="javascript:void(0);" className="dropdown-item">Action</a>

                 <a href="javascript:void(0);" className="dropdown-item">Another action</a>

                 <a href="javascript:void(0);" className="dropdown-item">Something else</a>
                </div>
               </div>
              </div>
              <div className="row">
               <div className="col-md-3">
                <div className="btn-group-vertical mb-1">
                 <button type="button" className="btn btn-secondary waves-effect">Top</button>
                 <button type="button" className="btn btn-secondary waves-effect">Middle</button>
                 <button type="button" className="btn btn-secondary waves-effect">Bottom</button>
                </div>
               </div>
               <div className="col-md-3">
                <div className="btn-group-vertical mb-1">
                 <button type="button" className="btn btn-secondary waves-effect">Button 1</button>
                 <button type="button" className="btn btn-secondary waves-effect">Button 2</button>
                 <button type="button" className="btn btn-secondary dropdown-toggle waves-effect" data-toggle="dropdown" aria-expanded="false"> Button 3 <i className="mdi mdi-chevron-down"></i> </button>
                 <div className="dropdown-menu">

                  <a href="javascript:void(0);" className="dropdown-item">Action</a>

                  <a href="javascript:void(0);" className="dropdown-item">Another action</a>

                  <a href="javascript:void(0);" className="dropdown-item">Something else</a>
                 </div>
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