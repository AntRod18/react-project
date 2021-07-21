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
import ListComponent from './components/listComponents.js';
import { connect } from 'react-redux';
import { fetchLists } from './actions/list.js';


class App extends Component {

  componentDidMount() {
    this.props.fetchLists()
  }

  render(){
  return (
    <Router>
      <div className="App">
      <Navigationbar />
        <Switch>
          <Route exact path="/home" component={Welcome} />
          <Route exact path="/lists" component={ListOfList} />
          <Route exact path="/parts" component={PartsList} />
          <Route exact path="/lists/:id"
                render={(props) => <ListComponent {...props} lists={this.props.list} />}
          />
        </Switch>
      </div>
    </Router>
  );
}
}

const mapStateToProps = (state) => {
  return {
      list: state.listReducer.list
  }
}

export default connect(mapStateToProps, { fetchLists })(App)
