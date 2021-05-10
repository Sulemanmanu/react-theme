import React, { Component } from 'react'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'
import Footer from '../../../common/home/footer'
import RightSide from '../../../common/home/rightSide'

export default class Element extends Component {
 render() {
  return (
   <div>
    <div id="wrapper">
     <Topbar><li>
      <h4 class="page-title-main">Form Elements</h4>
     </li>
     </Topbar>
     <Sidebar />

     <div className="content-page">
      <div className="content">

       {/* <!-- Start Content--> */}
       <div className="container-fluid">

        <div className="row">
         <div className="col-12">
          <div className="card-box">
           <h4 className="header-title">Input Types</h4>
           <p className="sub-header">
            Most common form control, text-based input fields. Includes support for all HTML5 types: <code>text</code>, <code>password</code>, <code>datetime</code>, <code>datetime-local</code>, <code>date</code>, <code>month</code>, <code>time</code>, <code>week</code>, <code>number</code>, <code>email</code>, <code>url</code>, <code>search</code>, <code>tel</code>, and <code>color</code>.
                                    </p>

           <div className="row">
            <div className="col-12">
             <div className="p-2">
              <form className="form-horizontal" role="form">
               <div className="form-group row">
                <label className="col-md-2 col-form-label" for="simpleinput">Text</label>
                <div className="col-md-10">
                 <input type="text" id="simpleinput" className="form-control" value="Some text value..." />
                </div>
               </div>
               <div className="form-group row">
                <label className="col-md-2 col-form-label" for="example-email">Email</label>
                <div className="col-md-10">
                 <input type="email" id="example-email" name="example-email" className="form-control" placeholder="Email" />
                </div>
               </div>
               <div className="form-group row">
                <label className="col-md-2 col-form-label" for="example-password">Password</label>
                <div className="col-md-10">
                 <input type="password" id="example-password" className="form-control" value="password" />
                </div>
               </div>

               <div className="form-group row">
                <label className="col-md-2 col-form-label" for="example-placeholder">Placeholder</label>
                <div className="col-md-10">
                 <input type="text" id="example-placeholder" className="form-control" placeholder="placeholder" />
                </div>
               </div>
               <div className="form-group row">
                <label className="col-md-2 col-form-label" for="example-textarea">Text area</label>
                <div className="col-md-10">
                 <textarea className="form-control" rows="5" id="example-textarea"></textarea>
                </div>
               </div>

               <div className="form-group row">
                <label className="col-md-2 col-form-label">Readonly</label>
                <div className="col-md-10">
                 <input type="text" className="form-control" readonly="" value="Readonly value" />
                </div>
               </div>
               <div className="form-group row">
                <label className="col-md-2 col-form-label">Disabled</label>
                <div className="col-md-10">
                 <input type="text" className="form-control" disabled="" value="Disabled value" />
                </div>
               </div>


               <div className="form-group row">
                <label className="col-md-2 col-form-label" for="example-static">Static control</label>
                <div className="col-md-10">
                 <input type="text" readonly className="form-control-plaintext" id="example-static" value="email@example.com" />
                </div>
               </div>
               <div className="form-group row">
                <label className="col-md-2 col-form-label" for="example-helping">Helping text</label>
                <div className="col-md-10">
                 <input type="text" id="example-helping" className="form-control" placeholder="Helping text" />
                 <span className="help-block"><small>A block of help text that breaks onto a new line and may extend beyond one line.</small></span>
                </div>
               </div>

               <div className="form-group row">
                <label className="col-md-2 col-form-label">Input Select</label>
                <div className="col-md-10">
                 <select className="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                 </select>
                 <h6>Multiple select</h6>
                 <select multiple className="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                 </select>
                </div>
               </div>

               <div className="form-group row">
                <label className="col-md-2 col-form-label" for="example-fileinput">Default file input</label>
                <div className="col-md-10">
                 <input type="file" className="form-control" id="example-fileinput" />
                </div>
               </div>

               <div className="form-group row">
                <label className="col-md-2 col-form-label" for="example-date">Date</label>
                <div className="col-md-10">
                 <input className="form-control" id="example-date" type="date" name="date" />
                </div>
               </div>

               <div className="form-group row">
                <label className="col-md-2 col-form-label" for="example-month">Month</label>
                <div className="col-md-10">
                 <input className="form-control" id="example-month" type="month" name="month" />
                </div>
               </div>

               <div className="form-group row">
                <label className="col-md-2 col-form-label" for="example-time">Time</label>
                <div className="col-md-10">
                 <input className="form-control" type="time" name="time" id="example-time" />
                </div>
               </div>

               <div className="form-group row">
                <label className="col-md-2 col-form-label" for="example-week">Week</label>
                <div className="col-md-10">
                 <input className="form-control" type="week" name="week" id="example-week" />
                </div>
               </div>

               <div className="form-group row">
                <label className="col-md-2 col-form-label" for="example-number">Number</label>
                <div className="col-md-10">
                 <input className="form-control" type="number" name="number" id="example-number" />
                </div>
               </div>

               <div className="form-group row">
                <label className="col-md-2 col-form-label">URL</label>
                <div className="col-md-10">
                 <input className="form-control" type="url" name="url" />
                </div>
               </div>

               <div className="form-group row">
                <label className="col-md-2 col-form-label">Search</label>
                <div className="col-md-10">
                 <input className="form-control" type="search" name="search" />
                </div>
               </div>

               <div className="form-group row">
                <label className="col-md-2 col-form-label">Tel</label>
                <div className="col-md-10">
                 <input className="form-control" type="tel" name="tel" />
                </div>
               </div>

               <div className="form-group row">
                <label className="col-md-2 col-form-label" for="example-color">Color</label>
                <div className="col-md-10">
                 <input className="form-control" type="color" name="color" value="#71b6f9" id="example-color" />
                </div>
               </div>

               <div className="form-group row mb-0">
                <label className="col-md-2 col-form-label" for="example-range">Range</label>
                <div className="col-md-10 align-self-center">
                 <input className="custom-range" type="range" name="range" min="0" max="10" id="example-range" />
                </div>
               </div>

              </form>
             </div>
            </div>

           </div>


          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-12">
          <div className="card-box">
           <div className="row">
            <div className="col-md-6">
             <h4 className="mt-0 header-title">Select menu</h4>
             <p className="text-muted font-14">
              Custom <code className="highlighter-rouge">&lt;select&gt;</code> menus need only a custom className, <code className="highlighter-rouge">.custom-select</code> to trigger the custom styles.
                                            </p>

             <select className="custom-select mt-3">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
             </select>

             <h4 className="header-title mt-5">Switches</h4>
             <p className="text-muted">
              A switch has the markup of a custom checkbox but uses the <code>.custom-switch</code> className to render a toggle switch. Switches also support the <code>disabled</code> attribute.
                                            </p>

             <div className="custom-control custom-switch">
              <input type="checkbox" className="custom-control-input" id="customSwitch1" />
              <label className="custom-control-label" for="customSwitch1">Toggle this switch element</label>
             </div>
             <div className="custom-control custom-switch mt-1">
              <input type="checkbox" className="custom-control-input" disabled="" id="customSwitch2" />
              <label className="custom-control-label" for="customSwitch2">Disabled switch element</label>
             </div>
            </div>

            <div className="col-md-6">
             <h4 className="header-title">Checkboxes and radios</h4>
             <div className="mt-3">
              <div className="custom-control custom-checkbox">
               <input type="checkbox" className="custom-control-input" id="customCheck1" />
               <label className="custom-control-label" for="customCheck1">Check this custom checkbox</label>
              </div>
              <div className="custom-control custom-checkbox">
               <input type="checkbox" className="custom-control-input" id="customCheck2" />
               <label className="custom-control-label" for="customCheck2">Check this custom checkbox</label>
              </div>
             </div>
             <div className="mt-3">
              <div className="custom-control custom-radio">
               <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
               <label className="custom-control-label" for="customRadio1">Toggle this custom radio</label>
              </div>
              <div className="custom-control custom-radio">
               <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
               <label className="custom-control-label" for="customRadio2">Or toggle this other custom radio</label>
              </div>
             </div>
            </div>
           </div>

          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-12">
          <div className="card-box">
           <h4 className="m-t-0 header-title">Input Sizes & Group</h4>
           <p className="text-muted mb-3 font-14">
            Set heights using classNamees like <code>.input-lg</code>, and set widths using grid column classNamees like <code>.col-lg-*</code>.
                                    </p>

           <div className="p-2">
            <form role="form" className="form-horizontal">
             <div className="form-group row">
              <label className="col-md-2 col-form-label" for="example-input-small">Small</label>
              <div className="col-md-10">
               <input type="text" id="example-input-small" name="example-input-small" className="form-control form-control-sm" placeholder=".input-sm" />
              </div>
             </div>

             <div className="form-group row">
              <label className="col-md-2 col-form-label" for="example-input-normal">Normal</label>
              <div className="col-md-10">
               <input type="text" id="example-input-normal" name="example-input-normal" className="form-control" placeholder="Normal" />
              </div>
             </div>

             <div className="form-group row">
              <label className="col-md-2 col-form-label" for="example-input-large">Large</label>
              <div className="col-md-10">
               <input type="text" id="example-input-large" name="example-input-large" className="form-control form-control-lg" placeholder=".input-lg" />
              </div>
             </div>

             <div className="form-group row">
              <label className="col-md-2 col-form-label">Grid Sizes</label>
              <div className="col-md-10">
               <input type="text" className="form-control" placeholder=".col-sm-4" />
              </div>
             </div>

             <div className="form-group row">
              <label className="col-md-2 col-form-label">Static</label>
              <div className="col-md-10">
               <div className="input-group">
                <div className="input-group-prepend">
                 <span className="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
               </div>
              </div>
             </div>

             <div className="form-group row">
              <label className="col-md-2 col-form-label">Dropdowns</label>
              <div className="col-md-10">
               <div className="input-group mb-3">
                <div className="input-group-prepend">
                 <button className="btn btn-primary waves-effect waves-light dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown <i className="mdi mdi-chevron-down"></i>
                 </button>
                 <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <div role="separator" className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Separated link</a>
                 </div>
                </div>
                <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" />
               </div>

              </div>
             </div>

             <div className="form-group row mb-0">
              <label className="col-md-2 col-form-label">Buttons</label>
              <div className="col-md-10">
               <div className="input-group">
                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                 <button className="btn btn-dark waves-effect waves-light" type="button">Button</button>
                </div>
               </div>
              </div>
             </div>


            </form>
           </div>
          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-md-6">
          <div className="card-box">
           <h4 className="mt-0 mb-3 header-title">Basic Example</h4>

           <form role="form">
            <div className="form-group">
             <label for="exampleInputEmail1">Email address</label>
             <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
             <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
             <label for="exampleInputPassword1">Password</label>
             <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group">
             <div className="checkbox">
              <input id="checkbox0" type="checkbox" />
              <label for="checkbox0">
               Check me out
                                                </label>
             </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
           </form>
          </div>
         </div>


         <div className="col-md-6">
          <div className="card-box">
           <h4 className="mt-0 mb-3 header-title">Horizontal form</h4>

           <form className="form-horizontal" role="form">
            <div className="form-group row">
             <label for="inputEmail3" className="col-sm-3 col-form-label">Email</label>
             <div className="col-sm-9">
              <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
             </div>
            </div>
            <div className="form-group row">
             <label for="inputPassword3" className="col-sm-3 col-form-label">Password</label>
             <div className="col-sm-9">
              <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
             </div>
            </div>
            <div className="form-group row">
             <label for="inputPassword5" className="col-sm-3 col-form-label">Re Password</label>
             <div className="col-sm-9">
              <input type="password" className="form-control" id="inputPassword5" placeholder="Retype Password" />
             </div>
            </div>
            <div className="form-group row justify-content-end">
             <div className=" col-sm-9">
              <div className="checkbox checkbox-primary">
               <input id="checkbox2" type="checkbox" />
               <label for="checkbox2">
                Check me out !
                                                    </label>
              </div>
             </div>
            </div>
            <div className="form-group mb-0 justify-content-end row">
             <div className="col-sm-9">
              <button type="submit" className="btn btn-info waves-effect waves-light">Sign in</button>
             </div>
            </div>
           </form>
          </div>
         </div>

        </div>



        {/* <!-- Inline Form --> */}
        <div className="row">
         <div className="col-md-12">
          <div className="card-box">
           <h4 className="mt-0 header-title">Inline Form</h4>
           <p className="text-muted mb-3 font-13">
            Add <code>.form-inline</code> to your form (which doesn't have to be a <code>&lt;form&gt;</code>)
                                        for left-aligned and inline-block controls. <strong>This only applies to forms within viewports
                                        that are at least 768px wide.</strong>
           </p>
           <div className="row m-b-30">
            <div className="col-sm-12">
             <form className="form-inline">
              <div className="form-group">
               <label for="staticEmail2" className="sr-only">Email</label>
               <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value="email@example.com" />
              </div>
              <div className="form-group mx-sm-3">
               <label for="inputPassword2" className="sr-only">Password</label>
               <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-primary">Confirm identity</button>
             </form>
            </div>

           </div>

           <div className="row">

            <div className="col-sm-12">
             <h6 className="font-13 mt-4">Auto-sizing</h6>

             <form>
              <div className="form-row align-items-center">
               <div className="col-auto">
                <div className="mt-2">
                 <label className="sr-only" for="inlineFormInput">Name</label>
                 <input type="text" className="form-control" id="inlineFormInput" placeholder="Jane Doe" />
                </div>
               </div>
               <div className="col-auto">
                <div className="mt-2">
                 <label className="sr-only" for="inlineFormInputGroup">Username</label>
                 <div className="input-group">
                  <div className="input-group-prepend">
                   <div className="input-group-text">@</div>
                  </div>
                  <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username" />
                 </div>
                </div>
               </div>
               <div className="col-auto">
                <div className="mt-2">
                 <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="autoSizingCheck" />
                  <label className="custom-control-label" for="autoSizingCheck">Remember me</label>
                 </div>
                </div>
               </div>
               <div className="col-auto">
                <div className="mt-2">
                 <button type="submit" className="btn btn-primary">Submit</button>
                </div>
               </div>
              </div>
             </form>
            </div>

           </div>
          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-md-12">
          <div className="card-box">
           <h4 className="m-t-0 header-title">Form row</h4>
           <p className="text-muted mb-3 font-13">
            You may also swap <code className="highlighter-rouge">.row</code> for <code className="highlighter-rouge">.form-row</code>, a variation of our standard grid row that overrides the default column gutters for tighter and more compact layouts.
                                    </p>

           <form>
            <div className="form-row">
             <div className="form-group col-md-6">
              <label for="inputEmail4" className="col-form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
             </div>
             <div className="form-group col-md-6">
              <label for="inputPassword4" className="col-form-label">Password</label>
              <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
             </div>
            </div>
            <div className="form-group">
             <label for="inputAddress" className="col-form-label">Address</label>
             <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="form-group">
             <label for="inputAddress2" className="col-form-label">Address 2</label>
             <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="form-row">
             <div className="form-group col-md-6">
              <label for="inputCity" className="col-form-label">City</label>
              <input type="text" className="form-control" id="inputCity" />
             </div>
             <div className="form-group col-md-4">
              <label for="inputState" className="col-form-label">State</label>
              <select id="inputState" className="form-control">
               <option>Choose</option>
               <option>Option 1</option>
               <option>Option 2</option>
               <option>Option 3</option>

              </select>
             </div>
             <div className="form-group col-md-2">
              <label for="inputZip" className="col-form-label">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
             </div>
            </div>
            <div className="form-group">
             <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="checkmeout" />
              <label className="custom-control-label" for="checkmeout">Check me out</label>
             </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
           </form>
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
