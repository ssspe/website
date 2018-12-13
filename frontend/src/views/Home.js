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
      random: true,
    },
    opacity: {
      value: 0.5,
    },
    move: {
        random: true,
        speed: 1,
        direction: "out",
        out_mode: "out"
    },
    line_linked: {
        enable: true,
        color: "#89cff0",
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
        new Vivus('my-div', {duration: 150, file: require('../static/images/download.svg')}, function(obj) {
          obj.el.classList.add('finsihed');
        });
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
        <div className="static__holder">
          <Particles
            className="particle"
            canvasClassName="particle"
            params={ particleParams }/>
          <div id="my-div" className="home__title" ></div>
        </div>
        <img className="navigate__arrow" onClick={this.scrollTo} src={require("../static/images/arrow.png")} alt="Wheel" />
        <div className="inside__style-content">
          <Link to='/gitrepos'>Git Repos!</Link>
          <Link to='/cv'>CV!</Link>
        </div>
      </div>
    );
  }
}

export default Home;
