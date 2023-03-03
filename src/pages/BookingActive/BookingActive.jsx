import React from "react";
import NavContainer from "../../containers/NavContainer/NavContainer";
import Layout from "../../components/Layout/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import ActiveClientOverview from "../../containers/ActiveClientOverview/ActiveClientOverview";
import HomeButton from "../../components/HomeButton/HomeButton";
import "./BookingActive.scss";
import mockData from "../../data/mockData";

const BookingActive = () => {
  const pageHeading =
    "Clients - " +
    mockData.clients[0].firstName +
    " " +
    mockData.clients[0].lastName;

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
        <ActiveClientOverview isClientDetails={false} />
        <HomeButton />
      </Layout>
    </div>
  );
};

export default BookingActive;