import React from "react";
import "./HomepageCard.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
const HomepageCard = ({ heading, link }) => {
  return (
    <>
      <Link to={`/${link}`}>
        <main className="homepage-card" id="mobile">
          <h2 className="homepage-card__heading">{heading}</h2>
          <div className="homepage-card__arrow"> </div>
        </main>
      </Link>

      <main className="homepage-card" id="desktop">
        <h2 className="homepage-card__heading">{heading}</h2>
        <Link to={`/${link}`} className="home-card__link">
          <Button buttonText={"Go"} />
        </Link>
      </main>
    </>
  );
};

export default HomepageCard;
