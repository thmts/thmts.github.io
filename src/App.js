import React  from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import About from './About'
import Curriculum from './Curriculum'
import Home from './Home'
import Navigation from './Navigation'


function App() {
  return (
      <Router>
        <Navigation />
        <Switch>
          <Route component={About} path="/about"/>
          <Route component={Curriculum} path="/cv"/>
          <Route component={Home} path="/"/>
        </Switch>
      </Router>
  );
}

export default App;
