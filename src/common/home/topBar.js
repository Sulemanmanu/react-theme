import React, { Component } from 'react'

export default class Topbar extends Component {
 render() {
  return (
   <div>

    {/* <!-- Topbar Start --> */}
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

        {/* <!-- All--> */}
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

     {/* <!-- LOGO --> */}
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

     </ul>

    </div>
    {/* <!-- end Topbar --> */}

   </div >
  )
 }
}
