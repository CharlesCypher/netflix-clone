import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../utils/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const schema = yup.object().shape({
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
  const [err, setErr] = useState(null);
  const handleLogin = async (data) => {
    try {
      const { email, password } = data;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      setErr("");
      navigate("/");
    } catch (error) {
      setTimeout(() => {
        setErr(error?.message);
      }, 2000);
    }
  };
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
      <div className="login__content">
        <div className="login__login">
          <h2 className="login__title">Login</h2>
          <form className="login__form" onSubmit={handleSubmit(handleLogin)}>
            <input className="login__input email" type="email" placeholder="Email address" name="email" {...register("email")} />
            <span className="login__err">{errors?.email?.message}</span>
            <input className="login__input password" type="password" placeholder="Password" name="password" {...register("password")} />
            <span className="login__err">{errors?.password?.message}</span>
            <input className="login__btn" type="submit" value="Login" aria-label="Login" />
            {err && <span className="login__err">{err}</span>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
