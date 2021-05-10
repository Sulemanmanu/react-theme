import React, { Component } from 'react'
import Footer from '../../../common/home/footer'
import RightSide from '../../../common/home/rightSide'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'

export default class Wizard extends Component {
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
          <div className="card">
           <div className="card-body">

            <h4 className="header-title mb-3"> Basic Wizard</h4>

            <form>
             <div id="basicwizard">

              <ul className="nav nav-pills bg-light nav-justified form-wizard-header mb-4">
               <li className="nav-item">
                <a href="#basictab1" data-toggle="tab" className="nav-link rounded-0 pt-2 pb-2">
                 <i className="mdi mdi-account-circle mr-1"></i>
                 <span className="d-none d-sm-inline">Account</span>
                </a>
               </li>
               <li className="nav-item">
                <a href="#basictab2" data-toggle="tab" className="nav-link rounded-0 pt-2 pb-2">
                 <i className="mdi mdi-face-profile mr-1"></i>
                 <span className="d-none d-sm-inline">Profile</span>
                </a>
               </li>
               <li className="nav-item">
                <a href="#basictab3" data-toggle="tab" className="nav-link rounded-0 pt-2 pb-2">
                 <i className="mdi mdi-checkbox-marked-circle-outline mr-1"></i>
                 <span className="d-none d-sm-inline">Finish</span>
                </a>
               </li>
              </ul>

              <div className="tab-content border-0 mb-0">
               <div className="tab-pane" id="basictab1">
                <div className="row">
                 <div className="col-12">
                  <div className="form-group row mb-3">
                   <label className="col-md-3 col-form-label" for="userName">User name</label>
                   <div className="col-md-9">
                    <input type="text" className="form-control" id="userName" name="userName" value="Coderthemes" />
                   </div>
                  </div>
                  <div className="form-group row mb-3">
                   <label className="col-md-3 col-form-label" for="password"> Password</label>
                   <div className="col-md-9">
                    <input type="password" id="password" name="password" className="form-control" value="123456789" />
                   </div>
                  </div>

                  <div className="form-group row mb-3">
                   <label className="col-md-3 col-form-label" for="confirm">Re Password</label>
                   <div className="col-md-9">
                    <input type="password" id="confirm" name="confirm" className="form-control" value="123456789" />
                   </div>
                  </div>
                 </div>
                </div>
               </div>

               <div className="tab-pane" id="basictab2">
                <div className="row">
                 <div className="col-12">
                  <div className="form-group row mb-3">
                   <label className="col-md-3 col-form-label" for="name"> First name</label>
                   <div className="col-md-9">
                    <input type="text" id="name" name="name" className="form-control" value="Francis" />
                   </div>
                  </div>
                  <div className="form-group row mb-3">
                   <label className="col-md-3 col-form-label" for="surname"> Last name</label>
                   <div className="col-md-9">
                    <input type="text" id="surname" name="surname" className="form-control" value="Brinkman" />
                   </div>
                  </div>

                  <div className="form-group row mb-3">
                   <label className="col-md-3 col-form-label" for="email">Email</label>
                   <div className="col-md-9">
                    <input type="email" id="email" name="email" className="form-control" value="cory1979@hotmail.com" />
                   </div>
                  </div>
                 </div>
                </div>
               </div>

               <div className="tab-pane" id="basictab3">
                <div className="row">
                 <div className="col-12">
                  <div className="text-center">
                   <h2 className="mt-0"><i className="mdi mdi-check-all"></i></h2>
                   <h3 className="mt-0">Thank you !</h3>

                   <p className="w-75 mb-2 mx-auto">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam
                                                                        mattis dictum aliquet.</p>

                   <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                     <input type="checkbox" className="custom-control-input" id="customCheck1" />
                     <label className="custom-control-label" for="customCheck1">I agree with the Terms and Conditions</label>
                    </div>
                   </div>
                  </div>
                 </div>
                </div>
               </div>

               <ul className="list-inline wizard mb-0">
                <li className="previous list-inline-item">
                 <a href="javascript: void(0);" className="btn btn-secondary">Previous</a>
                </li>
                <li className="next list-inline-item float-right">
                 <a href="javascript: void(0);" className="btn btn-secondary">Next</a>
                </li>
               </ul>

              </div>
             </div>
            </form>

