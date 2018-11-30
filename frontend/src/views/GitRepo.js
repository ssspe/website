import React, { Component } from 'react';
import _ from 'lodash';
import GitRepoButton from '../components/GitRepoButton';
import { Container } from 'reactstrap';

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
          <span> Hello World! </span>
        </header>
      </div>
    );
  }
}

export default GitRepo;
