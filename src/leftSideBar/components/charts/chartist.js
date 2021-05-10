import React, { Component } from 'react'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'
import Footer from '../../../common/home/footer'
import RightSide from '../../../common/home/rightSide'

export default class Chartist extends Component {
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
        <div className="col-xl-6">
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

          <h4 className="header-title mt-0 mb-3">Advanced Smil Animations</h4>

          <div id="smil-animations" className="ct-chart ct-golden-section"></div>
         </div>
        </div>

        <div className="col-xl-6">
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

          <h4 className="header-title mt-0 mb-3">Simple line chart</h4>

          <div id="simple-line-chart" className="ct-chart ct-golden-section"></div>
         </div>
        </div>
       </div>



       <div className="row">
        <div className="col-xl-6">
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

          <h4 className="header-title mt-0 mb-3">Line Scatter Diagram</h4>

          <div id="scatter-diagram" className="ct-chart ct-golden-section"></div>
         </div>
        </div>

        <div className="col-xl-6">
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

          <h4 className="header-title mt-0 mb-3">Line chart with tooltips</h4>

          <div id="line-chart-tooltips" className="ct-chart ct-golden-section"></div>
         </div>
        </div>
       </div>



       <div className="row">
        <div className="col-xl-6">
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

          <h4 className="header-title mt-0 mb-3">Line chart with area</h4>

          <div id="chart-with-area" className="ct-chart ct-golden-section"></div>
         </div>
        </div>

        <div className="col-xl-6">
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

          <h4 className="header-title mt-0 mb-3">Bi-polar Line chart with area only</h4>

          <div id="bi-polar-line" className="ct-chart ct-golden-section"></div>
         </div>
        </div>
       </div>




       <div className="row">
        <div className="col-xl-6">
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

          <h4 className="header-title mt-0 mb-3">SVG Path animation</h4>

          <div id="svg-animation" className="ct-chart ct-golden-section"></div>
         </div>
        </div>

        <div className="col-xl-6">
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

          <h4 className="header-title mt-0 mb-3">Line Interpolation / Smoothing</h4>

          <div id="line-smoothing" className="ct-chart ct-golden-section"></div>
         </div>
        </div>
       </div>



       <div className="row">
        <div className="col-xl-6">
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

          <h4 className="header-title mt-0 mb-3">Different configuration for different series</h4>

          <div id="different-series" className="ct-chart ct-golden-section"></div>
         </div>
        </div>

        <div className="col-xl-6">
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

          <h4 className="header-title mt-0 mb-3">SVG Animations chart</h4>

          <div id="svg-dot-animation" className="ct-chart ct-golden-section"></div>
         </div>
        </div>
       </div>



       <div className="row">
        <div className="col-xl-6">
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

          <h4 className="header-title mt-0 mb-3">Bi-polar bar chart</h4>

          <div id="bi-polar-bar" className="ct-chart ct-golden-section"></div>
         </div>
        </div>

        <div className="col-xl-6">
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

          <h4 className="header-title mt-0 mb-3">Overlapping bars on mobile</h4>

          <div id="overlapping-bars" className="ct-chart ct-golden-section"></div>
         </div>
        </div>
       </div>




       <div className="row">
        <div className="col-xl-6">
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

          <h4 className="header-title mt-0 mb-3">Multi-line labels</h4>

          <div id="multi-line-chart" className="ct-chart ct-golden-section"></div>
         </div>
        </div>

        <div className="col-xl-6">
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

          <h4 className="header-title mt-0 mb-3">Stacked bar chart</h4>

          <div id="stacked-bar-chart" className="ct-chart ct-golden-section"></div>
         </div>
        </div>
       </div>




       <div className="row">
        <div className="col-xl-6">
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

          <h4 className="header-title mt-0 mb-3">Horizontal bar chart</h4>

          <div id="horizontal-bar-chart" className="ct-chart ct-golden-section"></div>
         </div>
        </div>

        <div className="col-xl-6">
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

          <h4 className="header-title m-t-0 m-b-30">Extreme responsive configuration</h4>

          <div id="extreme-chart" className="ct-chart ct-golden-section"></div>
         </div>
        </div>
       </div>



       <div className="row">
        <div className="col-xl-6">
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

          <h4 className="header-title mt-0 mb-3">Distributed series</h4>

          <div id="distributed-series" className="ct-chart ct-golden-section"></div>
         </div>
        </div>

        <div className="col-xl-6">
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

          <h4 className="header-title mt-0 mb-3">Label placement</h4>

          <div id="label-placement-chart" className="ct-chart ct-golden-section"></div>
         </div>
        </div>
       </div>



       <div className="row">
        <div className="col-xl-6">
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

          <h4 className="header-title mt-0 mb-3">Animating a Donut with Svg.animate</h4>

          <div id="animating-donut" className="ct-chart ct-golden-section"></div>
         </div>
        </div>

        <div className="col-xl-6">
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

          <h4 className="header-title mt-0 mb-3">Simple pie chart</h4>

          <div id="simple-pie" className="ct-chart ct-golden-section simple-pie-chart-chartist"></div>
         </div>
        </div>
       </div>





       <div className="row">
        <div className="col-xl-6">
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

          <h4 className="header-title mt-0 mb-3">Pie chart with custom labels</h4>

          <div id="pie-chart" className="ct-chart ct-golden-section"></div>
         </div>
        </div>

        <div className="col-xl-6">
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

          <h4 className="header-title mt-0 mb-3">Gauge chart</h4>

          <div id="gauge-chart" className="ct-chart ct-golden-section"></div>
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
