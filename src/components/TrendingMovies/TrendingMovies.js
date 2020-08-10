import React, { useEffect, useState } from "react";
import axios from "axios";
import TrendMovieItem from "./TrendMovieItem";


export default function TrendingMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=" +
          process.env.REACT_APP_API_KEY
      )
      .then((res) => {
        setMovies(res.data.results);
        // console.log(res.data.results);
      });
  }, []);

  return (
    <div className="trending-movies">
      <h1>Today's Trending Movies</h1>
      {movies.length > 0 ? (
        movies.map((movie) => <TrendMovieItem key={movie.id} movie={movie} />)
      ) : (
        <h1>No Movie Found</h1>
      )}
    </div>
  );
}
