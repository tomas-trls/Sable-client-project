import React from "react";
import HomeButton from "../../components/HomeButton/HomeButton";
import PageHeader from "../../components/PageHeader/PageHeader";
import BookingOverview from "../../containers/BookingOverview/BookingOverview";
import NavContainer from "../../containers/NavContainer/NavContainer";
import "./NewAppointment.scss";

const NewAppointment = () => {
  return (
    <div className="new-appointment">
      <NavContainer />
      <div className="info-container">
        <div className="header">
          <PageHeader headerType="headingOnly" heading="Book Appointments" />
        </div>
        <BookingOverview />
      </div>
      <HomeButton />
    </div>
  );
};

export default NewAppointment;
