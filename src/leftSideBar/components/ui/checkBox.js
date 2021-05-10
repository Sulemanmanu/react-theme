import React, { Component } from 'react'

export default class Checkbox extends Component {
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
        <h4 className="page-title-main">Checkbox & Radio</h4>
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
           <span> forms </span>
          </a>
          <ul className="nav-second-level" aria-expanded="false">
           <li><a href="form-elements.html">General Elements</a></li>
           <li><a href="form-advanced.html">Advanced form</a></li>
           <li><a href="form-validation.html">form Validation</a></li>
           <li><a href="form-wizard.html">form Wizard</a></li>
           <li><a href="form-fileupload.html">form Uploads</a></li>
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
         <div className="col-lg-4">
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

           <h4 className="header-title mt-0">Basic</h4>

           <p className="text-muted font-13">
            Supports bootstrap brand colors: <code>.checkbox-primary</code>, <code>.checkbox-info</code> etc.
                                    </p>

           <div className="checkbox">
            <input id="checkbox0" type="checkbox" />
            <label for="checkbox0">
             Default
                                        </label>
           </div>
           <div className="checkbox checkbox-primary">
            <input id="checkbox2" type="checkbox" defaultChecked />
            <label for="checkbox2">
             Primary
                                        </label>
           </div>
           <div className="checkbox checkbox-success">
            <input id="checkbox3" type="checkbox" />
            <label for="checkbox3">
             Success
                                        </label>
           </div>
           <div className="checkbox checkbox-info">
            <input id="checkbox4" type="checkbox" />
            <label for="checkbox4">
             Info
                                        </label>
           </div>
           <div className="checkbox checkbox-warning">
            <input id="checkbox5" type="checkbox" defaultChecked />
            <label for="checkbox5">
             Warning
                                        </label>
           </div>
           <div className="checkbox checkbox-danger">
            <input id="checkbox6" type="checkbox" defaultChecked />
            <label for="checkbox6">
             Danger
                                        </label>
           </div>
           <div className="checkbox checkbox-purple">
            <input id="checkbox6a" type="checkbox" />
            <label for="checkbox6a">
             Purple
                                        </label>
           </div>

           <div className="checkbox checkbox-pink">
            <input id="checkbox6b" type="checkbox" defaultChecked />
            <label for="checkbox6b">
             Pink
                                        </label>
           </div>

           <div className="checkbox checkbox-dark">
            <input id="checkbox6c" type="checkbox" />
            <label for="checkbox6c">
             Dark
                                        </label>
           </div>


           <p className="text-muted font-13 mt-2">Checkboxes without label text <code>.checkbox-single</code></p>
           <div className="checkbox checkbox-single">
            <input type="checkbox" id="singleCheckbox1" value="option1" aria-label="Single checkbox One" />
            <label></label>
           </div>
           <div className="checkbox checkbox-primary checkbox-single">
            <input type="checkbox" id="singleCheckbox2" value="option2" defaultChecked aria-label="Single checkbox Two" />
            <label></label>
           </div>


           <p className="text-muted font-13 mt-2">Inline checkboxes</p>
           <div className="checkbox form-check-inline">
            <input type="checkbox" id="inlineCheckbox1" value="option1" />
            <label for="inlineCheckbox1"> Inline One </label>
           </div>
           <div className="checkbox checkbox-success form-check-inline">
            <input type="checkbox" id="inlineCheckbox2" value="option1" defaultChecked />
            <label for="inlineCheckbox2"> Inline Two </label>
           </div>
           <div className="checkbox checkbox-pink form-check-inline">
            <input type="checkbox" id="inlineCheckbox3" value="option1" />
            <label for="inlineCheckbox3"> Inline Three </label>
           </div>
          </div>
         </div>

         <div className="col-lg-4">
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

           <h4 className="header-title mt-0">Circled</h4>

           <p className="text-muted font-13">
            <code>.checkbox-circle</code> for roundness.
                                    </p>

           <div className="checkbox checkbox-circle">
            <input id="checkbox7" type="checkbox" />
            <label for="checkbox7">
             Simply Rounded
                                        </label>
           </div>
           <div className="checkbox checkbox-info checkbox-circle">
            <input id="checkbox8" type="checkbox" defaultChecked />
            <label for="checkbox8">
             Info
                                        </label>
           </div>
           <div className="checkbox checkbox-primary checkbox-circle">
            <input id="checkbox-9" type="checkbox" />
            <label for="checkbox-9">
             Primary
                                        </label>
           </div>
           <div className="checkbox checkbox-success checkbox-circle">
            <input id="checkbox-10" type="checkbox" defaultChecked />
            <label for="checkbox-10">
             Success
                                        </label>
           </div>
           <div className="checkbox checkbox-warning checkbox-circle">
            <input id="checkbox-11" type="checkbox" />
            <label for="checkbox-11">
             Warning
                                        </label>
           </div>
           <div className="checkbox checkbox-danger checkbox-circle">
            <input id="checkbox-12" type="checkbox" defaultChecked />
            <label for="checkbox-12">
             Danger
                                        </label>
           </div>

