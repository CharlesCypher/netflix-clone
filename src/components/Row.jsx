import React, { useState, useEffect } from "react";
import axios from "../axios";
import { BASE_URL } from "../requests";
import "./Row.css";

function Row({ title, fetchUrl }) {
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
      <div className="row__posters">
        <div className="row_row__posters">
          {movies?.map((movie) => (
            <img key={movie.id} className="row__poster row__postersLarge" src={`${BASE_URL}${movie.poster_path}`} loading="lazy" alt={movie.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Row;
