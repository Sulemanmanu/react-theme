import React, { Component } from 'react'
import Sidebar from '../../../common/home/sidebar'
import Topbar from '../../../common/home/topBar'
import RightSide from '../../../common/home/rightSide'
import Footer from '../../../common/home/footer'

export default class Faqs extends Component {
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
         <div className="col-sm-12">
          <div className="card-box">
           <div className="row justify-content-center">
            <div className="col-sm-6">
             <div className="text-center">
              <h3>Frequently Asked Questions</h3>
              <p className="text-muted"> Nisi praesentium similique totam odio obcaecati, reprehenderit,
              dignissimos rem temporibus ea inventore alias! Beatae animi nemo ea
                                                    tempora, temporibus laborum facilis ut!</p>

              <button type="button" className="btn btn-success waves-effect waves-light mt-1">Email us your question</button>
              <button type="button" className="btn btn-primary waves-effect waves-light mt-1">Send us a tweet</button>

             </div>
            </div>
           </div>

           <div className="row mt-4 justify-content-center">
            <div className="col-xl-5">
             <div className="p-2">

              <div className="accordion custom-accordion" id="accordionExample">
               <div className="card mb-2">
                <div className="card-header bg-light">
                 <h5 className="card-title m-0">
                  <a href="#" className="text-dark" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                   What is Lorem Ipsum?
                                                                </a>
                 </h5>
                </div>

                <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                 <div className="card-body">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <p className="mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.</p>
                 </div>
                </div>
               </div>
               <div className="card mb-2">
                <div className="card-header bg-light">
                 <h5 className="card-title m-0">
                  <a href="#" className="text-dark" className="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                   Is safe use Lorem Ipsum?
                                                                </a>
                 </h5>
                </div>
                <div id="collapseTwo" className="collapse" data-parent="#accordionExample">
                 <div className="card-body">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <p className="mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.</p>
                 </div>
                </div>
               </div>
               <div className="card mb-2">
                <div className="card-header bg-light">
                 <h5 className="card-title m-0">
                  <a href="#" className="text-dark" className="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                   Why use Lorem Ipsum?
                                                                </a>
                 </h5>
                </div>
                <div id="collapseThree" className="collapse" data-parent="#accordionExample">
                 <div className="card-body">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <p className="mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.</p>
                 </div>
                </div>
               </div>
              </div>

             </div>
            </div>


            <div className="col-xl-5">
             <div className="p-2">
              <div className="accordion custom-accordion" id="accordionExample1">
               <div className="card mb-2">
                <div className="card-header bg-light">
                 <h5 className="card-title m-0">
                  <a href="#" className="text-dark" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                   License & Copyright
                                                                </a>
                 </h5>
                </div>

                <div id="collapseFour" className="collapse show" data-parent="#accordionExample1">
                 <div className="card-body">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <p className="mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.</p>
                 </div>
                </div>
               </div>
               <div className="card mb-2">
                <div className="card-header bg-light">
                 <h5 className="card-title m-0">
                  <a href="#" className="text-dark" className="collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                   How many variations exist?
                                                                </a>
                 </h5>
                </div>
                <div id="collapseFive" className="collapse" data-parent="#accordionExample1">
                 <div className="card-body">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <p className="mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.</p>
                 </div>
                </div>
               </div>
               <div className="card mb-2">
                <div className="card-header bg-light">
                 <h5 className="card-title m-0">
                  <a href="#" className="text-dark" className="collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                   Why use Lorem Ipsum?
                                                                </a>
                 </h5>
                </div>
                <div id="collapseSix" className="collapse" data-parent="#accordionExample1">
                 <div className="card-body">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <p className="mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.</p>
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
