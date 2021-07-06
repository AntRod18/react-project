import Navigationbar from './components/navbar.js';
import Welcome from './components/welcome.js';
import List from './components/list.js';
import Part from './components/part.js'
import PartsList from './components/partslist' 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Component } from 'react';
import { fetchParts } from './actions/parts'
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.fetchParts()
}

  render(){
  return (
    <Router>
      <div className="App">
      <Navigationbar />
        <Switch>
          <Route exact path="/home" component={Welcome} />
          <Route exact path="/lists" component={List} />
          <Route exact path="/parts" component={PartsList} />
        </Switch>
      </div>
    </Router>
  );
}
}

export default connect(null, { fetchParts })(App);
