import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Parallax, Background } from 'react-parallax';
import {Animated} from "react-animated-css";
import DelayLink from '../components/DelayLink.js'
import '../styles/Home.css';

const insideStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

class Home extends Component {
  state = {
    isVisible: true
  };

  setter = () => {
    this.setState({ isVisible: false })
  }
  render() {
    return (
      <div className="App">
        <Parallax
          bgImage={require("../static/images/background.jpg")}
          strength={200}
          renderLayer={percentage => (
            <div>
                <div style={{
                  position: "absolute",
                  left: "50%",
                  top: "60%",
                  borderRadius: "50%",
                  opacity: percentage > 0.6 ? 1 - ((percentage - 0.6)*4): 1,
                }} class="rectangle"></div>
                <img src={require("../static/images/wheel.png")} height={20} width={20}
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
                <DelayLink delay={800} onDelayStart={this.setter} to='/gitrepos'>Git Repos!</DelayLink>
              </div>
            </div>
          </Parallax>
        </Animated>
      </div>
    );
  }
}

export default Home;
