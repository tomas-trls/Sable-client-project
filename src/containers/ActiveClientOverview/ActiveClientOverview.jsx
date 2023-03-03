import React from "react";
import ContactDetailsCard from "../../components/ContactDetailsCard/ContactDetailsCard";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import BookingDetailsCard from "../../components/BookingDetailsCard/BookingDetailsCard";
import "./ActiveClientOverview.scss";

const ActiveClientOverview = ({
  isClientDetails,
  bookingClient,
  bookingDetails,
  client,
}) => {
  return (
    <div className="active-client-overview">
      <h1 className="active-client-overview__heading">Overview</h1>
      <div className="active-client-overview__cards">
        {isClientDetails ? (
          <UserProfileCard
            image={client.image}
            name={client.firstName + " " + client.lastName}
            role={client.query}
          />
        ) : (
          <UserProfileCard
            image={bookingClient.image}
            name={bookingClient.firstName + " " + bookingClient.lastName}
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
              <ContactDetailsCard cardObject={client} />
            </div>
          ) : (
            <div className="active-client-overview__booking-contact-card">
              <ContactDetailsCard cardObject={bookingClient} />
            </div>
          )}
          {isClientDetails ? (
            <div className="active-client-overview__client-booking-card">
              <BookingDetailsCard isClientDetails={isClientDetails} />
            </div>
          ) : (
            <div className="active-client-overview__booking-booking-card">
              <BookingDetailsCard
                clientObject={bookingClient}
                bookingObject={bookingDetails}
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
