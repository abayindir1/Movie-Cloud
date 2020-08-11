import React from "react";

export default function Header() {
  return (
    <div
      className="header"
    >
      <img id="logo" src={require("../../images/logo.png")}/>
      <h1>Moviotheca</h1>
      <ul>
        <li><a href="#">Search</a></li>
        <li><a href="#trending">Trending</a></li>
      </ul>
    </div>
  );
}
