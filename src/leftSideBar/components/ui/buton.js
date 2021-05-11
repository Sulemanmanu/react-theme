import React, { Component } from 'react'
import RightSide from '../../../common/home/rightSide'
import Footer from '../../../common/home/footer'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'

export default class Button extends Component {
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

                      <h4 className="header-title mt-0">Default Buttons</h4>

                      <p className="text-muted font-13">Use the button classNamees on an <code>&lt;a&gt;</code>, <code>&lt;button&gt;</code>, or <code>&lt;input&gt;</code> element.</p>

                      <div className="button-list">
                        <button type="button" className="btn btn-primary waves-effect width-md waves-light">Primary</button>
                        <button type="button" className="btn btn-secondary waves-effect width-md">Secondary</button>
                        <button type="button" className="btn btn-success waves-effect width-md waves-light">Success</button>
                        <button type="button" className="btn btn-info waves-effect width-md waves-light">Info</button>
                        <button type="button" className="btn btn-warning waves-effect width-md waves-light">Warning</button>
                        <button type="button" className="btn btn-danger waves-effect width-md waves-light">Danger</button>
                        <button type="button" className="btn btn-dark waves-effect width-md waves-light">Dark</button>
                        <button type="button" className="btn btn-purple waves-effect width-md waves-light">Purple</button>
                        <button type="button" className="btn btn-pink waves-effect width-md waves-light">Pink</button>
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

                      <h4 className="header-title mt-0">Button Rounded</h4>

                      <p className="text-muted font-13">Add <code>.btn-rounded</code> to default button to get rounded corners.</p>

                      <div className="button-list">
                        <button type="button" className="btn btn-primary btn-rounded width-md waves-effect waves-light">Primary</button>
                        <button type="button" className="btn btn-secondary btn-rounded width-md waves-effect">Secondary</button>
                        <button type="button" className="btn btn-success btn-rounded width-md waves-effect waves-light">Success</button>
                        <button type="button" className="btn btn-info btn-rounded width-md waves-effect waves-light">Info</button>
                        <button type="button" className="btn btn-warning btn-rounded width-md waves-effect waves-light">Warning</button>
                        <button type="button" className="btn btn-danger btn-rounded width-md waves-effect waves-light">Danger</button>
                        <button type="button" className="btn btn-dark btn-rounded width-md waves-effect waves-light">Dark</button>
                        <button type="button" className="btn btn-purple btn-rounded width-md waves-effect waves-light">Purple</button>
                        <button type="button" className="btn btn-pink btn-rounded width-md waves-effect waves-light">Pink</button>
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

                      <h4 className="header-title mt-0">Button Bordered</h4>

                      <p className="text-muted font-13">Use a classNamees <code>.btn-bordered</code> to quickly create a bordered buttons.</p>
                      <div className="button-list">
                        <button type="button" className="btn btn-bordered-primary waves-effect  width-md waves-light">Primary</button>
                        <button type="button" className="btn btn-bordered-secondary waves-effect  width-md">Secondary</button>
                        <button type="button" className="btn btn-bordered-success waves-effect  width-md waves-light">Success</button>
                        <button type="button" className="btn btn-bordered-info waves-effect  width-md waves-light">Info</button>
                        <button type="button" className="btn btn-bordered-warning waves-effect  width-md waves-light">Warning</button>
                        <button type="button" className="btn btn-bordered-danger waves-effect  width-md waves-light">Danger</button>
                        <button type="button" className="btn btn-bordered-dark waves-effect  width-md waves-light">Dark</button>
                        <button type="button" className="btn btn-bordered-purple waves-effect  width-md waves-light">Purple</button>
                        <button type="button" className="btn btn-bordered-pink waves-effect  width-md waves-light">Pink</button>
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

                      <h4 className="header-title mt-0">Button Lighten</h4>

