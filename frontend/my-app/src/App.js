import Navigationbar from './components/navbar.js';
import Welcome from './components/welcome.js';
import List from './components/list.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Navigationbar />
        <Switch>
          <Route exact path="/home" component={Welcome} />
          <Route exact path="/lists" component={List} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
