import React, { Component } from 'react'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'
import Footer from '../../../common/home/footer'
import RightSide from '../../../common/home/rightSide'


export default class Validation extends Component {
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

           <h4 className="header-title mt-0 mb-3">Basic Form</h4>

           <form action="#" data-parsley-validate novalidate>
            <div className="form-group">
             <label for="userName">User Name*</label>
             <input type="text" name="nick" parsley-trigger="change" required
              placeholder="Enter user name" className="form-control" id="userName" />
            </div>
            <div className="form-group">
             <label for="emailAddress">Email address*</label>
             <input type="email" name="email" parsley-trigger="change" required
              placeholder="Enter email" className="form-control" id="emailAddress" />
            </div>
            <div className="form-group">
             <label for="pass1">Password*</label>
             <input id="pass1" type="password" placeholder="Password" required
              className="form-control" />
            </div>
            <div className="form-group">
             <label for="passWord2">Confirm Password *</label>
             <input data-parsley-equalto="#pass1" type="password" required
              placeholder="Password" className="form-control" id="passWord2" />
            </div>
            <div className="form-group">
             <div className="checkbox">
              <input id="remember-1" type="checkbox" />
              <label for="remember-1"> Remember me </label>
             </div>
            </div>

            <div className="form-group text-right mb-0">
             <button className="btn btn-primary waves-effect waves-light mr-1" type="submit">
              Submit
                                            </button>
             <button type="reset" className="btn btn-secondary waves-effect waves-light">
              Cancel
                                            </button>
            </div>

           </form>
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

           <h4 className="header-title mt-0 mb-3">Horizontal Form</h4>

           <form className="form-horizontal" role="form" data-parsley-validate novalidate>
            <div className="form-group row">
             <label for="inputEmail3" className="col-sm-4 col-form-label">Email*</label>
             <div className="col-sm-7">
              <input type="email" required parsley-type="email" className="form-control"
               id="inputEmail3" placeholder="Email" />
             </div>
            </div>
            <div className="form-group row">
             <label for="hori-pass1" className="col-sm-4 col-form-label">Password*</label>
             <div className="col-sm-7">
              <input id="hori-pass1" type="password" placeholder="Password" required
               className="form-control" />
             </div>
            </div>
            <div className="form-group row">
             <label for="hori-pass2" className="col-sm-4 col-form-label">Confirm Password
                                                *</label>
             <div className="col-sm-7">
              <input data-parsley-equalto="#hori-pass1" type="password" required
               placeholder="Password" className="form-control" id="hori-pass2" />
             </div>
            </div>

            <div className="form-group row">
             <label for="webSite" className="col-sm-4 col-form-label">Web Site*</label>
             <div className="col-sm-7">
              <input type="url" required parsley-type="url" className="form-control"
               id="webSite" placeholder="URL" />
             </div>
            </div>
            <div className="form-group row">
             <div className="offset-sm-4 col-sm-8">
              <div className="checkbox">
               <input id="remember-2" type="checkbox" />
               <label for="remember-2"> Remember me </label>
              </div>
             </div>
            </div>
            <div className="form-group row">
             <div className="offset-sm-4 col-sm-8">
              <button type="submit" className="btn btn-primary waves-effect waves-light mr-1">
               Registrer
                                                </button>
              <button type="reset"
               className="btn btn-secondary waves-effect waves-light">
               Cancel
                                                </button>
             </div>
            </div>
           </form>
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

           <h4 className="header-title mt-0 mb-3">Fields validation</h4>

           <div className="row">
            <div className="col-xl-6">
             <h5>Validation type</h5>
             <p className="text-muted font-13 mb-3">
              Your awesome text goes here.
                                            </p>

             <form className="form-horizontal group-border-dashed" action="#">
              <div className="form-group row">
               <label className="col-sm-3 col-form-label">Required</label>
               <div className="col-sm-6">
                <input type="text" className="form-control" required
                 placeholder="Type something" />
               </div>
              </div>


              <div className="form-group row">
               <label className="col-sm-3 col-form-label">Equal To</label>
               <div className="col-sm-3">
                <input type="password" id="pass2" className="form-control" required
                 placeholder="Password" />
               </div>
               <div className="col-sm-3">
                <input type="password" className="form-control" required
                 data-parsley-equalto="#pass2"
                 placeholder="Re-Type Password" />
               </div>
              </div>

