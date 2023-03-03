import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import plus from "../../assets/images/functional-icons/plus-icon.png";
import presentation from "../../assets/images/homepage/homepage-image.png";
import logo from "../../assets/images/logo/logo-black.png";
import Button from "../../components/Button/Button";
import { auth } from "../../firebase";

import "./Login.scss";

const Login = ({ user, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const userLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //Successful signin
        const user = userCredential.user;
        setUser(user);
        setSuccess("Yay! 🎉 you successfully signed in!");
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage.includes("invalid-email")) {
          setError(
            `Oops! 😱 a problem has occurred while submitting your data (auth/invalid-email).`
          );
        } else if (errorMessage.includes("wrong-password")) {
          setError(
            `Oops! 😱 a problem has occurred while submitting your data (auth/wrong-password).`
          );
        } else if (errorMessage.includes("user-not-found")) {
          setError(
            `Oops! 😱 a problem has occurred while submitting your data (auth/user-not-found).`
          );
        } else {
          setError(
            `Oops! 😱 a problem has occurred while submitting your data (${errorMessage})`
          );
        }
      });
  };

  return (
    <div className="login-page">
      <img src={logo} className="login-page__logo"></img>

      <form className="login-page__form login-form__input-container">
        <h1 className="login-form__title">Welcome back</h1>
        <p className="login-form__desc">
          Enter your email address and password to access your staff account.
        </p>
        <label htmlFor="email-input" className="login-form__label">
          Email Address
        </label>
        <input
          className="login-form__input"
          type="text"
          name="email"
          id="email-input"
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password-input" className="login-form__label">
          Password
        </label>
        <input
          className="login-form__input"
          type="password"
          name="password"
          id="password-input"
          onChange={(event) => setPassword(event.target.value)}
        />
        {/* If there is a user, display the user email, if there is a wrong user display an error messsage else don't display anything*/}
        <Button
          buttonText="Login"
          handleClick={userLogin}
          buttonStyle="isLogin"
          isPlus={false}
          isInputIncomplete={false}
        />
      </form>
      <figure className="login-form__image-container">
        <img
          src={presentation}
          alt="a background image for the login page"
          className="login-form__image"
        />
      </figure>
      {user ? (
        <>
          <div className="login-form__validation" id="validation--success">
            {success}

            <Navigate replace to="/home" />
          </div>
        </>
      ) : (
        error && (
          <div className="login-form__validation" id="validation--error">
            {error}
            <button
              className="cross"
              onClick={(event) => {
                event.preventDefault;
                setError("");
              }}
            >
              <img
                className="cross-image"
                src={plus}
                alt="an icon of a cross"
              />
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default Login;
