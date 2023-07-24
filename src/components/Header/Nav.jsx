import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../../utils/firebase-config";
import { AuthContext } from "../../context/AuthContext";
import "./Nav.css";

function Nav() {
  const { pathname } = useLocation();
  const { currentUser } = useContext(AuthContext);
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) setShowNav(true);
      else setShowNav(false);
    });
    return () => window.removeEventListener("scroll", setShowNav());
  }, []);

  return (
    <header>
      <nav className={`nav ${showNav && "nav__show"}`} role={"navigation"}>
        <div className="nav__left">
          <Link to="/">
            <img
              className="nav__logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2880px-Netflix_2015_logo.svg.png"
              alt="logo"
            />
          </Link>
          {currentUser ? (
            <>
              <ul className="nav__links">
                <li className="link">
                  <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                    Movies
                  </Link>
                </li>
                <li className="link">
                  <Link to={"/tvshows"} style={{ textDecoration: "none", color: "white" }}>
                    Series
                  </Link>
                </li>
                <li className="link">
                  <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                    New & Popular
                  </Link>
                </li>
                <li className="link">
                  <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                    My List
                  </Link>
                </li>
              </ul>
            </>
          ) : (
            ""
          )}
        </div>
        {currentUser ? (
          <>
            <div className="nav__right">
              <img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user" />
              <i
                className="fa-solid fa-arrow-right-from-bracket"
                style={{ color: "#ffffff", fontSize: "1.5rem" }}
                onClick={() => {
                  signOut(firebaseAuth);
                }}
              ></i>
            </div>
          </>
        ) : (
          <button
            className="nav__btn"
            onClick={() => {
              navigate(pathname === "/sign-up" ? "/login" : "/sign-up");
            }}
          >
            {pathname === "/sign-up" ? "Login" : "Sign Up"}
          </button>
        )}
      </nav>
    </header>
  );
}

export default Nav;
