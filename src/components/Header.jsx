import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();
  return (
    <header className="header">
      <img
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2880px-Netflix_2015_logo.svg.png"
        alt="logo"
      />
      <button
        className="header__btn"
        onClick={() => {
          navigate(props.login ? "/login" : "/signup");
        }}
      >
        {props.login ? "Login" : "Sign Up"}
      </button>
    </header>
  );
}

export default Header;
