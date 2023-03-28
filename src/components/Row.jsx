import React, { useState, useEffect } from "react";
import axios from "../axios";
import { BASE_URL } from "../requests";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(fetchUrl);
      setMovies(res.data.results);
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className={"row__posters"}>
        {movies?.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__postersLarge"}`}
            src={`${BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
