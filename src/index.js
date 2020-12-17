import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Routes from './Routes'

import Header from './components/Header'

const legPuzzel =
<Router>
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
  <div className="header">
    <Header />
  </div>
  <div className="App">
    <Routes />
  </div>
</Router>

ReactDOM.render( legPuzzel,
  document.getElementById('root'));
