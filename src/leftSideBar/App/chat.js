import React, { Component } from 'react'

export default class Chat extends Component {
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
        <h4 className="page-title-main">Chat</h4>
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

         <div className="col-xl-3 col-lg-4">
          <div className="card chat-list-card mb-xl-0">
           <div className="card-body">

            <div className="media">
             <div className="mr-2 align-self-center">
              <img src="assets/images/users/user-1.jpg" alt="" className="rounded-circle avatar-sm" />
             </div>
             <div className="media-body">
              <h5 className="mt-0 mb-1">Nowak Helme</h5>
              <p className="font-13 text-muted mb-0">Admin Head</p>
             </div>
             <div className="dropdown">
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
            </div>

            <hr className="my-3" />

            <div className="search-box chat-search-box">
             <input type="text" className="form-control" placeholder="Search..." />
             <i className="mdi mdi-magnify search-icon"></i>
            </div>

            <hr className="my-3" />

            <div className="">

             {/* style={{ max-height: "410px"}} */}
             <ul className="list-unstyled chat-list slimscroll mb-0" >
              <li className="active">
               <a href="#">
                <div className="media">
                 <div className="chat-user-img active align-self-center mr-2">
                  <img src="assets/images/users/user-2.jpg" className="rounded-circle avatar-sm" alt="" />
                 </div>

                 <div className="media-body overflow-hidden">
                  <h5 className="text-truncate font-14 mt-0 mb-1">Margaret Clayton</h5>
                  <p className="text-truncate mb-0">I've finished it! See you so...</p>
                 </div>
                 <div className="font-11">05 min</div>
                </div>
               </a>
              </li>
              <li>
               <a href="#">
                <div className="media">
                 <div className="chat-user-img active avatar-sm align-self-center mr-2">
                  <span className="avatar-title rounded-circle bg-soft-success text-success">
                   <i className="mdi mdi-account"></i>
                  </span>
                 </div>

                 <div className="media-body overflow-hidden">
                  <h5 className="text-truncate font-14 mt-0 mb-1">Jason Bent</h5>
                  <p className="text-truncate mb-0">Hey! there I'm available</p>
                 </div>
                 <div className="font-11">20 min</div>
                </div>
               </a>
              </li>
              <li className="unread">
               <a href="#">
                <div className="media">
                 <div className="chat-user-img align-self-center mr-2">
                  <img src="assets/images/users/user-3.jpg" className="rounded-circle avatar-sm" alt="" />
                 </div>

                 <div className="media-body overflow-hidden">
                  <h5 className="text-truncate font-14 mt-0 mb-1">Mark Nieto</h5>
                  <p className="text-truncate mb-0">This theme is awesome!</p>
                 </div>
                 <div className="font-11">32 min</div>
                </div>
               </a>
              </li>
              <li className="unread">
               <a href="#">
                <div className="media">
                 <div className="chat-user-img active align-self-center mr-2">
                  <img src="assets/images/users/user-4.jpg" className="rounded-circle avatar-sm" alt="" />
                 </div>

                 <div className="media-body overflow-hidden">
                  <h5 className="text-truncate font-14 mt-0 mb-1">Garret Sauer</h5>
                  <p className="text-truncate mb-0">Nice to meet you</p>
                 </div>
                 <div className="font-11">01 hr</div>
                </div>
               </a>
              </li>
              <li>
               <a href="#">
                <div className="media">
                 <div className="chat-user-img align-self-center mr-2">
                  <img src="assets/images/users/user-5.jpg" className="rounded-circle avatar-sm" alt="" />
                 </div>

                 <div className="media-body overflow-hidden">
                  <h5 className="text-truncate font-14 mt-0 mb-1">Michael James</h5>
                  <p className="text-truncate mb-0">Good morning</p>
                 </div>
                 <div className="font-11">01 hr</div>
                </div>
               </a>
              </li>

              <li className="unread">
               <a href="#">
                <div className="media">
                 <div className="chat-user-img avatar-sm align-self-center mr-2">
                  <span className="avatar-title  rounded-circle bg-soft-primary text-primary">
                   <i className="mdi mdi-account"></i>
                  </span>
                 </div>

                 <div className="media-body overflow-hidden">
                  <h5 className="text-truncate font-14 mt-0 mb-1">Felicia Johnson</h5>
                  <p className="text-truncate mb-0">Meeting 10am</p>
                 </div>
                 <div className="font-11">02 hr</div>
                </div>
               </a>
              </li>
              <li>
               <a href="#">
                <div className="media">
                 <div className="chat-user-img active align-self-center mr-2">
                  <img src="assets/images/users/user-6.jpg" className="rounded-circle avatar-sm" alt="" />
                 </div>

                 <div className="media-body overflow-hidden">
                  <h5 className="text-truncate font-14 mt-0 mb-1">Tracy Marsh</h5>
                  <p className="text-truncate mb-0">Hey! there I'm available</p>
                 </div>
                 <div className="font-11">04 hr</div>
                </div>
               </a>
              </li>
              <li>
               <a href="#">
                <div className="media">
                 <div className="chat-user-img align-self-center mr-2">
                  <img src="assets/images/users/user-7.jpg" className="rounded-circle avatar-sm" alt="" />
                 </div>

                 <div className="media-body overflow-hidden">
                  <h5 className="text-truncate font-14 mt-0 mb-1">Richard Lopez</h5>
                  <p className="text-truncate mb-0">Nice to meet you</p>
                 </div>
                 <div className="font-11">05 hr</div>
                </div>
               </a>
              </li>
             </ul>
            </div>

           </div>

          </div>
         </div>
         <div className="col-xl-9 col-lg-8">
          <div className="conversation-list-card card">
           <div className="card-body">
            <div className="media">
             <div className="media-body">
              <h5 className="mt-0 mb-1 text-truncate">Margaret Clayton</h5>
              <p className="font-13 text-muted mb-0"><i className="mdi mdi-circle text-success mr-1 font-11"></i> Active</p>
             </div>
             <div className="dropdown">
              <a href="#" className="dropdown-toggle arrow-none card-drop font-20" data-toggle="dropdown" aria-expanded="false">
               <i className="mdi mdi-dots-vertical"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-right">

               <a href="javascript:void(0);" className="dropdown-item">Action</a>

               <a href="javascript:void(0);" className="dropdown-item">Another action</a>

               <a href="javascript:void(0);" className="dropdown-item">Something else</a>
               <div className="dropdown-divider"></div>

               <a href="javascript:void(0);" className="dropdown-item">Separated link</a>
              </div>
             </div>
            </div>
            <hr className="my-3" />

            <div>
             <ul className="conversation-list slimscroll" style={{ maxheight: "410px" }}>
              <li>
               <div className="chat-day-title">
                <span className="title">Today</span>
               </div>
              </li>
              <li>
               <div className="message-list">
                <div className="chat-avatar">
                 <img src="assets/images/users/user-2.jpg" alt="" />
                </div>
                <div className="conversation-text">
                 <div className="ctext-wrap">
                  <span className="user-name">Margaret Clayton</span>
                  <p>
                   Hello!
                                                                </p>
                 </div>
                 <span className="time">10:00</span>
                </div>
               </div>
              </li>

              <li className="odd">
               <div className="message-list">
                <div className="chat-avatar">
                 <img src="assets/images/users/user-1.jpg" alt="" />
                </div>
                <div className="conversation-text">
                 <div className="ctext-wrap">
                  <span className="user-name">Nowak Helme</span>
                  <p>
                   Hi, How are you? What about our next meeting?
                                                                </p>
                 </div>
                 <span className="time">10:01</span>
                </div>
               </div>
              </li>

              <li>
               <div className="message-list">
                <div className="chat-avatar">
                 <img src="assets/images/users/user-2.jpg" alt="" />

                </div>
                <div className="conversation-text">
                 <div className="ctext-wrap">
                  <span className="user-name">Margaret Clayton</span>
                  <p>
                   Yeah everything is fine
                                                                </p>
                 </div>
                 <span className="time">10:03</span>
                </div>
               </div>
              </li>
              <li>
               <div className="message-list">
                <div className="chat-avatar">
                 <img src="assets/images/users/user-2.jpg" alt="male" />

                </div>
                <div className="conversation-text">
                 <div className="ctext-wrap">
                  <span className="user-name">Margaret Clayton</span>
                  <p>
                   & Next meeting tomorrow 10.00AM
                                                                </p>
                 </div>
                 <span className="time">10:03</span>
                </div>
               </div>
              </li>

              <li className="odd">
               <div className="message-list">
                <div className="chat-avatar">
                 <img src="assets/images/users/user-1.jpg" alt="" />
                </div>
                <div className="conversation-text">
                 <div className="ctext-wrap">
                  <span className="user-name">Nowak Helme</span>
                  <p>
                   Wow that's great
                                                                </p>
                 </div>
                 <span className="time">10:04</span>
                </div>
               </div>
              </li>
             </ul>
            </div>

           </div>
           <div className="p-3 conversation-input border-top">
            <div className="row">
             <div className="col">
              <div>
               <input type="text" className="form-control" placeholder="Enter Message..." />
              </div>
             </div>
             <div className="col-auto">
              <button type="submit" className="btn btn-primary chat-send width-md waves-effect waves-light"><span className="d-none d-sm-inline-block mr-2">Send</span> <i className="mdi mdi-send"></i></button>
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
