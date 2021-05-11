import React, { Component } from 'react'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'
import RightSide from '../../../common/home/rightSide'
import Footer from '../../../common/home/footer'

export default class Modals extends Component {
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

           <h4 className="header-title mt-0">Bootstrap Modals (default)</h4>

           <p className="text-muted font-13">
            A rendered modal with header, body, and set of actions in the footer.
                                    </p>

           <div id="myModal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
             <div className="modal-content">
              <div className="modal-header">
               <h4 className="modal-title" id="myModalLabel">Modal Heading</h4>
               <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
              </div>
              <div className="modal-body">
               <h4>Text in a modal</h4>
               <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
               <hr/>
                <h4>Overflowing text to show scroll behavior</h4>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                                </div>
               <div className="modal-footer">
                <button type="button" className="btn btn-light waves-effect" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary waves-effect waves-light">Save changes</button>
               </div>
              </div>
             </div>
            </div>

            <div className="modal fade bs-example-modal-xl" tabIndex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
             <div className="modal-dialog modal-xl">
              <div className="modal-content">
               <div className="modal-header">
                <h4 className="modal-title" id="myExtraLargeModalLabel">Extra large modal</h4>
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
               </div>
               <div className="modal-body">
                ...
                                                </div>
              </div>
             </div>
            </div>

            <div className="modal fade bs-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{ display: "none" }}>
             <div className="modal-dialog modal-lg">
              <div className="modal-content">
               <div className="modal-header">
                <h4 className="modal-title" id="myLargeModalLabel">Large modal</h4>
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
               </div>
               <div className="modal-body">
                ...
                                                </div>
              </div>
             </div>
            </div>

            <div className="modal fade bs-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" style={{ display: "none" }}>
             <div className="modal-dialog modal-sm">
              <div className="modal-content">
               <div className="modal-header">
                <h4 className="modal-title" id="mySmallModalLabel">Small modal</h4>
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
               </div>
               <div className="modal-body">
                ...
                                                </div>
              </div>
             </div>
            </div>

            <div className="modal fade bs-example-modal-center" tabIndex="-1" role="dialog" aria-labelledby="myCenterModalLabel" aria-hidden="true" style={{ display: "none" }}>
             <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
               <div className="modal-header">
                <h4 className="modal-title" id="myCenterModalLabel">Center modal</h4>
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
               </div>
               <div className="modal-body">
                ...
                                                </div>
              </div>
             </div>
            </div>

            <div className="modal fade" id="exampleModalScrollable" tabIndex="-1" role="dialog"
             aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
             <div className="modal-dialog modal-dialog-scrollable" role="document">
              <div className="modal-content">
               <div className="modal-header">
                <h4 className="modal-title" id="exampleModalScrollableTitle">Modal title</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
                </button>
               </div>
               <div className="modal-body">
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
               </div>
               <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
               </div>
              </div>
             </div>
            </div>

            <div className="modal fade" id="staticBackdrop" data-backdrop="static" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
             <div className="modal-dialog" role="document">
              <div className="modal-content">
               <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
                </button>
               </div>
               <div className="modal-body">
                <p>I will not close if you click outside me. Don't even try to press escape key.</p>
               </div>
               <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save</button>
               </div>
              </div>
             </div>
            </div>

            <div className="button-list">
             <button className="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target="#myModal">Standard Modal</button>
             <button className="btn btn-success waves-effect waves-light" data-toggle="modal" data-target=".bs-example-modal-xl">Extra Large modal</button>
             <button className="btn btn-warning waves-effect waves-light" data-toggle="modal" data-target=".bs-example-modal-lg">Large modal</button>
             <button className="btn btn-purple waves-effect waves-light" data-toggle="modal" data-target=".bs-example-modal-sm">Small modal</button>
             <button className="btn btn-pink waves-effect waves-light" data-toggle="modal" data-target=".bs-example-modal-center">Center modal</button>
             <button type="button" className="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target="#exampleModalScrollable">Scrollable</button>

             <button type="button" className="btn btn-info waves-effect waves-light" data-toggle="modal" data-target="#staticBackdrop">
              Static backdrop
                                        </button>

