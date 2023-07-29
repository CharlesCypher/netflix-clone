import "./Banner.css";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Modal from "../Modal/Modal";
import res from "../../constants/requests";
import axios from "../../constants/axios";
import { useDispatch } from "react-redux";
import { addToList } from "../../features/list/listSlice";

function Banner() {
  const API_KEY = "a6591ee65cb5770b86c8ef099076f862";
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [movie, setMovie] = useState([]);
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(pathname === "/tvshows" ? res.fetchCoriflixOriginals : res.fetchActionMovies);
      setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length - 2)]);
      setMovieId(movie?.id);
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchMovie() {
      const response = await axios.get(
        pathname === `/tvshows` ? `tv/${movieId}/videos?api_key=${API_KEY}` : `movie/${movieId}/videos?api_key=${API_KEY}`
      );
      setMovies(response.data.results);
    }
    fetchMovie();
  }, [movieId]);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const BANNER_STYLES = {
    backgroundSize: "cover",
    backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
    backgroundPosition: "top center",
  };

  return (
    <>
      <div className="banner" style={BANNER_STYLES}>
        <div className="banner__contents">
          <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
          <div className="banner__buttons">
            <Link to={pathname === "/tvshows" ? `/tv/${movie?.id}` : `/movie/${movie?.id}`} className="banner__button">
              <i className="fa-solid fa-play " style={{ color: "#000000" }}></i>
              Play
            </Link>
            <button
              className="banner__button"
              onClick={() => {
                setIsOpen(true);
                setMovieId(movie?.id);
              }}
            >
              <i className="fa-solid fa-plus" style={{ color: "#ffffff" }}></i>More Info
            </button>
          </div>
          <p className="banner__description">{truncate(movie?.overview, 200)}</p>
        </div>
        <div className="banner__fade"></div>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="modal">
          {/* <div className="modalVideo__container">
            <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" autoPlay loop></video>
          </div> */}
          <div className="video__container">
            <iframe
              className="video__iframe"
              src={`https://www.youtube.com/embed/${movies?.filter((movie) => movie.type === "Trailer")[0]?.key}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share;"
            ></iframe>
          </div>
          <div className="modalText__container">
            <h2 className="modal__title">{movie?.title || movie?.name || movie?.original_name}</h2>
            <p className="modal__desc">{movie?.overview}</p>
            <div className="modalBtn__wrapper">
              <Link to={pathname === "/tvshows" ? `/tv/${movie?.id}` : `/movie/${movie?.id}`} className="banner__button">
                <i className="fa-solid fa-play " style={{ color: "#000000" }}></i>
                Play
              </Link>
              <button
                className="banner__button"
                onClick={() =>
                  dispatch(
                    addToList({
                      id: movie?.id,
                      movieName: movie?.title || movie?.name || movie?.original_name,
                      movieImage: `https://image.tmdb.org/t/p/original${movie?.poster_path}`,
                    })
                  )
                }
              >
                <i className="fa-solid fa-plus" style={{ color: "#000000" }}></i> Add to list
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Banner;
