import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Parallax, Background } from 'react-parallax';
import {Animated} from "react-animated-css";
import DelayLink from '../components/DelayLink.js'
import '../styles/Home.css';

const insideStyles = {
  padding: 20,
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
        <Animated animationIn="fadeIn" animationOut="bounceOutDown" isVisible={this.state.isVisible}>
          <Parallax bgImage={require("../static/images/background.jpg")} strength={500}>
            <div style={{ height: 500 }}>
              <div style={insideStyles}>
                <DelayLink delay={800} onDelayStart={this.setter} to='/gitrepos'>Git Repos!</DelayLink>
              </div>
            </div>
          </Parallax>
          <h1>| | |</h1>
          <Parallax bgImage={require("../static/images/background.jpg")} strength={500}>
            <div style={{ height: 500 }}>
              <div style={insideStyles}>
                <DelayLink delay={800} to='/gitrepos'>Git Repos!</DelayLink>
              </div>
            </div>
          </Parallax>
        </Animated>
      </div>
    );
  }
}

export default Home;
