import React, { useEffect, useState } from "react";
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
      console.log(error.message);
    }
  };
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) navigate("/");
    });
  }, []);

  // const smallAlphas = "/[a-z]/g";
  // const emailInput = document.querySelector(".login__input");
  // if (emailInput.value.match(smallAlphas)){

  // }
  return (
    <div
      className="login"
      style={{
        height: "100vh",
        position: "relative",
        backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/8f12b4f0-a894-4d5b-9c36-5ba391c63fbe/6d18e1d5-258b-4181-82e8-75d9b241d7ea/NG-en-20230320-popsignuptwoweeks-perspective_alpha_website_large.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        zIndex: 1,
      }}
    >
      <div className="login__overlay"></div>
      <Header />
      <div className="login__content">
        <div className="login__login">
          <h2 className="login__title">Sign In</h2>
          <form className="login__form">
            <input
              className="login__input email"
              type="email"
              placeholder="Email address"
              value={formValues.email}
              name="email"
              required
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
              minLength={6}
              maxLength={20}
              required
              onChange={(e) => {
                setFormValues({ ...formValues, [e.target.name]: e.target.value });
              }}
            />
            <button className="login__btn" onClick={handleLogin}>
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
