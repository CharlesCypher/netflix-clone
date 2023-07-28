import axios from "../../constants/axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./MovieDetail.css";

function MovieDetail() {
  const movieId = useParams().id;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [movies, setMovies] = useState([]);
  const API_KEY = "a6591ee65cb5770b86c8ef099076f862";
  useEffect(() => {
    const fetchMovie = async () => {
      const res = await axios.get(
        pathname === `/tv/${movieId}` ? `tv/${movieId}/videos?api_key=${API_KEY}` : `movie/${movieId}/videos?api_key=${API_KEY}`
      );
      setMovies(res.data.results);
    };
    fetchMovie();
  }, [movieId]);
  return (
    <div className="video__container">
      <iframe
        className="video__iframe"
        src={`https://www.youtube.com/embed/${movies?.filter((movie) => movie.type === "Trailer")[0]?.key}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
      ></iframe>
      <button onClick={() => navigate(-1)}>BACK</button>
    </div>
  );
}

export default MovieDetail;
