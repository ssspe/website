import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import {Animated} from "react-animated-css";
import '../styles/Home.css';
import Particles from 'react-particles-js';

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

  render() {
    return (
      <div className="App">
        <Particles
        params={{
          particles: {
            number: {
              value: 200
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
                mode: "repulse bubble"
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
          <div style={insideStyles}>Spencer's Website</div>
        <Parallax
          bgImage={require("../static/images/background.jpg")}
          strength={500}
          renderLayer={percentage => (
            <div>
                <div style={{
                  position: "absolute",
                  left: "50%",
                  top: "60%",
                  borderRadius: "50%",
                  opacity: percentage > 0.6 ? 1 - ((percentage - 0.6)*4): 1,
                }} class="rectangle"></div>
                <img src={require("../static/images/wheel.png")} alt="Wheel" height={20} width={20}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "60%",
                  borderRadius: "50%",
                  transform: "translate(-50%,-50%) rotate(" + (percentage > 0.6 ? percentage * 490 : 0) + "deg)",
                  opacity: percentage > 0.6 ? 1 - ((percentage - 0.6)*4): 1,
                }}/>
            </div>
          )}
        >
          <div style={{ height: 500 }}>
            <div style={insideStyles}>Spencer's Website</div>
          </div>
        </Parallax>
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={this.state.isVisible}>
          <Parallax bgImage={require("../static/images/background.jpg")} strength={500}>
            <div style={{ height: 500 }}>
              <div style={insideStyles}>
                <Link to='/gitrepos'>Git Repos!</Link>
              </div>
            </div>
          </Parallax>
        </Animated>
        <Parallax bgImage={require("../static/images/background.jpg")} strength={500}>
          <div style={{ height: 100 }}>
            <div style={insideStyles}>
              <Link to='/cv'>CV!</Link>
            </div>
          </div>
        </Parallax>
      </div>
    );
  }
}

export default Home;
