import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "../../axios";
import { BASE_URL } from "../../requests";
import "./Row.css";

function Row({ title, fetchUrl }) {
  const movieId = useParams().id;
  const { pathname } = useLocation();
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
            <div key={movie.id} className="row__poster">
              <Link to={pathname === "/tvshows" ? `/tv/${movie?.id}` : `/movie/${movie?.id}`}>
                <img src={`${BASE_URL}${movie.poster_path}`} loading="lazy" alt={movie.name} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Row;
