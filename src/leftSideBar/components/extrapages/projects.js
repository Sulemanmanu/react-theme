import React, { Component } from 'react'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'
import Footer from '../../../common/home/footer'
import RightSide from '../../../common/home/rightSide'

export default class Projects extends Component {
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
         <div className="col-sm-4">
          <button type="button" className="btn btn-purple btn-rounded w-md waves-effect waves-light mb-3"><i className="mdi mdi-plus"></i> Create Project</button>
         </div>
         <div className="col-sm-8">
          <div className="project-sort float-right">
           <div className="project-sort-item">
            <form className="form-inline">
             <div className="form-group mr-2">
              <label>Phase :</label>
              <select className="form-control ml-2 form-control-sm">
               <option>All Projects(6)</option>
               <option>Complated</option>
               <option>Progress</option>
              </select>
             </div>
             <div className="form-group">
              <label>Sort :</label>
              <select className="form-control ml-2 form-control-sm">
               <option>Date</option>
               <option>Name</option>
               <option>End date</option>
               <option>Start Date</option>
              </select>
             </div>
            </form>
           </div>
          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-xl-4">
          <div className="card-box project-box">
           <div className="badge badge-success float-right">Completed</div>
           <h4 className="mt-0"><a href="" className="text-dark">New Admin Design</a></h4>
           <p className="text-success text-uppercase font-13">Web Design</p>
           <p className="text-muted font-13">If several languages coalesce the grammar is more simple and regular than that of the individual languages...<a href="#" className="text-primary">View more</a>
           </p>

           <ul className="list-inline">
            <li className="list-inline-item mr-4">
             <h4 className="mb-0">56</h4>
             <p className="text-muted">Questions</p>
            </li>
            <li className="list-inline-item">
             <h4 className="mb-0">452</h4>
             <p className="text-muted">Comments</p>
            </li>
           </ul>

           <div className="project-members mb-2">
            <h5 className="float-left mr-3">Team :</h5>
            <div className="avatar-group">
             <a href="#" className="avatar-group-item" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mat Helme">
              <img src="assets/images/users/user-1.jpg" className="rounded-circle avatar-sm" alt="friend" />
             </a>

             <a href="#" className="avatar-group-item" data-toggle="tooltip" data-placement="top" title="" data-original-title="Michael Zenaty">
              <img src="assets/images/users/user-2.jpg" className="rounded-circle avatar-sm" alt="friend" />
             </a>

             <a href="#" className="avatar-group-item" data-toggle="tooltip" data-placement="top" title="" data-original-title="James Anderson">
              <img src="assets/images/users/user-3.jpg" className="rounded-circle avatar-sm" alt="friend" />
             </a>

             <a href="#" className="avatar-group-item" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mat Helme">
              <img src="assets/images/users/user-4.jpg" className="rounded-circle avatar-sm" alt="friend" />
             </a>

            </div>
           </div>

           <h5>Progress <span className="text-success float-right">80%</span></h5>
           <div className="progress progress-bar-alt-success progress-sm">
            <div className="progress-bar bg-success progress-animated wow animated animated"
             role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
             style={{ width: "80%", visibility: "visible", animationname: "animationProgress" }}>
            </div>
           </div>

          </div>
         </div>

         <div className="col-xl-4">
          <div className="card-box project-box">
           <div className="badge badge-primary float-right">Completed</div>
           <h4 className="mt-0"><a href="" className="text-dark">App Design and Develop</a></h4>
           <p className="text-primary text-uppercase font-13">Android</p>
           <p className="text-muted font-13">New common language will be more simple and regular than the existing European languages...<a href="#" className="text-primary">View more</a>
           </p>

           <ul className="list-inline">
            <li className="list-inline-item mr-4">
             <h4 className="mb-0">77</h4>
             <p className="text-muted">Questions</p>
            </li>
            <li className="list-inline-item">
             <h4 className="mb-0">875</h4>
             <p className="text-muted">Comments</p>
            </li>
           </ul>

           <div className="project-members mb-2">
            <h5 className="float-left mr-3">Team :</h5>
            <div className="avatar-group">
             <a href="#" className="avatar-group-item" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mat Helme">
              <img src="assets/images/users/user-5.jpg" className="rounded-circle avatar-sm" alt="friend" />
             </a>

             <a href="#" className="avatar-group-item" data-toggle="tooltip" data-placement="top" title="" data-original-title="Michael Zenaty">
              <img src="assets/images/users/user-6.jpg" className="rounded-circle avatar-sm" alt="friend" />
             </a>

