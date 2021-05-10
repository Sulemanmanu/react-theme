import React, { Component } from 'react'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'
import Footer from '../../../common/home/footer'
import RightSide from '../../../common/home/rightSide'


export default class Flot extends Component {
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

                    <h4 className="header-title mt-0 mb-3">Multiple Statistics</h4>

                    <div id="website-stats" style={{height: "320px"}} className="flot-chart"></div>

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

                    <h4 className="header-title mt-0 mb-3">Realtime Statistics</h4>

                    <div id="flotRealTime" style={{height: "320px"}} className="flot-chart"></div>

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

                    <h4 className="header-title mt-0 mb-3">Donut Pie</h4>

                    <div id="donut-chart">
                      <div id="donut-chart-container" className="flot-chart" style={{height: "260px"}}>
                      </div>
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

                    <h4 className="header-title mt-0 mb-3">Pie Chart</h4>

                    <div id="pie-chart">
                      <div id="pie-chart-container" className="flot-chart" style={{height: "260px"}}>
                      </div>
                    </div>

                  </div>
                </div>
              </div>


              <div className="row">
                <div className="col-lg-12">
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

                    <h4 className="header-title mt-0 mb-3">Bar chart</h4>

                    <div id="ordered-bars-chart" style={{height: "320px"}}></div>
                  </div>
                </div>

              </div>


              <div className="row">
                <div className="col-lg-12">
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

                    <h4 className="header-title mt-0 mb-3">Combine Statistics</h4>

                    <div id="combine-chart">
                      <div id="combine-chart-container" className="flot-chart" style={{height: "320px"}}>
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
