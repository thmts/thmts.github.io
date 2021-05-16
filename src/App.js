import React  from 'react'
import {HashRouter as Router,  Route, Switch} from 'react-router-dom'

import About from './About'
import Home from './Home'
import Learning from './Learning'
import Navigation from './Navigation'
import Projects from './Projects'

const reload = () => window.location.reload();

function App() {
  return (
      <Router>
        <Navigation />
        <Switch>
          <Route component={About} path="/about"/>
          <Route component={Learning} path="/learning"/>
          <Route component={Projects} path="/projects"/>
          <Route component={Home} path="/"/>
        </Switch>
      </Router>
  );
}

export default App;
