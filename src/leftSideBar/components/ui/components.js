import React, { Component } from 'react'

export default class Components extends Component {
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
        <h4 className="page-title-main">Components</h4>
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

           <h4 className="header-title mt-0">Dropdowns</h4>

           <div className="row">
            <div className="col-xl-6">
             <h5 className="mt-4">Examples</h5>

             <div className="">
              <div className="btn-group mt-1">
               <button type="button" className="btn btn-secondary dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="false">Dropdown <i className="mdi mdi-chevron-down"></i></button>
               <div className="dropdown-menu">

                <a href="javascript:void(0);" className="dropdown-item">Action</a>

                <a href="javascript:void(0);" className="dropdown-item">Another action</a>

                <a href="javascript:void(0);" className="dropdown-item">Something else</a>

                <a href="javascript:void(0);" className="dropdown-item">Separated link</a>
               </div>
              </div>
              <div className="btn-group mt-1">
               <button type="button" className="btn btn-info dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="false">Dropdown <i className="mdi mdi-chevron-down"></i></button>
               <div className="dropdown-menu">

                <a href="javascript:void(0);" className="dropdown-item">Action</a>

                <a href="javascript:void(0);" className="dropdown-item">Another action</a>

                <a href="javascript:void(0);" className="dropdown-item">Something else</a>

                <a href="javascript:void(0);" className="dropdown-item">Separated link</a>
               </div>
              </div>
              <div className="btn-group dropdown mt-1">
               <button type="button" className="btn btn-success waves-effect waves-light">Dropddown</button>
               <button type="button" className="btn btn-success dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="false"><i className="mdi mdi-chevron-down"></i></button>
               <div className="dropdown-menu">

                <a href="javascript:void(0);" className="dropdown-item">Action</a>

                <a href="javascript:void(0);" className="dropdown-item">Another action</a>

                <a href="javascript:void(0);" className="dropdown-item">Something else</a>

                <a href="javascript:void(0);" className="dropdown-item">Separated link</a>
               </div>
              </div>
              <div className="btn-group dropdown mt-1">
               <button type="button" className="btn btn-primary waves-effect waves-light">Dropddown</button>
               <button type="button" className="btn btn-primary dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="false"><i className="mdi mdi-chevron-down"></i></button>
               <div className="dropdown-menu">

                <a href="javascript:void(0);" className="dropdown-item">Action</a>

                <a href="javascript:void(0);" className="dropdown-item">Another action</a>

                <a href="javascript:void(0);" className="dropdown-item">Something else</a>

                <a href="javascript:void(0);" className="dropdown-item">Separated link</a>
               </div>
              </div>
             </div>

            </div>


            <div className="col-xl-6">
             <h5 className="mt-4">Dropup</h5>

             <div className="btn-group dropup mt-1">
              <button type="button" className="btn btn-primary dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="false">Dropdup <i className="mdi mdi-chevron-up"></i></button>
              <div className="dropdown-menu">

               <a href="javascript:void(0);" className="dropdown-item">Action</a>

               <a href="javascript:void(0);" className="dropdown-item">Another action</a>

               <a href="javascript:void(0);" className="dropdown-item">Something else</a>

               <a href="javascript:void(0);" className="dropdown-item">Separated link</a>
              </div>
             </div>
             <div className="btn-group dropup mt-1">
              <button type="button" className="btn btn-warning dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="false">Dropdup <i className="mdi mdi-chevron-up"></i></button>
              <div className="dropdown-menu">

               <a href="javascript:void(0);" className="dropdown-item">Action</a>

               <a href="javascript:void(0);" className="dropdown-item">Another action</a>

               <a href="javascript:void(0);" className="dropdown-item">Something else</a>

               <a href="javascript:void(0);" className="dropdown-item">Separated link</a>
              </div>
             </div>
             <div className="btn-group dropup mt-1">
              <button type="button" className="btn btn-success dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="false">Dropdup<i className="mdi mdi-chevron-up"></i></button>
              <div className="dropdown-menu">

               <a href="javascript:void(0);" className="dropdown-item">Action</a>

               <a href="javascript:void(0);" className="dropdown-item">Another action</a>

               <a href="javascript:void(0);" className="dropdown-item">Something else</a>

