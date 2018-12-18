import { Switch, Route } from 'react-router-dom'
import Home from '../views/Home.js'
import GitRepoList from '../views/GitRepoList.js'
import GitRepo from '../views/GitRepo.js'
import CV from '../views/CV.js'
import React, { Component } from 'react';
import NoMatch from '../views/NoMatch.js';
import ParticlesBackground from '../components/ParticlesBackground.js';
import { Reacteroids } from '../components/Reacteroids.js';

class Router extends Component {
  render() {
    return (
      <main>
        <ParticlesBackground/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/gitrepos' component={GitRepoList}/>
          <Route exact path='/cv' component={CV}/>
          <Route path='/gitrepos/:name' component={GitRepo}/>
          <Route path='/asteroids' component={Reacteroids}/>
          <Route component={NoMatch} />
        </Switch>
      </main> );
    }

}

export default Router
