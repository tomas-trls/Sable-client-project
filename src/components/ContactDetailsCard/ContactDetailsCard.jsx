import React from "react";
import "./ContactDetailsCard.scss";

const ContactDetailsCard = ({cardObject}) => {
  return (
    <div className="contact-card">
      <h1 className="contact-card__heading">Contact Details</h1>
        <h2 className="contact-card__subheading"> Date of Birth:</h2>
        <p className="contact-card__data">{cardObject.birthDate}</p>
        <h2 className="contact-card__subheading">Email Address:</h2>
        <p className="contact-card__data">{cardObject.email}</p>
        <h2 className="contact-card__subheading">Mobile Number:</h2>
        <p className="contact-card__data">{cardObject.number}</p>
    </div>
  );
};
export default ContactDetailsCard;
