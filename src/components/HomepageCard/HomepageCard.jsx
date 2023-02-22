import React from "react";
import "./HomepageCard.scss";
import Button from "../Button/Button";

const HomepageCard = ({ heading }) => {
  return (
    <div className="homepage-card">
      <h2 className="homepage-card__heading">{heading}</h2>
      <div className="homepage-card__button">
        <Button buttonText={"Go"} />
      </div>
    </div>
  );
};

export default HomepageCard;
