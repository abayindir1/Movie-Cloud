import React from "react";

export default function NowPlayindItem({ movie }) {
  return (
    <img
      src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}
    style={{width:"100%", height:"99vh"}}
    ></img>
  );
}
