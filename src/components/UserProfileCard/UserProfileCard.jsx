import React from "react";
import "./UserProfileCard.scss";

const UserProfileCard = ({ image, name, role }) => {
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
      </div>
    </div>
  );
};

export default UserProfileCard;
