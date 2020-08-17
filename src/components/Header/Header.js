import React from "react";
import {Link} from "react-router-dom"
import "./Header.css"

export default function Header() {
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname)
  const [ifRoute, setIfRoute] = React.useState(currentPath==="/")

  React.useEffect(() => {
    changeNav()
  },[ifRoute]);

  const changeNav =()=>{
    if(currentPath === "/"){
      setIfRoute(true)
    }else{
      setIfRoute(false)
    }
    
  }

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
          <li><a href="#now-playing">Now Playing</a></li>
          <li><a href="#top-rated">Top Rated</a></li>
      </ul>
        ):(
          <ul>
          <li><a href="#info">Overview</a></li>
          <li><a href="#trailer">Trailer</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#similar">Similar Movies</a></li>
      </ul>
        )}
    </div>
  );
}
