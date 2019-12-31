import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Signup from './components/Signup';
import Signin from './components/Signin';

const App = () => (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
);

export default App;
