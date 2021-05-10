import React, { Component } from 'react'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'
import RightSide from '../../../common/home/rightSide'
import Footer from '../../../common/home/footer'

export default class Chartjs extends Component {
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

                      <h4 className="header-title mt-0 mb-3">Line Chart</h4>

                      <div className="chartjs-chart">
                        <canvas id="lineChart" height="300"></canvas>
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

                      <h4 className="header-title mt-0 mb-3">Bar Chart</h4>

                      <div className="chartjs-chart">
                        <canvas id="bar" height="300"></canvas>
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

                      <h4 className="header-title mt-0 mb-3">Pie Chart</h4>

                      <div className="chartjs-chart">
                        <canvas id="pie" height="300"></canvas>
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

                      <h4 className="header-title mt-0 mb-3">Donut Chart</h4>

                      <div className="chartjs-chart">
                        <canvas id="doughnut" height="300"></canvas>
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

                      <h4 className="header-title mt-0 mb-3">Polar area Chart</h4>

                      <div className="chartjs-chart">
                        <canvas id="polarArea" height="300"> </canvas>
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

                      <h4 className="header-title mt-0 mb-3"> Radar Chart</h4>

                      <div className="chartjs-chart">
                        <canvas id="radar" height="300"></canvas>
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
