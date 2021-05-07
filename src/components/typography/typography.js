import React, { Component } from 'react'

export default class Typography extends Component {
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
           <img src="assets/images/logo-dark.png" alt="" height="16"/>
            </span>
           <span className="logo-sm">
            <img src="assets/images/logo-sm.png" alt="" height="24"/>
            </span>
        </a>
           <a href="index.html" className="logo logo-light text-center">
            <span className="logo-lg">
             <img src="assets/images/logo-light.png" alt="" height="16"/>
            </span>
             <span className="logo-sm">
              <img src="assets/images/logo-sm.png" alt="" height="24"/>
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
              <h4 className="page-title-main">Typography</h4>
             </li>

            </ul>

</div>
           
<div className="left-side-menu">

            <div className="slimscroll-menu">

            
        <div className="user-box text-center">
              <img src="assets/images/users/user-1.jpg" alt="user-img" title="Mat Helme" className="rounded-circle img-thumbnail avatar-md"/>
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
                   <div className="col-md-12">
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

                     <h4 className="header-title mb-2">Display headings</h4>
                     <p className="sub-header">
                      Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a display heading—a larger, slightly more opinionated heading style.
                        </p>


                     <h1 className="display-1">Display 1</h1>
                     <p className="text-muted">Suspendisse vel quam malesuada, aliquet sem sit
                     amet, fringilla elit. Morbi
                     tempor tincidunt tempor. Etiam id turpis viverra, vulputate sapien
                     nec,
                     varius sem. Curabitur ullamcorper fringilla eleifend. In ut eros
                     hendrerit
                            est consequat posuere et at velit.</p>

                     <div className="clearfix"></div>

                     <h1 className="display-2">Display 2</h1>
                     <p className="text-muted">In nec rhoncus eros. Vestibulum eu mattis nisl.
                     Quisque viverra viverra magna
                     nec pulvinar. Maecenas pellentesque porta augue, consectetur
                     facilisis diam
                     porttitor sed. Suspendisse tempor est sodales augue rutrum
                     tincidunt.
                            Quisque a malesuada purus.</p>

                     <div className="clearfix"></div>

                     <h1 className="display-3">Display 3</h1>
                     <p className="text-muted">Vestibulum auctor tincidunt semper. Phasellus ut
                     vulputate lacus. Suspendisse
                     ultricies mi eros, sit amet tempor nulla varius sed. Proin nisl
                     nisi,
                            feugiat quis bibendum vitae, dapibus in tellus.</p>

                     <div className="clearfix"></div>

                     <h1 className="display-4">Display 4</h1>
                     <p className="text-muted mb-0">Nulla et mattis nunc. Curabitur scelerisque
                     commodo condimentum. Mauris
                     blandit, velit a consectetur egestas, diam arcu fermentum justo,
                     eget
                            ultrices arcu eros vel erat.</p>

                     <div className="clearfix"></div>

                    </div>
                    
                    <div className="card-box">
                     <h4 className="header-title mb-2">Headings</h4>
                     <p className="sub-header">
                      All HTML headings, <code className="highlighter-rouge">&lt;h1&gt;</code> through
                                <code>&lt;h6&gt;</code>, are available. <code>.h1</code> through <code>.h6</code>
                                classNamees are also available, for when you want to match the font styling of a heading
                                but still want your text to be displayed inline.
                            </p>

                     <h1>This is a Heading 1</h1>
                     <p className="text-muted">Suspendisse vel quam malesuada, aliquet sem sit
                     amet, fringilla elit. Morbi
                     tempor tincidunt tempor. Etiam id turpis viverra, vulputate sapien
                     nec,
                     varius sem. Curabitur ullamcorper fringilla eleifend. In ut eros
                     hendrerit
                                est consequat posuere et at velit.</p>

                     <div className="clearfix"></div>

                     <h2>This is a Heading 2</h2>
                     <p className="text-muted">In nec rhoncus eros. Vestibulum eu mattis nisl.
                     Quisque viverra viverra magna
                     nec pulvinar. Maecenas pellentesque porta augue, consectetur
                     facilisis diam
                     porttitor sed. Suspendisse tempor est sodales augue rutrum
                     tincidunt.
                                Quisque a malesuada purus.</p>

                     <div className="clearfix"></div>

                     <h3>This is a Heading 3</h3>
                     <p className="text-muted">Vestibulum auctor tincidunt semper. Phasellus ut
                     vulputate lacus. Suspendisse
                     ultricies mi eros, sit amet tempor nulla varius sed. Proin nisl
                     nisi,
                                feugiat quis bibendum vitae, dapibus in tellus.</p>

