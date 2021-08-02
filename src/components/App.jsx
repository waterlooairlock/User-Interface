// Libraries
import Navbar from './Navbar';
import DashboardPage from './Dashboard';
import FunctionsPage from './Functions';
import LogsPage from './Logs';
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import Logs from './Logs';

function App() {
  return (
    <div id="background-img">
      <Router>
      <Navbar/>
      <div id="main-content">
          <Switch>
            <Route strict exact path="/"><DashboardPage/></Route>
            <Route strict exact path="/logs"><Logs/></Route>
          </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
