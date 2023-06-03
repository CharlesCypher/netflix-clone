import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import res from "../requests";
import axios from "../axios";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
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

  const BANNER_STYLES = {
    backgroundSize: "cover",
    backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
    backgroundPosition: "top center",
  };

  return (
    <div className="banner" style={BANNER_STYLES}>
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button" onClick={() => navigate("/player")}>
            <i className="fa-solid fa-play " style={{ color: "#000000" }}></i>
            Play
          </button>
          <button className="banner__button" onClick={() => setIsOpen(true)}>
            <i className="fa-solid fa-plus" style={{ color: "#ffffff" }}></i>More Info
          </button>
        </div>
        <p className="banner__description">{truncate(movie?.overview, 200)}</p>
      </div>
      <div className="banner__fade"></div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="modal">
          <div className="modalVideo__container">
            <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" autoPlay loop></video>
          </div>
          <div className="modalText__container">
            <h2>Coming Soon...</h2>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Banner;
