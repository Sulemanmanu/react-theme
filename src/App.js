import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


//Navigation ROUTE
import dashBoardRoute from './leftSideBar/home/dashBoard'
import horiontalRoute from './leftSideBar/layout/horizontol'
import smallRoute from './leftSideBar/layout/smallSideBar'
import DarkSbRoute from './leftSideBar/layout/darkSidebar'
import darkTbRoute from './leftSideBar/layout/darkTopBar'
import preLoaderRoute from './leftSideBar/layout/preLoader'
import collapsedRoute from './leftSideBar/layout/collapsed'
import boxedRoute from './leftSideBar/layout/boxed'
//Navigation ROUTE END




//APPS ROUTE START
import chatRoute from './leftSideBar/App/chat'
import calenderRoute from './leftSideBar/App/calender'
import mailRoute from './leftSideBar/App/mail'
//APPS ROUTE END


//TYPOGRAPHY ROUTE START
import typographyRoute from './leftSideBar/components/typography'
//TYPOGRAPHY ROUTE END

//UI ROUTES START
import buttonRoute from './leftSideBar/components/ui/buton'
import cardRoute from './leftSideBar/components/ui/card'
import dragabbleCardRoute from './leftSideBar/components/ui/dragabbleCard'
import checkBoxRoute from './leftSideBar/components/ui/checkBox'
import materialRoute from './leftSideBar/components/ui/material'
import fontRoute from './leftSideBar/components/ui/font'
import dripiconRoute from './leftSideBar/components/ui/dripIcon'
import featherRoute from './leftSideBar/components/ui/feather'
import themifyRoute from './leftSideBar/components/ui/themify'
import modalsRoute from './leftSideBar/components/ui/modals'
import notificationRoute from './leftSideBar/components/ui/notification'
import rangeRoute from './leftSideBar/components/ui/range'
import componentRoute from './leftSideBar/components/ui/components'
import sweetRoute from './leftSideBar/components/ui/sweet'
import treeRoute from './leftSideBar/components/ui/tree'
import widgetRoute from './leftSideBar/components/ui/widget'
//UI ROUTES END

//FORM ROUTES START
import elementRoute from './leftSideBar/components/forms/element'
import advanceRoute from './leftSideBar/components/forms/advance'
import validationRoute from './leftSideBar/components/forms/validation'
import wizardRoute from './leftSideBar/components/forms/wizard'
import uploadRoute from './leftSideBar/components/forms/upload'
import quillRoute from './leftSideBar/components/forms/quill'
import xediRoute from './leftSideBar/components/forms/xedi'
//FORM ROUTES END



//Table Route Start
import basicRoute from './leftSideBar/components/tables/basic'
import dataRoute from './leftSideBar/components/tables/data'
import responsiveRoute from './leftSideBar/components/tables/responsive'
import editableRoute from './leftSideBar/components/tables/editable'
import tableSawRoute from './leftSideBar/components/tables/tableSaw'
//TABLE ROUTE END

//CHARTS ROUTE START
import flotRoute from './leftSideBar/components/charts/flot'
import morisRoute from './leftSideBar/components/charts/moris'
import chartistRoute from './leftSideBar/components/charts/chartist'
import chartjsRoute from './leftSideBar/components/charts/chartjs'
import cotherRoute from './leftSideBar/components/charts/cother'
//CHART ROUTES END

//PAGES ROUTE START
import startRoute from './leftSideBar/components/pages/start'
import loginRoute from './leftSideBar/components/pages/login'
import registerRoute from './leftSideBar/components/pages/register'
import recoverpwRoute from './leftSideBar/components/pages/recoverpw'
import lockRoute from './leftSideBar/components/pages/lock'
import confirmERoute from './leftSideBar/components/pages/confirmE'
import error404Route from './leftSideBar/components/pages/error404'
import error500Route from './leftSideBar/components/pages/error500'
//PAGES ROUTE END

//EXTRA PAGES ROUTE
import projectRoute from './leftSideBar/components/extrapages/projects'
import tourRoute from './leftSideBar/components/extrapages/tour'
import taskboardRoute from './leftSideBar/components/extrapages/taskboard'
import taskdetailRoute from './leftSideBar/components/extrapages/taskdetail'
import profileRoute from './leftSideBar/components/extrapages/profile'
import mapRoute from './leftSideBar/components/extrapages/maps'
import contactListRoute from './leftSideBar/components/extrapages/contactList'
import priceRoute from './leftSideBar/components/extrapages/pricing'
import timeLineRoute from './leftSideBar/components/extrapages/timeline'
import invoiceRoute from './leftSideBar/components/extrapages/invoice'
import faqsRoute from './leftSideBar/components/extrapages/faqs'
import galleryRoute from './leftSideBar/components/extrapages/gallery'
import EmailTempRoute from './leftSideBar/components/extrapages/emailT'
import maintainenceRoute from './leftSideBar/components/extrapages/maintainence'
import comingSoonRoute from './leftSideBar/components/extrapages/comingsoon'
//extra pages route end





































