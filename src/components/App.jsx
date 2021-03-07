// Libraries
import Navbar from './Navbar';
import DashboardPage from './Dashboard';
import FunctionsPage from './Functions';
import LogsPage from './Logs';
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";

function App() {
  return (
    <div id="background-img">
      <Router>
      <Navbar/>
      <div id="main-content">
          <Switch>
            <Route strict exact path="/" component={ DashboardPage }></Route>
            <Route path="/functions" component={ FunctionsPage }></Route>
            <Route path="/logs" component={ LogsPage }></Route>
          </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
