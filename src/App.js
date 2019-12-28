import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, withRouter,
} from 'react-router-dom';
import Home from './components/Home';

const App = () => (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
);

export default App;
