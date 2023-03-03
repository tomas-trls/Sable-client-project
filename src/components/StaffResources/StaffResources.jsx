import React from "react";
import "./StaffResources.scss";
import DataCard from "../DataCard/DataCard";

const StaffResources = ({ staffName, cardsArray, id }) => {
  const cardJSX = cardsArray.map((object, index) => {
    return (
      <div key={index} className="staff-resources__cards-card">
        <DataCard cardType="resource" cardObject={object} />
      </div>
    );
  });

  return (
    <div className="staff-resources">
      <h1 className="staff-resources__staff-member">{staffName}</h1>
      {id == 0 && (
        <div className="staff-resources__labels">
          <p className="booking-container__label">Resource Name</p>
          <p className="booking-container__label">Quantity Remaining</p>
          <p className="booking-container__label">Cost per unit</p>
          <p className="booking-container__label">Auto-Purchase</p>
          <p className="booking-container__label">Auto-Purchase Level</p>
          <p className="booking-container__label">Quantity Requested</p>
        </div>
      )}
      <div className="staff-resources__cards">{cardJSX && cardJSX}</div>
    </div>
  );
};

export default StaffResources;