               <a href="javascript:void(0);" className="dropdown-item">Separated link</a>
              </div>
             </div>
             <div className="btn-group dropup mt-1">
              <button type="button" className="btn btn-secondary dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="false">Dropdup <i className="mdi mdi-chevron-up"></i></button>
              <div className="dropdown-menu">

               <a href="javascript:void(0);" className="dropdown-item">Action</a>

               <a href="javascript:void(0);" className="dropdown-item">Another action</a>

               <a href="javascript:void(0);" className="dropdown-item">Something else</a>

               <a href="javascript:void(0);" className="dropdown-item">Separated link</a>
              </div>
             </div>

            </div>

           </div>


          </div>
         </div>
        </div>



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

           <h4 className="header-title mt-0 mb-3">Tabs</h4>

           <div className="row">
            <div className="col-xl-6">
             <h5 className="mb-3">Default Tabs</h5>
             <ul className="nav nav-tabs">
              <li className="nav-item">
               <a href="#home1" data-toggle="tab" aria-expanded="false" className="nav-link active">
                <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                <span className="d-none d-sm-block">Home</span>
               </a>
              </li>
              <li className="nav-item">
               <a href="#profile1" data-toggle="tab" aria-expanded="true" className="nav-link">
                <span className="d-block d-sm-none"><i className="far fa-user"></i></span>
                <span className="d-none d-sm-block">Profile</span>
               </a>
              </li>
              <li className="nav-item">
               <a href="#messages1" data-toggle="tab" aria-expanded="false" className="nav-link">
                <span className="d-block d-sm-none"><i className="far fa-envelope"></i></span>
                <span className="d-none d-sm-block">Messages</span>
               </a>
              </li>
              <li className="nav-item">
               <a href="#settings1" data-toggle="tab" aria-expanded="false" className="nav-link">
                <span className="d-block d-sm-none"><i className="fas fa-cog"></i></span>
                <span className="d-none d-sm-block">Settings</span>
               </a>
              </li>
             </ul>

             <div className="tab-content">
              <div role="tabpanel" className="tab-pane fade show active" id="home1">
               <p className="mb-0">Raw denim you probably haven't heard
               of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro
               synth master cleanse. Mustache cliche tempor, williamsburg carles
               vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
               synth. Cosby sweater eu banh mi, qui irure terry richardson ex
               squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis
                                                        cardigan american apparel, butcher voluptate nisi qui.</p>
              </div>
              <div role="tabpanel" className="tab-pane fade" id="profile1">
               <p className="mb-0">Food truck fixie locavore,
               accusamus mcsweeney's marfa nulla single-origin coffee squid.
               Exercitation +1 labore velit, blog sartorial PBR leggings next level
               wes anderson artisan four loko farm-to-table craft beer twee. Qui
               photo booth letterpress, commodo enim craft beer mlkshk aliquip jean
               shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda
               labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia
               yr, vero magna velit sapiente labore stumptown. Vegan fanny pack
               odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY
               ethical culpa terry richardson biodiesel. Art party scenester
               stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed
                                                    echo park.</p>
              </div>
              <div role="tabpanel" className="tab-pane fade" id="messages1">
               <p className="mb-0">Etsy mixtape wayfarers, ethical
               wes anderson tofu before they sold out mcsweeney's organic lomo
               retro fanny pack lo-fi farm-to-table readymade. Messenger bag
               gentrify pitchfork tattooed craft beer, iphone skateboard locavore
               carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy
               irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg
               banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy
               retro mlkshk vice blog. Scenester cred you probably haven't heard of
               them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu
                                                        synth chambray yr.</p>
              </div>
              <div role="tabpanel" className="tab-pane fade" id="settings1">
               <p className="mb-0">Trust fund seitan letterpress,
               keytar raw denim keffiyeh etsy art party before they sold out master
               cleanse gluten-free squid scenester freegan cosby sweater. Fanny
               pack portland seitan DIY, art party locavore wolf cliche high life
               echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before
               they sold out farm-to-table VHS viral locavore cosby sweater. Lomo
               wolf viral, mustache readymade thundercats keffiyeh craft beer marfa
               ethical. Wolf salvia freegan, sartorial keffiyeh echo park
                                                        vegan.</p>
              </div>
             </div>
            </div>


