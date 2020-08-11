import React from "react";
// import MovieInfo from "../MovieInfo/MovieInfo";
import axios from "axios";
import { Link } from "react-router-dom";

export default function TrendMovieItem({ movie }) {
  const [modalShow, setModalShow] = React.useState(false);

  React.useEffect(() => {
   
  }, []);

  // const hideModal = () => {
  //   setModalShow(false);
  // };
  // const showModal = () => {
  //   setModalShow(true);
  // };
  return (
    <>
      <div className="trend-movie-card" id={movie.id}>
        <img src={"https://image.tmdb.org/t/p/w185" + movie.poster_path}></img>
        <div className="trend-movie-card-body">
          <h4>{movie.original_title}</h4>
          <Link to={"/movie/" + movie.id} className="btn">
            View Info
          </Link>
        </div>
      </div>
    </>
  );
}