                     <div className="clearfix"></div>

                     <h4>This is a Heading 4</h4>
                     <p className="text-muted">Nulla et mattis nunc. Curabitur scelerisque
                     commodo condimentum. Mauris
                     blandit, velit a consectetur egestas, diam arcu fermentum justo,
                     eget
                                ultrices arcu eros vel erat.</p>

                     <div className="clearfix"></div>

                     <h5>This is a Heading 5</h5>
                     <p className="text-muted">Quisque nec turpis at urna dictum luctus.
                     Suspendisse convallis dignissim
                     eros at volutpat. In egestas mattis dui. Aliquam mattis dictum
                     aliquet.
                                Nulla sapien mauris, eleifend et sem ac.</p>

                     <div className="clearfix"></div>

                     <h6>This is a Heading 6</h6>
                     <p className="text-muted mb-0">Donec ultricies, lacus id tempor condimentum, orci
                     leo faucibus sem, a
                     molestie libero lectus ac justo. ultricies mi eros, sit amet tempor
                     nulla
                     varius sed. Proin nisl nisi, feugiat quis bibendum vitae, dapibus in
                                tellus.</p>
                    </div> 

                </div>

                  </div>
                  


            
            <div className="row">
                   <div className="col-lg-6">
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

                     <h4 className="header-title mb-3">Inline text elements</h4>


                     <p className="lead">
                      Your title goes here
                        </p>

                     <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                     <p><del>This line of text is meant to be treated as deleted text.</del></p>
                     <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                     <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                     <p><u>This line of text will render as underlined</u></p>
                     <p><small>This line of text is meant to be treated as fine print.</small></p>
                     <p><strong>This line rendered as bold text.</strong></p>
                     <p className="mb-0"><em>This line rendered as italicized text.</em></p>

                    </div>
                   </div>

                <div className="col-lg-6">
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

                     <h4 className="header-title mb-3">Contextual Text Colors</h4>

                     <p className="text-pink">
                      Donec ullamcorper nulla non metus auctor fringilla.
                        </p>
                     <p className="text-muted">
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.
                        </p>
                     <p className="text-primary">
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                        </p>
                     <p className="text-success">
                      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </p>
                     <p className="text-info">
                      Maecenas sed diam eget risus varius blandit sit amet non magna.
                        </p>
                     <p className="text-warning">
                      Etiam porta sem malesuada magna mollis euismod.
                        </p>
                     <p className="text-danger">
                      Donec ullamcorper nulla non metus auctor fringilla.
                        </p>
                     <p className="text-purple">
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.
                        </p>
                     <p className="text-dark mb-0">
                      Etiam porta sem malesuada magna mollis euismod.
                        </p>
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

                     <h4 className="header-title">Unordered</h4>
                     <p className="text-muted mb-3 font-13">
                      A list of items in which the order does not explicitly matter.
                        </p>

                     <ul className="mb-0">
                      <li>
                       Lorem ipsum dolor sit amet
                            </li>
                      <li>
                       Consectetur adipiscing elit
                            </li>
                      <li>
                       Integer molestie lorem at massa
                            </li>
                      <li>
                       Facilisis in pretium nisl aliquet
                            </li>
                      <li>
                       Nulla volutpat aliquam velit
                                <ul>
                        <li>
                         Phasellus iaculis neque
                                    </li>
                        <li>
                         Purus sodales ultricies
                                    </li>
                        <li>
                         Vestibulum laoreet porttitor sem
                                    </li>
                        <li>
                         Ac tristique libero volutpat at
                                    </li>
                       </ul>
                      </li>
                      <li>
                       Faucibus porta lacus fringilla vel
                            </li>
                      <li>
                       Aenean sit amet erat nunc
                            </li>
                      <li>
                       Eget porttitor lorem
                            </li>
                     </ul>
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

                     <h4 className="header-title">Ordered</h4>

                     <p className="text-muted mb-3 font-13">
                      A list of items in which the order does explicitly matter.
                        </p>

                     <ol className="mb-0">
                      <li>
                       Lorem ipsum dolor sit amet
                            </li>
                      <li>
                       Consectetur adipiscing elit
                            </li>
                      <li>
                       Integer molestie lorem at massa
                            </li>
                      <li>
                       Facilisis in pretium nisl aliquet
                            </li>
                      <li>
                       Nulla volutpat aliquam velit
                                <ol>
                        <li>
                         Phasellus iaculis neque
                                    </li>
                        <li>
                         Purus sodales ultricies
                                    </li>
                        <li>
                         Vestibulum laoreet porttitor sem
                                    </li>
                        <li>
                         Ac tristique libero volutpat at
                                    </li>
                       </ol>
                      </li>
                      <li>
                       Faucibus porta lacus fringilla vel
                            </li>
                      <li>
                       Aenean sit amet erat nunc
                            </li>
                      <li>
                       Eget porttitor lorem
                            </li>
                     </ol>
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

