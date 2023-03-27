import React, { useEffect, useState } from "react";
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
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2880px-Netflix_2015_logo.svg.png"
          alt="logo"
        />
        <img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user" />
      </nav>
    </header>
  );
}

export default Nav;
