import React from "react";
import TrendingMovies from "../TrendingMovies/TrendingMovies";
import SearchMovie from "../SearchMovie/SearchMovie";
import Header from "../Header/Header";
import NowPlaying from "../NowPlaying/NowPlaying";
import TopRated from "../TopRated/TopRated";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="landing"></div>
      <SearchMovie />
      <TrendingMovies/>
      <NowPlaying/>
      <TopRated/>
    </div>
  );
}