            <div className="col-xl-6">
             <h5 className="mb-3">Tabs Justified</h5>
             <ul className="nav nav-tabs nav-justified">
              <li className="nav-item">
               <a href="#home2" data-toggle="tab" aria-expanded="false" className="nav-link active">
                <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                <span className="d-none d-sm-block">Home</span>
               </a>
              </li>
              <li className="nav-item">
               <a href="#profile2" data-toggle="tab" aria-expanded="true" className="nav-link">
                <span className="d-block d-sm-none"><i className="far fa-user"></i></span>
                <span className="d-none d-sm-block">Profile</span>
               </a>
              </li>
              <li className="nav-item">
               <a href="#messages2" data-toggle="tab" aria-expanded="false" className="nav-link">
                <span className="d-block d-sm-none"><i className="far fa-envelope"></i></span>
                <span className="d-none d-sm-block">Messages</span>
               </a>
              </li>
              <li className="nav-item">
               <a href="#settings2" data-toggle="tab" aria-expanded="false" className="nav-link">
                <span className="d-block d-sm-none"><i className="fas fa-cog"></i></span>
                <span className="d-none d-sm-block">Settings</span>
               </a>
              </li>
             </ul>

             <div className="tab-content">
              <div role="tabpanel" className="tab-pane fade show active" id="home2">
               <p className="mb-0">Raw denim you probably haven't heard
               of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro
               synth master cleanse. Mustache cliche tempor, williamsburg carles
               vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
               synth. Cosby sweater eu banh mi, qui irure terry richardson ex
               squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis
                                                        cardigan american apparel, butcher voluptate nisi qui.</p>
              </div>
              <div role="tabpanel" className="tab-pane fade" id="profile2">
               <p className="mb-0">Food truck fixie locavore,
               accusamus mcsweeney's marfa nulla single-origin coffee squid.
               Exercitation +1 labore velit, blog sartorial PBR leggings next level
               wes anderson artisan four loko farm-to-table craft beer twee. Qui
               photo booth letterpress, commodo enim craft beer mlkshk aliquip jean
               shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda
               labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia
               yr, vero magna velit sapiente labore stumptown. Vegan fanny pack
               odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY
               ethical culpa terry richardson biodiesel. Art party scenester
               stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed
                                                    echo park.</p>
              </div>
              <div role="tabpanel" className="tab-pane fade" id="messages2">
               <p className="mb-0">Etsy mixtape wayfarers, ethical
               wes anderson tofu before they sold out mcsweeney's organic lomo
               retro fanny pack lo-fi farm-to-table readymade. Messenger bag
               gentrify pitchfork tattooed craft beer, iphone skateboard locavore
               carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy
               irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg
               banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy
               retro mlkshk vice blog. Scenester cred you probably haven't heard of
               them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu
                                                        synth chambray yr.</p>
              </div>
              <div role="tabpanel" className="tab-pane fade" id="settings2">
               <p className="mb-0">Trust fund seitan letterpress,
               keytar raw denim keffiyeh etsy art party before they sold out master
               cleanse gluten-free squid scenester freegan cosby sweater. Fanny
               pack portland seitan DIY, art party locavore wolf cliche high life
               echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before
               they sold out farm-to-table VHS viral locavore cosby sweater. Lomo
               wolf viral, mustache readymade thundercats keffiyeh craft beer marfa
               ethical. Wolf salvia freegan, sartorial keffiyeh echo park
                                                        vegan.</p>
              </div>
             </div>
            </div>

           </div>


          </div>
         </div>
        </div>


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

           <h4 className="header-title mt-0 mb-3">Accordions</h4>

           <div className="row">
            <div className="col-xl-6">
             <div className="pb-3">
              <p><a className="btn btn-primary waves-effect waves-light mr-1" role="button" data-toggle="collapse"
               href="#collapseExample" aria-expanded="false"
               aria-controls="collapseExample"> Link with href </a>
               <button className="btn btn-primary waves-effect waves-light" type="button" data-toggle="collapse"
                data-target="#collapseExample" aria-expanded="false"
                aria-controls="collapseExample"> Button with data-target
                                                    </button>
              </p>
              <div className="collapse show" id="collapseExample">
               <div className="card-box"> Anim pariatur cliche reprehenderit, enim eiusmod
               high life accusamus terry richardson ad squid. Nihil anim
               keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
               sapiente ea proident.
                                                    </div>
              </div>
             </div>
            </div>


