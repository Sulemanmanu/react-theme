import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//DASHBOARD ROUTE
import dashBoardRoute from './leftSideBar/components/home/dashBoard'
//DASHBOARD ROUTE END

import smallLayout from './leftSideBar/layout/smallSideBar'

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
          {/* <Route exact path="/wizard" component={} /> */}
          <Route exact path="/" component={dashBoardRoute} />
          {/* <Route exact path="/typography" component={typographyRoute} /> */}

        </Switch>
      </div>
    </Router>
  );
}

export default App;
