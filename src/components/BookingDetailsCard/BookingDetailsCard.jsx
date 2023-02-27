import React from "react";
import "./BookingDetailsCard.scss";

const BookingDetailsCard = ({cardObject}) => {
  return (
    <div className="booking-details-card">
      <h1 className="booking-details-card__heading">Booking Details</h1>
        <h2 className="booking-details-card__subheading"> Date:</h2>
        <p className="booking-details-card__data">{cardObject.date}</p>
        <h2 className="booking-details-card__subheading">Time:</h2>
        <p className="booking-details-card__data">{cardObject.time}</p>
        <h2 className="booking-details-card__subheading">Staff Member:</h2>
        <p className="booking-details-card__data">{cardObject.staff}</p>

    </div>
  );
};
export default BookingDetailsCard;

