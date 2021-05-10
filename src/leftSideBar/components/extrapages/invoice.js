import React, { Component } from 'react'
import RightSide from '../../../common/home/rightSide'
import Footer from '../../../common/home/footer'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'

export default class Invoice extends Component {
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
         <div className="col-md-12">
          <div className="card-box">
           {/* <!-- <div className="panel-heading">
            <h4>Invoice</h4>
           </div> --> */}
                                    <div className="panel-body">
            <div className="clearfix">
             <div className="float-left">
              <h3>Adminto</h3>
             </div>
             <div className="float-right">
              <h4>Invoice # <br/>
               <strong>2016-04-23654789</strong>
                                                </h4>
                                            </div>
             </div>
             <hr/>
              <div className="row">
               <div className="col-md-12">

                <div className="float-left mt-3">
                 <address>
                  <strong>Twitter, Inc.</strong><br/>
                   795 Folsom Ave, Suite 600<br/>
                    San Francisco, CA 94107<br/>
                     <abbr title="Phone">P:</abbr> (123) 456-7890
                                                    </address>
                                                </div>
                   <div className="float-right mt-3">
                    <p><strong>Order Date: </strong> Jan 17, 2016</p>
                    <p className="m-t-10"><strong>Order Status: </strong> <span className="label label-pink">Pending</span></p>
                    <p className="m-t-10"><strong>Order ID: </strong> #123456</p>
                   </div>
                                            </div>
                                        </div>
              

                                        <div className="row">
                  <div className="col-md-12">
                   <div className="table-responsive">
                    <table className="table mt-4">
                     <thead>
                      <tr><th>#</th>
                       <th>Item</th>
                       <th>Description</th>
                       <th>Quantity</th>
                       <th>Unit Cost</th>
                       <th>Total</th>
                      </tr></thead>
                     <tbody>
                      <tr>
                       <td>1</td>
                       <td>LCD</td>
                       <td>Lorem ipsum dolor sit amet.</td>
                       <td>1</td>
                       <td>$380</td>
                       <td>$380</td>
                      </tr>
                      <tr>
                       <td>2</td>
                       <td>Mobile</td>
                       <td>Lorem ipsum dolor sit amet.</td>
                       <td>5</td>
                       <td>$50</td>
                       <td>$250</td>
                      </tr>
                      <tr>
                       <td>3</td>
                       <td>LED</td>
                       <td>Lorem ipsum dolor sit amet.</td>
                       <td>2</td>
                       <td>$500</td>
                       <td>$1000</td>
                      </tr>
                      <tr>
                       <td>4</td>
                       <td>LCD</td>
                       <td>Lorem ipsum dolor sit amet.</td>
                       <td>3</td>
                       <td>$300</td>
                       <td>$900</td>
                      </tr>
                      <tr>
                       <td>5</td>
                       <td>Mobile</td>
                       <td>Lorem ipsum dolor sit amet.</td>
                       <td>5</td>
                       <td>$80</td>
                       <td>$400</td>
                      </tr>
                     </tbody>
                    </table>
                   </div>
                  </div>
                 </div>
                 <div className="row">
                  <div className="col-xl-6 col-6">
                   <div className="clearfix mt-4">
                    <h5 className="small text-dark">PAYMENT TERMS AND POLICIES</h5>

                    <small>
                     All accounts are to be paid within 7 days from receipt of
                     invoice. To be paid by cheque or credit card or direct payment
                     online. If account is not paid within 7 days the credits details
                     supplied as confirmation of work undertaken will be charged the
                     agreed quoted fee noted above.
                                                    </small>
                   </div>
                  </div>
                  <div className="col-xl-3 col-6 offset-xl-3">
                   <p className="text-right"><b>Sub-total:</b> 2930.00</p>
                   <p className="text-right">Discout: 12.9%</p>
                   <p className="text-right">VAT: 12.9%</p>
                   <hr />
                   <h3 className="text-right">USD 2930.00</h3>
                  </div>
                 </div>
                 <hr />
                 <div className="d-print-none">
                  <div className="float-right">
                   <a href="javascript:window.print()" className="btn btn-dark waves-effect waves-light"><i className="fa fa-print"></i></a>
                   <a href="#" className="btn btn-primary waves-effect waves-light">Submit</a>
                  </div>
                  <div className="clearfix"></div>
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
