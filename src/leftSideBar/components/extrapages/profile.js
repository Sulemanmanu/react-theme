import React, { Component } from 'react'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'
import Footer from '../../../common/home/footer'
import RightSide from '../../../common/home/rightSide'

export default class Profile extends Component {
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
         <div className="col-sm-8">
          <div className="bg-picture card-box">
           <div className="profile-info-name">
            <img src="assets/images/profile.jpg"
             className="rounded-circle avatar-xl img-thumbnail float-left mr-3" alt="profile-image" />

            <div className="profile-info-detail overflow-hidden">
             <h4 className="m-0">Alexandra Clarkson</h4>
             <p className="text-muted"><i>Web Designer</i></p>
             <p className="font-13">Hi I'm Alexandra Clarkson,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature it over 2000 years to popular belief Ipsum is not simplyrandom text.</p>

             <ul className="social-list list-inline mt-3 mb-0">
              <li className="list-inline-item">
               <a href="javascript: void(0);" className="social-list-item border-purple text-purple"><i
                className="mdi mdi-facebook"></i></a>
              </li>
              <li className="list-inline-item">
               <a href="javascript: void(0);" className="social-list-item border-danger text-danger"><i
                className="mdi mdi-google"></i></a>
              </li>
              <li className="list-inline-item">
               <a href="javascript: void(0);" className="social-list-item border-info text-info"><i
                className="mdi mdi-twitter"></i></a>
              </li>
              <li className="list-inline-item">
               <a href="javascript: void(0);" className="social-list-item border-secondary text-secondary"><i
                className="mdi mdi-github"></i></a>
              </li>
             </ul>

            </div>

            <div className="clearfix"></div>
           </div>
          </div>



          <form method="post" className="card-box">
           <span className="input-icon icon-right">
            <textarea rows="3" className="form-control" placeholder="Post a new message"></textarea>
           </span>
           <div className="pt-1 float-right">
            <a href="" className="btn btn-primary btn-sm waves-effect waves-light">Send</a>
           </div>
           <ul className="nav nav-pills profile-pills mt-1">
            <li>
             <a href="#"><i className="fa fa-user"></i></a>
            </li>
            <li>
             <a href="#"><i className="fa fa-location-arrow"></i></a>
            </li>
            <li>
             <a href="#"><i className=" fa fa-camera"></i></a>
            </li>
            <li>
             <a href="#"><i className="far fa-smile"></i></a>
            </li>
           </ul>

          </form>
          <div className="card-box">
           <div className="media mb-2">
            <img src="assets/images/users/user-1.jpg" alt="" className="comment-avatar avatar-sm rounded mr-2" />
            <div className="media-body">
             <h5 className="mt-0"><a href="#" className="text-dark">Adam Jansen</a><small className="ml-1 text-muted">about 2 minuts ago</small></h5>
             <p>Story based around the idea of time lapse, animation to post soon!</p>
             <div>
              <a href="">
               <img src="assets/images/small/img-1.jpg" className="avatar-md rounded" />
              </a>
              <a href="">
               <img src="assets/images/small/img-2.jpg" className="avatar-md rounded" />
              </a>
              <a href="">
               <img src="assets/images/small/img-3.jpg" className="avatar-md rounded" />
              </a>
             </div>
             <div className="comment-footer pt-2 mb-3">
              <a href="#"><i className="far fa-thumbs-up"></i></a>
              <a href="#"><i className="far fa-thumbs-down"></i></a>
              <a href="#">Reply</a>
             </div>

             <div className="media mb-2">
              <img src="assets/images/users/user-3.jpg" alt="" className="comment-avatar avatar-sm rounded mr-2" />
              <div className="media-body">
               <h5 className="mt-0"><a href="#" className="text-dark">John Smith</a><small className="ml-1 text-muted">about 1 hour ago</small></h5>
               <p>Wow impressive!</p>

