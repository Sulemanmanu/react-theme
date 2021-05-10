import React, { Component } from 'react'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'
import RightSide from '../../../common/home/rightSide'
import Footer from '../../../common/home/footer'

export default class Gallery extends Component {
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
         <div className="portfolioFilter">
          <a href="#" data-filter="*" className="current waves-effect waves-primary">All</a>
          <a href="#" data-filter=".natural" className="waves-effect waves-primary">Natural</a>
          <a href="#" data-filter=".creative" className="waves-effect waves-primary">Creative</a>
          <a href="#" data-filter=".personal" className="waves-effect waves-primary">Personal</a>
          <a href="#" data-filter=".photography" className="waves-effect waves-primary">Photography</a>
         </div>
        </div>
       </div>

       <div className="port mb-2">
        <div className="portfolioContainer">
         <div className="col-md-6 col-xl-3 col-lg-4 natural personal">
          <div className="gal-detail thumb">
           <a href="assets/images/gallery/1.jpg" className="image-popup" title="Screenshot-1">
            <img src="assets/images/gallery/1.jpg" className="thumb-img img-fluid" alt="work-thumbnail" />
           </a>

           <div className="text-center">
            <h4>Nature Image</h4>
            <p className="font-13 text-muted mb-2">Natural, Personal</p>
           </div>
          </div>
         </div>

         <div className="col-md-6 col-xl-3 col-lg-4 creative personal photography">
          <div className="gal-detail thumb">
           <a href="assets/images/gallery/2.jpg" className="image-popup" title="Screenshot-2">
            <img src="assets/images/gallery/2.jpg" className="thumb-img img-fluid" alt="work-thumbnail" />
           </a>
           <div className="text-center">
            <h4>Gallary Image</h4>
            <p className="font-13 text-muted mb-2">Creative, Personal, Photography</p>
           </div>
          </div>
         </div>

         <div className="col-md-6 col-xl-3 col-lg-4 natural creative">
          <div className="gal-detail thumb">
           <a href="assets/images/gallery/3.jpg" className="image-popup" title="Screenshot-3">
            <img src="assets/images/gallery/3.jpg" className="thumb-img img-fluid" alt="work-thumbnail" />
           </a>
           <div className="text-center">
            <h4>Gallary Image</h4>
            <p className="font-13 text-muted mb-2">Natural, Creative</p>
           </div>
          </div>
         </div>

         <div className="col-md-6 col-xl-3 col-lg-4 personal photography">
          <div className="gal-detail thumb">
           <a href="assets/images/gallery/4.jpg" className="image-popup" title="Screenshot-4">
            <img src="assets/images/gallery/4.jpg" className="thumb-img img-fluid" alt="work-thumbnail" />
           </a>
           <div className="text-center">
            <h4>Gallary Image</h4>
            <p className="font-13 text-muted mb-2">Personal, Photography</p>
           </div>
          </div>
         </div>

         <div className="col-md-6 col-xl-3 col-lg-4 creative photography">
          <div className="gal-detail thumb">
           <a href="assets/images/gallery/5.jpg" className="image-popup" title="Screenshot-5">
            <img src="assets/images/gallery/5.jpg" className="thumb-img img-fluid" alt="work-thumbnail" />
           </a>
           <div className="text-center">
            <h4>Gallary Image</h4>
            <p className="font-13 text-muted mb-2">Creative, Photography</p>
           </div>
          </div>
         </div>

         <div className="col-md-6 col-xl-3 col-lg-4 natural photography">
          <div className="gal-detail thumb">
           <a href="assets/images/gallery/6.jpg" className="image-popup" title="Screenshot-6">
            <img src="assets/images/gallery/6.jpg" className="thumb-img img-fluid" alt="work-thumbnail" />
           </a>
           <div className="text-center">
            <h4>Gallary Image</h4>
            <p className="font-13 text-muted mb-2">Natural, Photography</p>
           </div>
          </div>
         </div>

         <div className="col-md-6 col-xl-3 col-lg-4 personal photography creative">
          <div className="gal-detail thumb">
           <a href="assets/images/gallery/7.jpg" className="image-popup" title="Screenshot-7">
            <img src="assets/images/gallery/7.jpg" className="thumb-img img-fluid" alt="work-thumbnail" />
           </a>
           <div className="text-center">
            <h4>Gallary Image</h4>
            <p className="font-13 text-muted mb-2">Personal, Photography, Creative</p>
           </div>
          </div>
         </div>

         <div className="col-md-6 col-xl-3 col-lg-4 creative photography natural">
          <div className="gal-detail thumb">
           <a href="assets/images/gallery/8.jpg" className="image-popup" title="Screenshot-8">
            <img src="assets/images/gallery/8.jpg" className="thumb-img img-fluid" alt="work-thumbnail" />
           </a>
           <div className="text-center">
            <h4>Gallary Image</h4>
            <p className="text-muted mb-2">Creative, Photography, Natural</p>
           </div>
          </div>
         </div>

         <div className="col-md-6 col-xl-3 col-lg-4 natural personal">
          <div className="gal-detail thumb">
           <a href="assets/images/gallery/9.jpg" className="image-popup" title="Screenshot-9">
            <img src="assets/images/gallery/9.jpg" className="thumb-img img-fluid" alt="work-thumbnail" />
           </a>
           <div className="text-center">
            <h4>Gallary Image</h4>
            <p className="font-13 text-muted mb-2">Natural, Personal</p>
           </div>
          </div>
         </div>

         <div className="col-md-6 col-xl-3 col-lg-4 photography creative">
          <div className="gal-detail thumb">
           <a href="assets/images/gallery/10.jpg" className="image-popup" title="Screenshot-10">
            <img src="assets/images/gallery/10.jpg" className="thumb-img img-fluid" alt="work-thumbnail" />
           </a>
           <div className="text-center">
            <h4>Gallary Image</h4>
            <p className="font-13 text-muted mb-2">Photography, Creative</p>
           </div>
          </div>
         </div>

         <div className="col-md-6 col-xl-3 col-lg-4 creative photography">
          <div className="gal-detail thumb">
           <a href="assets/images/gallery/11.jpg" className="image-popup" title="Screenshot-11">
            <img src="assets/images/gallery/11.jpg" className="thumb-img img-fluid" alt="work-thumbnail" />
           </a>
           <div className="text-center">
            <h4>Gallary Image</h4>
            <p className="font-13 text-muted mb-2">Creative, Photography</p>
           </div>
          </div>
         </div>

         <div className="col-md-6 col-xl-3 col-lg-4 natural creative personal">
          <div className="gal-detail thumb">
           <a href="assets/images/gallery/12.jpg" className="image-popup" title="Screenshot-12">
            <img src="assets/images/gallery/12.jpg" className="thumb-img img-fluid" alt="work-thumbnail" />
           </a>
           <div className="text-center">
            <h4>Gallary Image</h4>
            <p className="font-13 text-muted mb-2">Natural, Creative, Personal</p>
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