           <div className="checkbox checkbox-purple checkbox-circle">
            <input id="checkbox-13" type="checkbox" defaultChecked />
            <label for="checkbox-13">
             Purple
                                        </label>
           </div>

           <div className="checkbox checkbox-pink checkbox-circle">
            <input id="checkbox-14" type="checkbox" />
            <label for="checkbox-14">
             Pink
                                        </label>
           </div>

           <div className="checkbox checkbox-dark checkbox-circle">
            <input id="checkbox-15" type="checkbox" defaultChecked />
            <label for="checkbox-15">
             Dark
                                        </label>
           </div>


           <p className="text-muted font-13 mt-2">Checkboxes without label text <code>.checkbox-single</code></p>
           <div className="checkbox checkbox-single checkbox-circle">
            <input type="checkbox" id="singleCheckbox11" value="option1" aria-label="Single checkbox One" />
            <label></label>
           </div>
           <div className="checkbox checkbox-primary checkbox-single checkbox-circle">
            <input type="checkbox" id="singleCheckbox21" value="option2" defaultChecked aria-label="Single checkbox Two" />
            <label></label>
           </div>


           <p className="text-muted font-13 mt-2">Inline checkboxes</p>
           <div className="checkbox form-check-inline checkbox-circle">
            <input type="checkbox" id="inlineCheckbox11" value="option1" />
            <label for="inlineCheckbox11"> Inline One </label>
           </div>
           <div className="checkbox checkbox-success form-check-inline checkbox-circle">
            <input type="checkbox" id="inlineCheckbox21" value="option1" defaultChecked />
            <label for="inlineCheckbox21"> Inline Two </label>
           </div>
           <div className="checkbox checkbox-pink form-check-inline checkbox-circle">
            <input type="checkbox" id="inlineCheckbox31" value="option1" />
            <label for="inlineCheckbox31"> Inline Three </label>
           </div>

          </div>
         </div>

         <div className="col-lg-4">
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

           <h4 className="header-title mt-0">Disabled</h4>

           <p className="text-muted font-13">
            Disabled state also supported.
                                    </p>

           <div className="checkbox">
            <input id="checkbox9" type="checkbox" disabled />
            <label for="checkbox9">
             Can't check this
                                        </label>
           </div>
           <div className="checkbox checkbox-custom">
            <input id="checkbox10" type="checkbox" disabled defaultChecked />
            <label for="checkbox10">
             This too
                                        </label>
           </div>
           <div className="checkbox checkbox-warning checkbox-circle">
            <input id="checkbox110" type="checkbox" disabled defaultChecked />
            <label for="checkbox110">
             And this
                                        </label>
           </div>
           <div className="checkbox checkbox-info">
            <input id="checkbox12" type="checkbox" disabled defaultChecked />
            <label for="checkbox12">
             Can't check this
                                        </label>
           </div>
           <div className="checkbox checkbox-pink">
            <input id="checkbox13" type="checkbox" disabled defaultChecked />
            <label for="checkbox13">
             This too
                                        </label>
           </div>
           <div className="checkbox checkbox-purple checkbox-circle">
            <input id="checkbox14" type="checkbox" disabled defaultChecked />
            <label for="checkbox14">
             And this
                                        </label>
           </div>

          </div>
         </div>

        </div>


        <div className="row">
         <div className="col-lg-4">
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

           <h4 className="header-title mt-0">Basic</h4>

           <p className="text-muted font-13">
            Supports bootstrap brand colors: <code>.radio-primary</code>, <code>.radio-danger</code> etc.
                                    </p>

