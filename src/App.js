import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import TrendingMovies from "./components/TrendingMovies/TrendingMovies"
import SearchMovie from "./components/SearchMovie/SearchMovie"

function App() {
  return (
    <div className="App">
      <Header/>
      <TrendingMovies/>
      <SearchMovie/>
    </div>
  );
}

export default App;
