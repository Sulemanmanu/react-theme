import React, { Component } from 'react'
import Topbar from '../../common/home/topBar'
import Sidebar from '../../common/home/sidebar'
import RightSide from '../../common/home/rightSide'
import Footer from '../../common/home/footer'

export default class Calender extends Component {
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
          <div className="col-lg-12">

           <div className="row">
            <div className="col-lg-3">
             <div className="widget">
              <div className="widget-body">
               <a href="#" data-toggle="modal" data-target="#add-category" className="btn btn-lg btn-success font-16 btn-block waves-effect waves-light">
                <i className="fa fa-plus mr-1"></i> Create New
                                                </a>
               <div id="external-events" className="mt-3">
                <p>Drag and drop your event or click in the calendar</p>
                <div className="external-event bg-primary" data-class="bg-primary">
                 <i className="mdi mdi-checkbox-blank-circle mr-2 vertical-middle"></i>New Theme Release
                                                    </div>
                <div className="external-event bg-pink" data-class="bg-pink">
                 <i className="mdi mdi-checkbox-blank-circle mr-2 vertical-middle"></i>My Event
                                                    </div>
                <div className="external-event bg-warning" data-class="bg-warning">
                 <i className="mdi mdi-checkbox-blank-circle mr-2 vertical-middle"></i>Meet manager
                                                    </div>
                <div className="external-event bg-purple" data-class="bg-purple">
                 <i className="mdi mdi-checkbox-blank-circle mr-2 vertical-middle"></i>Create New theme
                                                    </div>
               </div>

               <div className="custom-control custom-checkbox mt-3">
                <input type="checkbox" className="custom-control-input" id="drop-remove"/>
                 <label className="custom-control-label" for="drop-remove">Remove after drop</label>
                                                </div>

               </div>
              </div>
             </div>
             <div className="col-lg-9">
              <div className="card-box">
               <div id="calendar"></div>
              </div>
             </div>
            </div>


            <div className="modal fade none-border" id="event-modal">
             <div className="modal-dialog">
              <div className="modal-content">
               <div className="modal-header">
                <h4 className="modal-title mt-0"><strong>Add New Event</strong></h4>
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
               </div>
               <div className="modal-body"></div>
               <div className="modal-footer">
                <button type="button" className="btn btn-light waves-effect" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-success save-event waves-effect waves-light">Create event</button>
                <button type="button" className="btn btn-danger delete-event waves-effect waves-light" data-dismiss="modal">Delete</button>
               </div>
              </div>
             </div>
            </div>


            <div className="modal fade none-border" id="add-category">
             <div className="modal-dialog">
              <div className="modal-content">
               <div className="modal-header">
                <h4 className="modal-title mt-0"><strong>Add a category </strong></h4>
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
               </div>
               <div className="modal-body">
                <form role="form">
                 <div className="row">
                  <div className="col-md-6">
                   <label className="control-label">Category Name</label>
                   <input className="form-control form-white" placeholder="Enter name" type="text" name="category-name" />
                  </div>
                  <div className="col-md-6">
                   <label className="control-label">Choose Category Color</label>
                   <select className="form-control form-white" data-placeholder="Choose a color..." name="category-color">
                    <option defaultValue="success">Success</option>
                    <option defaultValue="danger">Danger</option>
                    <option defaultValue="info">Info</option>
                    <option defaultValue="pink">Pink</option>
                    <option defaultValue="primary">Primary</option>
                    <option defaultValue="warning">Warning</option>
                    <option defaultValue="inverse">Inverse</option>
                   </select>
                  </div>
                 </div>
                </form>
               </div>
               <div className="modal-footer">
                <button type="button" className="btn btn-light waves-effect" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-danger waves-effect waves-light save-category" data-dismiss="modal">Save</button>
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