function App() {
  return (
    <Router>

      <div className="App">
        <Switch>
          {/* Navigation route start */}
          <Route exact path="/" component={dashBoardRoute} />
          <Route exact path="/horizontal" component={horiontalRoute} />
          <Route exact path="/smallsidebar" component={smallRoute} />
          <Route exact path="/darksidebar" component={DarkSbRoute} />
          <Route exact path="/darktopbar" component={darkTbRoute} />
          <Route exact path="/preloader" component={preLoaderRoute} />
          <Route exact path="/sidebarcollapsed" component={collapsedRoute} />
          <Route exact path="/boxed" component={boxedRoute} />
          {/* Navigation route end */}

          {/* apps route start */}
          <Route exact path="/chat" component={chatRoute} />
          <Route exact path="/calender" component={calenderRoute} />
          <Route exact path="/inbox" component={mailRoute} />
          {/* apps route end */}

          {/* ui route start */}
          <Route exact path="/typography" component={typographyRoute} />
          <Route exact path="/buttons" component={buttonRoute} />
          <Route exact path="/cards" component={cardRoute} />
          <Route exact path="/draggablecards" component={dragabbleCardRoute} />
          <Route exact path="/checkboxradio" component={checkBoxRoute} />
          <Route exact path="/materialicons" component={materialRoute} />
          <Route exact path="/fontawesome" component={fontRoute} />
          <Route exact path="/dripicons" component={dripiconRoute} />
          <Route exact path="/feathericons" component={featherRoute} />
          <Route exact path="/themifyicons" component={themifyRoute} />
          <Route exact path="/modals" component={modalsRoute} />
          <Route exact path="/notification" component={notificationRoute} />
          <Route exact path="/rangeslider" component={rangeRoute} />
          <Route exact path="/components" component={componentRoute} />
          <Route exact path="/sweetalert" component={sweetRoute} />
          <Route exact path="/treeview" component={treeRoute} />
          <Route exact path="/widgets" component={widgetRoute} />
          {/* ui route end */}

          {/* forms route start */}
          <Route exact path="/formelements" component={elementRoute} />
          <Route exact path="/formadvanced" component={advanceRoute} />
          <Route exact path="/formvalidation" component={validationRoute} />
          <Route exact path="/wizard" component={wizardRoute} />
          <Route exact path="/formfileupload" component={uploadRoute} />
          <Route exact path="/formquilljs" component={quillRoute} />
          <Route exact path="/formxeditable" component={xediRoute} />
          {/* form route end */}

          {/* Table routes start */}
          <Route exact path="/tablesbasic" component={basicRoute} />
          <Route exact path="/tablesdatatable" component={dataRoute} />
          <Route exact path="/tablesresponsive" component={responsiveRoute} />
          <Route exact path="/tableseditable" component={editableRoute} />
          <Route exact path="/tablestablesaw" component={tableSawRoute} />
          {/* Table routes end */}

          {/* charts route start */}
          <Route exact path="/chartsflot" component={flotRoute} />
          <Route exact path="/chartsmorris" component={morisRoute} />
          <Route exact path="/chartschartist" component={chartistRoute} />
          <Route exact path="/chartschartjs" component={chartjsRoute} />
          <Route exact path="/chartsother" component={cotherRoute} />
          {/* chart route end */}

          {/* pages route start */}
          <Route exact path="/pagesstarter" component={startRoute} />
          <Route exact path="/pageslogin" component={loginRoute} />
          <Route exact path="/pagesregister" component={registerRoute} />
          <Route exact path="/pagesrecoverpw" component={recoverpwRoute} />
          <Route exact path="/pageslockscreen" component={lockRoute} />
          <Route exact path="/pagesconfirmmail" component={confirmERoute} />
          <Route exact path="/pages404" component={error404Route} />
          <Route exact path="/pages500" component={error500Route} />
          {/* pages route end */}

          {/* extra pages route start */}
          <Route exact path="/extrasprojects" component={projectRoute} />
          <Route exact path="/extrastour" component={tourRoute} />
          <Route exact path="/extrastaskboard" component={taskboardRoute} />
          <Route exact path="/extrastaskdetail" component={taskdetailRoute} />
          <Route exact path="/extrasprofile" component={profileRoute} />
          <Route exact path="/extrasmaps" component={mapRoute} />
          <Route exact path="/extrascontact" component={contactListRoute} />
          <Route exact path="/extraspricing" component={priceRoute} />
          <Route exact path="/extrastimeline" component={timeLineRoute} />
          <Route exact path="/extrasinvoice" component={invoiceRoute} />
          <Route exact path="/extrasfaq" component={faqsRoute} />
          <Route exact path="/extrasgallery" component={galleryRoute} />
          <Route exact path="/extrasemail" component={EmailTempRoute} />
          <Route exact path="/extrasmaintenance" component={maintainenceRoute} />
          <Route exact path="/extrascomingsoon" component={comingSoonRoute} />
          {/* extra pages route end */}



        </Switch>
      </div>
    </Router>
  );
}

export default App;
