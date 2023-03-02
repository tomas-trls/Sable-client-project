import React from "react";
import "./UserProfileCard.scss";
import Button from "../Button/Button";

const UserProfileCard = ({ image, name, role, text }) => {
  return (
    <div className="card-container">
      <div className="card-container__image-container">
        <img
          src={image}
          alt="user-image"
          className="card-container__image-container--image"
        ></img>
      </div>

      <div className="card-container__info-container">
        <h1 className="card-container__info-container--name">{name}</h1>
        <h2 className="card-container__info-container--role">{role}</h2>
        <div className="card-container__button">
          <Button buttonText={text} />
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
