import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../utils/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    username: yup.string().min(4).max(10).required("Please input a username"),
    email: yup.string().required("Please input your email"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(18, "Password must be at most 18 characters")
      .required("Please input your password"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });
  const [showPassword, setShowPassword] = useState(false);
  const [err, setErr] = useState(null);
  const handleSignin = async (data) => {
    try {
      const { email, password } = data;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      setErr("");
      navigate("/");
    } catch (error) {
      setErr(error?.message);
    }
  };
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
        <div className="signup__overlay"></div>
        <div className="signup__content">
          <h1 className="signup__title">Unlimited movies, TV shows, and more.</h1>
          <h3 className="signup__subtitle">Watch anywhere. Cancel anytime.</h3>
          <h4 className="signup__desc">Ready to watch? Enter your email to create or restart your membership.</h4>
          <form className={`signup__form ${showPassword && "signup__column"}`} onSubmit={handleSubmit(handleSignin)}>
            {/* <input className="signup__input username" type="text" name="username" placeholder="Username" {...register("username")} /> */}
            <input className="signup__input email" type="email" placeholder="Email address" name="email" {...register("email")} />
            {showPassword && (
              <>
                <span className="login__err">{errors?.email?.message}</span>
                <input className="signup__input password" type="password" placeholder="Password" name="password" {...register("password")} />
                <span className="login__err">{errors?.password?.message}</span>
              </>
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
            {showPassword && <input className="signup__btn" type="submit" value="Sign up" aria-label="Sign up" />}
            {err && <span className="signup__err">{err}</span>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
