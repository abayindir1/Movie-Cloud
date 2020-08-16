import React, { useEffect, useState } from "react";
import axios from "axios";
import TrendMovieItem from "./TrendMovieItem";
import "./Trending.css"


export default function TrendingMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending()
  }, []);

  const getTrending =()=>{
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=" +
          process.env.REACT_APP_API_KEY
      )
      .then((res) => {
        setMovies(res.data.results);
        console.log(res.data.results);
      });
  }
  return (
    <div className="trendings">
      <h1 id="trending-title">Today's Trending Movies</h1>
    <div className="trending-movies" id="trending">
      {movies.length > 0 ? (
        movies.map((movie) => <TrendMovieItem key={movie.id} movie={movie} />)
        ) : (
          <h1>No Movie Found</h1>
          )}
    </div>
    </div>
  );
}
