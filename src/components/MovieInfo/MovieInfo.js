import React from "react";
import axios from "axios";
import TrendMovieItem from "../TrendingMovies/TrendMovieItem";
import Header from "../Header/Header";
import "./MovieInfo.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function MovieInfo(props) {
  // const {match, }

  const [movie, setMovie] = React.useState([]);
  const [video, setVideo] = React.useState("");
  const [cast, setCast] = React.useState([]);
  const [reviews, setReviews] = React.useState([]);
  const [similar, setSimilar] = React.useState([]);

  const movieId = props.match.params.id;

  React.useEffect(() => {
    window.scrollTo(0, 0);
    getMovie();
    getVideo();
    getCast();
    getReviews();
    getSimilar();
  }, [movieId, window.location.pathname]);

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // api calls
  const getMovie = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
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
          movieId +
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
          movieId +
          "/credits?api_key=" +
          process.env.REACT_APP_API_KEY
      )
      .then((response) => {
        var items = response.data.cast.slice(0, 12).map((item) => {
          return item;
        });
        setCast(items);
        // console.log(response.data.cast);
      });
  };

  const getReviews = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/reviews?api_key=" +
          process.env.REACT_APP_API_KEY +
          "&language=en-US&page=1"
      )
      .then((response) => {
        setReviews(response.data.results);
        // console.log(response.data.results);
      });
  };

  const getSimilar = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/similar?api_key=" +
          process.env.REACT_APP_API_KEY +
          "&language=en-US&page=1"
      )
      .then((res) => {
        var items = res.data.results.slice(0, 10).map((item) => {
          return item;
        });
        setSimilar(items);
      });
  };
  return (
    <>
      <Header />
      <div className="container">
        <section>
          {movie.backdrop_path ? (
            <img
              src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path}
              className="movie-image"
            ></img>
          ) : (
            <img
              src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
              style={{
                width: "45%",
                position: "relative",
                left: "50%",
                transform: "translate(-50%, 0)",
              }}
            ></img>
          )}
          <div className="movie-title" id="info">
            <h1>{movie.original_title}</h1>
            {movie.homepage && (
              <p>
                <a
                  className="home-page-link"
                  href={movie.homepage}
                  target="_blank"
                >
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
                <h3>
                  <span>Genres:</span>
                </h3>
                <ul>
                  {movie.genres &&
                    movie.genres.map((genre) => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                </ul>
              </div>
              {cast && (
                <div className="cast" style={{ cursor: "grab" }}>
                  <h1 className="cast-title">
                    <span>Cast:</span>
                  </h1>
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
          <div className="movie-trailer" id="trailer">
            {!video ? (
              <h1>No Trailer Found</h1>
            ) : (
              <iframe
                width="100%"
                height="800"
                src={`https://www.youtube.com/embed/${video.key}`}
              ></iframe>
            )}
          </div>

          <div className="movie-reviews" id="reviews">
            <h1 className="review-title">
              <span>Reviews: </span>
            </h1>
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <div key={review.id} className="review">
                  <h3>
                    <span>Author:</span> {review.author}
                  </h3>
                  <p>
                    {review.content.length > 300
                      ? review.content.substring(0, 300) + "..."
                      : review.content}
                  </p>
                  <br />
                  <a className="review-link" href={review.url} target="_blank">
                    Read full review
                  </a>
                </div>
              ))
            ) : (
              <div className="review">
                <h1>No Review Found</h1>
              </div>
            )}
          </div>

          <div className="similar-movies" id="similar">
            <h1 className="similar-title">Similar Movies:</h1>
            <div className="similar-movie-list">
              {similar.length > 0 ? (
                similar.map((movie) => (
                  <TrendMovieItem key={movie.id} movie={movie} />
                ))
              ) : (
                <h1 className="no-similar">No Similar Movie Found</h1>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
