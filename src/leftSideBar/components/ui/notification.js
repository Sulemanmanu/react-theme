import React, { Component } from 'react'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'
import RightSide from '../../../common/home/rightSide'
import Footer from '../../../common/home/footer'

export default class Notification extends Component {
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
         <div className="col-md-12">
          <div className="card-box">
           <div className="row">
            <div className="col-xl-4 col-md-6">
             <div className="control-group">
              <div className="controls">
               <label className="control-label">Title</label>
               <input id="title" type="text" className="input-large form-control" placeholder="Enter a title ..." />
               <label className="control-label mt-2">Message</label>
               <textarea className="input-large form-control" id="message1" rows="3" placeholder="Enter a message ..."></textarea>
              </div>
             </div>
             <div className="control-group mt-4 mb-2">
              <div className="checkbox controls">
               <input id="closeButton" type="checkbox" defaultValue="checked" className="input-mini" />
               <label for="closeButton">
                Close Button
                                                    </label>
              </div>

              <div className="checkbox controls">
               <input id="addBehaviorOnToastClick" type="checkbox" defaultValue="checked" className="input-mini" />
               <label for="addBehaviorOnToastClick">
                Add behavior on toast click
                                                    </label>
              </div>

              <div className="checkbox controls">
               <input id="debugInfo" type="checkbox" defaultValue="checked" className="input-mini" />
               <label for="debugInfo">
                Debug
                                                    </label>
              </div>

              <div className="controls checkbox">
               <input id="progressBar" type="checkbox" defaultValue="checked" className="input-mini" />
               <label for="progressBar">
                Progress Bar
                                                    </label>
              </div>

              <div className="checkbox controls">
               <input id="preventDuplicates" type="checkbox" defaultValue="checked" className="input-mini" />
               <label for="preventDuplicates">
                Prevent Duplicates
                                                    </label>
              </div>

              <div className="checkbox controls">
               <input id="addClear" type="checkbox" defaultValue="checked" className="input-mini" />
               <label for="addClear">
                Add button to force clearing a toast, ignoring focus
                                                    </label>
              </div>

              <div className="checkbox controls">
               <input id="newestOnTop" type="checkbox" defaultValue="checked" className="input-mini" />
               <label for="newestOnTop">
                Newest on top
                                                    </label>
              </div>


             </div>
            </div>

            <div className="col-xl-2 col-md-6">
             <div className="control-group" id="toastTypeGroup">
              <div className="controls">
               <label>Toast Type</label>
               <div className="radio radio-success">
                <input type="radio" name="radio" id="radio1" defaultValue="success"
                 defaultChecked />
                <label for="radio1">
                 Success
                                                        </label>
               </div>

               <div className="radio radio-info">
                <input type="radio" name="radio" id="radio2" defaultValue="info" />
                <label for="radio2">
                 Info
                                                        </label>
               </div>

               <div className="radio radio-warning">
                <input type="radio" name="radio" id="radio3" defaultValue="warning" />
                <label for="radio3">
                 Warning
                                                        </label>
               </div>

               <div className="radio radio-danger">
                <input type="radio" name="radio" id="radio4" defaultValue="error" />
                <label for="radio4">
                 Error
                                                        </label>
               </div>

              </div>
             </div>
             <div className="control-group" id="positionGroup">
              <div className="controls">
               <label>Position</label>

               <div className="radio radio-custom">
                <input type="radio" name="positions" id="radio5" defaultValue="toast-top-right" defaultChecked />
                <label for="radio5">
                 Top Right
                                                        </label>
               </div>

               <div className="radio radio-custom">
                <input type="radio" name="positions" id="radio6" defaultValue="toast-bottom-right" />
                <label for="radio6">
                 Bottom Right
                                                        </label>
               </div>

               <div className="radio radio-custom">
                <input type="radio" name="positions" id="radio7" defaultValue="toast-bottom-left" />
                <label for="radio7">
                 Bottom Left
                                                        </label>
               </div>

               <div className="radio radio-custom">
                <input type="radio" name="positions" id="radio8" defaultValue="toast-top-left" />
                <label for="radio8">
                 Top Left
                                                        </label>
               </div>

               <div className="radio radio-custom">
                <input type="radio" name="positions" id="radio9" defaultValue="toast-top-full-width" />
                <label for="radio9">
                 Top Full Width
                                                        </label>
               </div>

               <div className="radio radio-custom">
                <input type="radio" name="positions" id="radio10" defaultValue="toast-bottom-full-width" />
                <label for="radio10">
                 Bottom Full Width
                                                        </label>
               </div>

               <div className="radio radio-custom">
                <input type="radio" name="positions" id="radio11" defaultValue="toast-top-center" />
                <label for="radio11">
                 Top Center
                                                        </label>
               </div>

               <div className="radio radio-custom">
                <input type="radio" name="positions" id="radio12" defaultValue="toast-bottom-center" />
                <label for="radio12">
                 Bottom Center
                                                        </label>
               </div>

              </div>
             </div>
            </div>

            <div className="col-xl-3 col-md-6">
             <div className="control-group">
              <div className="controls">
               <label for="showEasing">Show Easing</label>
               <input id="showEasing" type="text" placeholder="swing, linear" className="input-mini form-control" defaultValue="swing" />

               <label for="hideEasing" className="mt-2">Hide Easing</label>
               <input id="hideEasing" type="text" placeholder="swing, linear" className="input-mini form-control" defaultValue="linear" />

               <label for="showMethod" className="mt-2">Show Method</label>
               <input id="showMethod" type="text" placeholder="show, fadeIn, slideDown" className="input-mini form-control" defaultValue="fadeIn" />

               <label for="hideMethod" className="mt-2">Hide Method</label>
               <input id="hideMethod" type="text" placeholder="hide, fadeOut, slideUp" className="input-mini form-control" defaultValue="fadeOut" />
              </div>
             </div>
            </div>

            <div className="col-xl-3 col-md-6">
             <div className="control-group">
              <div className="controls">
               <label for="showDuration">Show Duration</label>
               <input id="showDuration" type="text" placeholder="ms" className="input-mini form-control" defaultValue="300" />

               <label for="hideDuration" className="mt-2">Hide Duration</label>
               <input id="hideDuration" type="text" placeholder="ms" className="input-mini form-control" defaultValue="1000" />

               <label for="timeOut" className="mt-2">Time out</label>
               <input id="timeOut" type="text" placeholder="ms" className="input-mini form-control" defaultValue="5000" />

               <label for="extendedTimeOut" className="mt-2">Extended time out</label>
               <input id="extendedTimeOut" type="text" placeholder="ms" className="input-mini form-control" defaultValue="1000" />
              </div>
             </div>
            </div>
           </div>

           <div className="row mt-4">
            <div className="col-md-12">
             <button type="button" className="btn btn-primary waves-effect waves-light mb-1 mr-1" id="showtoast">Show Toast</button>
             <button type="button" className="btn btn-danger waves-effect waves-light mb-1 mr-1" id="cleartoasts">Clear Toasts</button>
             <button type="button" className="btn btn-danger waves-effect waves-light mb-1 mr-1" id="clearlasttoast">Clear Last Toast</button>
            </div>
           </div>

           <div className="row mt-2">
            <div className="col-md-12">
             <pre id='toastrOptions' className="mb-0"></pre>
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
