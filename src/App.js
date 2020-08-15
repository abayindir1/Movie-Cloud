import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <Header />
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
