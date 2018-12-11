import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import {Animated} from "react-animated-css";
import '../styles/Home.css';
import Particles from 'react-particles-js';
import { Link as ScrollLink, Element, scroller } from 'react-scroll';

const insideStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  zindex: 20,
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      opacity: 0.8,
    };
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 1000,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  render() {
    return (
      <div className="App">
        <Particles
        className="particle"
        canvasClassName="particle"
        params={{
          particles: {
            number: {
              value: 300
            },
            size: {
	            value: 5,
              random: true
	          },
            opacity: {
  	            value: this.state.opacity
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
	                size: 10
	            },
              repulse:{
                distance: 100
              },
	        }

          }
        }

        }/>
          <div className="title" style={insideStyles}>Spencer's Website</div>
        <div className="border1">
         <img className="navigate__arrow" onClick={this.scrollTo} src={require("../static/images/arrow.png")} alt="Wheel" />
        </div>
        <Element name="scroll-to-element" >
          <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={this.state.isVisible}>
            <Parallax bgImage={require("../static/images/background.jpg")} strength={500}>
              <div style={{ height: 1000 }}>
                <div style={insideStyles}>
                  <Link to='/gitrepos'>Git Repos!</Link>
                  <Link to='/cv'>CV!</Link>
                </div>
              </div>
            </Parallax>
          </Animated>
        </Element>
      </div>
    );
  }
}

export default Home;
