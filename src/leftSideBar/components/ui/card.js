import React, { Component } from 'react'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'
import Footer from '../../../common/home/footer'
import RightSide from '../../../common/home/rightSide'

export default class Card extends Component {
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
         <div className="col-md-6 col-xl-3">

          <div className="card">
           <img className="card-img-top img-fluid" src="assets/images/gallery/1.jpg" alt="Card image cap" />
           <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Button</a>
           </div>
          </div>

         </div>

         <div className="col-md-6 col-xl-3">

          <div className="card">
           <img className="card-img-top img-fluid" src="assets/images/gallery/2.jpg" alt="Card image cap" />
           <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</p>
           </div>
           <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
           </ul>
           <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
           </div>
          </div>

         </div>

         <div className="col-md-6 col-xl-3">

          <div className="card">
           <img className="card-img-top img-fluid" src="assets/images/gallery/3.jpg" alt="Card image cap" />
           <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</p>
           </div>
          </div>

         </div>


         <div className="col-md-6 col-xl-3">

          <div className="card">
           <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <h6 className="card-subtitle text-muted">Support card subtitle</h6>
           </div>
           <img className="img-fluid" src="assets/images/gallery/4.jpg" alt="Card image cap" />
           <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
           </div>
          </div>

         </div>
        </div>


        <div className="row">
         <div className="col-sm-6">
          <div className="card card-body">
           <h4 className="card-title">Special title treatment</h4>
           <p className="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>
           <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
         </div>
         <div className="col-sm-6">
          <div className="card card-body">
           <h4 className="card-title">Special title treatment</h4>
           <p className="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>
           <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
         </div>
        </div>


        <div className="row">
         <div className="col-md-4">
          <div className="card card-body">
           <h4 className="card-title">Special title treatment</h4>
           <p className="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>
           <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
         </div>

         <div className="col-md-4">
          <div className="card card-body text-center">
           <h4 className="card-title">Special title treatment</h4>
           <p className="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>
           <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
         </div>

         <div className="col-md-4">
          <div className="card card-body text-right">
           <h4 className="card-title">Special title treatment</h4>
           <p className="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>
           <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-md-4">
          <div className="card">
           <h5 className="card-header">Featured</h5>
           <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to
                                            additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
           </div>
          </div>
         </div>

         <div className="col-md-4">
          <div className="card">
           <div className="card-header">
            Quote
                                    </div>
           <div className="card-body">
            <blockquote className="card-bodyquote">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                                erat a ante.</p>
             <footer className="blockquote-footer text-muted">Someone famous in <cite title="Source Title">Source Title</cite>
             </footer>
            </blockquote>
           </div>
          </div>
         </div>

         <div className="col-md-4">
          <div className="card text-center">
           <div className="card-header">
            Featured
                                    </div>
           <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to
                                            additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
           </div>
           <div className="card-footer text-muted">
            2 days ago
                                    </div>
          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-md-4">
          <div className="card">
           <img className="card-img-top img-fluid" src="assets/images/gallery/5.jpg" alt="Card image cap" />
           <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">This is a wider card with supporting text below as a
            natural lead-in to additional content. This content is a little bit
                                            longer.</p>
            <p className="card-text">
             <small className="text-muted">Last updated 3 mins ago</small>
            </p>
           </div>
          </div>
         </div>

         <div className="col-md-4">
          <div className="card">
           <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">This is a wider card with supporting text below as a
            natural lead-in to additional content. This content is a little bit
                                            longer.</p>
            <p className="card-text">
             <small className="text-muted">Last updated 3 mins ago</small>
            </p>
           </div>
           <img className="card-img-bottom img-fluid" src="assets/images/gallery/7.jpg" alt="Card image cap" />
          </div>
         </div>

         <div className="col-md-4">
          <div className="card card-inverse text-white">
           <img className="card-img img-fluid" src="assets/images/gallery/6.jpg" alt="Card image" />
           <div className="card-img-overlay">
            <h4 className="card-title text-white">Card title</h4>
            <p className="card-text">This is a wider card with supporting text below as a
            natural lead-in to additional content. This content is a little bit
                                            longer.</p>
            <p className="card-text">
             <small className="">Last updated 3 mins ago</small>
            </p>
           </div>
          </div>
         </div>