               <div className="comment-footer">
                <a href="#"><i className="far fa-thumbs-up"></i></a>
                <a href="#"><i className="far fa-thumbs-down"></i></a>
                <a href="#">Reply</a>
               </div>
              </div>
             </div>
             <div className="media">
              <img src="assets/images/users/user-4.jpg" alt="" className="comment-avatar avatar-sm rounded mr-2" />
              <div className="media-body">
               <h5 className="mt-0"><a href="#" className="text-dark">Matt Cheuvront</a><small className="ml-1 text-muted">about 2 hour ago</small></h5>
               <p>Wow, that is really nice.</p>

               <div className="comment-footer mb-3">
                <a href="#"><i className="far fa-thumbs-up"></i></a>
                <a href="#"><i className="far fa-thumbs-down"></i></a>
                <a href="#">Reply</a>
               </div>

               <div className="media mb-2">
                <img src="assets/images/users/user-5.jpg" alt="" className="comment-avatar avatar-sm rounded mr-2" />
                <div className="media-body">
                 <h5 className="mt-0"><a href="#" className="text-dark">Stephanie Walter</a><small className="ml-1 text-muted">about 3 hour ago</small></h5>
                 <p>Nice work, makes me think of The Money Pit.</p>

                 <div className="comment-footer">
                  <a href="#"><i className="far fa-thumbs-up"></i></a>
                  <a href="#"><i className="far fa-thumbs-down"></i></a>
                  <a href="#">Reply</a>
                 </div>
                </div>
               </div>
              </div>
             </div>
            </div>
           </div>

           <div className="media mb-3">
            <img src="assets/images/users/user-6.jpg" alt="" className="comment-avatar avatar-sm rounded mr-2" />
            <div className="media-body">
             <h5 className="mt-0"><a href="#" className="text-dark">John Smith</a><small className="ml-1 text-muted">about 4 hour ago</small></h5>
             <p>i'm in the middle of a timelapse animation myself! (Very different though.) Awesome stuff.</p>

             <div className="comment-footer">
              <a href="#"><i className="far fa-thumbs-up"></i></a>
              <a href="#"><i className="far fa-thumbs-down"></i></a>
              <a href="#">Reply</a>
             </div>
            </div>
           </div>

           <div className="media mb-3">
            <img src="assets/images/users/user-7.jpg" alt="" className="comment-avatar avatar-sm rounded mr-2" />
            <div className="media-body">
             <h5 className="mt-0"><a href="#" className="text-dark">Nicolai Larson</a><small className="ml-1 text-muted">about 10 hour ago</small></h5>
             <p>The parallax is a little odd but O.o that house build is awesome!!</p>

             <div className="comment-footer">
              <a href="#"><i className="far fa-thumbs-up"></i></a>
              <a href="#"><i className="far fa-thumbs-down"></i></a>
              <a href="#">Reply</a>
             </div>
            </div>
           </div>

           <div className="text-center">
            <a href="" className="text-danger"><i className="mdi mdi-spin mdi-loading mr-1"></i> Load more </a>
           </div>
          </div>

         </div>

         <div className="col-sm-4">
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

           <h4 className="header-title mt-0 mb-3">My Team Members</h4>

           <ul className="list-group mb-0 user-list">
            <li className="list-group-item">
             <a href="#" className="user-list-item">
              <div className="user avatar-sm float-left mr-2">
               <img src="assets/images/users/user-2.jpg" alt="" className="img-fluid rounded-circle" />
              </div>
              <div className="user-desc">
               <h5 className="name mt-0 mb-1">Michael Zenaty</h5>
               <p className="desc text-muted mb-0 font-12">CEO</p>
              </div>
             </a>
            </li>

            <li className="list-group-item">
             <a href="#" className="user-list-item">
              <div className="user avatar-sm float-left mr-2">
               <img src="assets/images/users/user-3.jpg" alt="" className="img-fluid rounded-circle" />
              </div>
              <div className="user-desc">
               <h5 className="name mt-0 mb-1">James Neon</h5>
               <p className="desc text-muted mb-0 font-12">Web Designer</p>
              </div>
             </a>
            </li>

