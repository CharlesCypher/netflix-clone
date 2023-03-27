import React, { useState } from "react";
import { firebaseAuth } from "../utils/firebase-config";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./Login.css";

function Signup() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const { email, password } = formValues;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      <div className="error__message" style={{ color: "white" }}>
        User not Found
      </div>;
    }
  };
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <div className="login">
      <Header />
      <div className="login__content">
        <div className="login__login">
          <h2 className="login__title">Login</h2>
          <form className="login__form">
            <input
              className="login__input email"
              type="email"
              placeholder="Email address"
              value={formValues.email}
              name="email"
              onChange={(e) => {
                setFormValues({ ...formValues, [e.target.name]: e.target.value });
              }}
            />
            <input
              className="login__input password"
              type="password"
              placeholder="Password"
              value={formValues.password}
              name="password"
              onChange={(e) => {
                setFormValues({ ...formValues, [e.target.name]: e.target.value });
              }}
            />
            <button className="login__btn" onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
