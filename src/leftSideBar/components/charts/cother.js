import React, { Component } from 'react'
import Sidebar from '../../../common/home/sidebar'
import RightSide from '../../../common/home/rightSide'
import Footer from '../../../common/home/footer'
import Topbar from '../../../common/home/topBar'

export default class Cother extends Component {
 render() {
  return (
   <div>
    <div id="wrapper">
<Topbar/>
     <Sidebar />

     <div className="content-page">
      <div className="content">

       {/* <!-- Start Content--> */}
       <div className="container-fluid">

        <div className="row">
         <div className="col-xl-4">
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

           <h4 className="header-title mt-0 mb-3">Line Charts</h4>

           <div id="sparkline1"></div>
          </div>
         </div>

         <div className="col-xl-4">
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

           <h4 className="header-title mt-0 mb-3">Bar Chart</h4>

           <div id="sparkline2" className="text-center"></div>
          </div>
         </div>

         <div className="col-xl-4">
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

           <h4 className="header-title mt-0 mb-3">Pie Chart</h4>

           <div id="sparkline3" className="text-center"></div>
          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-xl-4">
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

           <h4 className="header-title mt-0 mb-3">Custom Line Chart</h4>

           <div id="sparkline4" className="text-center"></div>
          </div>
         </div>

         <div className="col-xl-4">
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

           <h4 className="header-title mt-0 mb-3">Mouse Speed Chart Example</h4>

           <div id="sparkline5" className="text-center"></div>
          </div>
         </div>

         <div className="col-xl-4">
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

           <h4 className="header-title mt-0 mb-3">Composite bar Chart</h4>

           <div id="sparkline6" className="text-center"></div>
          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-sm-12">
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

           <h4 className="header-title mt-0">Jquery Knob</h4>

           <div className="row">
            <div className="col-md-6 col-xl-3 text-center">
             <div className="mt-3" dir="ltr">
              <input data-plugin="knob" data-width="150" data-height="150"
               data-fgColor="#71b6f9" data-displayInput={false} value="35" />
              <h5 className="text-muted">Disable display input</h5>
             </div>
            </div>
            <div className="col-md-6 col-xl-3 text-center">
             <div className="mt-3" dir="ltr">
              <input data-plugin="knob" data-width="150" data-height="150" data-cursor={true}
               data-fgColor="#10c469" value="29" />
              <h5 className="text-muted">Cursor mode</h5>
             </div>
            </div>
            <div className="col-md-6 col-xl-3 text-center">
             <div className="mt-3" dir="ltr">
              <input data-plugin="knob" data-width="150" data-height="150" data-min="-100"
               data-fgColor="#f9c851" data-displayPrevious={true} value="44" />
              <h5 className="text-muted">Display previous value</h5>
             </div>
            </div>
            <div className="col-md-6 col-xl-3 text-center">
             <div className="mt-3" dir="ltr">
              <input data-plugin="knob" data-width="150" data-height="150" data-min="-100"
               data-fgColor="#35b8e0" data-displayPrevious={true} data-angleOffset="-125"
                                                       data-angleArc="250" value="44"/>
                                                <h5 className="text-muted">Angle offset and arc</h5>
             </div>
            </div>
           </div>

           <div className="row">
            <div className="col-md-6 col-xl-3 text-center">
             <div className="mt-3" dir="ltr">
              <input data-plugin="knob" data-width="150" data-height="150"
               data-angleOffset="90" data-linecap="round" data-fgColor="#ff8acc"
               value="35" />
              <h5 className="text-muted">Angle offset</h5>
             </div>
            </div>
            <div className="col-md-6 col-xl-3 text-center">
             <div className="mt-3" dir="ltr">
              <input data-plugin="knob" data-width="150" data-height="150" data-min="-15000"
               data-displayPrevious={true} data-max="15000" data-step="1000"
               value="-11000" data-fgColor="#5b69bc" />
              <h5 className="text-muted">5-digit values, step 1000</h5>
             </div>
            </div>
            <div className="col-md-6 col-xl-3 text-center">
             <div className="mt-3" dir="ltr">
              <input data-plugin="knob" data-width="150" data-height="150" data-linecap="round"
               data-fgColor="#435966" value="80" data-skin="tron" data-angleOffset="180"
               data-readOnly={true} data-thickness=".1" />
              <h5 className="text-muted">Readonly</h5>
             </div>
            </div>
            <div className="col-md-6 col-xl-3 text-center">
             <div className="mt-3" dir="ltr">
              <input data-plugin="knob" data-width="150" data-height="150"
               data-displayPrevious={true} data-fgColor="#ff5b5b" data-skin="tron"
               data-cursor={true} value="75" data-thickness=".2" data-angleOffset="-125"
                                                       data-angleArc="250" value="44"/>
                                                <h5 className="text-muted">Angle offset and arc</h5>
             </div>
            </div>
           </div>

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

           <h4 className="header-title mt-0 mb-3">Pie Charts</h4>

           <div className="table-responsive">
            <table className="table mb-0">
             <thead>
              <tr>
               <th>Graph</th>
               <th>Code</th>
              </tr>
             </thead>

             <tbody>
              <tr>
               <td>
                <span data-plugin="peity-pie" data-colors="#71b6f9,#ebeff2" data-width="30"
                 data-height="30">1/5</span>
               </td>
               <td>
                <code>&lt;span data-plugin="peity-pie" data-colors="#71b6f9,#ebeff2"
                                                        data-width="30" data-height="30"&gt;1/5&lt;/span&gt;</code>
               </td>
              </tr>
              <tr>
               <td>
                <span data-plugin="peity-pie" data-colors="#71b6f9,#ebeff2" data-width="30"
                 data-height="30">226/360</span>
               </td>
               <td>
                <code>&lt;span data-plugin="peity-pie" data-colors="#71b6f9,#ebeff2"
                                                        data-width="30" data-height="30"&gt;226/360&lt;/span&gt;</code>
               </td>
              </tr>
              <tr>
               <td>
                <span className="pie" data-plugin="peity-pie" data-colors="#71b6f9,#ebeff2"
                 data-width="30" data-height="30">0.52/1.561</span>
               </td>
               <td>
                <code>&lt;span data-plugin="peity-pie" data-colors="#71b6f9,#ebeff2"
                                                        data-width="30" data-height="30"&gt;0.52/1.561&lt;/span&gt;</code>
               </td>
              </tr>
              <tr>
               <td>
                <span className="pie" data-plugin="peity-pie" data-colors="#71b6f9,#ebeff2"
                 data-width="30" data-height="30">1,4</span>
               </td>
               <td>
                <code>&lt;span data-plugin="peity-pie" data-colors="#71b6f9,#ebeff2"
                                                        data-width="30" data-height="30"&gt;1,4&lt;/span&gt;</code>
               </td>
              </tr>
              <tr>
               <td>
                <span className="pie" data-plugin="peity-pie" data-colors="#71b6f9,#ebeff2"
                 data-width="30" data-height="30">226,134</span>
               </td>
               <td>
                <code>&lt;span data-plugin="peity-pie" data-colors="#71b6f9,#ebeff2"
                                                        data-width="30" data-height="30"&gt;226,134&lt;/span&gt;</code>
               </td>
              </tr>
              <tr>
               <td>
                <span className="pie" data-plugin="peity-pie" data-colors="#71b6f9,#ebeff2"
                 data-width="30" data-height="30">0.52,1.041</span>
               </td>
               <td>
                <code>&lt;span data-plugin="peity-pie" data-colors="#71b6f9,#ebeff2"
                                                        data-width="30" data-height="30"&gt;0.52,1.041&lt;/span&gt;</code>
               </td>
              </tr>
             </tbody>
            </table>
           </div>
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

           <h4 className="header-title mt-0 mb-3">Donut Charts</h4>

           <div className="table-responsive">
            <table className="table mb-0">
             <thead>
              <tr>
               <th>Graph</th>
               <th>Code</th>
              </tr>
             </thead>
             <tbody>
              <tr>
               <td>
                <span className="donut" data-plugin="peity-donut" data-colors="#71b6f9,#ebeff2"
                 data-width="30" data-height="30">1/5</span>
               </td>
               <td>
                <code>&lt;span data-plugin="peity-donut" data-colors="#71b6f9,#ebeff2"
                                                        data-width="30" data-height="30"&gt;1/5&lt;/span&gt;</code>
               </td>
              </tr>
              <tr>
               <td>
                <span className="donut" data-plugin="peity-donut" data-colors="#71b6f9,#ebeff2"
                 data-width="30" data-height="30">226/360</span>
               </td>
               <td>
                <code>&lt;span data-plugin="peity-donut" data-colors="#71b6f9,#ebeff2"
                                                        data-width="30" data-height="30"&gt;226/360&lt;/span&gt;</code>
               </td>
              </tr>
              <tr>
               <td>
                <span className="donut" data-plugin="peity-donut" data-colors="#71b6f9,#ebeff2"
                 data-width="30" data-height="30">0.52/1.561</span>
               </td>
               <td>
                <code>&lt;span data-plugin="peity-donut" data-colors="#71b6f9,#ebeff2"
                                                        data-width="30" data-height="30"&gt;0.52/1.561&lt;/span&gt;</code>
               </td>
              </tr>
              <tr>
               <td>
                <span className="donut" data-plugin="peity-donut" data-colors="#71b6f9,#ebeff2"
                 data-width="30" data-height="30">1,4</span>
               </td>
               <td>
                <code>&lt;span data-plugin="peity-donut" data-colors="#71b6f9,#ebeff2"
                                                        data-width="30" data-height="30"&gt;1/4&lt;/span&gt;</code>
               </td>
              </tr>
              <tr>
               <td>
                <span className="donut" data-plugin="peity-donut" data-colors="#71b6f9,#ebeff2"
                 data-width="30" data-height="30">226,134</span>
               </td>
               <td>
                <code>&lt;span data-plugin="peity-donut" data-colors="#71b6f9,#ebeff2"
                                                        data-width="30" data-height="30"&gt;226,134&lt;/span&gt;</code>
               </td>
              </tr>
              <tr>
               <td>
                <span className="donut" data-plugin="peity-donut" data-colors="#71b6f9,#ebeff2"
                 data-width="30" data-height="30">1,2,3,2,2</span>
               </td>
               <td>
                <code>&lt;span data-plugin="peity-donut" data-colors="#71b6f9,#ebeff2"
                                                        data-width="30" data-height="30"&gt;1,2,3,2,2&lt;/span&gt;</code>
               </td>
              </tr>
             </tbody>
            </table>
           </div>

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

           <h4 className="header-title mt-0 mb-3">Line and Bars Charts</h4>

           <div className="table-responsive">
            <table className="table mb-0">
             <thead>
              <tr>
               <th>Graph</th>
               <th>Code</th>
              </tr>
             </thead>
             <tbody>

              <tr>
               <td>
                <span data-plugin="peity-line" data-fill="#71b6f9" data-stroke="#169c81"
                 data-width="120" data-height="40">5,3,9,6,5,9,7,3,5,2</span>
               </td>
               <td>
                <code>&lt;span data-plugin="peity-line" data-fill="#71b6f9"
                                                        data-stroke="#169c81" data-width="100" data-height="40"&gt;5,3,9,6,5,9,7,3,5,2&lt;/span&gt;</code>
               </td>
              </tr>
              <tr>
               <td>
                <span data-plugin="peity-line" data-fill="#71b6f9" data-stroke="#169c81"
                 data-width="120" data-height="40">5,3,2,-1,-3,-2,2,3,5,2</span>
               </td>
               <td>
                <code>&lt;span data-plugin="peity-line" data-fill="#71b6f9"
                                                        data-stroke="#169c81" data-width="100" data-height="100"&gt;5,3,2,-1,-3,-2,2,3,5,2&lt;/span&gt;</code>
               </td>
              </tr>
              <tr>
               <td>
                <span data-plugin="peity-line" data-fill="#71b6f9" data-stroke="#169c81"
                 data-width="120" data-height="40">0,-3,-6,-4,-5,-4,-7,-3,-5,-2</span>
               </td>
               <td>
                <code>&lt;span data-plugin="peity-line" data-fill="#71b6f9"
                                                        data-stroke="#169c81" data-width="100" data-height="100"&gt;0,-3,-6,-4,-5,-4,-7,-3,-5,-2&lt;/span&gt;</code>
               </td>
              </tr>
              <tr>
               <td>
                <span data-plugin="peity-bar" data-colors="#71b6f9,#ebeff2" data-width="100"
                 data-height="30">5,3,9,6,5,9,7,3,5,2</span>
               </td>
               <td>
                <code>&lt;span data-plugin="peity-bar" data-colors="#71b6f9,#ebeff2"
                                                        data-width="100" data-height="30"&gt;5,3,9,6,5,9,7,3,5,2&lt;/span&gt;</code>
               </td>
              </tr>
              <tr>
               <td>
                <span data-plugin="peity-bar" data-colors="#71b6f9,#ebeff2" data-width="100"
                 data-height="30">5,3,2,-1,-3,-2,2,3,5,2</span>
               </td>
               <td>
                <code>&lt;span data-plugin="peity-bar" data-colors="#71b6f9,#ebeff2"
                data-width="100"
                                                        data-height="30"&gt;5,3,2,-1,-3,-2,2,3,5,2&lt;/span&gt;</code>
               </td>
              </tr>
             </tbody>
            </table>
           </div>

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

           <h4 className="header-title mt-0 mb-3">Data-attributes charts</h4>

           <div className="table-responsive">
            <table className="table mb-0">
             <thead>
              <tr>
               <th>Graph</th>
               <th>Code</th>
              </tr>
             </thead>

             <tbody>
              <tr>
               <td>
                <span data-plugin="peity-donut-alt"
                 data-peity='{ "fill": ["#4c5667", "#ebeff2"], "innerRadius": 24, "radius": 30 }'>6/7</span>
               </td>
               <td>
                {/* <code>
                 &lt;span data-plugin="peity-donut-alt" data-peity='{"fill": ["#4c5667",
                                                        "#ebeff2"], "innerRadius": 24, "radius": 30 }'"&gt;6/7&lt;/span&gt;
                                                    </code> */}
               </td>
              </tr>
              <tr>
               <td>
                <span data-plugin="peity-donut-alt"
                 data-peity='{ "fill": ["#71b6f9", "#ebeff2"],  "innerRadius": 18, "radius": 28 }'>4/7</span>
               </td>
               <td>
                {/* <code>
                 &lt;span data-plugin="peity-donut-alt" data-peity='{"fill": ["#71b6f9`",
                                                        "#ebeff2"], "innerRadius": 18, "radius": 28 }'"&gt;4/7&lt;/span&gt;
                                                    </code> */}
               </td>
              </tr>

              <tr>
               <td>
                <span data-plugin="peity-donut-alt"
                 data-peity='{ "fill": ["#5d9cec", "#ebeff2"],   "innerRadius": 20, "radius": 24 }'>5/7</span>
               </td>
               <td>
                {/* <code>
                 &lt;span data-plugin="peity-donut-alt" data-peity='{"fill": ["#5d9cec",
                                                        "#ebeff2"], "innerRadius": 20, "radius": 24 }'"&gt;5/7&lt;/span&gt;
                                                    </code> */}
               </td>
              </tr>
              <tr>
               <td>
                <span data-plugin="peity-donut-alt"
                 data-peity='{ "fill": ["#fb6d9d", "#ebeff2"], "innerRadius": 18, "radius": 20 }'>6/7</span>
               </td>
               <td>
                {/* <code>
                 &lt;span data-plugin="peity-donut-alt" data-peity='{"fill": ["#fb6d9d",
                                                        "#ebeff2"], "innerRadius": 18, "radius": 20 }'"&gt;6/7&lt;/span&gt;
                                                    </code> */}
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
     <Footer />
    </div>
    <RightSide />

   </div>
  )
 }
}
