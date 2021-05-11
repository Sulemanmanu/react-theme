import React, { Component } from 'react'
import RightSide from '../../../common/home/rightSide'
import Footer from '../../../common/home/footer'
import Sidebar from '../../../common/home/sidebar'
import Topbar from '../../../common/home/topBar'

export default class Checkbox extends Component {
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
         <div className="col-lg-4">
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

           <h4 className="header-title mt-0">Basic</h4>

           <p className="text-muted font-13">
            Supports bootstrap brand colors: <code>.checkbox-primary</code>, <code>.checkbox-info</code> etc.
                                    </p>

           <div className="checkbox">
            <input id="checkbox0" type="checkbox" />
            <label for="checkbox0">
             Default
                                        </label>
           </div>
           <div className="checkbox checkbox-primary">
            <input id="checkbox2" type="checkbox" defaultChecked />
            <label for="checkbox2">
             Primary
                                        </label>
           </div>
           <div className="checkbox checkbox-success">
            <input id="checkbox3" type="checkbox" />
            <label for="checkbox3">
             Success
                                        </label>
           </div>
           <div className="checkbox checkbox-info">
            <input id="checkbox4" type="checkbox" />
            <label for="checkbox4">
             Info
                                        </label>
           </div>
           <div className="checkbox checkbox-warning">
            <input id="checkbox5" type="checkbox" defaultChecked />
            <label for="checkbox5">
             Warning
                                        </label>
           </div>
           <div className="checkbox checkbox-danger">
            <input id="checkbox6" type="checkbox" defaultChecked />
            <label for="checkbox6">
             Danger
                                        </label>
           </div>
           <div className="checkbox checkbox-purple">
            <input id="checkbox6a" type="checkbox" />
            <label for="checkbox6a">
             Purple
                                        </label>
           </div>

           <div className="checkbox checkbox-pink">
            <input id="checkbox6b" type="checkbox" defaultChecked />
            <label for="checkbox6b">
             Pink
                                        </label>
           </div>

           <div className="checkbox checkbox-dark">
            <input id="checkbox6c" type="checkbox" />
            <label for="checkbox6c">
             Dark
                                        </label>
           </div>


           <p className="text-muted font-13 mt-2">Checkboxes without label text <code>.checkbox-single</code></p>
           <div className="checkbox checkbox-single">
            <input type="checkbox" id="singleCheckbox1" value="option1" aria-label="Single checkbox One" />
            <label></label>
           </div>
           <div className="checkbox checkbox-primary checkbox-single">
            <input type="checkbox" id="singleCheckbox2" value="option2" defaultChecked aria-label="Single checkbox Two" />
            <label></label>
           </div>


           <p className="text-muted font-13 mt-2">Inline checkboxes</p>
           <div className="checkbox form-check-inline">
            <input type="checkbox" id="inlineCheckbox1" value="option1" />
            <label for="inlineCheckbox1"> Inline One </label>
           </div>
           <div className="checkbox checkbox-success form-check-inline">
            <input type="checkbox" id="inlineCheckbox2" value="option1" defaultChecked />
            <label for="inlineCheckbox2"> Inline Two </label>
           </div>
           <div className="checkbox checkbox-pink form-check-inline">
            <input type="checkbox" id="inlineCheckbox3" value="option1" />
            <label for="inlineCheckbox3"> Inline Three </label>
           </div>
          </div>
         </div>

         <div className="col-lg-4">
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

           <h4 className="header-title mt-0">Circled</h4>

           <p className="text-muted font-13">
            <code>.checkbox-circle</code> for roundness.
                                    </p>

           <div className="checkbox checkbox-circle">
            <input id="checkbox7" type="checkbox" />
            <label for="checkbox7">
             Simply Rounded
                                        </label>
           </div>
           <div className="checkbox checkbox-info checkbox-circle">
            <input id="checkbox8" type="checkbox" defaultChecked />
            <label for="checkbox8">
             Info
                                        </label>
           </div>
           <div className="checkbox checkbox-primary checkbox-circle">
            <input id="checkbox-9" type="checkbox" />
            <label for="checkbox-9">
             Primary
                                        </label>
           </div>
           <div className="checkbox checkbox-success checkbox-circle">
            <input id="checkbox-10" type="checkbox" defaultChecked />
            <label for="checkbox-10">
             Success
                                        </label>
           </div>
           <div className="checkbox checkbox-warning checkbox-circle">
            <input id="checkbox-11" type="checkbox" />
            <label for="checkbox-11">
             Warning
                                        </label>
           </div>
           <div className="checkbox checkbox-danger checkbox-circle">
            <input id="checkbox-12" type="checkbox" defaultChecked />
            <label for="checkbox-12">
             Danger
                                        </label>
           </div>