        </div>


        <div className="row">
         <div className="col-md-4">
          <div className="card card-inverse text-white" style={{ backgroundcolor: "#333", bordercolor: "#333" }}>
           <div className="card-body">
            <h4 className="card-title text-white">Special title treatment</h4>
            <p className="card-text">With supporting text below as a natural lead-in to
                                            additional content.</p>
            <a href="#" className="btn btn-primary">Button</a>
           </div>
          </div>
         </div>

         <div className="col-md-4">
          <div className="card text-white bg-primary">
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

         <div className="col-md-4">
          <div className="card text-white bg-success">
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



        <div className="row">
         <div className="col-md-4">
          <div className="card text-white bg-info">
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

         <div className="col-md-4">
          <div className="card text-white bg-warning">
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

         <div className="col-md-4">
          <div className="card text-white bg-danger">
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



        <div className="row">
         <div className="col-md-4">
          <div className="card text-white bg-purple">
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

         <div className="col-md-4">
          <div className="card text-white bg-pink">
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

         <div className="col-md-4">
          <div className="card">
           <div className="card-body">
            <blockquote className="card-bodyquote mb-0">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                                erat a ante.</p>
             <footer className="blockquote-footer text-muted">Someone famous in <cite title="Source Title">Source Title</cite>
             </footer>
            </blockquote>
           </div>
          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-md-4">
          <div className="card border border-primary">
           <div className="card-body text-primary">
            <h5 className="card-title text-primary">Primary card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           </div>
          </div>
         </div>

         <div className="col-md-4">
          <div className="card border border-secondary">
           <div className="card-body text-secondary">
            <h5 className="card-title text-secondary">Secondary card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           </div>
          </div>
         </div>

         <div className="col-md-4">
          <div className="card border border-success">
           <div className="card-body text-success">
            <h5 className="card-title text-success">Success card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           </div>
          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-12">
          <h4 className="mt-2 mb-3">Card Group</h4>
          <div className="card-group">
           <div className="card mb-4">
            <img className="card-img-top img-fluid" src="assets/images/gallery/8.jpg" alt="Card image cap" />
            <div className="card-body">
             <h4 className="card-title">Card title</h4>
             <p className="card-text">This is a wider card with supporting text below as a
             natural lead-in to additional content. This content is a little bit
                                                longer.</p>
             <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
             </p>
            </div>
           </div>
           <div className="card mb-4">
            <img className="card-img-top img-fluid" src="assets/images/gallery/9.jpg" alt="Card image cap" />
            <div className="card-body">
             <h4 className="card-title">Card title</h4>
             <p className="card-text">This card has supporting text below as a natural
                                                lead-in to additional content.</p>
             <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
             </p>
            </div>
           </div>
           <div className="card mb-4">
            <img className="card-img-top img-fluid" src="assets/images/gallery/10.jpg" alt="Card image cap" />
            <div className="card-body">
             <h4 className="card-title">Card title</h4>
             <p className="card-text">This is a wider card with supporting text below as a
             natural lead-in to additional content. This card has even longer content
                                                than the first to show that equal height action.</p>
             <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
             </p>
            </div>
           </div>
          </div>
         </div>
        </div>



        <div className="row m-b-20">
         <div className="col-12">
          <h4 className="mt-0 mb-3">Decks</h4>
          <div className="card-deck-wrapper">
           <div className="card-deck">
            <div className="card mb-4">
             <img className="card-img-top img-fluid" src="assets/images/gallery/11.jpg" alt="Card image cap" />
             <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">This is a longer card with supporting text below as
              a natural lead-in to additional content. This content is a little
                                                    bit longer.</p>
              <p className="card-text">
               <small className="text-muted">Last updated 3 mins ago</small>
              </p>
             </div>
            </div>
            <div className="card mb-4">
             <img className="card-img-top img-fluid" src="assets/images/gallery/12.jpg" alt="Card image cap" />
             <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">This card has supporting text below as a natural
                                                    lead-in to additional content.</p>
              <p className="card-text">
               <small className="text-muted">Last updated 3 mins ago</small>
              </p>
             </div>
            </div>
            <div className="card mb-4">
             <img className="card-img-top img-fluid" src="assets/images/gallery/1.jpg" alt="Card image cap" />
             <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">This is a wider card with supporting text below as
              a natural lead-in to additional content. This card has even longer
                                                    content than the first to show that equal height action.</p>
              <p className="card-text">
               <small className="text-muted">Last updated 3 mins ago</small>
              </p>
             </div>
            </div>
           </div>
          </div>
         </div>
        </div>



