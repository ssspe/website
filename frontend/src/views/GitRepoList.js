import React, { Component } from 'react';
import _ from 'lodash';
import GitRepoButton from '../components/GitRepoButton';
import {Animated} from "react-animated-css";

class GitRepoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      intervalIsSet: false
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
    fetch("/api/getGitHubRepo")
      .then(data => data.json())
      .then(res => this.setState({ data: JSON.parse(res.data) }))
  };

  renderRepos = (repo, index) => {
    if (typeof repo !== 'undefined' ) {
      return (
        <GitRepoButton repo={repo}/>
      );
    }
  }

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <Animated animationIn="fadeInRightBig" animationOut="fadeOut" isVisible={true}>
            { data.length <= 0
              ? ''
              : _.map(data, this.renderRepos) }
          </Animated>
        </header>
      </div>
    );
  }
}

export default GitRepoList;
