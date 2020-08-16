import React, { useEffect, useState } from "react";
import axios from "axios";
import TrendMovieItem from "./TrendMovieItem";
import "./Trending.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function TrendingMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending()
  }, []);

  const getTrending =()=>{
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=" +
          process.env.REACT_APP_API_KEY
      )
      .then((res) => {
        setMovies(res.data.results);
        console.log(res.data.results);
      });
  }
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="trendings">
      <h1 id="trending-title">Today's Trending Movies</h1>
    <div className="trending-movies" id="trending">
    <Slider {...settings}>
      {movies.length > 0 ? (
        movies.map((movie) => <TrendMovieItem key={movie.id} movie={movie} />)
        ) : (
          <h1>No Movie Found</h1>
          )}
          </Slider>
    </div>
    </div>
  );
}
