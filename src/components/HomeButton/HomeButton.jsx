import React from "react";
import "./HomeButton.scss";
import HomeIcon from "../../assets/images/functional-icons/black-home-icon.png";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <Link style={{ textDecoration: "none" }} to={"/"}>
      <footer className="homebutton-container">
        <div className="homebutton-container__content">
          <section className="homebutton-container__image-container">
            <img
              className="homebutton-container__image"
              src={HomeIcon}
              alt="Home Icon"
            />
          </section>
          <section className="homebutton-container__text-container">
            <p className="homebutton-container__text">HOME</p>
          </section>
        </div>
      </footer>
    </Link>
  );
};

export default HomeButton;
