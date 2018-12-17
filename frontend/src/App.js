import React, { Component } from 'react';
import './styles/App.css';
import Router from './routes/index.js';
import Navigation from './views/Navigation.js';
import Footer from './views/Footer.js';
import { ParallaxProvider } from 'react-scroll-parallax';

class App extends Component {

  render() {
    return(
      <div>
        <ParallaxProvider>
          <Navigation />
          <Router />
          <Footer />
        </ParallaxProvider>
      </div>
    );
  }
}

export default App;
