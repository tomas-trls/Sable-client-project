import React from "react";
import "./DataCard.scss";

const DataCard = (props) => {
  const { cardObject, cardType } = props;

  const studentJSX = () => (
    <div className="user-card">
      <h1 className="user-card__name">{cardObject.name}</h1>
      <p className="user-card__email">{cardObject.email}</p>
      <p className="user-card__mobile">{cardObject.mobile}</p>
      {cardObject.query === "consumer" ? (
        <p className="user-card__job">Consumer</p>
      ) : (
        <p className="user-card__job">Consultant</p>
      )}
      {cardObject.rsvp ? (
        <p className="user-card__rsvp">YES</p>
      ) : (
        <p className="user-card__rsvp">NO</p>
      )}
      <p className="user-card__staff-name">{cardObject.staff}</p>
      <figure className="user-card__image-container">
        <span className="user-card__circle"></span>
      </figure>
    </div>
  );

  const bookingCardJSX = () => (
    <div className="booking-card">
      <h1 className="booking-card__name">{cardObject.name}</h1>
      <p className="booking-card__email">{cardObject.email}</p>
      <p className="booking-card__mobile">{cardObject.mobile}</p>
      <p className="booking-card__date">{cardObject.bookingDate}</p>
      <p className="booking-card__time">{cardObject.bookingTime}</p>
      <figure className="booking-card__image-container">
        {" "}
        <span className="booking-card__circle"></span>
      </figure>
    </div>
  );

  const resourceCardJSX = () => (
    <div className="resource-card">
      <h1 className="resource-card__name">{cardObject.resourceName}</h1>
      <p className="resource-card__quantity">{cardObject.quantity}</p>
      <p className="resource-card__cost">{cardObject.cost}</p>
      {cardObject.isAutoPurchase ? (
        <p className="resource-card__auto-purchase">YES</p>
      ) : (
        <p className="resource-card__auto-purchase">NO</p>
      )}
      <p className="resource-card__level">{cardObject.autoPurchaseLevel}</p>
      <figure className="resource-card__image-container">
        <span className="resource-card__circle"></span>
      </figure>
    </div>
  );

  return (
    <>
      {cardType === "student"
        ? studentJSX()
        : cardType === "booking"
        ? bookingCardJSX()
        : cardType === "resource"
        ? resourceCardJSX()
        : alert("Unkown card")}
    </>
  );
};

export default DataCard;
