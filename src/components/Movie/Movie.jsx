import React from "react";
import MovieDetail from "../MovieDetails/MovieDetail";
import { useNavigate } from "react-router-dom";

function Movie() {
  const navigate = useNavigate();
  return (
    <div>
      <MovieDetail />
    </div>
  );
}

export default Movie;
