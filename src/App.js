import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import TrendingMovies from "./components/TrendingMovies/TrendingMovies"

function App() {
  return (
    <div className="App">
      <Header/>
      <TrendingMovies/>
    </div>
  );
}

export default App;
