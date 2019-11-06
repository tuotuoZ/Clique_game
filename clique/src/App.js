import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'jsnetworkx';
import Home from './Home';
import About from './About';
import Code from './Code';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

var d3 = require('d3');


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={30}
              className="fade"
              >
              <Switch location={location}>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/code" component={Code} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />



      </Router>

    </div>

  );
}


export default App;
