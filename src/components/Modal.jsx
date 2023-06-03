import React from "react";
import ReactDOM from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "55%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "var(--clr-backdrop)",
  borderRadius: "1rem 1rem 0 0",
  zIndex: 10,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,.7)",
  zIndex: 2,
};

const CLOSEBTN_STYLES = {
  position: "absolute",
  top: "2%",
  right: "2%",
  border: "none",
  background: "none",
  cursor: "pointer",
  zIndex: 2,
};

export default function Modal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES}></div>
      <div style={MODAL_STYLES}>
        <button className="closeModal__btn" style={CLOSEBTN_STYLES} onClick={onClose}>
          <i className="fa-solid fa-xmark" style={{ color: "#ff0000", fontSize: "2rem" }}></i>
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
