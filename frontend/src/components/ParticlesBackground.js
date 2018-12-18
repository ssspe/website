import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import '../styles/Home.css';
import Particles from 'react-particles-js';
import { animateScroll as scroll } from 'react-scroll';
import Vivus from "vivus";
import keydown from 'react-keydown';

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

class ParticlesBackground extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <Particles
        id="particlesBackground"
        className="particle"
        canvasClassName="particle"
        params={ particleParams }/>
    );
  }
}

export default ParticlesBackground;
