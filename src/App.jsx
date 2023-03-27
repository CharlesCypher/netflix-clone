import res from "./requests";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Row from "./components/Row";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title={"CORIFLIX ORIGINAL"} isLargeRow={true} fetchUrl={res.fetchCoriflixOriginals} />
      <Row title={"Trending"} fetchUrl={res.fetchTrending} />
      <Row title={"Top Rated"} fetchUrl={res.fetchTopRated} />
      <Row title={"Action"} fetchUrl={res.fetchActionMovies} />
      <Row title={"Comedy"} fetchUrl={res.fetchComedyMovies} />
      <Row title={"Horror"} fetchUrl={res.fetchHorrorMovies} />
      <Row title={"Romance"} fetchUrl={res.fetchRomanceMovies} />
      <Row title={"Documentary"} fetchUrl={res.fetchDocumentaries} />
    </div>
  );
}

export default App;
