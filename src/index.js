import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

import Header from './js/components/header.js'

ReactDOM.render(
  //<Route path = "/about" component = />,
  <Header/>,
  document.getElementById('container')
)
