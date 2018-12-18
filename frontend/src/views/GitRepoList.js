import React, { Component } from 'react';
import _ from 'lodash';
import GitRepoButton from '../components/GitRepoButton';
import {Animated} from "react-animated-css";
import DelayLink from "../components/DelayLink.js";

class GitRepoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      intervalIsSet: false,
      isVisible: true
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

  handleClick = () => {
    console.log(this.state.isVisible);
    this.setState({ isVisible: !this.state.isVisible });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <Animated animationIn="fadeInRightBig" animationOut="fadeOutRightBig" isVisible={this.state.isVisible}>
            <DelayLink delay={800} onDelayStart={this.handleClick} className="center" to='/'>
              <img
              className="back__arrow"
              onClick={this.handleBackClick}
              src={require("../static/images/arrow.png")}
              alt="BackArrow"
              height={20} width={20}/>
            </DelayLink>
            { data.length <= 0
              ? ''
              : _.map(data, this.renderRepos) }
            <DelayLink delay={800} onDelayStart={this.handleClick} className="center" to='/cv'>
              <img
              className="forward__arrow"
              onClick={this.handleForwardClick}
              src={require("../static/images/arrow.png")}
              alt="ForwardArrow"
              height={20} width={20}/>
            </DelayLink>
          </Animated>
        </header>
      </div>
    );
  }
}

export default GitRepoList;