           </div>
          </div>
         </div>

         <div className="col-xl-6">
          <div className="card">
           <div className="card-body">

            <h4 className="header-title mb-3"> Button Wizard</h4>

            <div id="btnwizard">
             <ul className="nav nav-pills bg-light nav-justified form-wizard-header mb-4">
              <li className="nav-item">
               <a href="#tab12" data-toggle="tab" className="nav-link rounded-0 pt-2 pb-2">
                <i className="mdi mdi-account-circle mr-1"></i>
                <span className="d-none d-sm-inline">Account</span>
               </a>
              </li>
              <li className="nav-item">
               <a href="#tab22" data-toggle="tab" className="nav-link rounded-0 pt-2 pb-2">
                <i className="mdi mdi-face-profile mr-1"></i>
                <span className="d-none d-sm-inline">Profile</span>
               </a>
              </li>
              <li className="nav-item">
               <a href="#tab32" data-toggle="tab" className="nav-link rounded-0 pt-2 pb-2">
                <i className="mdi mdi-checkbox-marked-circle-outline mr-1"></i>
                <span className="d-none d-sm-inline">Finish</span>
               </a>
              </li>
             </ul>

             <div className="tab-content mb-0 border-0">

              <div className="tab-pane fade" id="tab12">
               <div className="row">
                <div className="col-12">
                 <div className="form-group row mb-3">
                  <label className="col-md-3 col-form-label" for="userName2">User name</label>
                  <div className="col-md-9">
                   <input type="text" className="form-control" id="userName2" name="userName2" value="Coderthemes" />
                  </div>
                 </div>
                 <div className="form-group row mb-3">
                  <label className="col-md-3 col-form-label" for="password2"> Password</label>
                  <div className="col-md-9">
                   <input type="password" id="password2" name="password2" className="form-control" value="123456789" />
                  </div>
                 </div>

                 <div className="form-group row mb-3">
                  <label className="col-md-3 col-form-label" for="confirm2">Re Password</label>
                  <div className="col-md-9">
                   <input type="password" id="confirm2" name="confirm2" className="form-control" value="123456789" />
                  </div>
                 </div>
                </div>
               </div>
              </div>

              <div className="tab-pane fade" id="tab22">
               <div className="row">
                <div className="col-12">
                 <div className="form-group row mb-3">
                  <label className="col-md-3 col-form-label" for="name2"> First name</label>
                  <div className="col-md-9">
                   <input type="text" id="name2" name="name2" className="form-control" value="Francis" />
                  </div>
                 </div>
                 <div className="form-group row mb-3">
                  <label className="col-md-3 col-form-label" for="surname2"> Last name</label>
                  <div className="col-md-9">
                   <input type="text" id="surname2" name="surname2" className="form-control" value="Brinkman" />
                  </div>
                 </div>

                 <div className="form-group row mb-3">
                  <label className="col-md-3 col-form-label" for="email2">Email</label>
                  <div className="col-md-9">
                   <input type="email" id="email2" name="email2" className="form-control" value="cory1979@hotmail.com" />
                  </div>
                 </div>
                </div>
               </div>
              </div>

              <div className="tab-pane" id="tab32">
               <div className="row">
                <div className="col-12">
                 <div className="text-center">
                  <h2 className="mt-0"><i className="mdi mdi-check-all"></i></h2>
                  <h3 className="mt-0">Thank you !</h3>

                  <p className="w-75 mb-2 mx-auto">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam
                                                                    mattis dictum aliquet.</p>

                  <div className="mb-3">
                   <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck2" />
                    <label className="custom-control-label" for="customCheck2">I agree with the Terms and Conditions</label>
                   </div>
                  </div>
                 </div>
                </div>
               </div>
              </div>

              <div className="float-right">
               <input type='button' className='btn btn-secondary button-next' name='next' value='Next' />
               <input type='button' className='btn btn-secondary button-last' name='last' value='Last' />
              </div>
              <div className="float-left">
               <input type='button' className='btn btn-secondary button-first' name='first' value='First' />
               <input type='button' className='btn btn-secondary button-previous' name='previous' value='Previous' />
              </div>

              <div className="clearfix"></div>

             </div>
            </div>

           </div>
          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-xl-6">
          <div className="card">
           <div className="card-body">

            <h4 className="header-title mb-3">Wizard With Progress Bar</h4>

