import React from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MovieModal from "../MovieInfo/MovieInfo";
import NowPlayindItem from "./NowPlayindItem";
import TrendingMovies from "../TrendingMovies/TrendingMovies";

export default function NowPlaying() {
  const [movies, setMovies] = React.useState([]);
  // const [modalShow, setModalShow] = React.useState(false);

  React.useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=" +
          process.env.REACT_APP_API_KEY +
          "&language=en-US&page=1"
      )
      .then((res) => {
        var items = res.data.results.slice(0, 5).map((item) => {
          return item;
        });
        setMovies(items);
        // console.log(items);
      });
  }, []);

  // const hideModal = () => {
  //   setModalShow(false);
  // };
  // const showModal = () => {
  //   setModalShow(true);
  // };

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className="now-playing">
      {movies.length > 0 ? (
        <>
          <Slider {...settings}>
            {movies.map((movie) => (
              <NowPlayindItem key={movie.id} movie={movie}/>
              ))}
          </Slider>
          <TrendingMovies/>
              </>
      ) : (
        <h1>No Movie Found</h1>
      )}
    </div>
  );
}
