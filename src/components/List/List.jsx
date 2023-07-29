import React from "react";
import { useSelector } from "react-redux";

function List() {
  const lists = useSelector((state) => state.list.movies);
  console.log(lists);
  return (
    <div
      style={{
        paddingInline: "2.5rem",
        paddingBlock: "5rem",
        color: "white",
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        width: "100%",
        height: "100%",
        gap: "1.5rem",
      }}
    >
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
