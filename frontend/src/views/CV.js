import React, { Component } from 'react';
import CVBlock from '../components/CVBlock.js'
import '../styles/CV.css';
import {Animated} from "react-animated-css";

class CV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : null,
    };
  }

  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 300000);
      this.setState({ intervalIsSet: interval });
    }
  }

  getDataFromDb = () => {
    var url = "/api/getCVInfo";
    fetch(url)
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }))
  }

  render() {
    return (
      <div className="App">
        <header className="cv__header">
          <Animated animationIn="fadeInRightBig" animationOut="fadeOut" isVisible={true}>
            {(this.state.data == null
              ? ''
              : <CVBlock workExperience={this.state.data.workExperience} academicExperience={this.state.data.academicExperience}/>)}
          </Animated>
        </header>
      </div>
    );
  }
}

export default CV;
