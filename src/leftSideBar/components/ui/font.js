import React, { Component } from 'react'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'
import RightSide from '../../../common/home/rightSide'
import Footer from '../../../common/home/footer'

export default class Font extends Component {
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
         <div className="col-12">
          <div className="card">
           <div className="card-body">
            <h4 className="header-title">Solid</h4>
            <p className="sub-header">Use <code>&lt;i className="fas fa-ad"&gt;&lt;/i&gt;</code> <span className="badge badge-success">v 5.13.0</span>.</p>

            <div className="row icons-list-demo" id="solid">
            </div>
           </div>
          </div>

          <div className="card">
           <div className="card-body">
            <h4 className="header-title">Regular</h4>
            <p className="sub-header">Use <code>&lt;i className="far fa-address-book"&gt;&lt;/i&gt;</code> <span className="badge badge-success">v 5.13.0</span>.</p>

            <div className="row icons-list-demo" id="regular">
            </div>
           </div>
          </div>

          <div className="card">
           <div className="card-body">
            <h4 className="header-title">Brands</h4>
            <p className="sub-header">Use <code>&lt;i className="fab fa-500px"&gt;&lt;/i&gt;</code> <span className="badge badge-success">v 5.13.0</span>.</p>

            <div className="row icons-list-demo" id="brand">
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
    {/* <!-- END wrapper --> */}

 
<RightSide/>
   </div>
  )
 }
}
