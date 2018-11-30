import React, { Component } from 'react';
import {Animated} from "react-animated-css";

class GitRepo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name : props.match.params.name
    };
  }
  componentDidMount() {
    console.log(this.state.name);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <span> {"This is repo: " + this.state.name} </span>
          </Animated>
        </header>
      </div>
    );
  }
}

export default GitRepo;
