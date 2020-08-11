import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import TrendingMovies from "./components/TrendingMovies/TrendingMovies";
import SearchMovie from "./components/SearchMovie/SearchMovie";
import NowPlaying from "./components/NowPlayingMovies/NowPlaying";
import MovieInfo from "./components/MovieInfo/MovieInfo"

function App() {
  return (
    <Router>
      <Header />
      <Switch>
            <Route exact path="/" component={NowPlaying} />
            {/* <Route exact path="/" component={TrendingMovies} /> */}
          </Switch>
      <Switch>
        <Route exact path="/movie/:id" component={MovieInfo} />
      </Switch>
    </Router>
  );
}

export default App;
