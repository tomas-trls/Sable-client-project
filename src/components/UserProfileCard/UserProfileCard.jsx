import React from "react";
import "./UserProfileCard.scss";

const UserProfileCard = ({ image, name, role }) => {
  return (
    <div className="card-staff">
      <img src={image} alt="staff-picture" className="card-staff__image"></img>
      <h1 className="card-staff__name">{name}</h1>
      <h2 className="card-staff__role">{role}</h2>
    </div>
  );
};

export default UserProfileCard;
