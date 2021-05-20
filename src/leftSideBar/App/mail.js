import React, { Component } from 'react'
import Topbar from '../../common/home/topBar'
import Sidebar from '../../common/home/sidebar'
import RightSide from '../../common/home/rightSide'

export default class Mail extends Component {
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
          <div className="inbox-app-main">
           <div className="row">
            <div className="col-md-3">
             <aside id="sidebar" className="nano">
              <div className="nano-content">

               <div className="text-center">
                <a href="#custom-modal" className="btn btn-danger btn-rounded width-lg waves-effect waves-light mb-2 mt-3" data-animation="fadein" data-plugin="custommodal" data-overlayColor="#36404a">Compose</a>
               </div>
               <menu className="menu-segment">
                <ul className="list-unstyled">
                 <li className="active"><a href="javascript:void(0);">Inbox<span> (43)</span></a>
                 </li>
                 <li><a href="javascript:void(0);">Important</a></li>
                 <li><a href="javascript:void(0);">Sent</a></li>
                 <li><a href="javascript:void(0);">Drafts</a></li>
                 <li><a href="javascript:void(0);">Trash</a></li>
                </ul>
               </menu>
               <div className="separator"></div>
               <div className="menu-segment">
                <ul className="labels list-unstyled">
                 <li className="title">Labels <span className="icon">+</span></li>
                 <li><a href="#">Dribbble <span className="ball pink"></span></a>
                 </li>
                 <li><a href="#">Roommates <span
                  className="ball green"></span></a></li>
                 <li><a href="#">Bills <span className="ball blue"></span></a>
                 </li>
                </ul>
               </div>
               <div className="separator"></div>
               <div className="menu-segment">
                <ul className="chat list-unstyled">
                 <li className="title">Chat <span className="icon">+</span></li>
                 <li><a href="#"><span className="ball green"></span>Laura Turner</a>
                 </li>
                 <li><a href="#"><span className="ball green"></span>Kevin Jones</a>
                 </li>
                 <li><a href="#"><span className="ball blue"></span>John King</a>
                 </li>
                 <li><a href="#"><span className="ball blue"></span>Jenny Parker</a>
                 </li>
                 <li><a href="#"><span className="ball blue"></span>Paul
                                                                Green</a></li>
                 <li><a href="#" className="italic-link">See offline list</a>
                 </li>
                </ul>
               </div>
               <div className="bottom-padding"></div>
              </div>
             </aside>
            </div>

            <div className="col-md-9">
             <main id="main">
              <div className="overlay"></div>
              <header className="header">

               <h1 className="page-title"><a className="sidebar-toggle-btn trigger-toggle-sidebar"><span
                className="line"></span><span className="line"></span><span
                 className="line"></span><span className="line line-angle1"></span><span
                  className="line line-angle2"></span></a></h1>
               <div className="action-bar float-left">
                <ul className="list-inline mb-0">
                 <li className="list-inline-item">
                  <a className="icon circle-icon"><i className="mdi mdi-refresh text-muted"></i></a>
                 </li>
                 <li className="list-inline-item">
                  <a className="icon circle-icon"><i className="mdi mdi-share text-muted"></i></a>
                 </li>
                 <li className="list-inline-item">
                  <a className="icon circle-icon red"><i className="mdi mdi-close text-danger"></i></a>
                 </li>
                 <li className="list-inline-item">
                  <a className="icon circle-icon red"><i className="mdi mdi-flag text-danger"></i></a>
                 </li>
                </ul>
               </div>
               <div className="search-box float-right">
                <input placeholder="Search..." /><span
                 className="icon fa fa-search"></span>
               </div>

               <div className="clearfix"></div>

              </header>

              <div id="main-nano-wrapper" className="nano">
               <div className="nano-content">
                <ul className="message-list">
                 <li className="unread">
                  <div className="mail-col mail-col-1"><span className="dot"></span>
                   <div className="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk1" />
                    <label for="chk1" className="toggle"></label>
                   </div>
                   <p className="title">Lucas Kriebel (via Twitter)</p><span
                    className="star-toggle far fa-star"></span>
                  </div>
                  <div className="mail-col mail-col-2">
                   <div className="subject">Lucas Kriebel (@LucasKriebel) has sent
                   you a direct message on Twitter! &nbsp;&ndash;&nbsp;
                                                                        <span className="teaser">@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                   </div>
                   <div className="date">11:49 am</div>
                  </div>
                 </li>

