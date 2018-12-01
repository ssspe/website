import React, { Component } from 'react';
import './App.css';
import Router from './routes/index.js';
import Navigation from './views/Navigation.js';
import Footer from './views/Footer.js';
class App extends Component {

  render() {
    return(
      <div>
        <Navigation />
        <Router />
        <Footer />
      </div>
    );
  }
}

export default App;
