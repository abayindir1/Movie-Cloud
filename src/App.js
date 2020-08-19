import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import MovieInfo from "./components/MovieInfo/MovieInfo";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Switch>
        <Route exact path="/movie/:id" component={MovieInfo} />
      </Switch>
    </Router>
  );
}

export default App;