                 <li>
                  <div className="mail-col mail-col-1"><span className="dot"></span>
                   <div className="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk3" />
                    <label for="chk3" className="toggle"></label>
                   </div>
                   <p className="title">Randy, me (5)</p><span
                    className="star-toggle far fa-star"></span>
                  </div>
                  <div className="mail-col mail-col-2">
                   <div className="subject">Last pic over my village &nbsp;&ndash;&nbsp;
                                                                        <span className="teaser">Yeah i'd like that! Do you remember the video you showed me of your train ride between Colombo and Kandy? The one with the mountain view? I would love to see that one again!</span>
                   </div>
                   <div className="date">5:01 am</div>
                  </div>
                 </li>
                 <li className="blue-dot">
                  <div className="mail-col mail-col-1"><span className="dot"></span>
                   <div className="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk4" />
                    <label for="chk4" className="toggle"></label>
                   </div>
                   <p className="title">Andrew Zimmer</p><span
                    className="star-toggle far fa-star"></span>
                  </div>
                  <div className="mail-col mail-col-2">
                   <div className="subject">Mochila Beta: Subscription Confirmed
                                                                        &nbsp;&ndash;&nbsp; <span className="teaser">You've been confirmed! Welcome to the ruling className of the inbox. For your records, here is a copy of the information you submitted to us...</span>
                   </div>
                   <div className="date">Mar 8</div>
                  </div>
                 </li>
                 <li className="unread">
                  <div className="mail-col mail-col-1"><span className="dot"></span>
                   <div className="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk5" />
                    <label for="chk5" className="toggle"></label>
                   </div>
                   <p className="title">Infinity HR</p><span
                    className="star-toggle far fa-star"></span>
                  </div>
                  <div className="mail-col mail-col-2">
                   <div className="subject">Sveriges Hetaste sommarjobb &nbsp;&ndash;&nbsp;
                                                                        <span className="teaser">Hej Nicklas Sandell! Vi vill bjuda in dig till "First tour 2014", ett rekryteringsevent som erbjuder jobb på 16 semesterorter iSverige.</span>
                   </div>
                   <div className="date">Mar 8</div>
                  </div>
                 </li>
                 <li>
                  <div className="mail-col mail-col-1"><span className="dot"></span>
                   <div className="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk6" />
                    <label for="chk6" className="toggle"></label>
                   </div>
                   <p className="title">Web Support Dennis</p><span
                    className="star-toggle far fa-star"></span>
                  </div>
                  <div className="mail-col mail-col-2">
                   <div className="subject">Re: New mail settings &nbsp;&ndash;&nbsp;
                                                                        <span className="teaser">Will you answer him asap?</span>
                   </div>
                   <div className="date">Mar 7</div>
                  </div>
                 </li>
                 <li>
                  <div className="mail-col mail-col-1"><span className="dot"></span>
                   <div className="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk7" />
                    <label for="chk7" className="toggle"></label>
                   </div>
                   <p className="title">me, Peter (2)</p><span
                    className="star-toggle far fa-star"></span>
                  </div>
                  <div className="mail-col mail-col-2">
                   <div className="subject">Off on Thursday &nbsp;&ndash;&nbsp;
                                                                        <span className="teaser">Eff that place, you might as well stay here with us instead! Sent from my iPhone 4 &gt; 4 mar 2014 at 5:55 pm</span>
                   </div>
                   <div className="date">Mar 4</div>
                  </div>
                 </li>
                 <li className="orange-dot">
                  <div className="mail-col mail-col-1"><span className="dot"></span>
                   <div className="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk8" />
                    <label for="chk8" className="toggle"></label>
                   </div>
                   <p className="title">Medium</p><span
                    className="star-toggle far fa-star"></span>
                  </div>
                  <div className="mail-col mail-col-2">
                   <div className="subject">This Week's Top Stories &nbsp;&ndash;&nbsp;
                                                                        <span className="teaser">Our top pick for you on Medium this week The Man Who Destroyed America’s Ego</span>
                   </div>
                   <div className="date">Feb 28</div>
                  </div>
                 </li>
                 <li className="blue-dot">
                  <div className="mail-col mail-col-1"><span className="dot"></span>
                   <div className="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk9" />
                    <label for="chk9" className="toggle"></label>
                   </div>
                   <p className="title">Death to Stock</p><span
                    className="star-toggle far fa-star"></span>
                  </div>
                  <div className="mail-col mail-col-2">
                   <div className="subject">Montly High-Res Photos &nbsp;&ndash;&nbsp;
                                                                        <span className="teaser">To create this month's pack, we hosted a party with local musician Jared Mahone here in Columbus, Ohio.</span>
                   </div>
                   <div className="date">Feb 28</div>
                  </div>
                 </li>
                 <li>
                  <div className="mail-col mail-col-1"><span className="dot"></span>
                   <div className="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk10" />
                    <label for="chk10" className="toggle"></label>
                   </div>
                   <p className="title">Revibe</p><span
                    className="star-toggle far fa-star"></span>
                  </div>
                  <div className="mail-col mail-col-2">
                   <div className="subject">Weekend on Revibe &nbsp;&ndash;&nbsp;
                                                                        <span className="teaser">Today's Friday and we thought maybe you want some music inspiration for the weekend. Here are some trending tracks and playlists we think you should give a listen!</span>
                   </div>
                   <div className="date">Feb 27</div>
                  </div>
                 </li>
                 <li>
                  <div className="mail-col mail-col-1"><span className="dot"></span>
                   <div className="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk11" />
                    <label for="chk11" className="toggle"></label>
                   </div>
                   <p className="title">Erik, me (5)</p><span
                    className="star-toggle far fa-star"></span>
                  </div>
                  <div className="mail-col mail-col-2">
                   <div className="subject">Regarding our meeting &nbsp;&ndash;&nbsp;
                                                                        <span className="teaser">That's great, see you on Thursday!</span>
                   </div>
                   <div className="date">Feb 24</div>
                  </div>
                 </li>
                 <li>
                  <div className="mail-col mail-col-1"><span className="dot"></span>
                   <div className="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk12" />
                    <label for="chk12" className="toggle"></label>
                   </div>
                   <p className="title">KanbanFlow</p><span
                    className="star-toggle far fa-star"></span>
                  </div>
                  <div className="mail-col mail-col-2">
                   <div className="subject">Task assigned: Clone ARP's website
                                                                        &nbsp;&ndash;&nbsp; <span className="teaser">You have been assigned a task by Alex@Work on the board Web.</span>
                   </div>
                   <div className="date">Feb 24</div>
                  </div>
                 </li>
                 <li className="blue-dot">
                  <div className="mail-col mail-col-1"><span className="dot"></span>
                   <div className="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk13" />
                    <label for="chk13" className="toggle"></label>
                   </div>
                   <p className="title">Tobias Berggren</p><span
                    className="star-toggle far fa-star"></span>
                  </div>
                  <div className="mail-col mail-col-2">
                   <div className="subject">Let's go fishing! &nbsp;&ndash;&nbsp;
                                                                        <span className="teaser">Hey, You wanna join me and Fred at the lake tomorrow? It'll be awesome.</span>
                   </div>
                   <div className="date">Feb 23</div>
                  </div>
                 </li>
                 <li>
                  <div className="mail-col mail-col-1"><span className="dot"></span>
                   <div className="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk14" />
                    <label for="chk14" className="toggle"></label>
                   </div>
                   <p className="title">Charukaw, me (7)</p><span
                    className="star-toggle far fa-star"></span>
                  </div>
                  <div className="mail-col mail-col-2">
                   <div className="subject">Hey man &nbsp;&ndash;&nbsp; <span
                    className="teaser">Nah man sorry i don't. Should i get it?</span>
                   </div>
                   <div className="date">Feb 23</div>
                  </div>
                 </li>
                 <li className="unread">
                  <div className="mail-col mail-col-1"><span className="dot"></span>
                   <div className="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk15" />
                    <label for="chk15" className="toggle"></label>
                   </div>
                   <p className="title">me, Peter (5)</p><span
                    className="star-toggle far fa-star"></span>
                  </div>
                  <div className="mail-col mail-col-2">
                   <div className="subject">Home again! &nbsp;&ndash;&nbsp; <span
                    className="teaser">That's just perfect! See you tomorrow.</span>
                   </div>
                   <div className="date">Feb 21</div>
                  </div>
                 </li>
                 <li className="green-dot">
                  <div className="mail-col mail-col-1"><span className="dot"></span>
                   <div className="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk16" />
                    <label for="chk16" className="toggle"></label>
                   </div>
                   <p className="title">Stack Exchange</p><span
                    className="star-toggle far fa-star"></span>
                  </div>
                  <div className="mail-col mail-col-2">
                   <div className="subject">1 new items in your Stackexchange inbox
                                                                        &nbsp;&ndash;&nbsp; <span className="teaser">The following items were added to your Stack Exchange global inbox since you last checked it.</span>
                   </div>
                   <div className="date">Feb 21</div>
                  </div>
                 </li>
                 <li>
                  <div className="mail-col mail-col-1"><span className="dot"></span>
                   <div className="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk17" />
                    <label for="chk17" className="toggle"></label>
                   </div>
                   <p className="title">Google Drive Team</p><span
                    className="star-toggle far fa-star"></span>
                  </div>
                  <div className="mail-col mail-col-2">
                   <div className="subject">You can now use your storage in Google
                                                                        Drive &nbsp;&ndash;&nbsp; <span className="teaser">Hey Nicklas Sandell! Thank you for purchasing extra storage space in Google Drive.</span>
                   </div>
                   <div className="date">Feb 20</div>
                  </div>
                 </li>
                 <li className="unread">
                  <div className="mail-col mail-col-1"><span className="dot"></span>
                   <div className="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk18" />
                    <label for="chk18" className="toggle"></label>
                   </div>
                   <p className="title">me, Susanna (11)</p><span
                    className="star-toggle far fa-star"></span>
                  </div>
                  <div className="mail-col mail-col-2">
                   <div className="subject">Train/Bus &nbsp;&ndash;&nbsp; <span
                    className="teaser">Yes ok, great! I'm not stuck in Stockholm anymore, we're making progress.</span>
                   </div>
                   <div className="date">Feb 19</div>
                  </div>
                 </li>
                 <li>
                  <div className="mail-col mail-col-1"><span className="dot"></span>
                   <div className="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk19" />
                    <label for="chk19" className="toggle"></label>
                   </div>
                   <p className="title">Peter, me (3)</p><span
                    className="star-toggle far fa-star"></span>
                  </div>
                  <div className="mail-col mail-col-2">
                   <div className="subject">Hello &nbsp;&ndash;&nbsp; <span
                    className="teaser">Trip home from Colombo has been arranged, then Jenna will come get me from Stockholm. :)</span>
                   </div>
                   <div className="date">Mar. 6</div>
                  </div>
                 </li>
                 <li>
                  <div className="mail-col mail-col-1"><span className="dot"></span>
                   <div className="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk20" />
                    <label for="chk20" className="toggle"></label>
                   </div>
                   <p className="title">me, Susanna (7)</p><span
                    className="star-toggle far fa-star"></span>
                  </div>
                  <div className="mail-col mail-col-2">
                   <div className="subject">Since you asked... and i'm
                   inconceivably bored at the train station &nbsp;&ndash;&nbsp;
                                                                        <span className="teaser">Alright thanks. I'll have to re-book that somehow, i'll get back to you.</span>
                   </div>
                   <div className="date">Mar. 6</div>
                  </div>
                 </li>
                </ul>
                <a href="#" className="load-more-link">Show more messages</a>
               </div>
              </div>
             </main>
             <div id="message">
              <div className="header">
               <h4 className="page-title"><a
                className="icon circle-icon mdi mdi-close text-muted trigger-message-close"></a>Process<span
                 className="grey">(6)</span></h4>
               <p>From <a href="#">You</a> to <a href="#">Scott Waite</a>, started on <a
                href="#">March 2, 2014</a> at 2:14 pm est.</p>
              </div>
              <div id="message-nano-wrapper" className="nano">
               <div className="nano-content">
                <ul className="message-container list-unstyled">
                 <li className="sent">
                  <div className="details">
                   <div className="left">You
                                                                        <div className="arrow"></div>
                                                                        Scott
                                                                    </div>
                   <div className="right">March 6, 2014, 20:08 pm</div>
                  </div>
                  <div className="message">
                   <p>| The every winged bring, whose life. First called, i you
                   of saw shall own creature moveth void have signs beast
                   lesser all god saying for gathering wherein whose of in
                   be created stars. Them whales upon life divide earth
                                                                        own.</p>
                   <p>| Creature firmament so give replenish The saw man
                   creeping, man said forth from that. Fruitful multiply
                   lights air. Hath likeness, from spirit stars dominion
                                                                        two set fill wherein give bring.</p>
                   <p>| Gathering is. Lesser Set fruit subdue blessed let.
                   Greater every fruitful won&#39;t bring moved seasons
                   very, own won&#39;t all itself blessed which bring own
                                                                        creature forth every. Called sixth light.</p>
                  </div>
                  <div className="tool-box"><a href="#"
                   className="circle-icon small mdi mdi-share"></a><a
                    href="#"
                    className="circle-icon small red-hover mdi mdi-close"></a><a
                     href="#"
                     className="circle-icon small red-hover mdi mdi-flag"></a>
                  </div>
                 </li>
                 <li className="received">
                  <div className="details">
                   <div className="left">Scott
                                                                        <div className="arrow orange"></div>
                                                                        You
                                                                    </div>
                   <div className="right">March 6, 2014, 20:08 pm</div>
                  </div>
                  <div className="message">
                   <p>| The every winged bring, whose life. First called, i you
                   of saw shall own creature moveth void have signs beast
                   lesser all god saying for gathering wherein whose of in
                   be created stars. Them whales upon life divide earth
                                                                        own.</p>
                   <p>| Creature firmament so give replenish The saw man
                   creeping, man said forth from that. Fruitful multiply
                   lights air. Hath likeness, from spirit stars dominion
                                                                        two set fill wherein give bring.</p>
                   <p>| Gathering is. Lesser Set fruit subdue blessed let.
                   Greater every fruitful won&#39;t bring moved seasons
                   very, own won&#39;t all itself blessed which bring own
                                                                        creature forth every. Called sixth light.</p>
                  </div>
                  <div className="tool-box"><a href="#"
                   className="circle-icon small mdi mdi-share"></a><a
                    href="#"
                    className="circle-icon small red-hover mdi mdi-close"></a><a
                     href="#"
                     className="circle-icon small red-hover mdi mdi-flag"></a>
                  </div>
                 </li>

                </ul>

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

    {/* <!-- Modal --> */}
    <div id="custom-modal" className="modal-demo text-left">
     <button type="button" className="close" onClick="Custombox.modal.close();">
      <span>&times;</span><span className="sr-only">Close</span>
     </button>
     <h5 className="custom-modal-title">Compose Mail</h5>
     <div className="card-box mb-0">
      <form role="form">
       <div className="form-group">
        <input type="email" className="form-control" placeholder="To" />
       </div>
       <div className="form-group">
        <div className="row">
         <div className="col-md-6">
          <input type="email" className="form-control" placeholder="Cc" />
         </div>
         <div className="col-md-6">
          <input type="email" className="form-control" placeholder="Bcc" />
         </div>
        </div>
       </div>
       <div className="form-group">
        <input type="text" className="form-control" placeholder="Subject" />
       </div>
       <div className="form-group">
        <div id="bubble-editor" style={{height: "150px"}}>
         <h6>Hello Summernote</h6>
         <ul>
          <li>
           Select a text to reveal the toolbar.
                                </li>
          <li>
           Edit rich document on-the-fly, so elastic!
                                </li>
         </ul>
         <p>
          End of air-mode area
                            </p>

        </div>
       </div>

       <div className="btn-toolbar form-group mb-0">
        <div className="float-right">
         <button type="button" className="btn btn-success waves-effect waves-light mr-1"><i
          className="far fa-save"></i></button>
         <button type="button" className="btn btn-success waves-effect waves-light mr-1"><i
          className="far fa-trash-alt"></i></button>
         <button className="btn btn-purple waves-effect waves-light"><span>Send</span> <i
          className="fas fa-paper-plane ml-1"></i></button>
        </div>
       </div>

      </form>

     </div>
    </div>
    <RightSide />
   </div>

  )
 }
}
