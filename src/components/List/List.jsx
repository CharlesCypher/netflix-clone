import React from "react";
import { useSelector } from "react-redux";

function List() {
  const lists = useSelector((state) => state.list.movies);
  console.log(lists);
  return (
    <div>
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
