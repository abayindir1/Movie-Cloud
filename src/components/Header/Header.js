import React from "react";
import {Link} from "react-router-dom"

export default function Header() {
  const [ifRoute, setIfRoute] = React.useState(null)

  React.useEffect(() => {
    if(window.location.pathname === "/"){
      setIfRoute(true)
    }else{
      setIfRoute(false)
    }
  },[]);
  // const movieId = props.match.params.id;

  return (
    <div
      className="header"
    >
      <img id="logo" src={require("../../images/logo.png")}/>
      <Link to="/" id="page-title">
      <h1>Moviotheca</h1>
      </Link>
        {ifRoute ? (
          <ul>
          <li><a href="#search">Search</a></li>
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
