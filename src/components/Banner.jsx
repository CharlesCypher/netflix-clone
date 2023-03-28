import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import res from "../requests";
import axios from "../axios";
import "./Banner.css";

function Banner({ openModal }) {
  const [movie, setMovie] = useState([]);
  // const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(res.fetchCoriflixOriginals);
      setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length - 1)]);
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "top center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button
            className="banner__button"
            onClick={() => {
              openModal();
            }}
          >
            <i className="fa-solid fa-play " style={{ color: "#000000" }}></i>
            Play
          </button>
          <button className="banner__button">
            <i className="fa-solid fa-plus" style={{ color: "#ffffff" }}></i>More Info
          </button>
        </div>
        <p className="banner__description">{truncate(movie?.overview, 200)}</p>
      </div>
      <div className="banner__fade"></div>
    </div>
  );
}

export default Banner;
