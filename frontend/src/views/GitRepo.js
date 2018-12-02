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
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 300000);
      this.setState({ intervalIsSet: interval });
    }
  }

  getDataFromDb = () => {
    var url = "/api/getGitHubReadMe?" + this.state.name;
    fetch(url)
      .then(data => data.json())
      .then(res => console.log(res))
  };


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