            <form>
             <div id="progressbarwizard">

              <ul className="nav nav-pills bg-light nav-justified form-wizard-header mb-1">
               <li className="nav-item">
                <a href="#account-2" data-toggle="tab" className="nav-link rounded-0 pt-2 pb-2">
                 <i className="mdi mdi-account-circle mr-1"></i>
                 <span className="d-none d-sm-inline">Account</span>
                </a>
               </li>
               <li className="nav-item">
                <a href="#profile-tab-2" data-toggle="tab" className="nav-link rounded-0 pt-2 pb-2">
                 <i className="mdi mdi-face-profile mr-1"></i>
                 <span className="d-none d-sm-inline">Profile</span>
                </a>
               </li>
               <li className="nav-item">
                <a href="#finish-2" data-toggle="tab" className="nav-link rounded-0 pt-2 pb-2">
                 <i className="mdi mdi-checkbox-marked-circle-outline mr-1"></i>
                 <span className="d-none d-sm-inline">Finish</span>
                </a>
               </li>
              </ul>

              <div className="tab-content border-0 mb-0">

               <div id="bar" className="progress mb-3 mt-0" style={{ height: "7px" }}>
                <div className="bar progress-bar progress-bar-striped progress-bar-animated bg-success"></div>
               </div>

               <div className="tab-pane" id="account-2">
                <div className="row">
                 <div className="col-12">
                  <div className="form-group row mb-3">
                   <label className="col-md-3 col-form-label" for="userName1">User name</label>
                   <div className="col-md-9">
                    <input type="text" className="form-control" id="userName1" name="userName1" value="Coderthemes" />
                   </div>
                  </div>
                  <div className="form-group row mb-3">
                   <label className="col-md-3 col-form-label" for="password1"> Password</label>
                   <div className="col-md-9">
                    <input type="password" id="password1" name="password1" className="form-control" value="123456789" />
                   </div>
                  </div>

                  <div className="form-group row mb-3">
                   <label className="col-md-3 col-form-label" for="confirm1">Re Password</label>
                   <div className="col-md-9">
                    <input type="password" id="confirm1" name="confirm1" className="form-control" value="123456789" />
                   </div>
                  </div>
                 </div>
                </div>
               </div>

               <div className="tab-pane" id="profile-tab-2">
                <div className="row">
                 <div className="col-12">
                  <div className="form-group row mb-3">
                   <label className="col-md-3 col-form-label" for="name1"> First name</label>
                   <div className="col-md-9">
                    <input type="text" id="name1" name="name1" className="form-control" value="Francis" />
                   </div>
                  </div>
                  <div className="form-group row mb-3">
                   <label className="col-md-3 col-form-label" for="surname1"> Last name</label>
                   <div className="col-md-9">
                    <input type="text" id="surname1" name="surname1" className="form-control" value="Brinkman" />
                   </div>
                  </div>

                  <div className="form-group row mb-3">
                   <label className="col-md-3 col-form-label" for="email1">Email</label>
                   <div className="col-md-9">
                    <input type="email" id="email1" name="email1" className="form-control" value="cory1979@hotmail.com" />
                   </div>
                  </div>
                 </div>
                </div>
               </div>

               <div className="tab-pane" id="finish-2">
                <div className="row">
                 <div className="col-12">
                  <div className="text-center">
                   <h2 className="mt-0"><i className="mdi mdi-check-all"></i></h2>
                   <h3 className="mt-0">Thank you !</h3>

                   <p className="w-75 mb-2 mx-auto">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam
                                                                        mattis dictum aliquet.</p>

                   <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                     <input type="checkbox" className="custom-control-input" id="customCheck3" />
                     <label className="custom-control-label" for="customCheck3">I agree with the Terms and Conditions</label>
                    </div>
                   </div>
                  </div>
                 </div>
                </div>
               </div>

               <ul className="list-inline mb-0 wizard">
                <li className="previous list-inline-item">
                 <a href="javascript: void(0);" className="btn btn-secondary">Previous</a>
                </li>
                <li className="next list-inline-item float-right">
                 <a href="javascript: void(0);" className="btn btn-secondary">Next</a>
                </li>
               </ul>

              </div>
             </div>
            </form>

           </div>
          </div>
         </div>

