import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Trending.css";

export default function TrendMovieItem({ movie }) {
  return (
    <>
      <div className="trend-movie-card" id={movie.id}>
        <Link to={"/movie/" + movie.id} className="card-link">
        {movie.poster_path ? (
          <img
            src={"https://image.tmdb.org/t/p/w185" + movie.poster_path}
            className="movie-card-image"
          ></img>
        ) : (
          <img
            src={require("../../images/movie-stock.png")}
            className="movie-card-image"
            style={{width:"200px"}}
          ></img>
        )}
        <div className="card-body">
          <h4 className="card-movie-title">{movie.original_title}</h4>
        </div>
        </Link>
      </div>
    </>
  );
}
