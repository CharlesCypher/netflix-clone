import React from "react";
import { useSelector } from "react-redux";
import "./List.css";

function List() {
  const lists = useSelector((state) => state.list.movies);
  return (
    <div className="list__container">
      {lists.map((movie) => (
        <div className="" key={movie.id}>
          <h2>{movie.movieName}</h2>
          <img src={movie.movieImage} alt="" />
        </div>
      ))}
    </div>
  );
}

export default List;
