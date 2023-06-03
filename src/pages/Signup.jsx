import React, { useEffect, useState } from "react";
import { firebaseAuth } from "../utils/firebase-config";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./Signup.css";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSignin = async (e) => {
    try {
      e.preventDefault();
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) navigate("/");
    });
  }, []);

  return (
    <div className="signup__wrapper">
      <div
        className="signup"
        style={{
          height: "700px",
          position: "relative",
          backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/8f12b4f0-a894-4d5b-9c36-5ba391c63fbe/6d18e1d5-258b-4181-82e8-75d9b241d7ea/NG-en-20230320-popsignuptwoweeks-perspective_alpha_website_large.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Header login={"login"} />
        <div className="signup__overlay"></div>
        <div className="signup__content">
          <h1 className="signup__title">Unlimited movies, TV shows, and more.</h1>
          <h3 className="signup__subtitle">Watch anywhere. Cancel anytime.</h3>
          <h4 className="signup__desc">Ready to watch? Enter your email to create or restart your membership.</h4>
          <form className={`signup__form ${showPassword && "signup__column"}`}>
            <input
              className="signup__input email"
              type="email"
              placeholder="Email address"
              value={formValues.email}
              name="email"
              onChange={(e) => {
                setFormValues({ ...formValues, [e.target.name]: e.target.value });
              }}
            />
            {showPassword && (
              <input
                className="signup__input password"
                type="password"
                placeholder="Password"
                value={formValues.password}
                name="password"
                onChange={(e) => {
                  setFormValues({ ...formValues, [e.target.name]: e.target.value });
                }}
              />
            )}
            {!showPassword && (
              <button
                className="signup__btn"
                onClick={() => {
                  setShowPassword(true);
                }}
              >
                Get Started
              </button>
            )}
            {showPassword && (
              <button className="signup__btn" onClick={handleSignin}>
                Sign In
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
