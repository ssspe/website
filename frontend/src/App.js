import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash';
import Router from './routes/index.js';
import Header from './views/Header.js';
import { Container } from 'reactstrap';

class App extends Component {

  render() {
    return(
      <div>
        <Header />
        <Router />
      </div>
    );
  }
}

export default App;