            <li className="list-group-item">
             <a href="#" className="user-list-item">
              <div className="user avatar-sm float-left mr-2">
               <img src="assets/images/users/user-5.jpg" alt="" className="img-fluid rounded-circle" />
              </div>
              <div className="user-desc">
               <h5 className="name mt-0 mb-1">John Smith</h5>
               <p className="desc text-muted mb-0 font-12">Web Developer</p>
              </div>
             </a>
            </li>

            <li className="list-group-item">
             <a href="#" className="user-list-item">
              <div className="user avatar-sm float-left mr-2">
               <img src="assets/images/users/user-6.jpg" alt="" className="img-fluid rounded-circle" />
              </div>
              <div className="user-desc">
               <h5 className="name mt-0 mb-1">Michael Zenaty</h5>
               <p className="desc text-muted mb-0 font-12">Programmer</p>
              </div>
             </a>
            </li>

            <li className="list-group-item">
             <a href="#" className="user-list-item">
              <div className="user avatar-sm float-left mr-2">
               <img src="assets/images/users/user-1.jpg" alt="" className="img-fluid rounded-circle" />
              </div>
              <div className="user-desc">
               <h5 className="name mt-0 mb-1">Mat Helme</h5>
               <p className="desc text-muted mb-0 font-12">Manager</p>
              </div>
             </a>
            </li>
           </ul>
          </div>

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

           <h4 className="header-title mt-0 mb-3"><i className="mdi mdi-notification-clear-all mr-1"></i> Upcoming Reminders</h4>

           <ul className="list-group mb-0 user-list">
            <li className="list-group-item">
             <a href="#" className="user-list-item">
              <div className="user float-left mr-3">
               <i className="mdi mdi-circle text-primary"></i>
              </div>
              <div className="user-desc overflow-hidden">
               <h5 className="name mt-0 mb-1">Meet Manager</h5>
               <span className="desc text-muted font-12 text-truncate d-block">February 24, 2019 - 10:30am to 12:45pm</span>
              </div>
             </a>
            </li>

            <li className="list-group-item">
             <a href="#" className="user-list-item">
              <div className="user float-left mr-3">
               <i className="mdi mdi-circle text-success"></i>
              </div>
              <div className="user-desc overflow-hidden">
               <h5 className="name mt-0 mb-1">Project Discussion</h5>
               <span className="desc text-muted font-12 text-truncate d-block">February 25, 2019 - 10:30am to 12:45pm</span>
              </div>
             </a>
            </li>

            <li className="list-group-item">
             <a href="#" className="user-list-item">
              <div className="user float-left mr-3">
               <i className="mdi mdi-circle text-pink"></i>
              </div>
              <div className="user-desc overflow-hidden">
               <h5 className="name mt-0 mb-1">Meet Manager</h5>
               <span className="desc text-muted font-12 text-truncate d-block">February 26, 2019 - 10:30am to 12:45pm</span>
              </div>
             </a>
            </li>

            <li className="list-group-item">
             <a href="#" className="user-list-item">
              <div className="user float-left mr-3">
               <i className="mdi mdi-circle text-muted"></i>
              </div>
              <div className="user-desc overflow-hidden">
               <h5 className="name mt-0 mb-1">Project Discussion</h5>
               <span className="desc text-muted font-12 text-truncate d-block">February 27, 2019 - 10:30am to 12:45pm</span>
              </div>
             </a>
            </li>

            <li className="list-group-item">
             <a href="#" className="user-list-item">
              <div className="user float-left mr-3">
               <i className="mdi mdi-circle text-danger"></i>
              </div>
              <div className="user-desc overflow-hidden">
               <h5 className="name mt-0 mb-1">Meet Manager</h5>
               <span className="desc text-muted font-12 text-truncate d-block">February 28, 2019 - 10:30am to 12:45pm</span>
              </div>
             </a>
            </li>
           </ul>
          </div>


         </div>
        </div>

       </div>

      </div>

     </div>
     <Footer />
    </div>
    <RightSide />
   </div>

  )
 }
}
