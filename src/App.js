import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Concertos from "./components/concertos";
import Timeline from "./components/pages/timeline";
import "font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Concertos} />
          <Route path="/timeline" component={Timeline} />
        </Switch>
      </Router>
    );
  }
}

export default App;
