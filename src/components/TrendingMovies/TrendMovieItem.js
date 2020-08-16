import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Trending.css"

export default function TrendMovieItem({ movie }) {
  return (
    <>
      <div className="trend-movie-card" id={movie.id}>
        <div className="card-body">
          {movie.poster_path?(
            <img
            src={"https://image.tmdb.org/t/p/w185" + movie.poster_path}
            className="movie-card-image"
          ></img>
          ):(
            <img
            src={require("../../images/movie-stock.png")}
            className="movie-card-image"
          ></img>
          )}
          <h4>{movie.original_title}</h4>
          <Link to={"/movie/" + movie.id} className="btn">
            View Info
          </Link>
        </div>
      </div>
    </>
  );
}