                      <p className="text-muted font-13">Use a classNamees <code>.btn-lighten-</code> to quickly create a bordered buttons.</p>
                      <div className="button-list">
                        <button type="button" className="btn btn-lighten-primary waves-effect waves-primary  width-md">Primary</button>
                        <button type="button" className="btn btn-lighten-secondary waves-effect  width-md">Secondary</button>
                        <button type="button" className="btn btn-lighten-success waves-effect  width-md waves-success">Success</button>
                        <button type="button" className="btn btn-lighten-info waves-effect  width-md waves-info">Info</button>
                        <button type="button" className="btn btn-lighten-warning waves-effect  width-md waves-warning">Warning</button>
                        <button type="button" className="btn btn-lighten-danger waves-effect  width-md waves-danger">Danger</button>
                        <button type="button" className="btn btn-lighten-dark waves-effect  width-md waves-inverse">Dark</button>
                        <button type="button" className="btn btn-lighten-purple waves-effect  width-md waves-purple">Purple</button>
                        <button type="button" className="btn btn-lighten-pink waves-effect  width-md waves-pink">Pink</button>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="row">
                  <div className="col-md-4">
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

                      <h4 className="header-title mt-0">Button Width</h4>

                      <p className="text-muted font-13">
                        Create buttons with minimum width by adding add <code>.width-xs</code>, <code>.width-sm</code>, <code>.width-md</code> or <code>.width-lg</code>.
                                    </p>
                      <div className="button-list">
                        <button type="button" className="btn btn-primary waves-effect waves-light width-xs">Xs</button>
                        <button type="button" className="btn btn-purple waves-effect waves-light width-sm">Small</button>
                        <button type="button" className="btn btn-info waves-effect waves-light width-md">Middle</button>
                        <button type="button" className="btn btn-warning waves-effect waves-light width-lg">Large</button>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
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

                      <h4 className="header-title mt-0">Button-Sizes</h4>

                      <p className="text-muted font-13">
                        Add <code>.btn-lg</code>, <code>.btn-sm</code>, or <code>.btn-xs</code> for additional sizes.
                                    </p>
                      <div className="button-list">
                        <button className="btn btn-primary waves-effect waves-light btn-lg">Large button</button>
                        <button className="btn btn-danger waves-effect waves-light">Normal button</button>
                        <button className="btn btn-success waves-effect waves-light btn-sm">Small button</button>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
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

                      <h4 className="header-title mt-0 m-b-30">Button-Disabled</h4>

                      <p className="text-muted font-13">
                        Add the <code>disabled</code> attribute to <code>&lt;button&gt;</code> buttons.
                                    </p>
                      <div className="button-list">
                        <button type="button" className="btn btn-info disabled">Info</button>
                        <button type="button" className="btn btn-purple disabled">Purple</button>
                        <button type="button" className="btn btn-pink disabled">Pink</button>
                        <button type="button" className="btn btn-dark disabled">Dark</button>
                      </div>
                    </div>
                  </div>
                </div>



                <div className="row">
                  <div className="col-md-6">
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

                      <h4 className="header-title mt-0">Icon Button</h4>

                      <p className="text-muted font-13">
                        Icon only button.
                                    </p>
                      <div className="button-list">
                        <button className="btn btn-icon waves-effect btn-secondary"> <i className="far fa-heart"></i> </button>
                        <button className="btn btn-icon waves-effect waves-light btn-danger"> <i className="fas fa-times"></i> </button>
                        <button className="btn btn-icon waves-effect waves-light btn-purple"> <i className="fa fa-music"></i> </button>
                        <button className="btn btn-icon waves-effect waves-light btn-primary"> <i className="fa fa-star"></i> </button>
                        <button className="btn btn-icon waves-effect waves-light btn-success"> <i className="far fa-thumbs-up"></i> </button>
                        <button className="btn btn-icon waves-effect waves-light btn-info"> <i className="far fa-keyboard"></i> </button>
                        <button className="btn btn-icon waves-effect waves-light btn-warning"> <i className="fa fa-wrench"></i> </button>
                        <br />
                        <button className="btn btn-secondary waves-effect"> <i className="fa fa-heart mr-1"></i> <span>Like</span> </button>
                        <button className="btn btn-dark waves-effect waves-light"> <i className="far fa-envelope mr-1"></i> <span>Share</span> </button>
                        <button className="btn btn-warning waves-effect waves-light"> <i className="fa fa-rocket mr-1"></i> <span>Launch</span> </button>
                        <button className="btn btn-info waves-effect waves-light"> <i className="fa fa-cloud mr-1"></i> <span>Cloud Hosting</span> </button>
                        <button className="btn btn-pink waves-effect waves-light"> <span>Book Flight</span> <i className="fa fa-plane ml-1"></i> </button>
                        <button className="btn btn-purple waves-effect waves-light"> <span>Donate Money</span> <i className="far fa-money-bill-alt ml-1"></i> </button>
                      </div>
                    </div>

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

