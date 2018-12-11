import { Switch, Route } from 'react-router-dom'
import Home from '../views/Home.js'
import GitRepoList from '../views/GitRepoList.js'
import GitRepo from '../views/GitRepo.js'
import CV from '../views/CV.js'
import React from 'react';
import NoMatch from '../views/NoMatch.js';

const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/gitrepos' component={GitRepoList}/>
      <Route exact path='/cv' component={CV}/>
      <Route path='/gitrepos/:name' component={GitRepo}/>
      <Route component={NoMatch} />
    </Switch>
  </main>
)

export default Router
