import React from "react";
import NavContainer from "../../containers/NavContainer/NavContainer";
import Layout from "../../components/Layout/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import ActiveClientOverview from "../../containers/ActiveClientOverview/ActiveClientOverview";
import HomeButton from "../../components/HomeButton/HomeButton";
import "./BookingActive.scss";
import mockData from "../../data/mockData";
import { useParams } from "react-router-dom";

const BookingActive = () => {
  const { bookingID } = useParams();
  const booking = mockData.bookings.find((booking) => {
    return booking.id == bookingID;
  });
  const bookingsClient = mockData.clients.find((client) => {
    return (
      booking.client.split(" ")[0].toLowerCase() ==
        client.firstName.toLowerCase() &&
      booking.client.split(" ")[0].toLowerCase() ==
        client.lastName.toLowerCase()
    );
  });

  const pageHeading =
    "Clients - " + bookingsClient.firstName + " " + bookingsClient.lastName;
  return (
    <div className="booking-active">
      <NavContainer />
      <Layout>
        <PageHeader
          heading={pageHeading}
          headerType="headingButton"
          text="Edit"
          isPlus={true}
          buttonStyle="isHeader"
        />
        <ActiveClientOverview
          isClientDetails={false}
          bookingClient={bookingsClient}
          bookingDetails={booking}
        />
        <HomeButton />
      </Layout>
    </div>
  );
};

export default BookingActive;