             <a href="#" className="avatar-group-item" data-toggle="tooltip" data-placement="top" title="" data-original-title="James Anderson">
              <img src="assets/images/users/user-7.jpg" className="rounded-circle avatar-sm" alt="friend" />
             </a>

            </div>
           </div>

           <h5>Progress <span className="text-primary float-right">45%</span></h5>
           <div className="progress progress-bar-alt-primary progress-sm">
            <div className="progress-bar bg-primary progress-animated wow animated animated"
             role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"
             style={{ width: "45%" }}>
            </div>
           </div>

          </div>
         </div>

         <div className="col-xl-4">
          <div className="card-box project-box">
           <div className="badge badge-pink float-right">Completed</div>
           <h4 className="mt-0"><a href="" className="text-dark">Landing page Design</a></h4>
           <p className="text-pink text-uppercase font-13">Web Design</p>
           <p className="text-muted font-13">It will be as simple as occidental in fact it will be to an english person it will seem like simplified English...<a href="#" className="text-primary">view more</a>
           </p>

           <ul className="list-inline">
            <li className="list-inline-item mr-4">
             <h4 className="mb-0">87</h4>
             <p className="text-muted">Questions</p>
            </li>
            <li className="list-inline-item">
             <h4 className="mb-0">125</h4>
             <p className="text-muted">Comments</p>
            </li>
           </ul>

           <div className="project-members mb-2">
            <h5 className="float-left mr-3">Team :</h5>
            <div className="avatar-group">
             <a href="#" className="avatar-group-item" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mat Helme">
              <img src="assets/images/users/user-8.jpg" className="rounded-circle avatar-sm" alt="friend" />
             </a>

             <a href="#" className="avatar-group-item" data-toggle="tooltip" data-placement="top" title="" data-original-title="Michael Zenaty">
              <img src="assets/images/users/user-9.jpg" className="rounded-circle avatar-sm" alt="friend" />
             </a>

             <a href="#" className="avatar-group-item" data-toggle="tooltip" data-placement="top" title="" data-original-title="James Anderson">
              <img src="assets/images/users/user-10.jpg" className="rounded-circle avatar-sm" alt="friend" />
             </a>

             <a href="#" className="avatar-group-item" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mat Helme">
              <img src="assets/images/users/user-11.jpg" className="rounded-circle avatar-sm" alt="friend" />
             </a>

             <a href="#" className="avatar-group-item" data-toggle="tooltip" data-placement="top" title="" data-original-title="Joel Heffner">
              <img src="assets/images/users/user-2.jpg" className="rounded-circle avatar-sm" alt="friend" />
             </a>
            </div>
           </div>


           <h5>Progress <span className="text-pink float-right">68%</span></h5>
           <div className="progress progress-bar-alt-pink progress-sm">
            <div className="progress-bar bg-pink progress-animated wow animated animated"
             role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"
             style={{ width: "68%" }}>
            </div>
           </div>

          </div>
         </div>
        </div>



        <div className="row">

         <div className="col-xl-4">
          <div className="card-box project-box">
           <div className="badge badge-purple float-right">Completed</div>
           <h4 className="mt-0"><a href="" className="text-dark">App Design and Develop</a></h4>
           <p className="text-purple text-uppercase font-13">Android</p>
           <p className="text-muted font-13">Everyone realizes why a new common language would be desirable one could refuse to pay expensive translators...<a href="#" className="text-primary">view more</a>
           </p>

           <ul className="list-inline">
            <li className="list-inline-item mr-4">
             <h4 className="mb-0">77</h4>
             <p className="text-muted">Questions</p>
            </li>
            <li className="list-inline-item">
             <h4 className="mb-0">875</h4>
             <p className="text-muted">Comments</p>
            </li>
           </ul>

           <div className="project-members mb-2">
            <h5 className="float-left mr-3">Team :</h5>
            <div className="avatar-group">
             <a href="#" className="avatar-group-item" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mat Helme">
              <img src="assets/images/users/user-8.jpg" className="rounded-circle avatar-sm" alt="friend" />
             </a>

             <a href="#" className="avatar-group-item" data-toggle="tooltip" data-placement="top" title="" data-original-title="Michael Zenaty">
              <img src="assets/images/users/user-9.jpg" className="rounded-circle avatar-sm" alt="friend" />
             </a>

             <a href="#" className="avatar-group-item" data-toggle="tooltip" data-placement="top" title="" data-original-title="James Anderson">
              <img src="assets/images/users/user-10.jpg" className="rounded-circle avatar-sm" alt="friend" />
             </a>

