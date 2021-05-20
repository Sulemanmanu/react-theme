import React, { Component } from 'react'
import Topbar from '../../common/home/topBar'
import Sidebar from '../../common/home/sidebar'
import Footer from '../../common/home/footer'
import RightSide from '../../common/home/rightSide'


export default class Dashboard extends Component {
  render() {
    return (
      <div>


        <div id="wrapper">
         <Topbar/>
         <Sidebar/>

          {/* <!-- Left Sidebar End --> */}

          {/* <!-- ============================================================== -->
    <!-- Start Page Content here -->
    <!-- ============================================================== --> */}

          <div className="content-page">
            <div className="content">

              {/* <!-- Start Content--> */}
              <div className="container-fluid">

                <div className="row">

                  <div className="col-xl-3 col-md-6">
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

                      <h4 className="header-title mt-0 mb-4">Total Revenue</h4>

                      <div className="widget-chart-1">
                        <div className="widget-chart-box-1 float-left" dir="ltr">
                          <input data-plugin="knob" data-width="80" data-height="80" data-fgColor="#f05050 "
                            data-bgcolor="#F9B9B9" defaultValue="58" data-skin="tron" data-angleoffset="180" data-readOnly={true}
                            data-thickness=".15" />
                        </div>

                        <div className="widget-detail-1 text-right">
                          <h2 className="font-weight-normal pt-2 mb-1"> 256 </h2>
                          <p className="text-muted mb-1">Revenue today</p>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="col-xl-3 col-md-6">
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

                      <h4 className="header-title mt-0 mb-3">Sales Analytics</h4>

                      <div className="widget-box-2">
                        <div className="widget-detail-2 text-right">
                          <span className="badge badge-success badge-pill float-left mt-3">32% <i className="mdi mdi-trending-up"></i>
                          </span>
                          <h2 className="font-weight-normal mb-1"> 8451 </h2>
                          <p className="text-muted mb-3">Revenue today</p>
                        </div>
                        <div className="progress progress-bar-alt-success progress-sm">
                          <div className="progress-bar bg-success" role="progressbar" aria-valuenow="77" aria-valuemin="0"
                            aria-valuemax="100" style={{ width: "77%" }}>
                            <span className="sr-only">77% Complete</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="col-xl-3 col-md-6">
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

                      <h4 className="header-title mt-0 mb-4">Statistics</h4>

                      <div className="widget-chart-1">
                        <div className="widget-chart-box-1 float-left" dir="ltr">
                          <input data-plugin="knob" data-width="80" data-height="80" data-fgColor="#ffbd4a"
                            data-bgColor="#FFE6BA" defaultValue="80" data-skin="tron" data-angleOffset="180" data-readOnly={true}
                            data-thickness=".15" />
                        </div>
                        <div className="widget-detail-1 text-right">
                          <h2 className="font-weight-normal pt-2 mb-1"> 4569 </h2>
                          <p className="text-muted mb-1">Revenue today</p>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="col-xl-3 col-md-6">
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

                      <h4 className="header-title mt-0 mb-3">Daily Sales</h4>

                      <div className="widget-box-2">
                        <div className="widget-detail-2 text-right">
                          <span className="badge badge-pink badge-pill float-left mt-3">32% <i className="mdi mdi-trending-up"></i>
                          </span>
                          <h2 className="font-weight-normal mb-1"> 158 </h2>
                          <p className="text-muted mb-3">Revenue today</p>
                        </div>
                        <div className="progress progress-bar-alt-pink progress-sm">
                          <div className="progress-bar bg-pink" role="progressbar" aria-valuenow="77" aria-valuemin="0"
                            aria-valuemax="100" style={{ width: "77%" }}>
                            <span className="sr-only">77% Complete</span>
                          </div>
                        </div>
                      </div>
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

                      <h4 className="header-title mt-0">Daily Sales</h4>

                      <div className="widget-chart text-center">
                        <div id="morris-donut-example" dir="ltr" style={{ height: "245px" }} className="morris-chart"></div>
                        <ul className="list-inline chart-detail-list mb-0">
                          <li className="list-inline-item">
                            <h5 style={{ color: "#ff8acc" }}><i className="fa fa-circle mr-1"></i>Series A</h5>
                          </li>
                          <li className="list-inline-item">
                            <h5 style={{ color: "#5b69bc" }}><i className="fa fa-circle mr-1"></i>Series B</h5>
                          </li>
                        </ul>
                      </div>
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
                      <h4 className="header-title mt-0">Statistics</h4>
                      <div id="morris-bar-example" dir="ltr" style={{ height: "280px" }} className="morris-chart"></div>
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
                      <h4 className="header-title mt-0">Total Revenue</h4>
                      <div id="morris-line-example" dir="ltr" style={{ height: "280px" }} className="morris-chart"></div>
                    </div>
                  </div>
                  {/* <!-- end col --> */}

                </div>
                {/* <!-- end row --> */}


                <div className="row">
                  <div className="col-xl-3 col-md-6">
                    <div className="card-box widget-user">
                      <div className="media">
                        <div className="avatar-lg mr-3">
                          <img src="assets/images/users/user-3.jpg" className="img-fluid rounded-circle" alt="user" />
                        </div>
                        <div className="media-body overflow-hidden">
                          <h5 className="mt-0 mb-1">Chadengle</h5>
                          <p className="text-muted mb-2 font-13 text-truncate">coderthemes@gmail.com</p>
                          <small className="text-warning"><b>Admin</b></small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-md-6">
                    <div className="card-box widget-user">
                      <div className="media">
                        <div className="avatar-lg mr-3">
                          <img src="assets/images/users/user-2.jpg" className="img-fluid rounded-circle" alt="user" />
                        </div>
                        <div className="media-body overflow-hidden">
                          <h5 className="mt-0 mb-1"> Michael Zenaty</h5>
                          <p className="text-muted mb-2 font-13 text-truncate">coderthemes@gmail.com</p>
                          <small className="text-pink"><b>Support Lead</b></small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-md-6">
                    <div className="card-box widget-user">
                      <div className="media">
                        <div className="avatar-lg mr-3">
                          <img src="assets/images/users/user-1.jpg" className="img-fluid rounded-circle" alt="user" />
                        </div>
                        <div className="media-body overflow-hidden">
                          <h5 className="mt-0 mb-1">Stillnotdavid</h5>
                          <p className="text-muted mb-2 font-13 text-truncate">coderthemes@gmail.com</p>
                          <small className="text-success"><b>Designer</b></small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-md-6">
                    <div className="card-box widget-user">
                      <div className="media">
                        <div className="avatar-lg mr-3">
                          <img src="assets/images/users/user-10.jpg" className="img-fluid rounded-circle" alt="user" />
                        </div>
                        <div className="media-body overflow-hidden">
                          <h5 className="mt-0 mb-1">Tomaslau</h5>
                          <p className="text-muted mb-2 font-13 text-truncate">coderthemes@gmail.com</p>
                          <small className="text-info"><b>Developer</b></small>
                        </div>
                      </div>
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

                      <h4 className="header-title mb-3">Inbox</h4>

                      <div className="inbox-widget">

                        <div className="inbox-item">
                          <a href="#">
                            <div className="inbox-item-img"><img src="assets/images/users/user-1.jpg" className="rounded-circle"
                              alt="" /></div>
                            <h5 className="inbox-item-author mt-0 mb-1">Chadengle</h5>
                            <p className="inbox-item-text">Hey! there I'm available...</p>
                            <p className="inbox-item-date">13:40 PM</p>
                          </a>
                        </div>

                        <div className="inbox-item">
                          <a href="#">
                            <div className="inbox-item-img"><img src="assets/images/users/user-2.jpg" className="rounded-circle"
                              alt="" /></div>
                            <h5 className="inbox-item-author mt-0 mb-1">Tomaslau</h5>
                            <p className="inbox-item-text">I've finished it! See you so...</p>
                            <p className="inbox-item-date">13:34 PM</p>
                          </a>
                        </div>

                        <div className="inbox-item">
                          <a href="#">
                            <div className="inbox-item-img"><img src="assets/images/users/user-3.jpg" className="rounded-circle"
                              alt="" /></div>
                            <h5 className="inbox-item-author mt-0 mb-1">Stillnotdavid</h5>
                            <p className="inbox-item-text">This theme is awesome!</p>
                            <p className="inbox-item-date">13:17 PM</p>
                          </a>
                        </div>

                        <div className="inbox-item">
                          <a href="#">
                            <div className="inbox-item-img"><img src="assets/images/users/user-4.jpg" className="rounded-circle"
                              alt="" /></div>
                            <h5 className="inbox-item-author mt-0 mb-1">Kurafire</h5>
                            <p className="inbox-item-text">Nice to meet you</p>
                            <p className="inbox-item-date">12:20 PM</p>
                          </a>
                        </div>

                        <div className="inbox-item">
                          <a href="#">
                            <div className="inbox-item-img"><img src="assets/images/users/user-5.jpg" className="rounded-circle"
                              alt="" /></div>
                            <h5 className="inbox-item-author mt-0 mb-1">Shahedk</h5>
                            <p className="inbox-item-text">Hey! there I'm available...</p>
                            <p className="inbox-item-date">10:15 AM</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-8">
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

                      <h4 className="header-title mt-0 mb-3">Latest Projects</h4>

                      <div className="table-responsive">
                        <table className="table table-hover mb-0">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Project Name</th>
                              <th>Start Date</th>
                              <th>Due Date</th>
                              <th>Status</th>
                              <th>Assign</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Adminto Admin v1</td>
                              <td>01/01/2017</td>
                              <td>26/04/2017</td>
                              <td><span className="badge badge-danger">Released</span></td>
                              <td>Coderthemes</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Adminto Frontend v1</td>
                              <td>01/01/2017</td>
                              <td>26/04/2017</td>
                              <td><span className="badge badge-success">Released</span></td>
                              <td>Adminto admin</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>Adminto Admin v1.1</td>
                              <td>01/05/2017</td>
                              <td>10/05/2017</td>
                              <td><span className="badge badge-pink">Pending</span></td>
                              <td>Coderthemes</td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>Adminto Frontend v1.1</td>
                              <td>01/01/2017</td>
                              <td>31/05/2017</td>
                              <td><span className="badge badge-purple">Work in Progress</span>
                              </td>
                              <td>Adminto admin</td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>Adminto Admin v1.3</td>
                              <td>01/01/2017</td>
                              <td>31/05/2017</td>
                              <td><span className="badge badge-warning">Coming soon</span></td>
                              <td>Coderthemes</td>
                            </tr>

                            <tr>
                              <td>6</td>
                              <td>Adminto Admin v1.3</td>
                              <td>01/01/2017</td>
                              <td>31/05/2017</td>
                              <td><span className="badge badge-primary">Coming soon</span></td>
                              <td>Adminto admin</td>
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

          {/* <!-- ============================================================== -->
    <!-- End Page content -->
    <!-- ============================================================== --> */}
<Footer/>
        </div>
        <RightSide/>
      </div>
    )
  }
}
