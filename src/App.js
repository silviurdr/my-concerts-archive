import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Concertos from "./components/concertos";
import Timeline from "./components/pages/timeline";
import "font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Concertos} />
        <Route path="/timeline" component={Timeline} />
      </Router>
    );
  }
}

export default App;
