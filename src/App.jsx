import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Header/Nav";
import Home from "./pages/Home/Home";
import Signup from "./pages/Register/Signup";
import Login from "./pages/Login/Login";
import TvShows from "./pages/Series/TvShows";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Series from "./components/Series/Series";
import Movie from "./components/Movie/Movie";
import "./App.css";
import Lists from "./pages/Lists/Lists";
import Error from "./pages/Error/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} errorElement={<Error />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/tv/:id" element={<Series />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/my-list" element={<Lists />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
