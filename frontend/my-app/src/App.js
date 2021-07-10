import Navigationbar from './components/navbar.js';
import Welcome from './components/welcome.js';
import ListOfList from './components/listsOfList';
import PartsList from './components/partslist' 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Component } from 'react';


class App extends Component {



  render(){
  return (
    <Router>
      <div className="App">
      <Navigationbar />
        <Switch>
          <Route exact path="/home" component={Welcome} />
          <Route exact path="/lists" component={ListOfList} />
          <Route exact path="/parts" component={PartsList} />
        </Switch>
      </div>
    </Router>
  );
}
}

export default App