                      <h4 className="header-title mt-0">Block Button</h4>

                      <p className="text-muted font-13">
                        Create block level buttons,with by adding add <code>.btn-block</code>.
                                    </p>

                      <button type="button" className="btn btn-block btn--md btn-pink waves-effect waves-light">Block Button</button>
                      <button type="button" className="btn btn-block btn-sm btn-success waves-effect waves-light">Block Button</button>
                      <button type="button" className="btn btn-block btn-xs btn-purple waves-effect waves-light">Block Button</button>

                    </div>

                  </div>


                  <div className="col-md-6">
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

                      <h4 className="header-title mt-0">Button Group</h4>

                      <p className="text-muted font-13">
                        Wrap a series of buttons with <code>.btn</code> in <code>.btn-group</code>.
                                    </p>


                      <div className="btn-group mb-1">
                        <button type="button" className="btn btn-secondary waves-effect">Left</button>
                        <button type="button" className="btn btn-secondary waves-effect">Middle</button>
                        <button type="button" className="btn btn-secondary waves-effect">Right</button>
                      </div>
                      <br />

                      <div className="btn-group mb-1">
                        <button type="button" className="btn btn-secondary waves-effect">1</button>
                        <button type="button" className="btn btn-secondary waves-effect">2</button>
                        <button type="button" className="btn btn-dark waves-effect waves-light">3</button>
                        <button type="button" className="btn btn-secondary waves-effect">4</button>
                      </div>
                      <div className="btn-group mb-1">
                        <button type="button" className="btn btn-secondary waves-effect">5</button>
                        <button type="button" className="btn btn-dark waves-effect waves-light">6</button>
                        <button type="button" className="btn btn-secondary waves-effect">7</button>
                      </div>
                      <div className="btn-group mb-1">
                        <button type="button" className="btn btn-secondary waves-effect">8</button>
                      </div>
                      <br />
                      <div className="btn-group mb-1">
                        <button type="button" className="btn btn-secondary waves-effect">1</button>
                        <button type="button" className="btn btn-primary waves-effect waves-light">2</button>
                        <button type="button" className="btn btn-secondary waves-effect">3</button>
                        <div className="btn-group">
                          <button type="button" className="btn btn-secondary dropdown-toggle waves-effect" data-toggle="dropdown" aria-expanded="false"> Dropdown <i className="mdi mdi-chevron-down"></i> </button>
                          <div className="dropdown-menu">

                            <a href="javascript:void(0);" className="dropdown-item">Action</a>

                            <a href="javascript:void(0);" className="dropdown-item">Another action</a>

                            <a href="javascript:void(0);" className="dropdown-item">Something else</a>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <div className="btn-group-vertical mb-1">
                            <button type="button" className="btn btn-secondary waves-effect">Top</button>
                            <button type="button" className="btn btn-secondary waves-effect">Middle</button>
                            <button type="button" className="btn btn-secondary waves-effect">Bottom</button>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="btn-group-vertical mb-1">
                            <button type="button" className="btn btn-secondary waves-effect">Button 1</button>
                            <button type="button" className="btn btn-secondary waves-effect">Button 2</button>
                            <button type="button" className="btn btn-secondary dropdown-toggle waves-effect" data-toggle="dropdown" aria-expanded="false"> Button 3 <i className="mdi mdi-chevron-down"></i> </button>
                            <div className="dropdown-menu">

                              <a href="javascript:void(0);" className="dropdown-item">Action</a>

                              <a href="javascript:void(0);" className="dropdown-item">Another action</a>

                              <a href="javascript:void(0);" className="dropdown-item">Something else</a>
                            </div>
                          </div>
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