            <div className="col-xl-6">
             <div id="accordion" className="mb-3">
              <div className="card mb-1">
               <div className="card-header" id="headingOne">
                <h5 className="m-0">
                 <a className="text-dark" data-toggle="collapse" href="#collapseOne" aria-expanded="true">
                  <i className="mdi mdi-help-circle mr-1 text-primary"></i>
                                                                What is Vakal text here?
                                                            </a>
                </h5>
               </div>

               <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">
                 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                 non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                 tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil
                 anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
                 excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                 you probably haven't heard of them accusamus labore sustainable VHS.
                                                        </div>
               </div>
              </div>
              <div className="card mb-1">
               <div className="card-header" id="headingTwo">
                <h5 className="m-0">
                 <a className="text-dark" data-toggle="collapse" href="#collapseTwo" aria-expanded="false">
                  <i className="mdi mdi-help-circle mr-1 text-primary"></i>
                                                                Why use Vakal text here?
                                                            </a>
                </h5>
               </div>
               <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div className="card-body">
                 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                 non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                 tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil
                 anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
                 excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                 you probably haven't heard of them accusamus labore sustainable VHS.
                                                        </div>
               </div>
              </div>
              <div className="card mb-1">
               <div className="card-header" id="headingThree">
                <h5 className="m-0">
                 <a className="text-dark" data-toggle="collapse" href="#collapseThree" aria-expanded="false">
                  <i className="mdi mdi-help-circle mr-1 text-primary"></i>
                                                                How many variations exist?
                                                            </a>
                </h5>
               </div>
               <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div className="card-body">
                 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                 non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                 tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil
                 anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
                 excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                 you probably haven't heard of them accusamus labore sustainable VHS.
                                                        </div>
               </div>
              </div>

              <div className="card mb-1">
               <div className="card-header" id="headingFour">
                <h5 className="m-0">
                 <a className="text-dark" data-toggle="collapse" href="#collapseFour" aria-expanded="false">
                  <i className="mdi mdi-help-circle mr-1 text-primary"></i>
                                                                What is Vakal text here?
                                                            </a>
                </h5>
               </div>
               <div id="collapseFour" className="collapse" aria-labelledby="collapseFour" data-parent="#accordion">
                <div className="card-body">
                 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                 non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                 tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil
                 anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
                 excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                 you probably haven't heard of them accusamus labore sustainable VHS.
                                                        </div>
               </div>
              </div>
             </div> 
                                        </div>

           </div>

          </div>
         </div>
        </div>



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

           <h4 className="header-title mt-0 mb-4">Progress Bars</h4>

           <div className="row">
            <div className="col-md-5">
             <h5 className="mt-0">Colors examples</h5>

