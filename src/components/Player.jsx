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
      <video
        src="https://download-video.akamaized.net/2/playback/d8778444-f98c-4eda-8b6c-065628554953/d641f2a3-03e206a7?__token__=st=1680005726~exp=1680020126~acl=%2F2%2Fplayback%2Fd8778444-f98c-4eda-8b6c-065628554953%2Fd641f2a3-03e206a7%2A~hmac=7cb303f91627b42a8df2009eb92fd53c3f05155d32c7b03c7c1bb890861a3f74&r=dXMtd2VzdDE%3D"
        controls
        autoPlay
      ></video>
    </div>
  );
}

export default Player;
