import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Loadable from 'react-loadable';

import Dashboard from './Components/Dashboard';
import Users from './Components/Users';
import Blogs from './Components/Blogs';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path={"/users"} component={Users} />
          <Route path={"/blogs"} component={Blogs} />
        </Switch>
      </Router>
    );
  };
};

export default App;
