import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function ProtectedRoute({ children }) {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  if (!currentUser) {
    navigate("/login");
  }
  return children;
}

export default ProtectedRoute;
