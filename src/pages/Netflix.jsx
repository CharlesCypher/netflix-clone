import res from "../requests";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Row from "../components/Row";

function Netflix() {
  return (
    <div className="Netflix">
      <Nav />
      <Banner />
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
