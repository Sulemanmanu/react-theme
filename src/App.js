import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import horizontolRoute from './common/layout/horizontol';
import typographyRoute from './components/typography/typography';
import dashBoardRoute from './common/home/dashBoard'


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={dashBoardRoute} />
          {/* <Route exact path="/horizontol" component={horizontolRoute} /> */}
          {/* <Route exact path="/typography" component={typographyRoute} /> */}

        </Switch>
      </div>
    </Router>
  );
}

export default App;
