import { useState } from "react";
import res from "../requests";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Row from "../components/Row";
import { Modal } from "../components/Modal";
import "./Netflix.css";

function Netflix() {
  const [isOpen, setOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  const onClick = (event) => {
    const id = event.currentTarget.dataset.href;
    const button = document.querySelector(id);
    button.scrollIntoView({ behavior: "smooth" });
  };

  const openDialog = () => {
    setOpen(true);
    setScroll(window.scrollY);
    console.log(window.scrollY);
    window.scrollTo({
      top: 0,
    });
  };

  const closeDialog = () => {
    setOpen(false);
    window.scrollTo({
      top: scroll,
    });
    console.log(scroll);
  };

  const style = {
    position: "fixed",
    top: `${-1 * scroll}px`,
    width: "100%",
    height: "100vh",
  };
  return (
    <div>
      <Nav />
      <Banner openModal={openDialog} />
      <div className="Netflix" style={isOpen ? style : null}></div>
      <Modal isOpen={isOpen} onClose={closeDialog}>
        <div className="modal__container">
          <div className="modal__video__container">
            <video
              className="modal__video"
              src="https://download-video.akamaized.net/2/playback/d8778444-f98c-4eda-8b6c-065628554953/d641f2a3-03e206a7?__token__=st=1680005726~exp=1680020126~acl=%2F2%2Fplayback%2Fd8778444-f98c-4eda-8b6c-065628554953%2Fd641f2a3-03e206a7%2A~hmac=7cb303f91627b42a8df2009eb92fd53c3f05155d32c7b03c7c1bb890861a3f74&r=dXMtd2VzdDE%3D"
              autoPlay
              loop
            ></video>
          </div>
          <div className="blend">
            {/* <button data-href="#trays" onClick={onClick}>
              Trays
            </button>
            <button data-href="#cast" onClick={onClick}>
              Cast
            </button>
            <button data-href="#episodes" onClick={onClick}>
              Episodes
            </button> */}
          </div>
          <div
            className="video__details"
            // id="trays"
            // style={{
            //   background: "green",
            //   minHeight: "300px",
            //   paddingTop: "50px",
            // }}
          >
            Trays
          </div>
          <div
            id="cast"
            style={{
              paddingTop: "50px",
              background: "yellow",
              minHeight: "300px",
            }}
          >
            Cast
          </div>
          <div
            id="episodes"
            style={{
              background: "orange",
              minHeight: "300px",
              paddingTop: "50px",
            }}
          >
            Episodes
          </div>
        </div>
      </Modal>
      <Row title={"New Releases"} isLargeRow={true} fetchUrl={res.fetchCoriflixOriginals} />
      <Row title={"Trending Now"} fetchUrl={res.fetchTrending} />
      <Row title={"Popular on Coriflix"} fetchUrl={res.fetchTopRated} />
      <Row title={"Action Movies"} fetchUrl={res.fetchActionMovies} />
      <Row title={"Comedies"} fetchUrl={res.fetchComedyMovies} />
      <Row title={"Thriller & Horror"} fetchUrl={res.fetchHorrorMovies} />
      <Row title={"Romantic Movies"} fetchUrl={res.fetchRomanceMovies} />
      <Row title={"Documentary"} fetchUrl={res.fetchDocumentaries} />
    </div>
  );
}

export default Netflix;