            </div>
           </div>
          </div>
         </div>


         <div className="row">
          <div className="col-md-12">
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

            <h4 className="header-title mt-0">Modals Examples (Animations)</h4>

            <p className="text-muted font-13">Use <code>data-animation="fadein" data-plugin="custommodal" data-overlaycolor="#xxx"</code>. </p>

            <div className="table-responsive">
             <table className="table table-borderless table-centered mb-0">
              <thead className="bg-light border-0">
               <tr>
                <th style={{ width: "30%" }}>Modal Type</th>
                <th>Animation Code</th>
                <th>Example</th>
               </tr>
              </thead>
              <tbody>
               <tr>
                <td>Fade in</td>
                <td><code>data-animation="fadein"</code></td>
                <td>
                 <a href="#custom-modal" className="btn btn-primary btn-sm waves-effect" data-animation="fadein" data-plugin="custommodal" data-overlayColor="#36404a">Show me</a>
                </td>
               </tr>
               <tr>
                <td>Slide</td>
                <td><code>data-animation="slide"</code></td>
                <td>
                 <a href="#custom-modal" className="btn btn-primary btn-sm waves-effect" data-animation="slide" data-plugin="custommodal" data-overlayColor="#36404a">Show me</a>
                </td>
               </tr>
               <tr>
                <td>Newspaper</td>
                <td><code>data-animation="newspaper"</code></td>
                <td>
                 <a href="#custom-modal" className="btn btn-primary btn-sm waves-effect" data-animation="newspaper" data-plugin="custommodal" data-overlayColor="#36404a">Show me</a>
                </td>
               </tr>
               <tr>
                <td>Fall</td>
                <td><code>data-animation="fall"</code></td>
                <td>
                 <a href="#custom-modal" className="btn btn-primary btn-sm waves-effect" data-animation="fall" data-plugin="custommodal" data-overlayColor="#36404a">Show me</a>
                </td>
               </tr>
               <tr>
                <td>Side Fall</td>
                <td><code>data-animation="sidefall"</code></td>
                <td>
                 <a href="#custom-modal" className="btn btn-primary btn-sm waves-effect" data-animation="sidefall" data-plugin="custommodal" data-overlayColor="#36404a">Show me</a>
                </td>
               </tr>
               <tr>
                <td>Blur</td>
                <td><code>data-animation="blur"</code></td>
                <td>
                 <a href="#custom-modal" className="btn btn-primary btn-sm waves-effect" data-animation="blur" data-plugin="custommodal" data-overlayColor="#36404a">Show me</a>
                </td>
               </tr>
               <tr>
                <td>Flip</td>
                <td><code>data-animation="flip"</code></td>
                <td>
                 <a href="#custom-modal" className="btn btn-primary btn-sm waves-effect" data-animation="flip" data-plugin="custommodal" data-overlayColor="#36404a">Show me</a>
                </td>
               </tr>
               <tr>
                <td>Sign</td>
                <td><code>data-animation="sign"</code></td>
                <td>
                 <a href="#custom-modal" className="btn btn-primary btn-sm waves-effect" data-animation="sign" data-plugin="custommodal" data-overlayColor="#36404a">Show me</a>
                </td>
               </tr>
               <tr>
                <td>Super Scaled</td>
                <td><code>data-animation="superscaled"</code></td>
                <td>
                 <a href="#custom-modal" className="btn btn-primary btn-sm waves-effect" data-animation="superscaled" data-plugin="custommodal" data-overlayColor="#36404a">Show me</a>
                </td>
               </tr>
               <tr>
                <td>Slit</td>
                <td><code>data-animation="slit"</code></td>
                <td>
                 <a href="#custom-modal" className="btn btn-primary btn-sm waves-effect" data-animation="slit" data-plugin="custommodal" data-overlayColor="#36404a">Show me</a>
                </td>
               </tr>
               <tr>
                <td>Rotate</td>
                <td><code>data-animation="rotate"</code></td>
                <td>
                 <a href="#custom-modal" className="btn btn-primary btn-sm waves-effect" data-animation="rotate" data-plugin="custommodal" data-overlayColor="#36404a">Show me</a>
                </td>
               </tr>
               <tr>
                <td>Letmein</td>
                <td><code>data-animation="letmein"</code></td>
                <td>
                 <a href="#custom-modal" className="btn btn-primary btn-sm waves-effect" data-animation="letmein" data-plugin="custommodal" data-overlayColor="#36404a">Show me</a>
                </td>
               </tr>
               <tr>
                <td>Makeway</td>
                <td><code>data-animation="makeway"</code></td>
                <td>
                 <a href="#custom-modal" className="btn btn-primary btn-sm waves-effect" data-animation="makeway" data-plugin="custommodal" data-overlayColor="#36404a">Show me</a>
                </td>
               </tr>
               <tr>
                <td>Slip</td>
                <td><code>data-animation="slip"</code></td>
                <td>
                 <a href="#custom-modal" className="btn btn-primary btn-sm waves-effect" data-animation="slip" data-plugin="custommodal" data-overlayColor="#36404a">Show me</a>
                </td>
               </tr>
               <tr>
                <td>Corner</td>
                <td><code>data-animation="corner"</code></td>
                <td>
                 <a href="#custom-modal" className="btn btn-primary btn-sm waves-effect" data-animation="corner" data-plugin="custommodal" data-overlayColor="#36404a">Show me</a>
                </td>
               </tr>
               <tr>
                <td>Slide together</td>
                <td><code>data-animation="slidetogether"</code></td>
                <td>
                 <a href="#custom-modal" className="btn btn-primary btn-sm waves-effect" data-animation="slidetogether" data-plugin="custommodal" data-overlayColor="#36404a">Show me</a>
                </td>
               </tr>
               <tr>
                <td>Scale</td>
                <td><code>data-animation="scale"</code></td>
                <td>
                 <a href="#custom-modal" className="btn btn-primary btn-sm waves-effect" data-animation="scale" data-plugin="custommodal" data-overlayColor="#36404a">Show me</a>
                </td>
               </tr>
               <tr>
                <td>Door</td>
                <td><code>data-animation="door"</code></td>
                <td>
                 <a href="#custom-modal" className="btn btn-primary btn-sm waves-effect" data-animation="door" data-plugin="custommodal" data-overlayColor="#36404a">Show me</a>
                </td>
               </tr>
               <tr>
                <td>Push</td>
                <td><code>data-animation="push"</code></td>
                <td>
                 <a href="#custom-modal" className="btn btn-primary btn-sm waves-effect" data-animation="push" data-plugin="custommodal" data-overlayColor="#36404a">Show me</a>
                </td>
               </tr>
               <tr>
                <td>Content Scale</td>
                <td><code>data-animation="contentscale"</code></td>
                <td>
                 <a href="#custom-modal" className="btn btn-primary btn-sm waves-effect" data-animation="contentscale" data-plugin="custommodal" data-overlayColor="#36404a">Show me</a>
                </td>
               </tr>
               <tr>
                <td>Swell</td>
                <td><code>data-animation="swell"</code></td>
                <td>
                 <a href="#custom-modal" className="btn btn-primary btn-sm waves-effect" data-animation="swell" data-plugin="custommodal" data-overlayColor="#36404a">Show me</a>
                </td>
               </tr>
               <tr>
                <td>Rotate Down</td>
                <td><code>data-animation="rotatedown"</code></td>
                <td>
                 <a href="#custom-modal" className="btn btn-primary btn-sm waves-effect" data-animation="rotatedown" data-plugin="custommodal" data-overlayColor="#36404a">Show me</a>
                </td>
               </tr>
               <tr>
                <td>Flash</td>
                <td><code>data-animation="flash"</code></td>
                <td>
                 <a href="#custom-modal" className="btn btn-primary btn-sm waves-effect" data-animation="flash" data-plugin="custommodal" data-overlayColor="#36404a">Show me</a>
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

     

       <div id="custom-modal" className="modal-demo">
        <button type="button" className="close" onClick="Custombox.modal.close();">
         <span>&times;</span><span className="sr-only">Close</span>
        </button>
        <h4 className="custom-modal-title">Modal title</h4>
        <div className="custom-modal-text">
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
