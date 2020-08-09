import React from "react";

export default function MovieModal(props) {
  React.useEffect(() => {
    // console.log(props);
  }, []);
  
  return (
    <>
      <div
        className={props.show ? "modal display-block" : "modal display-none"}
      >
        <section className="modal-main">
          <button onClick={props.onHide}>
            <i className="fas fa-times"></i>
          </button>
          <div className="modal-header">
            <h1>{props.movie.original_title}</h1>
            <hr />
          </div>
          <div className="modal-body">
            <img
              src={"https://image.tmdb.org/t/p/original/" + props.movie.backdrop_path}
              className="trend-image"
            ></img>
            <section className="movie-info">
              <p><span className="modal-bold">Release Date:</span> {props.movie.release_date}</p>
              <p className="movie-overview"><span className="modal-bold">Overview:</span> {props.movie.overview}</p>
              <p ><span className="modal-bold">Average Vote:</span> {props.movie.vote_average}</p>
            </section>  
          </div>
        </section>
      </div>
    </>
  );
}
