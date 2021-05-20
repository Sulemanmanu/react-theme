import React, { Component } from 'react'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'
import RightSide from '../../../common/home/rightSide'
import Footer from '../../../common/home/footer'

export default class Moris extends Component {
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

                      <div className="text-center">
                        <ul className="list-inline chart-detail-list">
                          <li className="list-inline-item">
                            <h5 style={{ color: "#ff8acc" }}><i className="fa fa-circle mr-1"></i>Series A</h5>
                          </li>
                          <li className="list-inline-item">
                            <h5 style={{ color: "#5b69bc" }}><i className="fa fa-circle mr-1"></i>Series B</h5>
                          </li>
                        </ul>
                      </div>
                      <div id="morris-line-example" className="morris-chart" style={{ height: "300px" }} dir="ltr"></div>

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

                      <div className="text-center">
                        <ul className="list-inline chart-detail-list">
                          <li className="list-inline-item">
                            <h5 style={{ color: "#ff8acc" }}><i className="fa fa-circle mr-1"></i>Series A</h5>
                          </li>
                          <li className="list-inline-item">
                            <h5 style={{ color: "#5b69bc" }}><i className="fa fa-circle mr-1"></i>Series B</h5>
                          </li>
                          <li className="list-inline-item">
                            <h5 style={{ color: "#35b8e0" }}><i className="fa fa-circle mr-1"></i>Series C</h5>
                          </li>
                        </ul>
                      </div>
                      <div id="morris-bar-example" className="morris-chart" style={{ height: "300px" }} dir="ltr"></div>
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

                      <h4 className="header-title mt-0 mb-3">Stacked Bar Chart</h4>

                      <div className="text-center">
                        <ul className="list-inline chart-detail-list">
                          <li className="list-inline-item">
                            <h5 style={{ color: "#71b6f9" }}><i className="fa fa-circle mr-1"></i>Series A</h5>
                          </li>
                          <li className="list-inline-item">
                            <h5><i className="fa fa-circle mr-1" style={{ color: "#ebeff2" }}></i>Series B</h5>
                          </li>
                        </ul>
                      </div>
                      <div id="morris-bar-stacked" className="morris-chart" style={{ height: "300px" }} dir="ltr"></div>

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

                      <h4 className="header-title mt-0 mb-3">Area Chart</h4>

                      <div className="text-center">
                        <ul className="list-inline chart-detail-list">
                          <li className="list-inline-item">
                            <h5 style={{ color: "#5b69bc" }}><i className="fa fa-circle mr-1"></i>Series A</h5>
                          </li>
                          <li className="list-inline-item">
                            <h5 style={{ color: "#35b8e0" }}><i className="fa fa-circle mr-1"></i>Series B</h5>
                          </li>
                        </ul>
                      </div>
                      <div id="morris-area-example" className="morris-chart" style={{ height: "300px" }} dir="ltr"></div>

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

                      <h4 className="header-title mt-0 mb-3">Area Chart with Point</h4>

                      <div className="text-center">
                        <ul className="list-inline chart-detail-list">
                          <li className="list-inline-item">
                            <h5 style={{ color: "#5b69bc" }}><i className="fa fa-circle mr-1"></i>Series A</h5>
                          </li>
                          <li className="list-inline-item">
                            <h5 style={{ color: "#35b8e0" }}><i className="fa fa-circle mr-1"></i>Series B</h5>
                          </li>
                        </ul>
                      </div>
                      <div id="morris-area-with-dotted" className="morris-chart" style={{ height: "300px" }} dir="ltr"></div>

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

                      <h4 className="header-title mt-0 mb-3"> Donut Chart</h4>

                      <div id="morris-donut-example" className="morris-chart" style={{ height: "300px" }} dir="ltr"></div>

                      <div className="text-center">
                        <ul className="list-inline chart-detail-list">
                          <li className="list-inline-item">
                            <h5 style={{ color: "#5b69bc" }}><i className="fa fa-circle mr-1"></i>In-Store Sales</h5>
                          </li>
                          <li className="list-inline-item">
                            <h5 style={{ color: "#35b8e0" }}><i className="fa fa-circle mr-1"></i>Mail-Order Sales</h5>
                          </li>
                          <li className="list-inline-item">
                            <h5 style={{ color: "#ff8acc" }}><i className="fa fa-circle mr-1"></i>Download Sales</h5>
                          </li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </div >


              </div >

            </div >
          </div >
          <Footer />

        </div>
        <RightSide />

      </div>






    )
  }
}
