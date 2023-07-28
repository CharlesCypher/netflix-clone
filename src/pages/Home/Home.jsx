import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import res from "../../constants/requests";
import Banner from "../../components/Banner/Banner";
import Row from "../../components/Rows/Row";
import "./Home.css";

function Home() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      {pathname === "/tvshows" ? (
        <>
          <Banner />
          <Row title={"New Releases"} fetchUrl={res.fetchCoriflixOriginals} />
        </>
      ) : (
        <>
          <Banner />
          <Row title="Trending" fetchUrl={res.fetchTrending} />
          <Row title="Action" fetchUrl={res.fetchActionMovies} />
          <Row title="Comedies" fetchUrl={res.fetchComedyMovies} />
          <Row title="Horror" fetchUrl={res.fetchHorrorMovies} />
          <Row title="Romance" fetchUrl={res.fetchRomanceMovies} />
          <Row title="Documentaries" fetchUrl={res.fetchDocumentaries} />
        </>
      )}
    </div>
  );
}

export default Home;
