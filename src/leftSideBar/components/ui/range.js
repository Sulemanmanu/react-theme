import React, { Component } from 'react'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'
import RightSide from '../../../common/home/rightSide'
import Footer from '../../../common/home/footer'

export default class Range extends Component {
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

           <h4 className="header-title mt-0">Ion Range Slider</h4>

           <p className="text-muted font-13 mb-4" >
                                        Cool, comfortable, responsive and easily customizable range slider
                                    </p>

          <form className="form-horizontal">
           <div className="form-group row">
            <label for="range_01" className="col-sm-2 control-label">Default</label>
            <div className="col-sm-10">
             <input type="text" id="range_01" />
            </div>
           </div>
           <div className="form-group row">
            <label for="range_02" className="col-sm-2 control-label">Min-Max</label>
            <div className="col-sm-10">
             <input type="text" id="range_02" />
            </div>
           </div>
           <div className="form-group row">
            <label for="range_03" className="col-sm-2 control-label">Prefix</label>
            <div className="col-sm-10">
             <input type="text" id="range_03" />
            </div>
           </div>
           <div className="form-group row">
            <label for="range_04" className="col-sm-2 control-label">Range</label>
            <div className="col-sm-10">
             <input type="text" id="range_04" />
            </div>
           </div>
           <div className="form-group row">
            <label for="range_05" className="col-sm-2 control-label">Step</label>
            <div className="col-sm-10">
             <input type="text" id="range_05" />
            </div>
           </div>
           <div className="form-group row">
            <label for="range_06" className="col-sm-2 control-label">Custom Values</label>
            <div className="col-sm-10">
             <input type="text" id="range_06" />
            </div>
           </div>
           <div className="form-group row">
            <label for="range_07" className="col-sm-2 control-label">Prettify Numbers</label>
            <div className="col-sm-10">
             <input type="text" id="range_07" />
            </div>
           </div>
           <div className="form-group row">
            <label for="range_08" className="col-sm-2 control-label">Disabled</label>
            <div className="col-sm-10">
             <input type="text" id="range_08" />
            </div>
           </div>
          </form>
         </div>
        </div>
       </div>

      </div>
     </div>

     

    </div>
<Footer/>
   </div>
<RightSide/>
       </div >
        )
 }
}