              <div className="form-group row">
               <label className="col-sm-3 col-form-label">E-Mail</label>
               <div className="col-sm-6">
                <input type="email" className="form-control" required
                 parsley-type="email" placeholder="Enter a valid e-mail" />
               </div>
              </div>
              <div className="form-group row">
               <label className="col-sm-3 col-form-label">URL</label>
               <div className="col-sm-6">
                <input parsley-type="url" type="url" className="form-control"
                 required placeholder="URL" />
               </div>
              </div>
              <div className="form-group row">
               <label className="col-sm-3 col-form-label">Digits</label>
               <div className="col-sm-6">
                <input data-parsley-type="digits" type="text"
                 className="form-control" required
                 placeholder="Enter only digits" />
               </div>
              </div>
              <div className="form-group row">
               <label className="col-sm-3 col-form-label">Number</label>
               <div className="col-sm-6">
                <input data-parsley-type="number" type="text"
                 className="form-control" required
                 placeholder="Enter only numbers" />
               </div>
              </div>
              <div className="form-group row">
               <label className="col-sm-3 col-form-label">Alphanumeric</label>
               <div className="col-sm-6">
                <input data-parsley-type="alphanum" type="text"
                 className="form-control" required
                 placeholder="Enter alphanumeric value" />
               </div>
              </div>
              <div className="form-group row">
               <label className="col-sm-3 col-form-label">Textarea</label>
               <div className="col-sm-6">
                <textarea required className="form-control"></textarea>
               </div>
              </div>
              <div className="form-group row">
               <div className="offset-sm-3 col-sm-9 mt-2">
                <button type="submit" className="btn btn-primary waves-effect waves-light mr-1">
                 Submit
                                                        </button>
                <button type="reset" className="btn btn-secondary waves-effect">
                 Cancel
                                                        </button>
               </div>
              </div>
             </form>
            </div>

            <div className="col-xl-6">
             <h5>Range validation</h5>
             <p className="text-muted font-13 mb-3">
              Your awesome text goes here.
                                            </p>

             <form className="form-horizontal group-border-dashed" action="#">

              <div className="form-group row">
               <label className="col-sm-3 col-form-label">Min Length</label>
               <div className="col-sm-6">
                <input type="text" className="form-control" required
                 data-parsley-minlength="6" placeholder="Min 6 chars." />
               </div>
              </div>
              <div className="form-group row">
               <label className="col-sm-3 col-form-label">Max Length</label>
               <div className="col-sm-6">
                <input type="text" className="form-control" required
                 data-parsley-maxlength="6" placeholder="Max 6 chars." />
               </div>
              </div>
              <div className="form-group row">
               <label className="col-sm-3 col-form-label">Range Length</label>
               <div className="col-sm-6">
                <input type="text" className="form-control" required
                 data-parsley-length="[5,10]"
                 placeholder="Text between 5 - 10 chars length" />
               </div>
              </div>
              <div className="form-group row">
               <label className="col-sm-3 col-form-label">Min Value</label>
               <div className="col-sm-6">
                <input type="text" className="form-control" required
                 data-parsley-min="6" placeholder="Min value is 6" />
               </div>
              </div>
              <div className="form-group row">
               <label className="col-sm-3 col-form-label">Max Value</label>
               <div className="col-sm-6">
                <input type="text" className="form-control" required
                 data-parsley-max="6" placeholder="Max value is 6" />
               </div>
              </div>
              <div className="form-group row">
               <label className="col-sm-3 col-form-label">Range Value</label>
               <div className="col-sm-6">
                <input className="form-control" required type="text range" min="6"
                 max="100" placeholder="Number between 6 - 100" />
               </div>
              </div>
              <div className="form-group row">
               <label className="col-sm-3 col-form-label">Regular Exp</label>
               <div className="col-sm-6">
                <input type="text" className="form-control" required
                 data-parsley-pattern="#[A-Fa-f0-9]{6}"
                 placeholder="Hex. Color" />
               </div>
              </div>

              <div className="form-group row">
               <label className="col-sm-3 col-form-label">Min check</label>
               <div className="col-sm-6">
                <div className="checkbox checkbox-pink">
                 <input id="checkbox1" type="checkbox"
                  data-parsley-multiple="groups"
                  data-parsley-mincheck="2" />
                 <label for="checkbox1"> And this </label>
                </div>
                <div className="checkbox checkbox-pink">
                 <input id="checkbox2" type="checkbox"
                  data-parsley-multiple="groups"
                  data-parsley-mincheck="2" />
                 <label for="checkbox2"> Can't check this </label>
                </div>
                <div className="checkbox checkbox-pink">
                 <input id="checkbox3" type="checkbox"
                  data-parsley-multiple="groups"
                  data-parsley-mincheck="2" required />
                 <label for="checkbox3"> This too </label>
                </div>
               </div>
              </div>
              <div className="form-group row">
               <label className="col-sm-3 col-form-label">Max check</label>
               <div className="col-sm-6">
                <div className="checkbox checkbox-pink">
                 <input id="checkbox4" type="checkbox"
                  data-parsley-multiple="group1" />
                 <label for="checkbox4"> And this </label>
                </div>
                <div className="checkbox checkbox-pink">
                 <input id="checkbox5" type="checkbox"
                  data-parsley-multiple="group1" />
                 <label for="checkbox5"> Can't check this </label>
                </div>
                <div className="checkbox checkbox-pink">
                 <input id="checkbox6" type="checkbox"
                  data-parsley-multiple="group1"
                  data-parsley-maxcheck="1" />
                 <label for="checkbox6"> This too </label>
                </div>

               </div>
              </div>

              <div className="form-group row mb-0">
               <div className="offset-sm-3 col-sm-9">
                <button type="submit" className="btn btn-primary waves-effect waves-light mr-1">
                 Submit
                                                        </button>
                <button type="reset" className="btn btn-secondary waves-effect m-l-5">
                 Cancel
                                                        </button>
               </div>
              </div>
             </form>
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
