import React, { Component } from 'react'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'
import Footer from '../../../common/home/footer'
import RightSide from '../../../common/home/rightSide'

export default class Basic extends Component {
 render() {
  return (
   <div>
<div id="wrapper">
 <Topbar/>
 <Sidebar/>
    <div className="content-page">
     <div className="content">

      {/* <!-- Start Content--> */}
      <div className="container-fluid">

       <div className="row">
        <div className="col-lg-6">
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
          <h4 className="mt-0 header-title">Basic example</h4>
          <p className="text-muted font-14 mb-3">
           For basic styling—light padding and only horizontal dividers—add the base className <code>.table</code> to any <code>&lt;table&gt;</code>.
                                    </p>

          <div className="table-responsive">
           <table className="table mb-0">
            <thead>
             <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
             </tr>
            </thead>
            <tbody>
             <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
             </tr>
             <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
             </tr>
             <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
             </tr>
            </tbody>
           </table>
          </div>
         </div>

        </div>

        <div className="col-lg-6">

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
          <h4 className="header-title">Inverse table</h4>
          <p className="text-muted font-14 mb-3">
           Your awesome text goes here.Your awesome text goes here.
                                    </p>

          <div className="table-responsive">
           <table className="table table-dark mb-0">
            <thead>
             <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
             </tr>
            </thead>
            <tbody>
             <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
             </tr>
             <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
             </tr>
             <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
             </tr>
            </tbody>
           </table>
          </div>
         </div>

        </div>
       </div>



       <div className="row">
        <div className="col-lg-6">
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
          <h4 className="mt-0 header-title">Table head options</h4>
          <p className="text-muted font-14 mb-3">
           Use one of two modifier classNamees to make <code>&lt;thead&gt;</code>s appear light or dark gray.
                                    </p>

          <div className="table-responsive">
           <table className="table mb-0">
            <thead className="thead-light">
             <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
             </tr>
            </thead>
            <tbody>
             <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
             </tr>
             <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
             </tr>
             <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
             </tr>
            </tbody>
           </table>
          </div>
         </div>

        </div>

        <div className="col-lg-6">
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
          <h4 className="mt-0 header-title">Table head options</h4>
          <p className="text-muted font-14 mb-3">
           Use one of two modifier classNamees to make <code>&lt;thead&gt;</code>s appear light or dark gray.
                                    </p>

          <div className="table-responsive">
           <table className="table mb-0">
            <thead className="thead-dark">
             <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
             </tr>
            </thead>
            <tbody>
             <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
             </tr>
             <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
             </tr>
             <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
             </tr>
            </tbody>
           </table>
          </div>

         </div>

        </div>
       </div>



       <div className="row">
        <div className="col-lg-6">

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
          <h4 className="mt-0 header-title">Striped rows</h4>
          <p className="text-muted font-14 mb-3">
           Use <code>.table-striped</code> to add zebra-striping to any table row
                                        within the <code>&lt;tbody&gt;</code>.
                                    </p>

          <div className="table-responsive">
           <table className="table table-striped mb-0">
            <thead>
             <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
             </tr>
            </thead>
            <tbody>
             <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
             </tr>
             <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
             </tr>
             <tr>
              <th scope="row">3</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@TwBootstrap</td>
             </tr>
             <tr>
              <th scope="row">4</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
             </tr>
            </tbody>
           </table>
          </div>

         </div>

        </div>
        <div className="col-lg-6">
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
          <h4 className="mt-0 header-title">Bordered table</h4>
          <p className="text-muted font-14 mb-3">
           Add <code>.table-bordered</code> for borders on all sides of the table and cells.
                                    </p>

          <div className="table-responsive">
           <table className="table table-bordered mb-0">
            <thead>
             <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
             </tr>
            </thead>
            <tbody>
             <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
             </tr>
             <tr>
              <th scope="row">2</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@TwBootstrap</td>
             </tr>
             <tr>
              <th scope="row">3</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
             </tr>
             <tr>
              <th scope="row">4</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
             </tr>
            </tbody>
           </table>
          </div>

         </div>

        </div>

       </div>



       <div className="row">
        <div className="col-lg-6">
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
          <h4 className="mt-0 header-title">Hoverable rows</h4>
          <p className="text-muted font-14 mb-3">
           Create responsive tables by wrapping any
                                        <code>.table</code> in
                                        <code>.table-responsive</code> to make them scroll horizontally on small devices (under 768px).
                                    </p>

          <div className="table-responsive">
           <table className="table table-hover mb-0">
            <thead>
             <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
             </tr>
            </thead>
            <tbody>
             <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
             </tr>
             <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
             </tr>
             <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
             </tr>
            </tbody>
           </table>
          </div>

         </div>

        </div>
        <div className="col-lg-6">

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
          <h4 className="mt-0 header-title">Small table</h4>
          <p className="text-muted font-14 mb-3">
           Add <code>.table-sm</code> to make tables more compact by cutting cell padding in half.
                                    </p>

          <div className="table-responsive">
           <table className="table mb-0 table-sm">
            <thead>
             <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
             </tr>
            </thead>
            <tbody>
             <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
             </tr>
             <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
             </tr>
             <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
             </tr>
             <tr>
              <th scope="row">4</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
             </tr>
             <tr>
              <th scope="row">5</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
             </tr>
            </tbody>
           </table>
          </div>

         </div>

        </div>
       </div>


       <div className="row">
        <div className="col-lg-6">

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
          <h4 className="mt-0 header-title">Contextual classNamees</h4>
          <p className="text-muted font-14 mb-3">
           Use contextual classNamees to color table rows or individual cells.
                                    </p>

          <div className="table-responsive">
           <table className="table mb-0">
            <thead>
             <tr>
              <th>#</th>
              <th>Column heading</th>
              <th>Column heading</th>
              <th>Column heading</th>
             </tr>
            </thead>
            <tbody>
             <tr className="table-active">
              <th scope="row">1</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
             </tr>
             <tr>
              <th scope="row">2</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
             </tr>
             <tr className="table-success">
              <th scope="row">3</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
             </tr>
             <tr>
              <th scope="row">4</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
             </tr>
             <tr className="table-info">
              <th scope="row">5</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
             </tr>
             <tr>
              <th scope="row">6</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
             </tr>
             <tr className="table-warning">
              <th scope="row">7</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
             </tr>
             <tr>
              <th scope="row">8</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
             </tr>
             <tr className="table-danger">
              <th scope="row">9</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
             </tr>
            </tbody>
           </table>
          </div>

         </div>

        </div>

        <div className="col-lg-6">

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
          <h4 className="mt-0 header-title">Contextual with background color</h4>
          <p className="text-muted font-14 mb-3">
           Use contextual classNamees to color table rows or individual cells.
                                    </p>

          <div className="table-responsive">
           <table className="table mb-0">
            <thead>
             <tr>
              <th>#</th>
              <th>Column heading</th>
              <th>Column heading</th>
              <th>Column heading</th>
             </tr>
            </thead>
            <tbody>
             <tr className="bg-dark text-light">
              <th scope="row">1</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
             </tr>
             <tr>
              <th scope="row">2</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
             </tr>
             <tr className="bg-success text-white">
              <th scope="row">3</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
             </tr>
             <tr>
              <th scope="row">4</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
             </tr>
             <tr className="bg-info text-white">
              <th scope="row">5</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
             </tr>
             <tr>
              <th scope="row">6</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
             </tr>
             <tr className="bg-warning text-white">
              <th scope="row">7</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
             </tr>
             <tr>
              <th scope="row">8</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
             </tr>
             <tr className="bg-danger text-white">
              <th scope="row">9</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
             </tr>
            </tbody>
           </table>
          </div>

         </div>

        </div>
       </div>


       <div className="row">
        <div className="col-lg-6">
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
          <h4 className="mt-0 header-title">Borderless table</h4>
          <p className="text-muted font-14 mb-3">
           For basic styling—light padding and only horizontal dividers—add the base className <code>.table</code> to any <code>&lt;table&gt;</code>.
                                    </p>

          <div className="table-responsive">
           <table className="table table-borderless mb-0">
            <thead>
             <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
             </tr>
            </thead>
            <tbody>
             <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
             </tr>
             <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
             </tr>
             <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
             </tr>
            </tbody>
           </table>
          </div>

         </div>

        </div>

        <div className="col-lg-6">

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
          <h4 className="mt-0 header-title">Borderless Inverse table</h4>
          <p className="text-muted font-14 mb-3">
           Your awesome text goes here.Your awesome text goes here.
                                    </p>

          <div className="table-responsive">
           <table className="table table-dark table-borderless mb-0">
            <thead>
             <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
             </tr>
            </thead>
            <tbody>
             <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
             </tr>
             <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
             </tr>
             <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
             </tr>
            </tbody>
           </table>
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