                     <h4 className="header-title">Unstyled</h4>

                     <p className="text-muted font-13">
                      <strong>This only applies to immediate children
                                list items</strong>, meaning you will need to add the className for any nested lists as well.
                        </p>

                     <ul className="list-unstyled mb-3">
                      <li>
                       Lorem ipsum dolor sit amet
                            </li>
                      <li>
                       Integer molestie lorem at massa
                                <ul>
                        <li>
                         Phasellus iaculis neque
                                    </li>
                       </ul>
                      </li>
                      <li>
                       Faucibus porta lacus fringilla vel
                            </li>
                      <li>
                       Eget porttitor lorem
                            </li>
                     </ul>

                     <h4 className="header-title">Inline</h4>
                     <p className="text-muted font-13">
                      Place all list items on a single line with <code>
                       display: inline-block;</code>
                            and some light padding.
                        </p>

                     <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                       Lorem ipsum
                            </li>
                      <li className="list-inline-item">
                       Phasellus iaculis
                            </li>
                      <li className="list-inline-item">
                       Nulla volutpat
                            </li>
                     </ul>
                    </div>
                   </div>
            </div>
                  
            <div className="row">

                   <div className="col-lg-6">
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

                     <h4 className="header-title mb-3">Blockquotes</h4>

                     <blockquote className="blockquote font-16 mb-3">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                      <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                     </blockquote>


                     <p className="text-muted mb-2">
                      Use text utilities as needed to change the alignment of your blockquote.
                        </p>

                     <blockquote className="blockquote font-16 text-center border-0">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                      <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                     </blockquote>

                     <blockquote className="blockquote font-16 blockquote-reverse mb-0">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                      <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                     </blockquote>


                    </div>
                   </div>

                <div className="col-lg-6">
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

                     <h4 className="header-title">Description</h4>

                     <p className="text-muted mb-3 font-13">
                      A list of terms with their associated descriptions
                        </p>

                     <dl className="row">
                      <dt className="col-sm-3">Description lists</dt>
                      <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

                      <dt className="col-sm-3">Euismod</dt>
                      <dd className="col-sm-9">
                       <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
                       <p>Donec id elit non mi porta gravida at eget metus.</p>
                      </dd>

                      <dt className="col-sm-3">Malesuada porta</dt>
                      <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

                      <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
                      <dd className="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

                      <dt className="col-sm-3">Nesting</dt>
                      <dd className="col-sm-9">
                       <dl className="row">
                        <dt className="col-sm-4">Nested definition list</dt>
                        <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
                       </dl>
                      </dd>
                     </dl>

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
                  <img src="assets/images/layouts/light.png" className="img-fluid img-thumbnail" alt=""/>
        </div>
                  <div className="custom-control custom-switch mb-3">
                   <input type="checkbox" className="custom-control-input theme-choice" id="light-mode-switch" checked />
                   <label className="custom-control-label" for="light-mode-switch">Light Mode</label>
                  </div>

                  <div className="mb-2">
                   <img src="assets/images/layouts/dark.png" className="img-fluid img-thumbnail" alt=""/>
        </div>
                   <div className="custom-control custom-switch mb-3">
                    <input type="checkbox" className="custom-control-input theme-choice" id="dark-mode-switch" data-bsStyle="assets/css/bootstrap-dark.min.css"
                     data-appStyle="assets/css/app-dark.min.css" />
                    <label className="custom-control-label" for="dark-mode-switch">Dark Mode</label>
                   </div>

                   <div className="mb-2">
                    <img src="assets/images/layouts/rtl.png" className="img-fluid img-thumbnail" alt=""/>
        </div>
                    <div className="custom-control custom-switch mb-3">
                     <input type="checkbox" className="custom-control-input theme-choice" id="rtl-mode-switch" data-appStyle="assets/css/app-rtl.min.css" />
                     <label className="custom-control-label" for="rtl-mode-switch">RTL Mode</label>
                    </div>

                    <div className="mb-2">
                     <img src="assets/images/layouts/dark-rtl.png" className="img-fluid img-thumbnail" alt=""/>
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
