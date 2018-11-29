import { Switch, Route } from 'react-router-dom'
import GitRepos from './views/GitRepos.js'
import Roster from './views/Roster.js'
import React, { Component } from 'react';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={GitRepos}/>
      <Route path='/roster' component={Roster}/>
    </Switch>
  </main>
)

export default Main