           <div className="checkbox checkbox-purple checkbox-circle">
            <input id="checkbox-13" type="checkbox" defaultChecked />
            <label for="checkbox-13">
             Purple
                                        </label>
           </div>

           <div className="checkbox checkbox-pink checkbox-circle">
            <input id="checkbox-14" type="checkbox" />
            <label for="checkbox-14">
             Pink
                                        </label>
           </div>

           <div className="checkbox checkbox-dark checkbox-circle">
            <input id="checkbox-15" type="checkbox" defaultChecked />
            <label for="checkbox-15">
             Dark
                                        </label>
           </div>


           <p className="text-muted font-13 mt-2">Checkboxes without label text <code>.checkbox-single</code></p>
           <div className="checkbox checkbox-single checkbox-circle">
            <input type="checkbox" id="singleCheckbox11" value="option1" aria-label="Single checkbox One" />
            <label></label>
           </div>
           <div className="checkbox checkbox-primary checkbox-single checkbox-circle">
            <input type="checkbox" id="singleCheckbox21" value="option2" defaultChecked aria-label="Single checkbox Two" />
            <label></label>
           </div>


           <p className="text-muted font-13 mt-2">Inline checkboxes</p>
           <div className="checkbox form-check-inline checkbox-circle">
            <input type="checkbox" id="inlineCheckbox11" value="option1" />
            <label for="inlineCheckbox11"> Inline One </label>
           </div>
           <div className="checkbox checkbox-success form-check-inline checkbox-circle">
            <input type="checkbox" id="inlineCheckbox21" value="option1" defaultChecked />
            <label for="inlineCheckbox21"> Inline Two </label>
           </div>
           <div className="checkbox checkbox-pink form-check-inline checkbox-circle">
            <input type="checkbox" id="inlineCheckbox31" value="option1" />
            <label for="inlineCheckbox31"> Inline Three </label>
           </div>

          </div>
         </div>

         <div className="col-lg-4">
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

           <h4 className="header-title mt-0">Disabled</h4>

           <p className="text-muted font-13">
            Disabled state also supported.
                                    </p>

           <div className="checkbox">
            <input id="checkbox9" type="checkbox" disabled />
            <label for="checkbox9">
             Can't check this
                                        </label>
           </div>
           <div className="checkbox checkbox-custom">
            <input id="checkbox10" type="checkbox" disabled defaultChecked />
            <label for="checkbox10">
             This too
                                        </label>
           </div>
           <div className="checkbox checkbox-warning checkbox-circle">
            <input id="checkbox110" type="checkbox" disabled defaultChecked />
            <label for="checkbox110">
             And this
                                        </label>
           </div>
           <div className="checkbox checkbox-info">
            <input id="checkbox12" type="checkbox" disabled defaultChecked />
            <label for="checkbox12">
             Can't check this
                                        </label>
           </div>
           <div className="checkbox checkbox-pink">
            <input id="checkbox13" type="checkbox" disabled defaultChecked />
            <label for="checkbox13">
             This too
                                        </label>
           </div>
           <div className="checkbox checkbox-purple checkbox-circle">
            <input id="checkbox14" type="checkbox" disabled defaultChecked />
            <label for="checkbox14">
             And this
                                        </label>
           </div>

          </div>
         </div>

        </div>


        <div className="row">
         <div className="col-lg-4">
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

           <h4 className="header-title mt-0">Basic</h4>

           <p className="text-muted font-13">
            Supports bootstrap brand colors: <code>.radio-primary</code>, <code>.radio-danger</code> etc.
                                    </p>

