import React from "react";
import MovieModal from "../Modal/MovieModal";


export default function TrendMovieItem({ movie }) {
  const [modalShow, setModalShow] = React.useState(false);
  //   React.useEffect(() => {
  //     console.log(movie);
  //   }, []);

  const hideModal = () => {
    setModalShow(false);
  };
  const showModal = () => {
    setModalShow(true);
  };
  return (
    <>
      <div className="trend-movie-card" id={movie.id}>
        <img src={"https://image.tmdb.org/t/p/w185" + movie.poster_path}></img>
        <div className="trend-movie-card-body">
          <h4>{movie.original_title}</h4>
          <button className="open-modal" onClick={showModal}>
            View Info
          </button>
        </div>
      </div>
        <MovieModal
          movie={movie}
          show={modalShow}
          onHide={hideModal}
        />
    </>
  );
}
