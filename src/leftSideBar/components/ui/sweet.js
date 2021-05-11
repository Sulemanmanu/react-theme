import React, { Component } from 'react'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'
import RightSide from '../../../common/home/rightSide'
import Footer from '../../../common/home/footer'

export default class Sweet extends Component {
 render() {
  return (
   <div>
    <div id="wrapper">
     <Topbar />
     <Sidebar />

     <div className="content-page">
      <div className="content">

       <div className="container-fluid">

        <div className="row">
         <div className="col-12">
          <div className="card">
           <div className="card-body">
            <h4 className="header-title">Examples</h4>

            <p className="sub-header">
             A beautiful, responsive, customizable, accessible (WAI-ARIA) replacement for JavaScript's popup boxes
                                            </p>

            <table className="table table-borderless table-centered mb-0">
             <thead className="thead-light">
              <tr>
               <th style={{ width: "50%" }}>Alert Type</th>
               <th>Example</th>
              </tr>
             </thead>
             <tbody>
              <tr>
               <td>A basic message</td>
               <td>
                <button type="button" className="btn btn-info btn-xs" id="sa-basic">Click me</button>
               </td>
              </tr>

              <tr>
               <td>A title with a text under</td>
               <td>
                <button type="button" className="btn btn-info btn-xs" id="sa-title">Click me</button>
               </td>
              </tr>
              <tr>
               <td>A success message!</td>
               <td>
                <button type="button" className="btn btn-info btn-xs" id="sa-success">Click me</button>
               </td>
              </tr>

              <tr>
               <td>A modal window with a long content inside:</td>
               <td>
                <button type="button" className="btn btn-info btn-xs" id="sa-long-content">Click me</button>
               </td>
              </tr>

              <tr>
               <td>A custom positioned dialog</td>
               <td>
                <button type="button" className="btn btn-info btn-xs" id="sa-custom-position">Click me</button>
               </td>
              </tr>

              <tr>
               <td>A modal with a title, an error icon, a text, and a footer</td>
               <td>
                <button type="button" className="btn btn-info btn-xs" id="sa-error">Click me</button>
               </td>
              </tr>
              <tr>
               <td>A confirm dialog, with a function attached to the "Confirm"-button...</td>
               <td>
                <button type="button" className="btn btn-info btn-xs" id="sa-warning">Click me</button>
               </td>
              </tr>
              <tr>
               <td>By passing a parameter, you can execute something else for "Cancel".</td>
               <td>
                <button type="button" className="btn btn-info btn-xs" id="sa-params">Click me</button>
               </td>
              </tr>
              <tr>
               <td>A message with custom Image Header</td>
               <td>
                <button type="button" className="btn btn-info btn-xs" id="sa-image">Click me</button>
               </td>
              </tr>
              <tr>
               <td>A message with auto close timer</td>
               <td>
                <button type="button" className="btn btn-info btn-xs" id="sa-close">Click me</button>
               </td>
              </tr>
              <tr>
               <td>Custom HTML description and buttons</td>
               <td>
                <button type="button" className="btn btn-info btn-xs" id="custom-html-alert">Click me</button>
               </td>
              </tr>
              <tr>
               <td>A message with custom width, padding and background</td>
               <td>
                <button type="button" className="btn btn-info btn-xs" id="custom-padding-width-alert">Click me</button>
               </td>
              </tr>
              <tr>
               <td>Ajax request example</td>
               <td>
                <button type="button" className="btn btn-info btn-xs" id="ajax-alert">Click me</button>
               </td>
              </tr>
              <tr>
               <td>Chaining modals (queue) example</td>
               <td>
                <button type="button" className="btn btn-info btn-xs" id="chaining-alert">Click me</button>
               </td>
              </tr>
              <tr>
               <td>Dynamic queue example</td>
               <td>
                <button type="button" className="btn btn-info btn-xs" id="dynamic-alert">Click me</button>
               </td>
              </tr>
             </tbody>
            </table>

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
