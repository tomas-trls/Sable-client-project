import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import StaffOverview from "../../containers/StaffOverview/StaffOverview";

import NavContainer from "../../containers/NavContainer/NavContainer";
import "./Staff.scss";

const Staff = () => {
  return (
    <div className="staff-page">
      <NavContainer />
      <main className="staff-page__body">
        <div className="staff-page__container">
          <PageHeader
            heading="Staff"
            text="Edit"
            headerType="headingButtonDropdown"
            optionsArr={["Staff 01", "Staff 02", "Staff 03"]}
          />

          <StaffOverview />
        </div>
      </main>
    </div>
  );
};

export default Staff;
