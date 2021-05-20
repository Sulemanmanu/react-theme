import React, { Component } from 'react'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'
import RightSide from '../../../common/home/rightSide'
import Footer from '../../../common/home/footer'

export default class Taskdetail extends Component {
 render() {
  return (
   <div>
    <div id="wrapper">
     <Topbar />
     <Sidebar />
     <div className="content-page">
      <div className="content">

       {/* <!-- Start Content--> */}
       <div className="container-fluid">

        <div className="row">
         <div className="col-md-8">
          <div className="card-box task-detail">
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
           <div className="media mb-3">
            <img className="d-flex mr-3 rounded-circle avatar-md" alt="64x64" src="assets/images/users/user-2.jpg" />
            <div className="media-body">
             <h4 className="media-heading mt-0">Michael Zenaty</h4>
             <span className="badge badge-danger">Urgent</span>
            </div>
           </div>

           <h4>Code HTML email template for welcome email</h4>

           <p className="text-muted">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint cupiditate non sunt in culpa qui officia deserunt animi est laborum et
                                    </p>

           <p className="text-muted">
            Consectetur adipisicing elit. Voluptates, illo, iste
            itaque voluptas corrupti ratione reprehenderit magni similique Tempore quos
            delectus asperiores libero voluptas quod perferendis erum ipsum dolor sit.
                                    </p>

           <div className="row task-dates mb-0 mt-2">
            <div className="col-lg-6">
             <h5 className="font-600 m-b-5">Start Date</h5>
             <p> 22 March 2016 <small className="text-muted">1:00 PM</small></p>
            </div>

            <div className="col-lg-6">
             <h5 className="font-600 m-b-5">Due Date</h5>
             <p> 17 April 2016 <small className="text-muted">12:00 PM</small></p>
            </div>
           </div>
           <div className="clearfix"></div>

           <div className="task-tags mt-2">
            <h5>Tags</h5>
            <input type="text" defaultValue="Amsterdam,Washington,Sydney" data-role="tagsinput" placeholder="add tags" />
           </div>

           <div className="assign-team mt-4">
            <h5>Assign to</h5>
            <div>
             <a href="#"> <img className="rounded-circle avatar-sm" alt="64x64" src="assets/images/users/user-2.jpg" /> </a>
             <a href="#"> <img className="rounded-circle avatar-sm" alt="64x64" src="assets/images/users/user-3.jpg" /> </a>
             <a href="#"> <img className="rounded-circle avatar-sm" alt="64x64" src="assets/images/users/user-5.jpg" /> </a>
             <a href="#"> <img className="rounded-circle avatar-sm" alt="64x64" src="assets/images/users/user-8.jpg" /> </a>
             <a href="#"><span className="add-new-plus"><i className="mdi mdi-plus"></i> </span></a>
            </div>
           </div>

           <div className="attached-files mt-4">
            <h5>Attached Files </h5>
            <ul className="list-inline files-list">
             <li className="list-inline-item file-box">
              <a href=""><img src="assets/images/attached-files/img-1.jpg" className="img-fluid img-thumbnail" alt="attached-img" width="80" /></a>
              <p className="font-13 mb-1 text-muted"><small>File one</small></p>
             </li>
             <li className="list-inline-item file-box">
              <a href=""><img src="assets/images/attached-files/img-2.jpg" className="img-fluid img-thumbnail" alt="attached-img" width="80" /></a>
              <p className="font-13 mb-1 text-muted"><small>Attached-2</small></p>
             </li>
             <li className="list-inline-item file-box">
              <a href=""><img src="assets/images/attached-files/img-3.jpg" className="img-fluid img-thumbnail" alt="attached-img" width="80" /></a>
              <p className="font-13 mb-1 text-muted"><small>Dribbble shot</small></p>
             </li>
             <li className="list-inline-item file-box ml-2">
              <div className="fileupload add-new-plus">
               <span><i className="mdi-plus mdi"></i></span>
               <input type="file" className="upload" />
              </div>
             </li>
            </ul>
            <div className="row">
             <div className="col-sm-12">
              <div className="text-right">
               <button type="submit" className="btn btn-success waves-effect waves-light mr-1">
                Save
                                                    </button>
               <button type="button"
                className="btn btn-light waves-effect">Cancel
                                                    </button>
              </div>
             </div>
            </div>
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

           <h4 className="header-title mt-0 mb-3">Comments (6)</h4>

           <div>

            <div className="media mb-3">
             <div className="d-flex mr-3">
              <a href="#"> <img className="media-object rounded-circle avatar-sm" alt="64x64" src="assets/images/users/user-1.jpg" /> </a>
             </div>
             <div className="media-body">
              <h5 className="mt-0">Mat Helme</h5>
              <p className="font-13 text-muted mb-0">
               <a href="" className="text-primary">@Michael</a>
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                                    ante sollicitudin commodo.
                                                </p>
              <a href="" className="text-success font-13">Reply</a>
             </div>
            </div>

            <div className="media mb-3">
             <div className="d-flex mr-3">
              <a href="#"> <img className="media-object rounded-circle avatar-sm" alt="64x64" src="assets/images/users/user-2.jpg" /> </a>
             </div>
             <div className="media-body">
              <h5 className="mt-0">Media heading</h5>
              <p className="font-13 text-muted mb-0">
               <a href="" className="text-primary">@Michael</a>
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque sollicitudin purus odio.
                                                </p>
              <a href="" className="text-success font-13">Reply</a>

              <div className="media my-2">
               <div className="d-flex mr-3">
                <a href="#"> <img className="media-object rounded-circle avatar-sm" alt="64x64" src="assets/images/users/user-3.jpg" /> </a>
               </div>
               <div className="media-body">
                <h5 className="mt-0">Nested media heading</h5>
                <p className="font-13 text-muted mb-0">
                 <a href="" className="text-primary">@Michael</a>
                                                            Cras sit amet nibh libero, in gravida nulla vel metus scelerisque ante sollicitudin purus odio.
                                                        </p>
                <a href="" className="text-success font-13">Reply</a>
               </div>
              </div>
             </div>
            </div>

            <div className="media mb-3">
             <div className="d-flex mr-3">
              <a href="#"> <img className="media-object rounded-circle avatar-sm" alt="64x64" src="assets/images/users/user-1.jpg" /> </a>
             </div>
             <div className="media-body">
              <h5 className="mt-0">Mat Helme</h5>
              <p className="font-13 text-muted mb-0">
               <a href="" className="text-primary">@Michael</a>
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                                    ante sollicitudin commodo cras purus.
                                                </p>
              <a href="" className="text-success font-13">Reply</a>
             </div>
            </div>

            <div className="media mb-3">
             <div className="d-flex mr-3">
              <a href="#"> <img className="media-object rounded-circle avatar-sm" alt="64x64" src="assets/images/users/user-1.jpg" /> </a>
             </div>
             <div className="media-body">
              <h5 className="mt-0">Mat Helme</h5>
              <p className="font-13 text-muted mb-0">
               <a href="" className="text-primary">@Michael</a>
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                                    ante sollicitudin commodo cras.
                                                </p>
              <a href="" className="text-success font-13">Reply</a>
             </div>
            </div>

            <div className="media mb-3">
             <div className="d-flex mr-3">
              <a href="#"> <img className="media-object rounded-circle avatar-sm" alt="64x64" src="assets/images/users/user-1.jpg" /> </a>
             </div>
             <div className="media-body">
              <input type="text" className="form-control input-sm" placeholder="Some text value..." />
             </div>
            </div>

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
