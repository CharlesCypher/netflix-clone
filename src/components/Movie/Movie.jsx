import React from "react";
import MovieDetail from "../MovieDetails/MovieDetail";
import { useNavigate } from "react-router-dom";

function Movie() {
  const navigate = useNavigate();
  return (
    <div style={{ paddingTop: "5rem" }}>
      <button onClick={() => navigate(-2)}>BAck</button>
      <MovieDetail />
    </div>
  );
}

export default Movie;
