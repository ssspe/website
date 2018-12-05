import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import CVBlock from '../components/CVBlock.js'
import '../styles/CV.css';

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
  };


  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <header className="cv__header">
          <span>{(this.state.data == null ? '' : this.state.data.workExperience[0].company)}</span>
          {(this.state.data == null
            ? ''
            : <CVBlock workExperience={this.state.data.workExperience}/>)}
        </header>
      </div>
    );
  }
}

export default CV;
