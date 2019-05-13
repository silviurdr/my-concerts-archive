import React, { Component } from "react";
import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Concerts from "./components/concerts";
import Timeline from "./components/pages/timeline";
import "font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Concerts} />
          <Route path="/timeline" component={Timeline} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
