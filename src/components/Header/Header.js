import React from "react";

export default function Header() {
  React.useEffect(() => {
    console.log(window.location.pathname)
  },[]);
  // const movieId = props.match.params.id;

  return (
    <div
      className="header"
    >
      <img id="logo" src={require("../../images/logo.png")}/>
      <h1>Moviotheca</h1>
        {window.location.pathname === "/" ? (
      <ul>
          <li><a href="#">Search</a></li>
          <li><a href="#trending">Trending</a></li>
      </ul>
        ):(
          <ul>
          <li><a href="#info">Movie Info</a></li>
          <li><a href="#trailer">Trailer</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#similar">Similar Movies</a></li>
      </ul>
        )}
    </div>
  );
}
