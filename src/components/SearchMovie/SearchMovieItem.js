import React from 'react'

export default function SearchMovieItem(props) {
    return (
        <div className="search-item-container">
            <section className="search-img">
                <img src={`https://image.tmdb.org/t/p/w342${props.poster}`}></img>
            </section>
            <section className="search-content">
    <h1>{props.title}</h1>
    <p>Overview: {props.overview}</p>
    <p>Release Date: {props.release_date}</p>
    <p>Popularity: {props.popularity}</p>
    <h3>Recomended Searches</h3>
    <ul className="recomendations">
        {props.recomendations.map(recomendation=> 
            <li key={recomendation.id}>{recomendation.original_title}</li>
            )}
    </ul>
            </section>
        </div>
    )
}
