import React from "react";
import axios from "axios";
import TrendMovieItem from "../TrendingMovies/TrendMovieItem"
import "./Search.css"

export default function SearchMovie() {
  const [search, setSearch] = React.useState("");
  const [movies, setMovies] = React.useState([]);
  // const [recomendations, setRecomendations] = React.useState([]);

 

  const onChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_API_KEY}&query=${search}`
      )
      .then((res) => {
        var items = res.data.results.slice(0, 6).map((item) => {
          return item;
        });
        setMovies(items);
      });

    setSearch("");
  };

  return (
    <div className="search" id="search">
      <h1 className="search-title">Search</h1>
      <div className="form-group">
        <form onSubmit={(e)=>onSubmit(e)} className="search-form">
        <input
          type="search"
          placeholder="Search for a movie"
          name="search"
          value={search}
          onChange={(e) => onChange(e)}
          required
          />
        <button onClick={(e) => onSubmit(e)} className="search-btn">Search</button>
          </form>
      </div>
      <div className="search-result">
        {movies.length > 0 &&
          movies.map((movie) => (
            <TrendMovieItem key={movie.id} movie={movie}/>
          ))}
      </div>
    </div>
  );
}
