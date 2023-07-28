import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/sign-up" element={<Signup />} />
          <Route exact path="/movie/:id" element={<Movie />} />
          <Route exact path="/tv/:id" element={<Series />} />
          <Route exact path="/tvshows" element={<TvShows />} />
          <Route exact path="/my-list" element={<Lists />} />
          <Route exact path="*" element={<div className="pageNotFound">404 ERROR: PAGE NOT FOUND 🤖</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
