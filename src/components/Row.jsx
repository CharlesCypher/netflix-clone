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

  let defaultTransform = 0;
  let num = 1.6;
  const mediaQuery = window.matchMedia("(max-width: 1024px)");
  if (mediaQuery.matches) {
    num = 1.34;
  }

  console.log(num);
  function goNext() {
    const carousel = document.querySelector(".row_row__posters");
    defaultTransform -= 160;
    if (Math.abs(defaultTransform) >= Math.floor(carousel.scrollWidth / num)) defaultTransform = 0;
    carousel.style.transform = "translateX(" + defaultTransform + "px)";
  }

  function goPrev() {
    const carousel = document.querySelector(".row_row__posters");
    if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
    else defaultTransform += 160;
    carousel.style.transform = "translateX(" + defaultTransform + "px)";
  }
  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>

      <div className={"row__posters"}>
        <button className="goPrev__btn" onClick={goPrev}>
          <i className="fa-solid fa-angle-left" style={{ fontSize: "2.5rem" }}></i>
        </button>
        <div className="row_row__posters">
          {movies?.map((movie) => (
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__postersLarge"}`}
              src={`${BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              loading="lazy"
              alt={movie.name}
            />
          ))}
        </div>
        <button className="goNext__btn" onClick={goNext}>
          <i className="fa-solid fa-angle-right" style={{ fontSize: "2.5rem" }}></i>
        </button>
      </div>
    </div>
  );
}

export default Row;
