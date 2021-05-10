import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Sidebar extends Component {
 render() {
  return (
   <div>
    {/* <!-- ========== Left Sidebar Start ========== --> */}
    <div className="left-side-menu">

     <div className="slimscroll-menu">

      {/* <!-- User box --> */}
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

      {/* <!--- Sidemenu --> */}
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
          <li><Link to="/wizard">Form Wizard</Link></li>
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
      {/* <!-- End Sidebar --> */}

      <div className="clearfix"></div>

     </div>
     {/* <!-- Sidebar -left --> */}

    </div>
    {/* <!-- Left Sidebar End --> */}
   </div>
            
        )
 }
}
