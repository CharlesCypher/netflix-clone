import React from "react";
import { useNavigate } from "react-router-dom";

function Player() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <i className="fa-solid fa-arrow-left" style={{ color: "#ffffff", fontSize: "3rem" }}></i>
      </button>
    </div>
  );
}

export default Player;
