import React, { Component } from 'react';
import {Animated} from "react-animated-css";
const ReactMarkdown = require('react-markdown')

class GitRepo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data : null,
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
    var url = "/api/getGitHubReadMe?repo=" + this.state.name;
    fetch(url)
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }))
  };


  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <header className="App-header">
          <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <span> {"This is repo: " + this.state.name} </span>
            <span> {"This is read me: "} </span>
            <ReactMarkdown source={(this.state.data == null ? '' : this.state.data.data)}/>
          </Animated>
        </header>
      </div>
    );
  }
}

export default GitRepo;
