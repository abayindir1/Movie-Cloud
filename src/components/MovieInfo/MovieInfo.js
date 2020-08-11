import React from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function MovieInfo(props) {
  const [movie, setMovie] = React.useState([]);
  const [video, setVideo] = React.useState("");
  const [cast, setCast] = React.useState([]);
  const [reviews, setReviews] = React.useState([]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  React.useEffect(() => {
    getMovie();
    getVideo();
    getCast();
    getReviews();
    // console.log(props);
  }, []);

  // api calls
  const getMovie = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          props.match.params.id +
          "?api_key=" +
          process.env.REACT_APP_API_KEY +
          "&language=en-US"
      )
      .then((res) => {
        setMovie(res.data);
      });
  };

  const getVideo = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          props.match.params.id +
          "/videos?api_key=" +
          process.env.REACT_APP_API_KEY +
          "&language=en-US"
      )
      .then((response) => {
        setVideo(
          response.data.results.filter((video) => video.type === "Trailer")[0]
        );
      });
  };

  const getCast = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          props.match.params.id +
          "/credits?api_key=" +
          process.env.REACT_APP_API_KEY
      )
      .then((response) => {
        setCast(response.data.cast);
        // console.log(response.data.cast);
      });
  };

  const getReviews = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          props.match.params.id +
          "/reviews?api_key=" +
          process.env.REACT_APP_API_KEY +
          "&language=en-US&page=1"
      )
      .then((response) => {
        setReviews(response.data.results);
      });
  };
  return (
    <>
      <div className="container">
        <section>
          {movie.backdrop_path ? (
            <img
            src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path}
            className="movie-image"
          ></img>
          ):(<img
            src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
            style={{
              width: "45%",
              position:"relative",
              left:"50%",
              transform: "translate(-50%, 0)"
            }}
          ></img>)}
          <div className="movie-title">
            <h1>{movie.original_title}</h1>
            {movie.homepage && (
                <p>
                  <a className="home-page-link" href={movie.homepage} target="_blank">
                    Visit
                  </a>
                </p>
              )}
          </div>
          <div>
            <section>
              <p className="release-date">
                <span>Release Date:</span> {movie.release_date}
              </p>
              <p className="movie-overview">
                <span>Overview:</span> {movie.overview}
              </p>
              <p className="movie-average">
                <span>Average Vote:</span> {movie.vote_average}/10
              </p>
              <div className="genres">
                <h3><span>Genres:</span></h3>
              <ul>
                {movie.genres &&
                  movie.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                    ))}
              </ul>
                    </div>
              {cast && (
                <div className="cast" style={{ cursor: "grab" }}>
                  <h1 className="cast-title"><span>Cast:</span></h1>
                  <Slider {...settings}>
                    {cast.map((actor) => (
                      <div
                        key={actor.id}
                        className="actor"
                        style={{ width: "fit-content" }}
                      >
                        <h3 className="actor-name">{actor.name}</h3>
                        {actor.profile_path ? (
                          <img
                            src={
                              "https://image.tmdb.org/t/p/original/" +
                              actor.profile_path
                            }
                            className="actor-image"
                          ></img>
                        ) : (
                          <img
                          className="actor-image"
                            src={require("../../images/stock-actor.png")}
                          ></img>
                        )}
                      </div>
                    ))}
                  </Slider>
                </div>
              )}

              
            </section>
          </div>
          <div className="movie-trailer">
          <iframe
            width="100%"
            height="800"
            src={`https://www.youtube.com/embed/${video.key}`}
            ></iframe>
            </div>

            <div className="movie-reviews">
              <h1 className="review-title"><span>Reviews: </span></h1>
              {reviews.length>0 ?(
                reviews.map(review =>
                  <div key={review.id} className="review"> 
                <h3><span>Author:</span> {review.author}</h3>
                <p>{review.content}</p>
                </div>
                )
              ):(
                <div className="review">
                  <h1>No Review Found</h1>
                </div>
              )}
            </div>
        </section>
      </div>
    </>
  );
}
