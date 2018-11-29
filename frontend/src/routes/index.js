import { Switch, Route } from 'react-router-dom'
import Home from '../views/Home.js'
import GitRepos from '../views/GitRepos.js'
import Roster from '../views/Roster.js'
import React, { Component } from 'react';

const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/gitrepos' component={GitRepos}/>
      <Route path='/roster' component={Roster}/>
    </Switch>
  </main>
)

export default Router