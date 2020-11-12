import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'

import Home from '../views/Home'
import Post from '../views/Post'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/post/:id' component={Post} />
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
