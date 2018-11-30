import { Switch, Route } from 'react-router-dom'
import Home from '../views/Home.js'
import GitRepoList from '../views/GitRepoList.js'
import GitRepo from '../views/GitRepo.js'
import React, { Component } from 'react';

const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/gitrepos' component={GitRepoList}/>
      <Route path='/gitrepos/:name' component={GitRepo}/>
    </Switch>
  </main>
)

export default Router
