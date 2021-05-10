import React, { Component } from 'react'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'
import RightSide from '../../../common/home/rightSide'
import Footer from '../../../common/home/footer'

export default class Timeline extends Component {
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
        <div className="col-sm-12">
         <div className="timeline" dir="ltr">
          <article className="timeline-item alt">
           <div className="time-show first">
            <a href="#" className="btn btn-primary width-lg">Today</a>
           </div>
          </article>
          <article className="timeline-item alt">
           <div className="timeline-desk">
            <div className="panel">
             <div className="panel-body">
              <span className="arrow-alt"></span>
              <span className="timeline-icon bg-danger"><i className="mdi mdi-circle"></i></span>
              <h4 className="text-danger">1 hour ago</h4>
              <p className="timeline-date text-muted"><small>08:25 am</small></p>
              <p>Dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? </p>
             </div>
            </div>
           </div>
          </article>
          <article className="timeline-item ">
           <div className="timeline-desk">
            <div className="panel">
             <div className="panel-body">
              <span className="arrow"></span>
              <span className="timeline-icon bg-success"><i className="mdi mdi-circle"></i></span>
              <h4 className="text-success">2 hours ago</h4>
              <p className="timeline-date text-muted"><small>08:25 am</small></p>
              <p>consectetur adipisicing elit. Iusto, optio, dolorum <a href="#">John deon</a> provident rerum aut hic quasi placeat iure tempora laudantium </p>

             </div>
            </div>
           </div>
          </article>
          <article className="timeline-item alt">
           <div className="timeline-desk">
            <div className="panel">
             <div className="panel-body">
              <span className="arrow-alt"></span>
              <span className="timeline-icon bg-primary"><i className="mdi mdi-circle"></i></span>
              <h4 className="text-primary">10 hours ago</h4>
              <p className="timeline-date text-muted"><small>08:25 am</small></p>
              <p>3 new photo Uploaded on facebook fan page</p>
              <div className="album">
               <a href="#">
                <img alt="" src="assets/images/small/img-1.jpg" />
               </a>
               <a href="#">
                <img alt="" src="assets/images/small/img-2.jpg" />
               </a>
               <a href="#">
                <img alt="" src="assets/images/small/img-3.jpg" />
               </a>
              </div>
              <div className="clearfix"></div>
             </div>
            </div>
           </div>
          </article>
          <article className="timeline-item">
           <div className="timeline-desk">
            <div className="panel">
             <div className="panel-body">
              <span className="arrow"></span>
              <span className="timeline-icon bg-purple"><i className="mdi mdi-circle"></i></span>
              <h4 className="text-purple">14 hours ago</h4>
              <p className="timeline-date text-muted"><small>08:25 am</small></p>
              <p>Outdoor visit at California State Route 85 with John Boltana &
                                                        Harry Piterson regarding to setup a new show room.</p>
             </div>
            </div>
           </div>
          </article>
          <article className="timeline-item alt">
           <div className="timeline-desk">
            <div className="panel">
             <div className="panel-body">
              <span className="arrow-alt"></span>
              <span className="timeline-icon"><i className="mdi mdi-circle"></i></span>
              <h4 className="text-muted">19 hours ago</h4>
              <p className="timeline-date text-muted"><small>08:25 am</small></p>
              <p>Jonatha Smith added new milestone <span><a href="#">Pathek</a></span>
                                                        Lorem ipsum dolor sit amet consiquest dio</p>
             </div>
            </div>
           </div>
          </article>

          <article className="timeline-item alt">
           <div className="time-show">
            <a href="#" className="btn btn-primary width-lg">Yesterday</a>
           </div>
          </article>
          <article className="timeline-item">
           <div className="timeline-desk">
            <div className="panel">
             <div className="panel-body">
              <span className="arrow"></span>
              <span className="timeline-icon bg-warning"><i className="mdi mdi-circle"></i></span>
              <h4 className="text-warning">07 January 2016</h4>
              <p className="timeline-date text-muted"><small>08:25 am</small></p>
              <p>Montly Regular Medical check up at Greenland Hospital by the
                                                        doctor <span><a href="#"> Johm meon </a></span>
              </p>

             </div>
            </div>
           </div>
          </article>
          <article className="timeline-item alt">
           <div className="timeline-desk">
            <div className="panel">
             <div className="panel-body">
              <span className="arrow-alt"></span>
              <span className="timeline-icon bg-primary"><i className="mdi mdi-circle"></i></span>
              <h4 className="text-primary">07 January 2016</h4>
              <p className="timeline-date text-muted"><small>08:25 am</small></p>
              <p>Download the new updates of Ubold admin dashboard</p>
             </div>
            </div>
           </div>
          </article>

          <article className="timeline-item">
           <div className="timeline-desk">
            <div className="panel">
             <div className="panel-body">
              <span className="arrow"></span>
              <span className="timeline-icon bg-success"><i className="mdi mdi-circle"></i></span>
              <h4 className="text-success">07 January 2016</h4>
              <p className="timeline-date text-muted"><small>08:25 am</small></p>
              <p>Jonatha Smith added new milestone <span><a className="blue" href="#">crishtian</a></span>
                                                        Lorem ipsum dolor sit amet consiquest dio</p>
             </div>
            </div>
           </div>
          </article>
          <article className="timeline-item alt">
           <div className="time-show">
            <a href="#" className="btn btn-primary width-lg">Last Month</a>
           </div>
          </article>

          <article className="timeline-item alt">
           <div className="timeline-desk">
            <div className="panel">
             <div className="panel-body">
              <span className="arrow-alt"></span>
              <span className="timeline-icon"><i className="mdi mdi-circle"></i></span>
              <h4 className="text-muted">31 December 2015</h4>
              <p className="timeline-date text-muted"><small>08:25 am</small></p>
              <p>Download the new updates of Ubold admin dashboard</p>
             </div>
            </div>
           </div>
          </article>

          <article className="timeline-item">
           <div className="timeline-desk">
            <div className="panel">
             <div className="panel-body">
              <span className="arrow"></span>
              <span className="timeline-icon bg-danger"><i className="mdi mdi-circle">    </i></span>
              <h4 className="text-danger">16 Decembar 2015</h4>
              <p className="timeline-date text-muted"><small>08:25 am</small></p>
              <p>Jonatha Smith added new milestone <span><a href="#">prank</a></span>
                                                        Lorem ipsum dolor sit amet consiquest dio</p>
             </div>
            </div>
           </div>
          </article>

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