           <div className="row">
            <div className="col-sm-6">
             <div className="radio">
              <input type="radio" name="radio" id="radio1" value="option1" defaultChecked />
              <label for="radio1">
               Default
                                                </label>
             </div>
             <div className="radio radio-primary">
              <input type="radio" name="radio" id="radio3" value="option3" />
              <label for="radio3">
               Primary
                                                </label>
             </div>
             <div className="radio radio-success">
              <input type="radio" name="radio" id="radio4" value="option4" />
              <label for="radio4">
               Success
                                                </label>
             </div>
             <div className="radio radio-info">
              <input type="radio" name="radio" id="radio5" value="option5" />
              <label for="radio5">
               Info
                                                </label>
             </div>
             <div className="radio radio-danger">
              <input type="radio" name="radio" id="radio6" value="option6" />
              <label for="radio6">
               Danger
                                                </label>
             </div>
             <div className="radio radio-warning">
              <input type="radio" name="radio" id="radio7" value="option7" />
              <label for="radio7">
               Warning
                                                </label>
             </div>
             <div className="radio radio-purple">
              <input type="radio" name="radio" id="radio8" value="option8" />
              <label for="radio8">
               Purple
                                                </label>
             </div>
             <div className="radio radio-pink">
              <input type="radio" name="radio" id="radio9" value="option9" />
              <label for="radio9">
               Pink
                                                </label>
             </div>

            </div>

            <div className="col-sm-6">
             <div className="radio">
              <input type="radio" name="radio1" id="radio11" value="option1" defaultChecked />
              <label for="radio11">
               Default
                                                </label>
             </div>
             <div className="radio radio-primary">
              <input type="radio" name="radio3" id="radio13" value="option3" />
              <label for="radio13">
               Primary
                                                </label>
             </div>
             <div className="radio radio-success">
              <input type="radio" name="radio4" id="radio14" value="option4" defaultChecked />
              <label for="radio14">
               Success
                                                </label>
             </div>
             <div className="radio radio-info">
              <input type="radio" name="radio5" id="radio15" value="option5" defaultChecked />
              <label for="radio15">
               Info
                                                </label>
             </div>
             <div className="radio radio-danger">
              <input type="radio" name="radio6" id="radio16" value="option6" />
              <label for="radio16">
               Danger
                                                </label>
             </div>
             <div className="radio radio-warning">
              <input type="radio" name="radio7" id="radio17" value="option7" defaultChecked />
              <label for="radio17">
               Warning
                                                </label>
             </div>
             <div className="radio radio-purple">
              <input type="radio" name="radio8" id="radio18" value="option8" />
              <label for="radio18">
               Purple
                                                </label>
             </div>
             <div className="radio radio-pink">
              <input type="radio" name="radio9" id="radio19" value="option9" defaultChecked />
              <label for="radio19">
               Pink
                                                </label>
             </div>

            </div>

           </div>


           <p className="text-muted font-13 mt-2">Radios without label text <code>.radio-single</code></p>
           <div className="radio radio-single">
            <input type="radio" id="singleRadio1" value="option1.1" name="radioSingle1" aria-label="Single radio One" />
            <label for="singleRadio1"></label>
           </div>
           <div className="radio radio-success radio-single">
            <input type="radio" id="singleRadio2" value="option2.1" name="radioSingle1" defaultChecked aria-label="Single radio Two" />
            <label for="singleRadio2"></label>
           </div>


           <p className="text-muted font-13 mt-2">Inline radios</p>
           <div className="radio radio-info form-check-inline">
            <input type="radio" id="inlineRadio1" value="option1" name="radioInline" defaultChecked />
            <label for="inlineRadio1"> Inline One </label>
           </div>
           <div className="radio form-check-inline">
            <input type="radio" id="inlineRadio2" value="option2" name="radioInline" defaultChecked />
            <label for="inlineRadio2"> Inline Two </label>
           </div>
          </div>
         </div>

         <div className="col-lg-4">
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

           <h4 className="header-title m-t-0 m-b-30">Disabled</h4>

           <p className="text-muted font-13 m-b-15">
            Disabled state also supported.
                                    </p>

           <div className="radio radio-danger">
            <input type="radio" name="radio31" id="radio51" value="option1" defaultChecked disabled />
            <label for="radio51">
             Next
                                        </label>
           </div>
           <div className="radio">
            <input type="radio" name="radio41" id="radio61" value="option2" defaultChecked disabled />
            <label for="radio61">
             One
                                        </label>
           </div>
           <div className="radio radio-pink">
            <input type="radio" name="radio61" id="radio81" value="option4" defaultChecked disabled />
            <label for="radio81">
             One
                                        </label>
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
