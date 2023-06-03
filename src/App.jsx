import Netflix from "./pages/Netflix";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import TvShows from "./pages/TvShows";
import Player from "./components/Player";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/player" element={<Player />} />
          <Route exact path="/tvshows" element={<TvShows />}></Route>
          <Route exact path="/" element={<Netflix />} />
          <Route exact path="*" element={<div className="pageNotFound">404 ERROR: PAGE NOT FOUND 🤖</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
