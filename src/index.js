import { Router, Route, browserHistory, Switch } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

import Header from './js/components/header.js'

ReactDOM.render(
  //<Route path = "/about" component = />,
  <Router>

    <Header/>

    <Switch>
      // <Route exact path = "/" component = { Home } />
      // Etc.
    </Switch>
  </Router>,
  document.getElementById('container')
)
