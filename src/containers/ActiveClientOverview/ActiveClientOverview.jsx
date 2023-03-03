import React from "react";
import ContactDetailsCard from "../../components/ContactDetailsCard/ContactDetailsCard";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import BookingDetailsCard from "../../components/BookingDetailsCard/BookingDetailsCard";
import "./ActiveClientOverview.scss";
import clientImage from "../../assets/images/users/client-picture.png";
import { mockData } from "../../data/mockData";

const ActiveClientOverview = ({ isClientDetails }) => {
  return (
    <div className="active-client-overview">
      <h1 className="active-client-overview__heading">Overview</h1>
      <div className="active-client-overview__cards">
        {isClientDetails ? (
          <UserProfileCard
            image={clientImage}
            name="Mariah Chan"
            role="Student"
          />
        ) : (
          <UserProfileCard
            image={clientImage}
            name="Mariah Chan"
          />
        )}
        <div className="active-client-overview__mobile-booking">
          {isClientDetails ? null : (
            <h2 className="active-client-overview__mobile-heading">
              Booking Details
            </h2>
          )}
          {isClientDetails ? (
            <div className="active-client-overview__client-contact-card">
              <ContactDetailsCard cardObject={mockData.clients[0]} />
            </div>
          ) : (
            <div className="active-client-overview__booking-contact-card">
              <ContactDetailsCard cardObject={mockData.clients[0]} />
            </div>
          )}
          {isClientDetails ? (
            <div className="active-client-overview__client-booking-card">
              <BookingDetailsCard
                cardObject={mockData}
                isClientDetails={isClientDetails}
              />
            </div>
          ) : (
            <div className="active-client-overview__booking-booking-card">
              <BookingDetailsCard
                cardObject={mockData}
                isClientDetails={isClientDetails}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActiveClientOverview;