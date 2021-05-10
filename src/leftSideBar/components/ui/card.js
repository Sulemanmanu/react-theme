import React, { Component } from 'react'

export default class Card extends Component {
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
        <h4 className="page-title-main">Cards</h4>
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
         <div className="col-md-6 col-xl-3">

          <div className="card">
           <img className="card-img-top img-fluid" src="assets/images/gallery/1.jpg" alt="Card image cap" />
           <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Button</a>
           </div>
          </div>

         </div>

         <div className="col-md-6 col-xl-3">

          <div className="card">
           <img className="card-img-top img-fluid" src="assets/images/gallery/2.jpg" alt="Card image cap" />
           <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</p>
           </div>
           <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
           </ul>
           <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
           </div>
          </div>

         </div>

         <div className="col-md-6 col-xl-3">

          <div className="card">
           <img className="card-img-top img-fluid" src="assets/images/gallery/3.jpg" alt="Card image cap" />
           <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</p>
           </div>
          </div>

         </div>


         <div className="col-md-6 col-xl-3">

          <div className="card">
           <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <h6 className="card-subtitle text-muted">Support card subtitle</h6>
           </div>
           <img className="img-fluid" src="assets/images/gallery/4.jpg" alt="Card image cap" />
           <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
           </div>
          </div>

         </div>
        </div>


        <div className="row">
         <div className="col-sm-6">
          <div className="card card-body">
           <h4 className="card-title">Special title treatment</h4>
           <p className="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>
           <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
         </div>
         <div className="col-sm-6">
          <div className="card card-body">
           <h4 className="card-title">Special title treatment</h4>
           <p className="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>
           <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
         </div>
        </div>


        <div className="row">
         <div className="col-md-4">
          <div className="card card-body">
           <h4 className="card-title">Special title treatment</h4>
           <p className="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>
           <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
         </div>

         <div className="col-md-4">
          <div className="card card-body text-center">
           <h4 className="card-title">Special title treatment</h4>
           <p className="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>
           <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
         </div>

         <div className="col-md-4">
          <div className="card card-body text-right">
           <h4 className="card-title">Special title treatment</h4>
           <p className="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>
           <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-md-4">
          <div className="card">
           <h5 className="card-header">Featured</h5>
           <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to
                                            additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
           </div>
          </div>
         </div>

         <div className="col-md-4">
          <div className="card">
           <div className="card-header">
            Quote
                                    </div>
           <div className="card-body">
            <blockquote className="card-bodyquote">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                                erat a ante.</p>
             <footer className="blockquote-footer text-muted">Someone famous in <cite title="Source Title">Source Title</cite>
             </footer>
            </blockquote>
           </div>
          </div>
         </div>

         <div className="col-md-4">
          <div className="card text-center">
           <div className="card-header">
            Featured
                                    </div>
           <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to
                                            additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
           </div>
           <div className="card-footer text-muted">
            2 days ago
                                    </div>
          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-md-4">
          <div className="card">
           <img className="card-img-top img-fluid" src="assets/images/gallery/5.jpg" alt="Card image cap" />
           <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">This is a wider card with supporting text below as a
            natural lead-in to additional content. This content is a little bit
                                            longer.</p>
            <p className="card-text">
             <small className="text-muted">Last updated 3 mins ago</small>
            </p>
           </div>
          </div>
         </div>

         <div className="col-md-4">
          <div className="card">
           <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">This is a wider card with supporting text below as a
            natural lead-in to additional content. This content is a little bit
                                            longer.</p>
            <p className="card-text">
             <small className="text-muted">Last updated 3 mins ago</small>
            </p>
           </div>
           <img className="card-img-bottom img-fluid" src="assets/images/gallery/7.jpg" alt="Card image cap" />
          </div>
         </div>

         <div className="col-md-4">
          <div className="card card-inverse text-white">
           <img className="card-img img-fluid" src="assets/images/gallery/6.jpg" alt="Card image" />
           <div className="card-img-overlay">
            <h4 className="card-title text-white">Card title</h4>
            <p className="card-text">This is a wider card with supporting text below as a
            natural lead-in to additional content. This content is a little bit
                                            longer.</p>
            <p className="card-text">
             <small className="">Last updated 3 mins ago</small>
            </p>
           </div>
          </div>
         </div>

        </div>


        <div className="row">
         <div className="col-md-4">
          <div className="card card-inverse text-white" style={{ backgroundcolor: "#333", bordercolor: "#333" }}>
           <div className="card-body">
            <h4 className="card-title text-white">Special title treatment</h4>
            <p className="card-text">With supporting text below as a natural lead-in to
                                            additional content.</p>
            <a href="#" className="btn btn-primary">Button</a>
           </div>
          </div>
         </div>

         <div className="col-md-4">
          <div className="card text-white bg-primary">
           <div className="card-body">
            <blockquote className="card-bodyquote mb-0">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                                erat a ante.</p>
             <footer className="blockquote-footer text-white-50">Someone famous in <cite title="Source Title">Source Title</cite>
             </footer>
            </blockquote>
           </div>
          </div>
         </div>

         <div className="col-md-4">
          <div className="card text-white bg-success">
           <div className="card-body">
            <blockquote className="card-bodyquote mb-0">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                                erat a ante.</p>
             <footer className="blockquote-footer text-white-50">Someone famous in <cite title="Source Title">Source Title</cite>
             </footer>
            </blockquote>
           </div>
          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-md-4">
          <div className="card text-white bg-info">
           <div className="card-body">
            <blockquote className="card-bodyquote mb-0">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                                erat a ante.</p>
             <footer className="blockquote-footer text-white-50">Someone famous in <cite title="Source Title">Source Title</cite>
             </footer>
            </blockquote>
           </div>
          </div>
         </div>

         <div className="col-md-4">
          <div className="card text-white bg-warning">
           <div className="card-body">
            <blockquote className="card-bodyquote mb-0">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                                erat a ante.</p>
             <footer className="blockquote-footer text-white-50">Someone famous in <cite title="Source Title">Source Title</cite>
             </footer>
            </blockquote>
           </div>
          </div>
         </div>

         <div className="col-md-4">
          <div className="card text-white bg-danger">
           <div className="card-body">
            <blockquote className="card-bodyquote mb-0">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                                erat a ante.</p>
             <footer className="blockquote-footer text-white-50">Someone famous in <cite title="Source Title">Source Title</cite>
             </footer>
            </blockquote>
           </div>
          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-md-4">
          <div className="card text-white bg-purple">
           <div className="card-body">
            <blockquote className="card-bodyquote mb-0">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                                erat a ante.</p>
             <footer className="blockquote-footer text-white-50">Someone famous in <cite title="Source Title">Source Title</cite>
             </footer>
            </blockquote>
           </div>
          </div>
         </div>

         <div className="col-md-4">
          <div className="card text-white bg-pink">
           <div className="card-body">
            <blockquote className="card-bodyquote mb-0">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                                erat a ante.</p>
             <footer className="blockquote-footer text-white-50">Someone famous in <cite title="Source Title">Source Title</cite>
             </footer>
            </blockquote>
           </div>
          </div>
         </div>

         <div className="col-md-4">
          <div className="card">
           <div className="card-body">
            <blockquote className="card-bodyquote mb-0">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                                erat a ante.</p>
             <footer className="blockquote-footer text-muted">Someone famous in <cite title="Source Title">Source Title</cite>
             </footer>
            </blockquote>
           </div>
          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-md-4">
          <div className="card border border-primary">
           <div className="card-body text-primary">
            <h5 className="card-title text-primary">Primary card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           </div>
          </div>
         </div>

         <div className="col-md-4">
          <div className="card border border-secondary">
           <div className="card-body text-secondary">
            <h5 className="card-title text-secondary">Secondary card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           </div>
          </div>
         </div>

         <div className="col-md-4">
          <div className="card border border-success">
           <div className="card-body text-success">
            <h5 className="card-title text-success">Success card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           </div>
          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-12">
          <h4 className="mt-2 mb-3">Card Group</h4>
          <div className="card-group">
           <div className="card mb-4">
            <img className="card-img-top img-fluid" src="assets/images/gallery/8.jpg" alt="Card image cap" />
            <div className="card-body">
             <h4 className="card-title">Card title</h4>
             <p className="card-text">This is a wider card with supporting text below as a
             natural lead-in to additional content. This content is a little bit
                                                longer.</p>
             <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
             </p>
            </div>
           </div>
           <div className="card mb-4">
            <img className="card-img-top img-fluid" src="assets/images/gallery/9.jpg" alt="Card image cap" />
            <div className="card-body">
             <h4 className="card-title">Card title</h4>
             <p className="card-text">This card has supporting text below as a natural
                                                lead-in to additional content.</p>
             <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
             </p>
            </div>
           </div>
           <div className="card mb-4">
            <img className="card-img-top img-fluid" src="assets/images/gallery/10.jpg" alt="Card image cap" />
            <div className="card-body">
             <h4 className="card-title">Card title</h4>
             <p className="card-text">This is a wider card with supporting text below as a
             natural lead-in to additional content. This card has even longer content
                                                than the first to show that equal height action.</p>
             <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
             </p>
            </div>
           </div>
          </div>
         </div>
        </div>



