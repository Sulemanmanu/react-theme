import React, { Component } from 'react'
import Footer from '../../../common/home/footer'
import RightSide from '../../../common/home/rightSide'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'

export default class ContactList extends Component {
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
         <div className="col-xl-4">
          <a href="#custom-modal" className="btn btn-success btn-md waves-effect waves-light mb-3" data-animation="fadein" data-plugin="custommodal"
           data-overlaySpeed="200" data-overlayColor="#36404a"><i className="mdi mdi-plus-circle-outline"></i> Add Contact</a>
         </div>
        </div>


        <div className="row">
         <div className="col-xl-4">
          <div className="text-center card-box">
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
           <div>
            <img src="assets/images/users/user-10.jpg" className="rounded-circle avatar-xl img-thumbnail mb-2" alt="profile-image" />

            <p className="text-muted font-13 mb-3">
             Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
                                        </p>

            <div className="text-left">
             <p className="text-muted font-13"><strong>Full Name :</strong> <span className="ml-2">Johnathan Deo</span></p>

             <p className="text-muted font-13"><strong>Mobile :</strong><span className="ml-2">(123) 123 1234</span></p>

             <p className="text-muted font-13"><strong>Email :</strong> <span className="ml-2">coderthemes@gmail.com</span></p>

             <p className="text-muted font-13"><strong>Location :</strong> <span className="ml-2">USA</span></p>
            </div>

            <button type="button" className="btn btn-primary btn-rounded waves-effect waves-light">Send Message</button>
           </div>

          </div>

         </div>

         <div className="col-xl-4">
          <div className="text-center card-box">
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
           <div>
            <img src="assets/images/users/user-9.jpg" className="rounded-circle avatar-xl img-thumbnail mb-2" alt="profile-image" />

            <p className="text-muted font-13 mb-3">
             Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
                                        </p>

            <div className="text-left">
             <p className="text-muted font-13"><strong>Full Name :</strong> <span className="ml-2">Johnathan Deo</span></p>

             <p className="text-muted font-13"><strong>Mobile :</strong><span className="ml-2">(123) 123 1234</span></p>

             <p className="text-muted font-13"><strong>Email :</strong> <span className="ml-2">coderthemes@gmail.com</span></p>

             <p className="text-muted font-13"><strong>Location :</strong> <span className="ml-2">USA</span></p>
            </div>

            <button type="button" className="btn btn-primary btn-rounded waves-effect waves-light">Send Message</button>
           </div>

          </div>

         </div>

         <div className="col-xl-4">
          <div className="text-center card-box">
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
           <div>
            <img src="assets/images/users/user-8.jpg" className="rounded-circle avatar-xl img-thumbnail mb-2" alt="profile-image" />

            <p className="text-muted font-13 mb-3">
             Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
                                        </p>

            <div className="text-left">
             <p className="text-muted font-13"><strong>Full Name :</strong> <span className="ml-2">Johnathan Deo</span></p>

             <p className="text-muted font-13"><strong>Mobile :</strong><span className="ml-2">(123) 123 1234</span></p>

             <p className="text-muted font-13"><strong>Email :</strong> <span className="ml-2">coderthemes@gmail.com</span></p>

             <p className="text-muted font-13"><strong>Location :</strong> <span className="ml-2">USA</span></p>
            </div>

            <button type="button" className="btn btn-primary btn-rounded waves-effect waves-light">Send Message</button>
           </div>

          </div>

         </div>
        </div>



        <div className="row">
         <div className="col-xl-4">
          <div className="text-center card-box">
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
           <div>
            <img src="assets/images/users/user-7.jpg" className="rounded-circle avatar-xl img-thumbnail mb-2" alt="profile-image" />

            <p className="text-muted font-13 mb-3">
             Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
                                        </p>

            <div className="text-left">
             <p className="text-muted font-13"><strong>Full Name :</strong> <span className="ml-2">Johnathan Deo</span></p>

             <p className="text-muted font-13"><strong>Mobile :</strong><span className="ml-2">(123) 123 1234</span></p>

             <p className="text-muted font-13"><strong>Email :</strong> <span className="ml-2">coderthemes@gmail.com</span></p>

             <p className="text-muted font-13"><strong>Location :</strong> <span className="ml-2">USA</span></p>
            </div>

            <button type="button" className="btn btn-primary btn-rounded waves-effect waves-light">Send Message</button>
           </div>

          </div>

         </div>

         <div className="col-xl-4">
          <div className="text-center card-box">
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
           <div>
            <img src="assets/images/users/user-6.jpg" className="rounded-circle avatar-xl img-thumbnail mb-2" alt="profile-image" />

            <p className="text-muted font-13 mb-3">
             Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
                                        </p>

            <div className="text-left">
             <p className="text-muted font-13"><strong>Full Name :</strong> <span className="ml-2">Johnathan Deo</span></p>

             <p className="text-muted font-13"><strong>Mobile :</strong><span className="ml-2">(123) 123 1234</span></p>

             <p className="text-muted font-13"><strong>Email :</strong> <span className="ml-2">coderthemes@gmail.com</span></p>

             <p className="text-muted font-13"><strong>Location :</strong> <span className="ml-2">USA</span></p>
            </div>

            <button type="button" className="btn btn-primary btn-rounded waves-effect waves-light">Send Message</button>
           </div>

          </div>

         </div>

         <div className="col-xl-4">
          <div className="text-center card-box">
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
           <div>
            <img src="assets/images/users/user-5.jpg" className="rounded-circle avatar-xl img-thumbnail mb-2" alt="profile-image" />

            <p className="text-muted font-13 mb-3">
             Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
                                        </p>

            <div className="text-left">
             <p className="text-muted font-13"><strong>Full Name :</strong> <span className="ml-2">Johnathan Deo</span></p>

             <p className="text-muted font-13"><strong>Mobile :</strong><span className="ml-2">(123) 123 1234</span></p>

             <p className="text-muted font-13"><strong>Email :</strong> <span className="ml-2">coderthemes@gmail.com</span></p>

             <p className="text-muted font-13"><strong>Location :</strong> <span className="ml-2">USA</span></p>
            </div>

            <button type="button" className="btn btn-primary btn-rounded waves-effect waves-light">Send Message</button>
           </div>

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
