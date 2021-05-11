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
         <a href="/">
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
          <li><Link to="/horizontal">Horizontal</Link></li>
          <li><Link to="/smallsidebar">Small Sidebar</Link></li>
          <li><Link to="/darksidebar">Dark Sidebar</Link></li>
          <li><Link to="/darktopbar">Dark Topbar</Link></li>
          <li><Link to="/preloader">Preloader</Link></li>
          <li><Link to="sidebarcollapsed">Sidebar Collapsed</Link></li>
          <li><Link to="boxed">Boxed</Link></li>
         </ul>
        </li>

        <li className="menu-title">Apps</li>

        <li>
         <Link to="/chat">
          <i className="mdi mdi-forum"></i>
          <span className="badge badge-purple float-right">New</span>
          <span> Chat </span>
         </Link>
        </li>

        <li>
         <Link to="/calender">
          <i className="mdi mdi-calendar"></i>
          <span> Calendar </span>
         </Link>
        </li>

        <li>
         <Link to="/inbox">
          <i className="mdi mdi-email"></i>
          <span> Mail </span>
         </Link>
        </li>

        <li className="menu-title">Components</li>

        <li>
         <Link to="/typography">
          <i className="mdi mdi-format-font"></i>
          <span> Typography </span>
         </Link>
        </li>

        <li>
         <a href="javascript: void(0);">
          <i className="mdi mdi-invert-colors"></i>
          <span> User Interface </span>
          <span className="menu-arrow"></span>
         </a>
         <ul className="nav-second-level" aria-expanded="false">
          <li><Link to="/buttons">Buttons</Link></li>
          <li><Link to="/cards">Cards</Link></li>
          <li><Link to="/draggablecards">Draggable Cards</Link></li>
          <li><Link to="/checkboxradio">Checkboxs-Radios</Link></li>
          <li><Link to="/materialicons">Material Design</Link></li>
          <li><Link to="/fontawesome">Font Awesome 5</Link></li>
          <li><Link to="/dripicons">Dripicons</Link></li>
          <li><Link to="/feathericons">Feather Icons</Link></li>
          <li><Link to="/themifyicons">Themify Icons</Link></li>
          <li><Link to="/modals">Modals</Link></li>
          <li><Link to="/notification">Notification</Link></li>
          <li><Link to="/rangeslider">Range Slider</Link></li>
          <li><Link to="/components">Components</Link></li>
          <li><Link to="/sweetalert">Sweet Alert</Link></li>
          <li><Link to="/treeview">Tree view</Link></li>
          <li><Link to="/widgets">Widgets</Link></li>
         </ul>
        </li>

        <li>
         <a href="javascript: void(0);">
          <i className="mdi mdi-texture"></i>
          <span className="badge badge-warning float-right">7</span>
          <span> Forms </span>
         </a>
         <ul className="nav-second-level" aria-expanded="false">
          <li><Link to="/formelements">General Elements</Link></li>
          <li><Link to="/formadvanced">Advanced Form</Link></li>
          <li><Link to="/formvalidation">Form Validation</Link></li>
          <li><Link to="/wizard">Form Wizard</Link></li>
          <li><Link to="/formfileupload">Form Uploads</Link></li>
          <li><Link to="/formquilljs">Quilljs Editor</Link></li>
          <li><Link to="/formxeditable">X-editable</Link></li>
         </ul>
        </li>

        <li>
         <a href="javascript: void(0);">
          <i className="mdi mdi-view-list"></i>
          <span> Tables </span>
          <span className="menu-arrow"></span>
         </a>
         <ul className="nav-second-level" aria-expanded="false">
          <li><Link to="/tablesbasic">Basic Tables</Link></li>
          <li><Link to="/tablesdatatable">Data Tables</Link></li>
          <li><Link to="/tablesresponsive">Responsive Table</Link></li>
          <li><Link to="/tableseditable">Editable Table</Link></li>
          <li><Link to="/tablestablesaw">Tablesaw Table</Link></li>
         </ul>
        </li>

        <li>
         <a href="javascript: void(0);">
          <i className="mdi mdi-chart-donut-variant"></i>
          <span> Charts </span>
          <span className="menu-arrow"></span>
         </a>
         <ul className="nav-second-level" aria-expanded="false">
          <li><Link to="/chartsflot">Flot Charts</Link></li>
          <li><Link to="/chartsmorris">Morris Charts</Link></li>
          <li><Link to="/chartschartist">Chartist Charts</Link></li>
          <li><Link to="/chartschartjs">Chartjs Charts</Link></li>
          <li><Link to="/chartsother">Other Charts</Link></li>
         </ul>
        </li>


        <li>
         <a href="javascript: void(0);">
          <i className="mdi mdi-file-multiple"></i>
          <span> Pages </span>
          <span className="menu-arrow"></span>
         </a>
         <ul className="nav-second-level" aria-expanded="false">
          <li><Link to="/pagesstarter">Starter Page</Link></li>
          <li><Link to="/pageslogin">Login</Link></li>
          <li><Link to="/pagesregister">Register</Link></li>
          <li><Link to="/pagesrecoverpw">Recover Password</Link></li>
          <li><Link to="/pageslockscreen">Lock Screen</Link></li>
          <li><Link to="/pagesconfirmmail">Confirm Mail</Link></li>
          <li><Link to="/pages404">Error 404</Link></li>
          <li><Link to="/pages500">Error 500</Link></li>
         </ul>
        </li>

        <li>
         <a href="javascript: void(0);">
          <i className="mdi mdi-layers"></i>
          <span> Extra Pages </span>
          <span className="menu-arrow"></span>
         </a>
         <ul className="nav-second-level" aria-expanded="false">
          <li><Link to="/extrasprojects">Projects</Link></li>
          <li><Link to="/extrastour">Tour</Link></li>
          <li><Link to="/extrastaskboard">Taskboard</Link></li>
          <li><Link to="/extrastaskdetail">Task Detail</Link></li>
          <li><Link to="/extrasprofile">Profile</Link></li>
          <li><Link to="/extrasmaps">Maps</Link></li>
          <li><Link to="/extrascontact">Contact list</Link></li>
          <li><Link to="/extraspricing">Pricing</Link></li>
          <li><Link to="/extrastimeline">Timeline</Link></li>
          <li><Link to="/extrasinvoice">Invoice</Link></li>
          <li><Link to="/extrasfaq">FAQs</Link></li>
          <li><Link to="/extrasgallery">Gallery</Link></li>
          <li><Link to="/extrasemail">Email Templates</Link></li>
          <li><Link to="/extrasmaintenance">Maintenance</Link></li>
          <li><Link to="/extrascomingsoon">Coming Soon</Link></li>
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
