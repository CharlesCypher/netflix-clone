import ReactDOM from "react-dom";

export const Modal = ({ isOpen, children, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const Overlay = (
    <>
      <div
        onClick={onClose}
        style={{
          background: "black",
          opacity: "0.7",
          position: "fixed",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
        }}
      ></div>
      <div
        onClick={(event) => event.preventDefault()}
        style={{
          zIndex: 1,
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          paddingTop: "20px",
          paddingBottom: "20px",
          height: "fit-content",
        }}
      >
        {children}
      </div>
    </>
  );

  return ReactDOM.createPortal(Overlay, document.body);
};