         <div className="col-xl-6">
          <div className="card">
           <div className="card-body">

            <h4 className="header-title mb-3"> Wizard With Form Validation</h4>

            <div id="rootwizard">
             <ul className="nav nav-pills bg-light nav-justified form-wizard-header mb-3">
              <li className="nav-item" data-target-form="#accountForm">
               <a href="#first" data-toggle="tab" className="nav-link rounded-0 pt-2 pb-2">
                <i className="mdi mdi-account-circle mr-1"></i>
                <span className="d-none d-sm-inline">Account</span>
               </a>
              </li>
              <li className="nav-item" data-target-form="#profileForm">
               <a href="#second" data-toggle="tab" className="nav-link rounded-0 pt-2 pb-2">
                <i className="mdi mdi-face-profile mr-1"></i>
                <span className="d-none d-sm-inline">Profile</span>
               </a>
              </li>
              <li className="nav-item" data-target-form="#otherForm">
               <a href="#third" data-toggle="tab" className="nav-link rounded-0 pt-2 pb-2">
                <i className="mdi mdi-checkbox-marked-circle-outline mr-1"></i>
                <span className="d-none d-sm-inline">Finish</span>
               </a>
              </li>
             </ul>

             <div className="tab-content mb-0 border-0">

              <div className="tab-pane" id="first">
               <form id="accountForm" method="post" action="#" className="form-horizontal">
                <div className="row">
                 <div className="col-12">
                  <div className="form-group row mb-3">
                   <label className="col-md-3 col-form-label" for="userName3">User name</label>
                   <div className="col-md-9">
                    <input type="text" className="form-control" id="userName3" name="userName3" required />
                   </div>
                  </div>
                  <div className="form-group row mb-3">
                   <label className="col-md-3 col-form-label" for="password3"> Password</label>
                   <div className="col-md-9">
                    <input type="password" id="password3" name="password3" className="form-control" required />
                   </div>
                  </div>

                  <div className="form-group row mb-3">
                   <label className="col-md-3 col-form-label" for="confirm3">Re Password</label>
                   <div className="col-md-9">
                    <input type="password" id="confirm3" name="confirm3" className="form-control" required />
                   </div>
                  </div>
                 </div>
                </div>
               </form>
              </div>

              <div className="tab-pane fade" id="second">
               <form id="profileForm" method="post" action="#" className="form-horizontal">
                <div className="row">
                 <div className="col-12">
                  <div className="form-group row mb-3">
                   <label className="col-md-3 col-form-label" for="name3"> First name</label>
                   <div className="col-md-9">
                    <input type="text" id="name3" name="name3" className="form-control" required />
                   </div>
                  </div>
                  <div className="form-group row mb-3">
                   <label className="col-md-3 col-form-label" for="surname3"> Last name</label>
                   <div className="col-md-9">
                    <input type="text" id="surname3" name="surname3" className="form-control" required />
                   </div>
                  </div>

                  <div className="form-group row mb-3">
                   <label className="col-md-3 col-form-label" for="email3">Email</label>
                   <div className="col-md-9">
                    <input type="email" id="email3" name="email3" className="form-control" required />
                   </div>
                  </div>
                 </div>

                </div>

               </form>
              </div>

              <div className="tab-pane fade" id="third">
               <form id="otherForm" method="post" action="#" className="form-horizontal">
                <div className="row">
                 <div className="col-12">
                  <div className="text-center">
                   <h2 className="mt-0">
                    <i className="mdi mdi-check-all"></i>
                   </h2>
                   <h3 className="mt-0">Thank you !</h3>

                   <p className="w-75 mb-2 mx-auto">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis
                                                                        dui. Aliquam mattis dictum aliquet.</p>

                   <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                     <input type="checkbox" className="custom-control-input" id="customCheck4" required />
                     <label className="custom-control-label" for="customCheck4">I agree with the Terms and Conditions</label>
                    </div>
                   </div>
                  </div>
                 </div>

                </div>

               </form>
              </div>

              <ul className="list-inline wizard mb-0">
               <li className="previous list-inline-item"><a href="javascript: void(0);" className="btn btn-secondary">Previous</a>
               </li>
               <li className="next list-inline-item float-right"><a href="javascript: void(0);" className="btn btn-secondary">Next</a></li>
              </ul>

             </div>
            </div>

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
