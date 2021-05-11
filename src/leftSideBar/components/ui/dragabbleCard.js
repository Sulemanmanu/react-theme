import React, { Component } from 'react'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'
import Footer from '../../../common/home/footer'
import RightSide from '../../../common/home/rightSide'

export default class Dragabblecard extends Component {
   render() {
      return (
         <div>

            <div id="wrapper">

               <Topbar />
               <Sidebar />


               <div className="content-page">
                  <div className="content">

                     <div className="container-fluid">

                        <div className="sortable">
                           <div className="row">
                              <div className="col-md-4">

                                 <div className="card card-draggable">
                                    <img className="card-img-top img-fluid" src="assets/images/gallery/1.jpg" alt="Card image cap" />
                                    <div className="card-body">
                                       <h4 className="card-title">Card title</h4>
                                       <p className="card-text">Some quick example text to build on the card title and make
                                                up the bulk of the card's content.</p>
                                    </div>
                                 </div>

                                 <div className="card card-draggable text-white bg-primary">
                                    <div className="card-body">
                                       <blockquote className="card-bodyquote mb-0">
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                                    erat a ante.</p>
                                          <footer className="blockquote-footer text-white-50">Someone famous in <cite title="Source Title">Source Title</cite>
                                          </footer>
                                       </blockquote>
                                    </div>
                                 </div>

                                 <div className="card card-draggable">
                                    <div className="card-body">
                                       <h4 className="card-title">Card title</h4>
                                       <p className="card-text">Some quick example text to build on the card title and make
                                                up the bulk of the card's content.</p>
                                    </div>
                                 </div>

                              </div>
                              <div className="col-md-4">
                                 <div className="card card-draggable">
                                    <div className="card-body">
                                       <h4 className="card-title">Card title</h4>
                                       <p className="card-text">Some quick example text to build on the card title and make
                                                up the bulk of the card's content.</p>
                                    </div>
                                 </div>

                                 <div className="card card-draggable">
                                    <img className="card-img-top img-fluid" src="assets/images/gallery/3.jpg" alt="Card image cap" />
                                    <div className="card-body">
                                       <h4 className="card-title">Card title</h4>
                                       <p className="card-text">Some quick example text to build on the card title and make
                                                up the bulk of the card's content.</p>
                                    </div>
                                 </div>

                                 <div className="card card-draggable">
                                    <div className="card-body">
                                       <h4 className="card-title">Card title</h4>
                                       <p className="card-text">Some quick example text to build on the card title and make
                                                up the bulk of the card's content.</p>
                                    </div>
                                 </div>

                              </div>

                              <div className="col-md-4">
                                 <div className="card card-draggable">
                                    <div className="card-body">
                                       <h4 className="card-title">Card title</h4>
                                       <p className="card-text">Some quick example text to build on the card title and make
                                                up the bulk of the card's content.</p>
                                    </div>
                                 </div>


                                 <div className="card card-draggable">
                                    <div className="card-body">
                                       <h4 className="card-title">Card title</h4>
                                       <p className="card-text">Some quick example text to build on the card title and make
                                                up the bulk of the card's content.</p>
                                    </div>
                                 </div>


                                 <div className="card card-draggable">
                                    <div className="card-body">
                                       <h4 className="card-title">Card title</h4>
                                       <p className="card-text">Some quick example text to build on the card title and make
                                                up the bulk of the card's content.</p>
                                    </div>
                                 </div>

                                 <div className="card text-white bg-danger card-draggable">
                                    <div className="card-body">
                                       <blockquote className="card-bodyquote mb-0">
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                                    erat a ante.</p>
                                          <footer className="blockquote-footer text-white-50">Someone famous in <cite title="Source Title">Source Title</cite>
                                          </footer>
                                       </blockquote>
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
