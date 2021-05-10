import React, { Component } from 'react'
import RightSide from '../../../common/home/rightSide'
import Footer from '../../../common/home/footer'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'

export default class Quill extends Component {
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
         <div className="col-12">
          <div className="card">
           <div className="card-body">
            <h4 className="header-title">Snow Editor</h4>
            <p className="sub-header">Snow is a clean, flat toolbar theme.</p>

            <div id="snow-editor" style={{height: "300px"}}>
             <h3><span className="ql-size-large">Hello World!</span></h3>
             <p><br /></p>
             <h3>This is an simple editable area.</h3>
             <p><br /></p>
             <ul>
              <li>
               Select a text to reveal the toolbar.
                                                </li>
              <li>
               Edit rich document on-the-fly, so elastic!
                                                </li>
             </ul>
             <p><br /></p>
             <p>
              End of simple area
                                            </p>

            </div>
           </div>
          </div>
         </div>
        </div>


        <div className="row">
         <div className="col-12">
          <div className="card">
           <div className="card-body">
            <h4 className="header-title">Bubble Editor</h4>
            <p className="sub-header">Bubble is a simple tooltip based theme.</p>

            <div id="bubble-editor" style={{height: "300px"}}>
             <h3><span className="ql-size-large">Hello World!</span></h3>
             <p><br /></p>
             <h3>This is an simple editable area.</h3>
             <p><br /></p>
             <ul>
              <li>
               Select a text to reveal the toolbar.
                                                </li>
              <li>
               Edit rich document on-the-fly, so elastic!
                                                </li>
             </ul>
             <p><br /></p>
             <p>
              End of simple area
                                            </p>
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
