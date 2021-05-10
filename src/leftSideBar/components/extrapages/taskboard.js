import React, { Component } from 'react'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'
import RightSide from '../../../common/home/rightSide'
import Footer from '../../../common/home/footer'

export default class Taskboard extends Component {
 render() {
  return (
   <div>
   <div id="wrapper">
<Topbar/>
<Sidebar/>
    <div className="content-page">
     <div className="content">

      {/* <!-- Start Content--> */}
      <div className="container-fluid">

       <div className="row">
        <div className="col-xl-4">
         <div className="card-box taskboard-box">
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

          <h4 className="header-title mt-0 mb-3 text-primary">Upcoming</h4>

          <ul className="sortable-list list-unstyled taskList" id="upcoming">
           <li>
            <div className="kanban-box">
             <div className="checkbox-wrapper float-left">
              <div className="checkbox checkbox-success checkbox-single">
               <input type="checkbox" id="singleCheckbox2" value="option2"
                aria-label="Single checkbox Two" />
               <label></label>
              </div>
             </div>

             <div className="kanban-detail">
              <span className="badge badge-danger float-right">Urgent</span>
              <h5 className="mt-0"><a href="" className="text-dark">Improve animation loader</a> </h5>
              <ul className="list-inline">
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="Username">
                 <img src="assets/images/users/user-2.jpg" alt="img"
                  className="avatar-sm rounded-circle" />
                </a>
               </li>
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="5 Tasks">
                 <i className="mdi mdi-format-align-left"></i>
                </a>
               </li>
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="3 Comments">
                 <i className="mdi mdi-comment-outline"></i>
                </a>
               </li>
              </ul>
             </div>
            </div>
           </li>

           <li>
            <div className="kanban-box">
             <div className="checkbox-wrapper float-left">
              <div className="checkbox checkbox-success checkbox-single">
               <input type="checkbox" id="singleCheckbox3" value="option3"
                aria-label="Single checkbox Two" />
               <label></label>
              </div>
             </div>

             <div className="kanban-detail">
              <span className="badge badge-warning float-right">High</span>
              <h5 className="mt-0"><a href="" className="text-dark">Write a release note for Admin v1.5</a> </h5>
              <ul className="list-inline">
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="Username">
                 <img src="assets/images/users/user-3.jpg" alt="img"
                  className="avatar-sm rounded-circle" />
                </a>
               </li>
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="5 Tasks">
                 <i className="mdi mdi-format-align-left"></i>
                </a>
               </li>
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="3 Comments">
                 <i className="mdi mdi-comment-outline"></i>
                </a>
               </li>
              </ul>
             </div>
            </div>
           </li>

           <li>
            <div className="kanban-box">
             <div className="checkbox-wrapper float-left">
              <div className="checkbox checkbox-success checkbox-single">
               <input type="checkbox" id="singleCheckbox4" value="option4"
                aria-label="Single checkbox Two" />
               <label></label>
              </div>
             </div>

             <div className="kanban-detail">
              <h5 className="mt-0"><a href="" className="text-dark">Invite user to a project</a> </h5>
              <ul className="list-inline">
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="Username">
                 <img src="assets/images/users/user-4.jpg" alt="img"
                  className="avatar-sm rounded-circle" />
                </a>
               </li>
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="5 Tasks">
                 <i className="mdi mdi-format-align-left"></i>
                </a>
               </li>
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="3 Comments">
                 <i className="mdi mdi-comment-outline"></i>
                </a>
               </li>
              </ul>
             </div>
            </div>
           </li>


           <li>
            <div className="kanban-box">
             <div className="checkbox-wrapper float-left">
              <div className="checkbox checkbox-success checkbox-single">
               <input type="checkbox" id="singleCheckbox5" value="option2"
                aria-label="Single checkbox Two" />
               <label></label>
              </div>
             </div>

             <div className="kanban-detail">
              <span className="badge badge-danger float-right">Urgent</span>
              <h5 className="mt-0"><a href="" className="text-dark">Code HTML email template for welcome email</a> </h5>
              <ul className="list-inline">
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="Username">
                 <img src="assets/images/users/user-5.jpg" alt="img"
                  className="avatar-sm rounded-circle" />
                </a>
               </li>
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="5 Tasks">
                 <i className="mdi mdi-format-align-left"></i>
                </a>
               </li>
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="3 Comments">
                 <i className="mdi mdi-comment-outline"></i>
                </a>
               </li>
              </ul>
             </div>
            </div>
           </li>

          </ul>

          <div className="text-center pt-2">
           <a href="#custom-modal" className="btn btn-primary waves-effect waves-light"
            data-animation="fadein" data-plugin="custommodal" data-overlaySpeed="200" data-overlayColor="#36404a">
            <i className="mdi mdi-plus"></i> Add New
                                        </a>
          </div>
         </div>
        </div>


        <div className="col-xl-4">
         <div className="card-box taskboard-box">
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

          <h4 className="header-title mt-0 mb-3 text-warning">In Progress</h4>

          <ul className="sortable-list list-unstyled taskList" id="inprogress">
           <li>
            <div className="kanban-box">
             <div className="checkbox-wrapper float-left">
              <div className="checkbox checkbox-success checkbox-single">
               <input type="checkbox" id="singleCheckbox6" value="option6"
                aria-label="Single checkbox Two" />
               <label></label>
              </div>
             </div>

             <div className="kanban-detail">
              <span className="badge badge-danger float-right">Urgent</span>
              <h5 className="mt-0"><a href="" className="text-dark">File Uploads on cards</a> </h5>
              <ul className="list-inline">
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="Username">
                 <img src="assets/images/users/user-6.jpg" alt="img"
                  className="avatar-sm rounded-circle" />
                </a>
               </li>
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="5 Tasks">
                 <i className="mdi mdi-format-align-left"></i>
                </a>
               </li>
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="3 Comments">
                 <i className="mdi mdi-comment-outline"></i>
                </a>
               </li>
              </ul>
             </div>
            </div>
           </li>

           <li>
            <div className="kanban-box">
             <div className="checkbox-wrapper float-left">
              <div className="checkbox checkbox-success checkbox-single">
               <input type="checkbox" id="singleCheckbox7" value="option7"
                aria-label="Single checkbox Two" />
               <label></label>
              </div>
             </div>

             <div className="kanban-detail">
              <span className="badge badge-warning float-right">High</span>
              <h5 className="mt-0"><a href="" className="text-dark">Enable analytics tracking</a> </h5>
              <ul className="list-inline">
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="Username">
                 <img src="assets/images/users/user-7.jpg" alt="img"
                  className="avatar-sm rounded-circle" />
                </a>
               </li>
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="5 Tasks">
                 <i className="mdi mdi-format-align-left"></i>
                </a>
               </li>
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="3 Comments">
                 <i className="mdi mdi-comment-outline"></i>
                </a>
               </li>
              </ul>
             </div>
            </div>
           </li>


           <li>
            <div className="kanban-box">
             <div className="checkbox-wrapper float-left">
              <div className="checkbox checkbox-success checkbox-single">
               <input type="checkbox" id="singleCheckbox8" value="option8"
                aria-label="Single checkbox Two" />
               <label></label>
              </div>
             </div>

             <div className="kanban-detail">
              <h5 className="mt-0"><a href="" className="text-dark">Improve animation loader</a> </h5>
              <ul className="list-inline">
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="Username">
                 <img src="assets/images/users/user-8.jpg" alt="img"
                  className="avatar-sm rounded-circle" />
                </a>
               </li>
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="5 Tasks">
                 <i className="mdi mdi-format-align-left"></i>
                </a>
               </li>
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="3 Comments">
                 <i className="mdi mdi-comment-outline"></i>
                </a>
               </li>
              </ul>
             </div>
            </div>
           </li>

          </ul>

          <div className="text-center pt-2">
           <a href="#custom-modal" className="btn btn-primary waves-effect waves-light"
            data-animation="fadein" data-plugin="custommodal" data-overlaySpeed="200" data-overlayColor="#36404a">
            <i className="mdi mdi-plus"></i> Add New
                                        </a>
          </div>
         </div>
        </div>


        <div className="col-xl-4">
         <div className="card-box taskboard-box">
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

          <h4 className="header-title mt-0 mb-3 text-success">Complete</h4>

          <ul className="sortable-list list-unstyled taskList" id="completed">
           <li>
            <div className="kanban-box">
             <div className="checkbox-wrapper float-left">
              <div className="checkbox checkbox-success checkbox-single">
               <input type="checkbox" id="singleCheckbox10" value="option10"
                aria-label="Single checkbox Two" />
               <label></label>
              </div>
             </div>

             <div className="kanban-detail">
              <span className="badge badge-danger float-right">Urgent</span>
              <h5 className="mt-0"><a href="" className="text-dark">Improve animation loader</a> </h5>
              <ul className="list-inline">
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="Username">
                 <img src="assets/images/users/user-9.jpg" alt="img"
                  className="avatar-sm rounded-circle" />
                </a>
               </li>
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="5 Tasks">
                 <i className="mdi mdi-format-align-left"></i>
                </a>
               </li>
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="3 Comments">
                 <i className="mdi mdi-comment-outline"></i>
                </a>
               </li>
              </ul>
             </div>
            </div>
           </li>

           <li>
            <div className="kanban-box">
             <div className="checkbox-wrapper float-left">
              <div className="checkbox checkbox-success checkbox-single">
               <input type="checkbox" id="singleCheckbox11" value="option11"
                aria-label="Single checkbox Two" />
               <label></label>
              </div>
             </div>

             <div className="kanban-detail">
              <span className="badge badge-warning float-right">High</span>
              <h5><a href="" className="text-dark">Write a release note for Admin v1.5</a> </h5>
              <ul className="list-inline">
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="Username">
                 <img src="assets/images/users/user-1.jpg" alt="img"
                  className="avatar-sm rounded-circle" />
                </a>
               </li>
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="5 Tasks">
                 <i className="mdi mdi-format-align-left"></i>
                </a>
               </li>
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="3 Comments">
                 <i className="mdi mdi-comment-outline"></i>
                </a>
               </li>
              </ul>
             </div>
            </div>
           </li>


           <li>
            <div className="kanban-box">
             <div className="checkbox-wrapper float-left">
              <div className="checkbox checkbox-success checkbox-single float-left">
               <input type="checkbox" id="singleCheckbox12" value="option12"
                aria-label="Single checkbox Two" />
               <label></label>
              </div>
             </div>

             <div className="kanban-detail">
              <h5 className="mt-0"><a href="" className="text-dark">Invite user to a project</a> </h5>
              <ul className="list-inline">
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="Username">
                 <img src="assets/images/users/user-2.jpg" alt="img"
                  className="avatar-sm rounded-circle" />
                </a>
               </li>
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="5 Tasks">
                 <i className="mdi mdi-format-align-left"></i>
                </a>
               </li>
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="3 Comments">
                 <i className="mdi mdi-comment-outline"></i>
                </a>
               </li>
              </ul>
             </div>
            </div>
           </li>


           <li>
            <div className="kanban-box">
             <div className="checkbox-wrapper float-left">
              <div className="checkbox checkbox-success checkbox-single">
               <input type="checkbox" id="singleCheckbox13" value="option13"
                aria-label="Single checkbox Two" />
               <label></label>
              </div>
             </div>

             <div className="kanban-detail">
              <span className="badge badge-danger float-right">Urgent</span>
              <h5 className="mt-0"><a href="" className="text-dark">Code HTML email template for welcome email</a> </h5>
              <ul className="list-inline">
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="Username">
                 <img src="assets/images/users/user-3.jpg" alt="img"
                  className="avatar-sm rounded-circle" />
                </a>
               </li>
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="5 Tasks">
                 <i className="mdi mdi-format-align-left"></i>
                </a>
               </li>
               <li className="list-inline-item">
                <a href="" data-toggle="tooltip" data-placement="top"
                 title="" data-original-title="3 Comments">
                 <i className="mdi mdi-comment-outline"></i>
                </a>
               </li>
              </ul>
             </div>
            </div>
           </li>

          </ul>

          <div className="text-center pt-2">
           <a href="#custom-modal" className="btn btn-primary waves-effect waves-light"
            data-animation="fadein" data-plugin="custommodal" data-overlaySpeed="200" data-overlayColor="#36404a">
            <i className="mdi mdi-plus"></i> Add New
                                        </a>
          </div>
         </div>
        </div>


       </div>


      </div>
      </div>

     </div>
     <Footer/>
    </div>
    <RightSide/>
   </div>

  )
 }
}
