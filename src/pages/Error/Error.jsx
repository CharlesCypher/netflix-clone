import { useNavigate } from "react-router-dom";
import "./Error.css";

function Error() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="pageNotFound">
        <h2>404 ERROR: PAGE NOT FOUND 🤖</h2>
        <div className="btn__center">
          <button
            className="nav__btn"
            onClick={() => {
              navigate("/");
            }}
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Error;
