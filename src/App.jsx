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
          <Route exact path="/" element={<Home />} errorElement={<Error />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/sign-up" element={<Signup />} />
          <Route
            exact
            path="/movie/:id"
            element={
              <ProtectedRoute>
                <Movie />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/tv/:id"
            element={
              <ProtectedRoute>
                <Series />
              </ProtectedRoute>
            }
          />
          <Route exact path="/tvshows" element={<TvShows />} />
          <Route
            exact
            path="/my-list"
            element={
              <ProtectedRoute>
                <Lists />
              </ProtectedRoute>
            }
          />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