           <div className="row">
            <div className="col-sm-6">
             <div className="radio">
              <input type="radio" name="radio" id="radio1" value="option1" defaultChecked />
              <label for="radio1">
               Default
                                                </label>
             </div>
             <div className="radio radio-primary">
              <input type="radio" name="radio" id="radio3" value="option3" />
              <label for="radio3">
               Primary
                                                </label>
             </div>
             <div className="radio radio-success">
              <input type="radio" name="radio" id="radio4" value="option4" />
              <label for="radio4">
               Success
                                                </label>
             </div>
             <div className="radio radio-info">
              <input type="radio" name="radio" id="radio5" value="option5" />
              <label for="radio5">
               Info
                                                </label>
             </div>
             <div className="radio radio-danger">
              <input type="radio" name="radio" id="radio6" value="option6" />
              <label for="radio6">
               Danger
                                                </label>
             </div>
             <div className="radio radio-warning">
              <input type="radio" name="radio" id="radio7" value="option7" />
              <label for="radio7">
               Warning
                                                </label>
             </div>
             <div className="radio radio-purple">
              <input type="radio" name="radio" id="radio8" value="option8" />
              <label for="radio8">
               Purple
                                                </label>
             </div>
             <div className="radio radio-pink">
              <input type="radio" name="radio" id="radio9" value="option9" />
              <label for="radio9">
               Pink
                                                </label>
             </div>

            </div>

            <div className="col-sm-6">
             <div className="radio">
              <input type="radio" name="radio1" id="radio11" value="option1" defaultChecked />
              <label for="radio11">
               Default
                                                </label>
             </div>
             <div className="radio radio-primary">
              <input type="radio" name="radio3" id="radio13" value="option3" />
              <label for="radio13">
               Primary
                                                </label>
             </div>
             <div className="radio radio-success">
              <input type="radio" name="radio4" id="radio14" value="option4" defaultChecked />
              <label for="radio14">
               Success
                                                </label>
             </div>
             <div className="radio radio-info">
              <input type="radio" name="radio5" id="radio15" value="option5" defaultChecked />
              <label for="radio15">
               Info
                                                </label>
             </div>
             <div className="radio radio-danger">
              <input type="radio" name="radio6" id="radio16" value="option6" />
              <label for="radio16">
               Danger
                                                </label>
             </div>
             <div className="radio radio-warning">
              <input type="radio" name="radio7" id="radio17" value="option7" defaultChecked />
              <label for="radio17">
               Warning
                                                </label>
             </div>
             <div className="radio radio-purple">
              <input type="radio" name="radio8" id="radio18" value="option8" />
              <label for="radio18">
               Purple
                                                </label>
             </div>
             <div className="radio radio-pink">
              <input type="radio" name="radio9" id="radio19" value="option9" defaultChecked />
              <label for="radio19">
               Pink
                                                </label>
             </div>

            </div>

           </div>


           <p className="text-muted font-13 mt-2">Radios without label text <code>.radio-single</code></p>
           <div className="radio radio-single">
            <input type="radio" id="singleRadio1" value="option1.1" name="radioSingle1" aria-label="Single radio One" />
            <label for="singleRadio1"></label>
           </div>
           <div className="radio radio-success radio-single">
            <input type="radio" id="singleRadio2" value="option2.1" name="radioSingle1" defaultChecked aria-label="Single radio Two" />
            <label for="singleRadio2"></label>
           </div>


           <p className="text-muted font-13 mt-2">Inline radios</p>
           <div className="radio radio-info form-check-inline">
            <input type="radio" id="inlineRadio1" value="option1" name="radioInline" defaultChecked />
            <label for="inlineRadio1"> Inline One </label>
           </div>
           <div className="radio form-check-inline">
            <input type="radio" id="inlineRadio2" value="option2" name="radioInline" defaultChecked />
            <label for="inlineRadio2"> Inline Two </label>
           </div>
          </div>
         </div>

         <div className="col-lg-4">
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

           <h4 className="header-title m-t-0 m-b-30">Disabled</h4>

           <p className="text-muted font-13 m-b-15">
            Disabled state also supported.
                                    </p>

           <div className="radio radio-danger">
            <input type="radio" name="radio31" id="radio51" value="option1" defaultChecked disabled />
            <label for="radio51">
             Next
                                        </label>
           </div>
           <div className="radio">
            <input type="radio" name="radio41" id="radio61" value="option2" defaultChecked disabled />
            <label for="radio61">
             One
                                        </label>
           </div>
           <div className="radio radio-pink">
            <input type="radio" name="radio61" id="radio81" value="option4" defaultChecked disabled />
            <label for="radio81">
             One
                                        </label>
           </div>

          </div>
         </div>
        </div>


       </div>

      </div>

      {/* <!-- Footer Start --> */}
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
      {/* <!-- end Footer --> */}

     </div>

    </div>
    {/* <!-- END wrapper --> */}

    {/* <!-- Right Sidebar --> */}
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
