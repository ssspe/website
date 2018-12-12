import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import '../styles/Home.css';
import Particles from 'react-particles-js';
import { Element, scroller } from 'react-scroll';
import Vivus from "vivus";

const particleParams = {
  particles: {
    number: {
      value: 150
    },
    size: {
      value: 5,
      random: true
    },
    opacity: {
      value: 0.5
    },
    move: {
        random: true,
        speed: 1,
        direction: "out",
        out_mode: "out"
    }
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "push"
      },
      onhover: {
        enable: true,
        mode: "grab bubble"
      }
    },
    modes: {
      push: {
        particles_nb: 1
      },
      bubble: {
        distance: 150,
        size: 5,
        opacity: 1,
      },
      repulse:{
        distance: 100
      },
    }
  }
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
  }

  componentDidMount(){
        new Vivus('my-div', {duration: 200, file: require('../static/images/download.svg')});
  }

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 1000,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  render() {
    const background = require("../static/images/background.jpg");
    return (
      <div className="App">

        <Particles
          className="particle"
          canvasClassName="particle"
          params={ particleParams }/>
        <div id="my-div" className="home__title inside__style" style={{ height: 150 }}></div>
        <div className="home__border">
          <img className="navigate__arrow" onClick={this.scrollTo} src={require("../static/images/arrow.png")} alt="Wheel" />
        </div>
        <Element name="scroll-to-element" >
          <Parallax bgImage={ background } strength={500}>
            <div style={{ height: 1000 }}>
              <div className="inside__style">
                <Link to='/gitrepos'>Git Repos!</Link>
                <Link to='/cv'>CV!</Link>
              </div>
            </div>
          </Parallax>
        </Element>
      </div>
    );
  }
}

export default Home;
