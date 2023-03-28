import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) setShowNav(true);
      else setShowNav(false);
    });
    return () => {
      window.removeEventListener("scroll", setShowNav());
    };
  }, []);

  return (
    <header>
      <nav className={`nav ${showNav && "nav__show"}`} role={"navigation"}>
        <div className="nav__left">
          <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2880px-Netflix_2015_logo.svg.png"
            alt="logo"
          />
          <ul className="nav__links">
            <li className="link">
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
            </li>
            <li className="link">
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                TV Shows
              </Link>
            </li>
            <li className="link">
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                Movies
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
            <li className="link">
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                Browse by Language
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav__right">
          <img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user" />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
