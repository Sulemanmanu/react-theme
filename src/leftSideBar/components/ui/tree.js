import React, { Component } from 'react'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'
import Footer from '../../../common/home/footer'
import RightSide from '../../../common/home/rightSide'

export default class Tree extends Component {
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
         <div className="col-md-6">
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

           <h4 className="header-title mt-0 mb-3">Basic Tree</h4>

           <div id="basicTree">
            <ul>
             <li>Adminto
                                    <ul>
               <li data-jstree='{"opened":true}'>Assets
                                            <ul>
                 <li data-jstree='{"type":"file"}'>Css</li>
                 <li data-jstree='{"opened":true}'>Plugins
                                                    <ul>
                   <li data-jstree='{"selected":true,"type":"file"}'>Plugin one</li>
                   <li data-jstree='{"type":"file"}'>Plugin two</li>
                  </ul>
                 </li>
                </ul>
               </li>
               <li data-jstree='{"opened":true}'>Email Template
                                            <ul>
                 <li data-jstree='{"type":"file"}'>Email one</li>
                 <li data-jstree='{"type":"file"}'>Email two</li>
                </ul>
               </li>
               <li data-jstree='{"icon":"mdi mdi-view-dashboard"}'>Dashboard</li>
               <li data-jstree='{"icon":"mdi mdi-format-font"}'>Typography</li>
               <li data-jstree='{"opened":true}'>User Interface
                                            <ul>
                 <li data-jstree='{"type":"file"}'>Buttons</li>
                 <li data-jstree='{"type":"file"}'>Cards</li>
                </ul>
               </li>
               <li data-jstree='{"icon":"mdi mdi-texture"}'>Forms</li>
               <li data-jstree='{"icon":"mdi mdi-view-list"}'>Tables</li>
              </ul>
             </li>
             <li data-jstree='{"type":"file"}'>Frontend</li>
            </ul>
           </div>
          </div>
         </div>

         <div className="col-md-6">
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

           <h4 className="header-title mt-0 mb-3">Checkbox Tree</h4>

           <div id="checkTree">
            <ul>
             <li>Adminto
                                    <ul>
               <li data-jstree='{"opened":true}'>Assets
                                            <ul>
                 <li data-jstree='{"type":"file"}'>Css</li>
                 <li data-jstree='{"opened":true}'>Plugins
                                                    <ul>
                   <li data-jstree='{"selected":true,"type":"file"}'>Plugin one</li>
                   <li data-jstree='{"type":"file"}'>Plugin two</li>
                  </ul>
                 </li>
                </ul>
               </li>
               <li data-jstree='{"opened":true}'>Email Template
                                            <ul>
                 <li data-jstree='{"type":"file"}'>Email one</li>
                 <li data-jstree='{"type":"file"}'>Email two</li>
                </ul>
               </li>
               <li data-jstree='{"icon":"mdi mdi-view-dashboard"}'>Dashboard</li>
               <li data-jstree='{"icon":"mdi mdi-format-font"}'>Typography</li>
               <li data-jstree='{"opened":true}'>User Interface
                                            <ul>
                 <li data-jstree='{"type":"file"}'>Buttons</li>
                 <li data-jstree='{"type":"file"}'>Cards</li>
                </ul>
               </li>
               <li data-jstree='{"icon":"mdi mdi-texture"}'>Forms</li>
               <li data-jstree='{"icon":"mdi mdi-view-list"}'>Tables</li>
              </ul>
             </li>
             <li data-jstree='{"type":"file"}'>Frontend</li>
            </ul>
           </div>
          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-md-6">
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

           <h4 className="header-title mt-0 mb-3">Drag &amp; Drop</h4>

           <div id="dragTree">
            <ul>
             <li>Adminto
                                    <ul>
               <li data-jstree='{"opened":true}'>Assets
                                            <ul>
                 <li data-jstree='{"type":"file"}'>Css</li>
                 <li data-jstree='{"opened":true}'>Plugins
                                                    <ul>
                   <li data-jstree='{"selected":true,"type":"file"}'>Plugin one</li>
                   <li data-jstree='{"type":"file"}'>Plugin two</li>
                  </ul>
                 </li>
                </ul>
               </li>
               <li data-jstree='{"opened":true}'>Email Template
                                            <ul>
                 <li data-jstree='{"type":"file"}'>Email one</li>
                 <li data-jstree='{"type":"file"}'>Email two</li>
                </ul>
               </li>
               <li data-jstree='{"icon":"mdi mdi-view-dashboard"}'>Dashboard</li>
               <li data-jstree='{"icon":"mdi mdi-format-font"}'>Typography</li>
               <li data-jstree='{"opened":true}'>User Interface
                                            <ul>
                 <li data-jstree='{"type":"file"}'>Buttons</li>
                 <li data-jstree='{"type":"file"}'>Cards</li>
                </ul>
               </li>
               <li data-jstree='{"icon":"mdi mdi-texture"}'>Forms</li>
               <li data-jstree='{"icon":"mdi mdi-view-list"}'>Tables</li>
              </ul>
             </li>
             <li data-jstree='{"type":"file"}'>Frontend</li>
            </ul>
           </div>
          </div>
         </div>

         <div className="col-md-6">
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

           <h4 className="header-title mt-0 mb-3">Ajax</h4>

           <div id="ajaxTree"></div>
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
