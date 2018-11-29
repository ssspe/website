import React, { Component } from 'react';
import _ from 'lodash';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

class Home extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to='/gitrepos'>Git Repos!</Link>
        </header>
      </div>
    );
  }
}

export default Home;