        <div className="row m-b-20">
         <div className="col-12">
          <h4 className="mt-0 mb-3">Decks</h4>
          <div className="card-deck-wrapper">
           <div className="card-deck">
            <div className="card mb-4">
             <img className="card-img-top img-fluid" src="assets/images/gallery/11.jpg" alt="Card image cap" />
             <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">This is a longer card with supporting text below as
              a natural lead-in to additional content. This content is a little
                                                    bit longer.</p>
              <p className="card-text">
               <small className="text-muted">Last updated 3 mins ago</small>
              </p>
             </div>
            </div>
            <div className="card mb-4">
             <img className="card-img-top img-fluid" src="assets/images/gallery/12.jpg" alt="Card image cap" />
             <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">This card has supporting text below as a natural
                                                    lead-in to additional content.</p>
              <p className="card-text">
               <small className="text-muted">Last updated 3 mins ago</small>
              </p>
             </div>
            </div>
            <div className="card mb-4">
             <img className="card-img-top img-fluid" src="assets/images/gallery/1.jpg" alt="Card image cap" />
             <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">This is a wider card with supporting text below as
              a natural lead-in to additional content. This card has even longer
                                                    content than the first to show that equal height action.</p>
              <p className="card-text">
               <small className="text-muted">Last updated 3 mins ago</small>
              </p>
             </div>
            </div>
           </div>
          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-12">
          <h4 className="mt-2 mb-4">Navigation</h4>

          <div className="row">
           <div className="col-md-6">
            <div className="card text-center">
             <div className="card-header bg-transparent border-bottom">
              <ul className="nav nav-tabs card-header-tabs">
               <li className="nav-item">
                <a className="nav-link active" href="#">Active</a>
               </li>
               <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
               </li>
               <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
               </li>
              </ul>
             </div>
             <div className="card-body">
              <h4 className="mb-1">Special title treatment</h4>
              <p className="mb-3">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
             </div>
            </div>
           </div>

           <div className="col-md-6">
            <div className="card text-center">
             <div className="card-header bg-transparent border-bottom">
              <ul className="nav nav-pills card-header-pills">
               <li className="nav-item">
                <a className="nav-link active" href="#">Active</a>
               </li>
               <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
               </li>
               <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
               </li>
              </ul>
             </div>
             <div className="card-body">
              <h4 className="mb-1">Special title treatment</h4>
              <p className="mb-3">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
             </div>
            </div>
           </div>
          </div>

         </div>
        </div>



        <div className="row">
         <div className="col-12">
          <h4 className="mt-0 mb-3">Columns</h4>
          <div className="card-columns">
           <div className="card">
            <img className="card-img-top img-fluid" src="assets/images/gallery/2.jpg" alt="Card image cap" />
            <div className="card-body">
             <h4 className="card-title">Card title that wraps to a new line</h4>
             <p className="card-text">This is a longer card with supporting text below as a
             natural lead-in to additional content. This content is a little bit
                                                longer.</p>
            </div>
           </div>
           <div className="card card-body">
            <blockquote className="card-bodyquote mb-0">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                                erat a ante.</p>
             <footer className="blockquote-footer text-muted">
              Someone famous in <cite title="Source Title">Source Title</cite>
             </footer>
            </blockquote>
           </div>
           <div className="card">
            <img className="card-img-top img-fluid" src="assets/images/gallery/3.jpg" alt="Card image cap" />
            <div className="card-body">
             <h4 className="card-title">Card title</h4>
             <p className="card-text">This card has supporting text below as a natural
                                                lead-in to additional content.</p>
             <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
             </p>
            </div>
           </div>
           <div className="card card-body text-center">
            <blockquote className="card-bodyquote mb-0">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                                erat.</p>
             <footer className="blockquote-footer text-muted">
              Someone famous in <cite title="Source Title">Source Title</cite>
             </footer>
            </blockquote>
           </div>
           <div className="card card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">This card has supporting text below as a natural lead-in to
                                            additional content.</p>
            <p className="card-text">
             <small className="text-muted">Last updated 3 mins ago</small>
            </p>
           </div>
           <div className="card">
            <img className="card-img img-fluid" src="assets/images/gallery/4.jpg" alt="Card image cap" />
           </div>
           <div className="card card-body text-right">
            <blockquote className="card-bodyquote mb-0">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                                erat a ante.</p>
             <footer className="blockquote-footer text-muted">
              Someone famous in <cite title="Source Title">Source Title</cite>
             </footer>
            </blockquote>
           </div>
           <div className="card card-body">
            <h4 className="card-title">Card title</h4>

            <p className="card-text">This is a wider card with supporting text below as a
            natural lead-in to additional content. This card has even longer content
                                            than the first to show that equal height action.</p>
            <p className="card-text">
             <small className="text-muted">Last updated 3 mins ago</small>
            </p>
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
