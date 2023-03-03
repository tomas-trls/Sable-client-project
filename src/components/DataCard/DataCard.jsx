import React from "react";
import "./DataCard.scss";
import mockData from "../../data/mockData";
const DataCard = (props) => {
  const { cardObject, cardType, handleClick } = props;

  const clientJSX = () => (
    <div className="user-card">
      <h1 className="user-card__name">
        {cardObject.firstName + " " + cardObject.lastName}
      </h1>
      <p className="user-card__email">{cardObject.email}</p>
      <p className="user-card__mobile">{cardObject.mobile}</p>
      {cardObject.query === "consumer" ? (
        <p className="user-card__job">Consumer</p>
      ) : (
        <p className="user-card__job">Consultant</p>
      )}
      {cardObject.confirmedAppoinment ? (
        <p className="user-card__rsvp">YES</p>
      ) : (
        <p className="user-card__rsvp">NO</p>
      )}
      <p className="user-card__staff-name">{cardObject.Staff}</p>
      <figure onClick={handleClick} className="user-card__image-container">
        <span className="user-card__circle"></span>
      </figure>
    </div>
  );

  const bookingCardJSX = () => {
    let names = cardObject.client.split(" ");

    const getClientDetails = (nameToSearch) => {
      const filteredObject = mockData.clients.filter(
        (client) =>
          client.firstName == nameToSearch[0] &&
          client.lastName == nameToSearch[1]
      );
      return filteredObject;
    };

    const currentClient = getClientDetails(names);

    return (
      <div className="booking-card">
        <h1 className="booking-card__name">{cardObject.client}</h1>
        <p className="booking-card__email">{currentClient[0].email}</p>
        <p className="booking-card__mobile">{currentClient[0].mobile}</p>
        <p className="booking-card__date">{cardObject.bookingDate}</p>
        <p className="booking-card__time">{cardObject.bookingTime}</p>
        <figure className="booking-card__image-container">
          {" "}
          <span className="booking-card__circle"></span>
        </figure>
      </div>
    );
  };

  const resourceCardJSX = () => (
    <div className="resource-card">
      <h1 className="resource-card__name">{cardObject.name}</h1>
      <p className="resource-card__quantity">{cardObject.quantity}</p>
      <p className="resource-card__cost">{cardObject.costPerUnit}</p>
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
      {cardType === "client"
        ? clientJSX()
        : cardType === "booking"
        ? bookingCardJSX()
        : cardType === "resource"
        ? resourceCardJSX()
        : alert("Unknown card")}
    </>
  );
};

export default DataCard;
