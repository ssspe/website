import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import '../styles/Home.css';
import Particles from 'react-particles-js';
import { animateScroll as scroll } from 'react-scroll';
import Vivus from "vivus";
import keydown from 'react-keydown';
import ParticlesBackground from '../components/ParticlesBackground.js';
import {Animated} from "react-animated-css";
import DelayLink from "../components/DelayLink.js";
import { Reacteroids } from '../components/Reacteroids.js';

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
      isVisible: true,
      game: false
    };
  }

  componentDidMount(){
    new Vivus('full-title', {
      duration: 150,
      file: require('../static/images/title.svg')},
      function(obj) {
        obj.el.classList.add('finsihed');
      });

    new Vivus('ship', {
      duration: 150,
      file: require('../static/images/ship.svg')},
      function(obj) {
        obj.el.classList.add('finsihed2');
      });
    this.scrollToBottom();
  }

  /* Bit of a pain but there is a bug in chrome. Have to start scroll
     to get the title to animate. Set to a huge number so it doesnt
     actually scroll  */
  scrollToBottom = () => {
    scroll.scrollToBottom({
      duration: 1000000000000
    });
  }

  handleClick = () => {
    console.log(this.state.game);
    this.setState({game: !this.state.game});

  }

  handleForwardClick = () => {
    console.log("Forward");
  }

  render() {
    const background = require("../static/images/background.jpg");
    return (
      this.state.game ?
        <Reacteroids/> :
      <div className="home">
        <DelayLink delay={800} onDelayStart={this.handleClick} className="center" to='/gitrepos'>
          <img
          className="forward__arrow"
          onClick={this.handleForwardClick}
          src={require("../static/images/arrow.png")}
          alt="ForwardArrow"
          height={20} width={20}/>
        </DelayLink>
        <Animated animationIn="fadeInLeftBig" animationOut="fadeOutLeftBig" isVisible={this.state.isVisible}>
          <div id="full-title" className="home__title" ></div>
          <div id="ship" className="home__title" ></div>
        </Animated>
        <div className="right__side" >
          <div className="center">
            <Animated animationOut="fadeOutLeftBig" isVisible={this.state.isVisible}>
              <button onClick={this.handleClick}> HELLO </button>
            </Animated>
            <DelayLink delay={800} onDelayStart={this.handleClick} className="center" to='/gitrepos'>Git Repos!</DelayLink>
            <DelayLink delay={800} onDelayStart={this.handleClick} className="center" to='/cv'>CV!</DelayLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
