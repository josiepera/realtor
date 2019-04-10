import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