        <div className="row">
         <div className="col-12">
          <h4 className="mt-2 mb-4">Navigation</h4>

          <div className="row">
           <div className="col-md-6">
            <div className="card text-center">
             <div className="card-header bg-transparent border-bottom">
              <ul className="nav nav-tabs card-header-tabs">
               <li className="nav-item">
                <a className="nav-link active" href="#">Active</a>
               </li>
               <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
               </li>
               <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
               </li>
              </ul>
             </div>
             <div className="card-body">
              <h4 className="mb-1">Special title treatment</h4>
              <p className="mb-3">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
             </div>
            </div>
           </div>

           <div className="col-md-6">
            <div className="card text-center">
             <div className="card-header bg-transparent border-bottom">
              <ul className="nav nav-pills card-header-pills">
               <li className="nav-item">
                <a className="nav-link active" href="#">Active</a>
               </li>
               <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
               </li>
               <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
               </li>
              </ul>
             </div>
             <div className="card-body">
              <h4 className="mb-1">Special title treatment</h4>
              <p className="mb-3">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
             </div>
            </div>
           </div>
          </div>

         </div>
        </div>



        <div className="row">
         <div className="col-12">
          <h4 className="mt-0 mb-3">Columns</h4>
          <div className="card-columns">
           <div className="card">
            <img className="card-img-top img-fluid" src="assets/images/gallery/2.jpg" alt="Card image cap" />
            <div className="card-body">
             <h4 className="card-title">Card title that wraps to a new line</h4>
             <p className="card-text">This is a longer card with supporting text below as a
             natural lead-in to additional content. This content is a little bit
                                                longer.</p>
            </div>
           </div>
           <div className="card card-body">
            <blockquote className="card-bodyquote mb-0">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                                erat a ante.</p>
             <footer className="blockquote-footer text-muted">
              Someone famous in <cite title="Source Title">Source Title</cite>
             </footer>
            </blockquote>
           </div>
           <div className="card">
            <img className="card-img-top img-fluid" src="assets/images/gallery/3.jpg" alt="Card image cap" />
            <div className="card-body">
             <h4 className="card-title">Card title</h4>
             <p className="card-text">This card has supporting text below as a natural
                                                lead-in to additional content.</p>
             <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
             </p>
            </div>
           </div>
           <div className="card card-body text-center">
            <blockquote className="card-bodyquote mb-0">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                                erat.</p>
             <footer className="blockquote-footer text-muted">
              Someone famous in <cite title="Source Title">Source Title</cite>
             </footer>
            </blockquote>
           </div>
           <div className="card card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">This card has supporting text below as a natural lead-in to
                                            additional content.</p>
            <p className="card-text">
             <small className="text-muted">Last updated 3 mins ago</small>
            </p>
           </div>
           <div className="card">
            <img className="card-img img-fluid" src="assets/images/gallery/4.jpg" alt="Card image cap" />
           </div>
           <div className="card card-body text-right">
            <blockquote className="card-bodyquote mb-0">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                                erat a ante.</p>
             <footer className="blockquote-footer text-muted">
              Someone famous in <cite title="Source Title">Source Title</cite>
             </footer>
            </blockquote>
           </div>
           <div className="card card-body">
            <h4 className="card-title">Card title</h4>

            <p className="card-text">This is a wider card with supporting text below as a
            natural lead-in to additional content. This card has even longer content
                                            than the first to show that equal height action.</p>
            <p className="card-text">
             <small className="text-muted">Last updated 3 mins ago</small>
            </p>
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
