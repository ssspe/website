import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash';
import GitRepoButton from './components/GitRepoButton';
import { Container } from 'reactstrap';

class App extends Component {
  state = {
    data: [],
    intervalIsSet: false
  };

  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
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

  renderRepos = (repo) => {
    console.log(repo);
    if (typeof repo !== 'undefined' ) {
      return (
        <GitRepoButton repo={repo} />
      );
    }
  }


  render() {
    const { data } = this.state;
    if (data.length > 0) {
      console.log(data);
    }
    return (
      <div className="App">
        <header className="App-header">
            { data.length <= 0
              ? ''
              : _.map(data, this.renderRepos) }
        </header>
      </div>
    );
  }
}

export default App;