             <a href="#" className="avatar-group-item" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mat Helme">
              <img src="assets/images/users/user-11.jpg" className="rounded-circle avatar-sm" alt="friend" />
             </a>

             <a href="#" className="avatar-group-item" data-toggle="tooltip" data-placement="top" title="" data-original-title="Joel Heffner">
              <img src="assets/images/users/user-2.jpg" className="rounded-circle avatar-sm" alt="friend" />
             </a>
            </div>
           </div>

           <h5>Progress <span className="text-purple float-right">45%</span></h5>
           <div className="progress progress-bar-alt-purple progress-sm">
            <div className="progress-bar bg-purple progress-animated wow animated animated"
             role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"
             style={{ width: "45%" }}>
            </div>
           </div>

          </div>
         </div>

         <div className="col-xl-4">
          <div className="card-box project-box">
           <div className="badge badge-danger float-right">Completed</div>
           <h4 className="mt-0"><a href="" className="text-dark">Landing page Design</a></h4>
           <p className="text-danger text-uppercase font-13">Web Design</p>
           <p className="text-muted font-13">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium deleniti...<a href="#" className="text-primary">view more</a>
           </p>

           <ul className="list-inline">
            <li className="list-inline-item mr-4">
             <h4 className="mb-0">87</h4>
             <p className="text-muted">Questions</p>
            </li>
            <li className="list-inline-item">
             <h4 className="mb-0">125</h4>
             <p className="text-muted">Comments</p>
            </li>
           </ul>

           <div className="project-members mb-2">
            <h5 className="float-left mr-3">Team :</h5>
            <div className="avatar-group">
             <a href="#" className="avatar-group-item" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mat Helme">
              <img src="assets/images/users/user-6.jpg" className="rounded-circle avatar-sm" alt="friend" />
             </a>

             <a href="#" className="avatar-group-item" data-toggle="tooltip" data-placement="top" title="" data-original-title="Michael Zenaty">
              <img src="assets/images/users/user-7.jpg" className="rounded-circle avatar-sm" alt="friend" />
             </a>

             <a href="#" className="avatar-group-item" data-toggle="tooltip" data-placement="top" title="" data-original-title="James Anderson">
              <img src="assets/images/users/user-8.jpg" className="rounded-circle avatar-sm" alt="friend" />
             </a>

             <a href="#" className="avatar-group-item" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mat Helme">
              <img src="assets/images/users/user-9.jpg" className="rounded-circle avatar-sm" alt="friend" />
             </a>

            </div>
           </div>

           <h5>Progress <span className="text-danger float-right">68%</span></h5>
           <div className="progress progress-bar-alt-danger progress-sm">
            <div className="progress-bar bg-danger progress-animated wow animated animated"
             role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"
             style={{ width: "68%" }}>
            </div>
           </div>

          </div>
         </div>

         <div className="col-xl-4">
          <div className="card-box project-box">
           <div className="badge badge-warning float-right">Completed</div>
           <h4 className="mt-0"><a href="" className="text-dark">New Admin Design</a></h4>
           <p className="text-warning text-uppercase font-13">Web Design</p>
           <p className="text-muted font-13">Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary....<a href="#" className="text-primary">view more</a>
           </p>

           <ul className="list-inline">
            <li className="list-inline-item mr-4">
             <h4 className="mb-0">56</h4>
             <p className="text-muted">Questions</p>
            </li>
            <li className="list-inline-item">
             <h4 className="mb-0">452</h4>
             <p className="text-muted">Comments</p>
            </li>
           </ul>

           <div className="project-members mb-2">
            <h5 className="float-left mr-3">Team :</h5>
            <div className="avatar-group">
             <a href="#" className="avatar-group-item" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mat Helme">
              <img src="assets/images/users/user-1.jpg" className="rounded-circle avatar-sm" alt="friend" />
             </a>

             <a href="#" className="avatar-group-item" data-toggle="tooltip" data-placement="top" title="" data-original-title="Michael Zenaty">
              <img src="assets/images/users/user-2.jpg" className="rounded-circle avatar-sm" alt="friend" />
             </a>

             <a href="#" className="avatar-group-item" data-toggle="tooltip" data-placement="top" title="" data-original-title="James Anderson">
              <img src="assets/images/users/user-3.jpg" className="rounded-circle avatar-sm" alt="friend" />
             </a>

            </div>
           </div>

           <h5>Progress <span className="text-warning float-right">80%</span></h5>
           <div className="progress progress-bar-alt-warning progress-sm">
            <div className="progress-bar bg-warning progress-animated wow animated animated"
             role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
             style={{ width: "80%" }}>
            </div>
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
