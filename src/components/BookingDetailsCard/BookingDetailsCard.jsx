import React from "react";
import "./BookingDetailsCard.scss";

const BookingDetailsCard = ({
  clientObject,
  bookingObject,
  isClientDetails,
}) => {
  return (
    <div className="booking-details-card">
      {isClientDetails ? null : (
        <div className="booking-details-card__info-container">
          <h1 className="booking-details-card__heading">Booking Details</h1>
          <h2 className="booking-details-card__subheading"> Date:</h2>
          <p className="booking-details-card__data">
            {bookingObject.bookingDate}
          </p>
          <h2 className="booking-details-card__subheading">Time:</h2>
          <p className="booking-details-card__data">
            {bookingObject.bookingTime}
          </p>
          <h2 className="booking-details-card__subheading booking-details-card__mobile">
            Mobile Number:
          </h2>
          <p className="booking-details-card__data booking-details-card__mobile">
            {clientObject.mobile}
          </p>
          <h2 className="booking-details-card__subheading booking-details-card__mobile">
            Email Address:
          </h2>
          <p className="booking-details-card__data booking-details-card__mobile">
            {clientObject.email}
          </p>
          <h2 className="booking-details-card__subheading">Staff Member:</h2>
          <p className="booking-details-card__data">{bookingObject.staff}</p>
        </div>
      )}
    </div>
  );
};
export default BookingDetailsCard;
