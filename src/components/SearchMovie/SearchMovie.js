import React from "react";
import axios from "axios";
import SearchMovieItem from "./SearchMovieItem";

export default function SearchMovie() {
  const [search, setSearch] = React.useState("");
  const [movies, setMovies] = React.useState([]);
  const [recomendations, setRecomendations] = React.useState([]);

  // React.useEffect(() => {
  //   if(movies.length > 5 ){
  //       movies.slice(0, 4)
  //   }
  // });

  const onChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${search}`
      )
      .then((res) => {
        var items = res.data.results.slice(0, 3).map((item) => {
          return item;
        });
        if (items.length > 0) {
          for (var i = 0; i < items.length; i++) {
            axios
              .get(
                `https://api.themoviedb.org/3/movie/${items[i].id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
              )
              .then((response) => {
                var recomendations = response.data.results
                  .slice(0, 10)
                  .map((movie) => {
                    return movie;
                  });
                setRecomendations(recomendations);
              });
          }
        }
        setMovies(items);
      });

    setSearch("");
  };

  return (
    <div>
      <div className="form-group">
        <input
          type="search"
          placeholder="Search for a movie"
          name="search"
          value={search}
          onChange={(e) => onChange(e)}
          required
        />
        <button onClick={(e) => onSubmit(e)}>Search</button>
      </div>
      <div className="search-result">
        {movies.length > 0 &&
          movies.map((movie) => (
            // console.log(movie)
            <SearchMovieItem
              key={movie.id}
              title={movie.original_title}
              overview={movie.overview}
              popularity={movie.popularity}
              release_date={movie.release_date}
              poster={movie.poster_path}
              recomendations={recomendations}
            />
          ))}
      </div>
    </div>
  );
}
