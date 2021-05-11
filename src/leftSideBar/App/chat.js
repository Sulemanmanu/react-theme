import React, { Component } from 'react'
import Topbar from '../../common/home/topBar'
import Sidebar from '../../common/home/sidebar'
import RightSide from '../../common/home/rightSide'
import Footer from '../../common/home/footer'

export default class Chat extends Component {
 render() {
  return (
   <div>

    <div id="wrapper">


<Topbar/>
<Sidebar/>

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


     </div>
<Footer/>

    </div>
<RightSide/>
   </div>
  )
 }
}
