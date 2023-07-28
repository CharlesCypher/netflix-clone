import React, { useState, useEffect } from "react";
import "./Row.css";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "../../constants/axios";
import { BASE_URL } from "../../constants/requests";
import { useDispatch } from "react-redux";
import { addToList } from "../../features/list/listSlice";

function Row({ title, fetchUrl }) {
  const dispatch = useDispatch();
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
                <img src={`${BASE_URL}${movie.poster_path}`} loading="lazy" alt={movie?.title || movie?.name} />
              </Link>
              <button
                className="wishList__btn"
                onClick={() =>
                  dispatch(
                    addToList({
                      id: movie?.id,
                      movieName: movie?.title || movie?.name || movie?.original_name,
                      movieImage: `${BASE_URL}${movie.poster_path}`,
                    })
                  )
                }
              >
                like
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Row;
