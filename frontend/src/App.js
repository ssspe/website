import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash';
import Main from './Main.js';
import Header from './views/Header.js';
import { Container } from 'reactstrap';

class App extends Component {

  render() {
    return(
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