             <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}>
               <span className="sr-only">60% Complete</span>
              </div>
             </div>
             <div className="progress">
              <div className="progress-bar bg-success" role="progressbar" aria-valuenow="48" aria-valuemin="0" aria-valuemax="100" style={{width: "48%"}}>
               <span className="sr-only">48% Complete</span>
              </div>
             </div>
             <div className="progress">
              <div className="progress-bar bg-info" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{width: "82%"}}>
               <span className="sr-only">82% Complete</span>
              </div>
             </div>
             <div className="progress">
              <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: "95%"}}>
               <span className="sr-only">95% Complete</span>
              </div>
             </div>
             <div className="progress">
              <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}>
               <span className="sr-only">60% Complete</span>
              </div>
             </div>
             <div className="progress">
              <div className="progress-bar bg-pink" role="progressbar" aria-valuenow="48" aria-valuemin="0" aria-valuemax="100" style={{width: "48%"}}>
               <span className="sr-only">48% Complete</span>
              </div>
             </div>
             <div className="progress">
              <div className="progress-bar bg-purple" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{width: "82%"}}>
               <span className="sr-only">82% Complete</span>
              </div>
             </div>
             <div className="progress">
              <div className="progress-bar bg-dark" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: "95%"}}>
               <span className="sr-only">95% Complete</span>
              </div>
             </div>

            </div>

            <div className="col-md-5 offset-md-1">
             <h5 className="m-t-0">Custom Examples</h5>

             <div className="progress progress-bar-alt-primary">
              <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}>
               <span className="sr-only">60% Complete</span>
              </div>
             </div>
             <div className="progress progress-bar-alt-success">
              <div className="progress-bar bg-success" role="progressbar" aria-valuenow="48" aria-valuemin="0" aria-valuemax="100" style={{width: "48%"}}>
               <span className="sr-only">48% Complete</span>
              </div>
             </div>
             <div className="progress progress-bar-alt-info">
              <div className="progress-bar bg-info" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{width: "82%"}}>
               <span className="sr-only">82% Complete</span>
              </div>
             </div>
             <div className="progress progress-bar-alt-warning">
              <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: "95%"}}>
               <span className="sr-only">95% Complete</span>
              </div>
             </div>
             <div className="progress progress-bar-alt-danger">
              <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}>
               <span className="sr-only">60% Complete</span>
              </div>
             </div>
             <div className="progress progress-bar-alt-pink">
              <div className="progress-bar bg-pink" role="progressbar" aria-valuenow="48" aria-valuemin="0" aria-valuemax="100" style={{width: "48%"}}>
               <span className="sr-only">48% Complete</span>
              </div>
             </div>
             <div className="progress progress-bar-alt-purple">
              <div className="progress-bar bg-purple" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{width: "82%"}}>
               <span className="sr-only">82% Complete</span>
              </div>
             </div>
             <div className="progress progress-bar-alt-dark">
              <div className="progress-bar bg-dark" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: "95%"}}>
               <span className="sr-only">95% Complete</span>
              </div>
             </div>

            </div>

           </div>

           <h5 className="mt-3">Examples</h5>
           <div className="row">
            <div className="col-md-5">


             <div className="progress">
              <div className="progress-bar bg-primary progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}>
               <span className="sr-only">60% Complete</span>
              </div>
             </div>

             <div className="progress">
              <div className="progress-bar bg-pink progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="48" aria-valuemin="0" aria-valuemax="100" style={{width: "48%"}}>
               <span className="sr-only">48% Complete</span>
              </div>
             </div>

             <div className="progress progress-sm">
              <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" style={{width: "89%"}}>
               <span className="sr-only">89% Complete</span>
              </div>
             </div>
             <div className="progress">
              <div className="progress-bar bg-dark" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style={{width: "77%"}}>
               <span className="sr-only">77% Complete</span>
              </div>
             </div>

            </div>


            <div className="col-md-5 offset-md-1">

             <div className="progress progress-md">
              <div className="progress-bar bg-success progress-bar-striped" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{width: "45%"}}>
               <span className="sr-only">45% Complete</span>
              </div>
             </div>
             <div className="progress progress-lg">
              <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" style={{width: "67%"}}>
               <span className="sr-only">67% Complete</span>
              </div>
             </div>

             <div className="progress progress-md">
              <div className="progress-bar bg-pink" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: "85%"}}>
               85%
                                                </div>
             </div>

             <div className="progress">
              <div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "20"}} className="progress-bar bg-success progress-bar-striped"></div>
              <div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "10%"}} className="progress-bar bg-info"></div>
              <div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "15%"}} className="progress-bar bg-warning progress-bar-striped progress-bar-animated"></div>
              <div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "30%"}} className="progress-bar bg-danger progress-bar-striped progress-bar-animated"></div>
             </div>

            </div>
           </div>

          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-sm-12">
          <div className="card-box">
           <div className="row">
                                        <div className="col-md-6">
             <h4 className="m-t-0 header-title"><b>Popovers</b></h4>
             <p className="text-muted m-b-30 font-13">
              Add small overlays of content, like those on the iPad, to any element for housing secondary information.
                                            </p>

             <div className="button-list">
              <button type="button" className="btn btn-secondary" data-container="body" title="" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="">
               Popover on top
                                                </button>

              <button type="button" className="btn btn-secondary" data-container="body" title="" data-toggle="popover" data-placement="bottom" data-content="Vivamus
                                                sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="">
               Popover on bottom
                                                </button>

              <button type="button" className="btn btn-secondary" data-container="body" title="" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="">
               Popover on right
                                                </button>

              <button type="button" className="btn btn-secondary" data-container="body" title="" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="Popover title">
               Popover on left
                                                </button>

              <button tabindex="0" className="btn btn-secondary" data-toggle="popover" data-trigger="focus" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="Dismissible popover">
               Dismissible popover
                                                </button>
             </div>
            </div>



                                        <div className="col-md-6">
             <h4 className="m-t-0 header-title"><b>Tooltips</b></h4>
             <p className="text-muted m-b-30 font-13">
              Four options are available: top, right, bottom, and left aligned.
                                            </p>

             <div className="button-list">
              <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip on left</button>

              <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Tooltip on top">Tooltip on top</button>

              <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Tooltip on bottom">Tooltip on bottom</button>

              <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="" data-original-title="Tooltip on right">Tooltip on right</button>
             </div>
            </div>


           </div>
          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-sm-12">
          <div className="card-box">
           <div className="row">

            <div className="col-md-6">
             <h4 className="m-t-0 header-title"><b>Labels</b></h4>
             <p className="text-muted font-13">
              Badges scale to match the size of the immediate parent element by using relative font sizing and em units.
                                            </p>

             <div className="">
              <span className="badge badge-primary">15</span>
              <span className="badge badge-success">0</span>
              <span className="badge badge-info">21</span>
              <span className="badge badge-dark">3</span>
              <span className="badge badge-warning">35</span>
              <span className="badge badge-danger">32</span>
              <span className="badge badge-purple">51</span>
              <span className="badge badge-pink">77</span>
             </div>
            </div>


            <div className="col-md-6">
             <h4 className="m-t-0 header-title"><b>Pill Badge</b></h4>
             <p className="text-muted font-13">
              Use the .badge-pill modifier className to make badges more rounded (with a larger border-radius and additional horizontal padding)
                                            </p>

             <div className="">
              <span className="badge badge-primary badge-pill">15</span>
              <span className="badge badge-success badge-pill">0</span>
              <span className="badge badge-info badge-pill">21</span>
              <span className="badge badge-dark badge-pill">3</span>
              <span className="badge badge-warning badge-pill">35</span>
              <span className="badge badge-danger badge-pill">32</span>
              <span className="badge badge-purple badge-pill">51</span>
              <span className="badge badge-pink badge-pill">77</span>
             </div>
            </div>


           </div>
          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-sm-12">
          <div className="card-box">
           <div className="row">

            <div className="col-md-6">
             <h4 className="mt-0 header-title"><b>Standard Alert</b></h4>
             <p className="text-muted font-13 mb-3">
              Wrap any text and an optional dismiss button in <code>.alert</code> and one of the four contextual classNamees (e.g., <code>.alert-success</code>) for basic alert messages.
                                            </p>

             <div className="alert alert-success">
              <strong>Well done!</strong> You successfully read this important alert message.
                                            </div>
             <div className="alert alert-info">
              <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                                            </div>
             <div className="alert alert-warning">
              <strong>Warning!</strong> Better check yourself, you're not looking too good.
                                            </div>
             <div className="alert alert-danger">
              <strong>Oh snap!</strong> Change a few things up and try submitting again.
                                            </div>

             <div className="alert alert-success fade show mb-0">
              <h4 className="alert-heading">Big one!</h4>
              <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
                                                </p>
              <p className="mb-0 pt-1">
               <button type="button" className="btn btn-success waves-effect waves-light mr-1">
                Wanna do this
                                                    </button>
               <button type="button" className="btn btn-light waves-effect">
                Or do this
                                                    </button>
              </p>
             </div>

            </div>

            <div className="col-md-6">
             <h4 className="m-t-0 header-title"><b>Dismissable Alert</b></h4>
             <p className="text-muted mb-4 font-13">
              Build on any alert by adding an optional <code>.alert-dismissible</code> and close button.
                                            </p>

             <div className="alert alert-success alert-dismissable">
              <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
                                            </div>
             <div className="alert alert-info alert-dismissable">
              <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
                                            </div>
             <div className="alert alert-warning alert-dismissable">
              <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
                                            </div>
             <div className="alert alert-danger alert-dismissable">
              <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
                                            </div>

             <div className="alert alert-info fade show mb-0">
              <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
              <h4 className="alert-heading">Big one!</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>
              <p className="mb-0 pt-1">
               <button type="button" className="btn btn-info waves-effect waves-light mr-1">Wanna do this</button>
               <button type="button" className="btn btn-light waves-effect">Or do this</button>
              </p>
             </div>
            </div>

           </div>
          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-sm-12">
          <div className="card-box">

           <div className="row">
            <div className="col-md-6">
             <h4 className="header-title">Pagination</h4>
             <p className="text-muted font-13">
              Provide pagination links for your site or app with the multi-page pagination component.
                                            </p>

             <p className="mb-1 font-weight-medium">Default Pagination</p>
             <p className="text-muted font-13">
              Simple pagination inspired by Rdio, great for apps and search results.
                                            </p>

             <nav>
              <ul className="pagination">
               <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                 <span aria-hidden="true">&laquo;</span>
                 <span className="sr-only">Previous</span>
                </a>
               </li>
               <li className="page-item"><a className="page-link" href="#">1</a></li>
               <li className="page-item"><a className="page-link" href="#">2</a></li>
               <li className="page-item"><a className="page-link" href="#">3</a></li>
               <li className="page-item"><a className="page-link" href="#">4</a></li>
               <li className="page-item"><a className="page-link" href="#">5</a></li>
               <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                 <span aria-hidden="true">&raquo;</span>
                 <span className="sr-only">Next</span>
                </a>
               </li>
              </ul>
             </nav>

             <p className="mb-1 font-weight-medium">Split Pagination</p>
             <p className="text-muted font-13">
              Links are split to each other by adding a className of <code>
               .pagination-split</code>
             </p>

             <nav>
              <ul className="pagination pagination-split">
               <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                 <span aria-hidden="true">&laquo;</span>
                 <span className="sr-only">Previous</span>
                </a>
               </li>
               <li className="page-item"><a className="page-link" href="#">1</a></li>
               <li className="page-item active"><a className="page-link" href="#">2</a></li>
               <li className="page-item"><a className="page-link" href="#">3</a></li>
               <li className="page-item"><a className="page-link" href="#">4</a></li>
               <li className="page-item"><a className="page-link" href="#">5</a></li>
               <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                 <span aria-hidden="true">&raquo;</span>
                 <span className="sr-only">Next</span>
                </a>
               </li>
              </ul>
             </nav>

             <p className="mb-1 font-weight-medium">Sizing</p>
             <p className="text-muted font-13">
              Add <code>
               .pagination-lg</code>
                                                or <code>
               .pagination-sm</code>
                                                for additional sizes.
                                            </p>

             <nav>
              <ul className="pagination pagination-lg m-b-0">
               <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                 <span aria-hidden="true">&laquo;</span>
                 <span className="sr-only">Previous</span>
                </a>
               </li>
               <li className="page-item"><a className="page-link" href="#">1</a></li>
               <li className="page-item"><a className="page-link" href="#">2</a></li>
               <li className="page-item"><a className="page-link" href="#">3</a></li>
               <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                 <span aria-hidden="true">&raquo;</span>
                 <span className="sr-only">Next</span>
                </a>
               </li>
              </ul>
             </nav>

             <p className="mb-1 font-weight-medium">Sizing</p>
             <p className="text-muted font-13">
              Change the alignment of pagination components with flexbox utilities.
                                            </p>

             <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
               <li className="page-item disabled">
                <a className="page-link" href="#" tabindex="-1">Previous</a>
               </li>
               <li className="page-item"><a className="page-link" href="#">1</a></li>
               <li className="page-item"><a className="page-link" href="#">2</a></li>
               <li className="page-item"><a className="page-link" href="#">3</a></li>
               <li className="page-item">
                <a className="page-link" href="#">Next</a>
               </li>
              </ul>
             </nav>

             <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-end">
               <li className="page-item disabled">
                <a className="page-link" href="#" tabindex="-1">Previous</a>
               </li>
               <li className="page-item"><a className="page-link" href="#">1</a></li>
               <li className="page-item"><a className="page-link" href="#">2</a></li>
               <li className="page-item"><a className="page-link" href="#">3</a></li>
               <li className="page-item">
                <a className="page-link" href="#">Next</a>
               </li>
              </ul>
             </nav>

            </div>

            <div className="col-md-6">
             <h4 className="header-title">Breadcrumb</h4>
             <p className="text-muted font-13">
              Indicate the current page’s location within a navigational hierarchy.
                                            </p>

             <ol className="breadcrumb">
              <li className="breadcrumb-item active">Home</li>
             </ol>
             <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Library</li>
             </ol>
             <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Library</a></li>
              <li className="breadcrumb-item active">Data</li>
             </ol>

            </div>

           </div>


          </div>


         </div>
        </div>



        <div className="row">
         <div className="col-sm-12">
          <div className="card m-b-20">
           <div className="card-body">
            <div className="row">

                                            <div className="col-lg-6">
              <h4 className="m-t-0 header-title"><b>Border spinner</b></h4>
              <p className="text-muted font-13">
               Use the border spinners for a lightweight loading indicator.
                                                </p>

              <div className="">
               <div className="spinner-border text-custom m-2" role="status">
                <span className="sr-only">Loading...</span>
               </div>
               <div className="spinner-border text-primary m-2" role="status">
                <span className="sr-only">Loading...</span>
               </div>
               <div className="spinner-border text-secondary m-2" role="status">
                <span className="sr-only">Loading...</span>
               </div>
               <div className="spinner-border text-success m-2" role="status">
                <span className="sr-only">Loading...</span>
               </div>
               <div className="spinner-border text-danger m-2" role="status">
                <span className="sr-only">Loading...</span>
               </div>
               <div className="spinner-border text-warning m-2" role="status">
                <span className="sr-only">Loading...</span>
               </div>
               <div className="spinner-border text-info m-2" role="status">
                <span className="sr-only">Loading...</span>
               </div>
               <div className="spinner-border text-pink m-2" role="status">
                <span className="sr-only">Loading...</span>
               </div>
               <div className="spinner-border text-purple m-2" role="status">
                <span className="sr-only">Loading...</span>
               </div>
              </div>
             </div>


             <div className="col-lg-6">
              <h4 className="m-t-0 header-title"><b>Growing spinner</b></h4>
              <p className="text-muted font-13">If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!</p>

              <div className="">
               <div className="spinner-grow text-custom m-2" role="status">
                <span className="sr-only">Loading...</span>
               </div>
               <div className="spinner-grow text-primary m-2" role="status">
                <span className="sr-only">Loading...</span>
               </div>
               <div className="spinner-grow text-secondary m-2" role="status">
                <span className="sr-only">Loading...</span>
               </div>
               <div className="spinner-grow text-success m-2" role="status">
                <span className="sr-only">Loading...</span>
               </div>
               <div className="spinner-grow text-danger m-2" role="status">
                <span className="sr-only">Loading...</span>
               </div>
               <div className="spinner-grow text-warning m-2" role="status">
                <span className="sr-only">Loading...</span>
               </div>
               <div className="spinner-grow text-info m-2" role="status">
                <span className="sr-only">Loading...</span>
               </div>
               <div className="spinner-grow text-pink m-2" role="status">
                <span className="sr-only">Loading...</span>
               </div>
               <div className="spinner-grow text-purple m-2" role="status">
                <span className="sr-only">Loading...</span>
               </div>
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
        <input type="checkbox" className="custom-control-input theme-choice" id="light-mode-switch" defaultChecked />
        <label className="custom-control-label" for="light-mode-switch">Light Mode</label>
       </div>

       <div className="mb-2">
        <img src="assets/images/layouts/dark.png" className="img-fluid img-thumbnail" alt="" />
       </div>
       <div className="custom-control custom-switch mb-3">
        <input type="checkbox" className="custom-control-input theme-choice" id="dark-mode-switch" data-bsstyle="assets/css/bootstrap-dark.min.css"
         data-appStyle="assets/css/app-dark.min.css" />
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
