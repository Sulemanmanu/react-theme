import React, { Component } from 'react'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'
import RightSide from '../../../common/home/rightSide'
import Footer from '../../../common/home/footer'

export default class Tour extends Component {
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
         <div className="col-12">
          <div className="card-box">
           <div className="text-center mt-4 mb-5">
            <div className="d-inline-block logo" id="logo-tour">
             <img src="assets/images/logo-light.png" alt="" height="22" className="logo-light" />
             <img src="assets/images/logo-dark.png" alt="" height="22" className="logo-dark" />
            </div>


           </div>

           <div className="row justify-content-center">
            <div className="col-lg-5">
             <h4 className="header-title mt-0 mb-4">Heading</h4>
             <h1 id="heading-title-tour">This is a Heading 1</h1>
             <p className="text-muted">Suspendisse vel quam malesuada, aliquet sem sit
                                                amet, fringilla elit. Morbi tempor tincidunt tempor. vulputate sapienest consequat posuere et at velit.</p>

             <div className="clearfix"></div>

             <h2>This is a Heading 2</h2>
             <p className="text-muted">In nec rhoncus eros. Vestibulum eu mattis nisl.
                                                Quisque viverra viverra magna nec pulvinar porta augue, consectetur facilisis diam a malesuada purus.</p>

             <div className="clearfix"></div>

             <h3>This is a Heading 3</h3>
             <p className="text-muted">Vestibulum auctor tincidunt semper. Phasellus ut
             vulputate lacus. Suspendisse
                                                ultricies mi eros, sit amet tempor nulla varius sed dapibus in tellus.</p>

             <div className="clearfix"></div>

             <h4>This is a Heading 4</h4>
             <p className="text-muted">Nulla et mattis nunc. Curabitur scelerisque
                                                commodo condimentum. Mauris blandit, velit a consectetur egestas ultrices arcu eros vel erat.</p>

            </div>

            <div className="col-lg-5 offset-lg-1">
             <h4 className="header-title mt-0 mb-4">Blockqoutes</h4>

             <blockquote className="blockquote font-16" id="blockquote-title-tour">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
             </blockquote>

             <blockquote className="blockquote font-16 text-center border-0">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
             </blockquote>

             <blockquote className="blockquote font-16 blockquote-reverse">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
             </blockquote>
            </div>
           </div>


           <div className="text-center mt-5">
            <a href="javascript: void(0);" className="btn btn-danger waves-effect waves-light" id="thankyou-tour">Thank you !</a>
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
