import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import StaffOverview from "../../containers/StaffOverview/StaffOverview";
import NavContainer from "../../containers/NavContainer/NavContainer";
import "./Staff.scss";
import { useState } from "react";
import HomeButton from "../../components/HomeButton/HomeButton";
import mockData from "../../data/mockData";
const Staff = () => {
  let allStaffMembers = [];
  const [currentStaff, setCurrentStaff] = useState("Stefania");
  allStaffMembers = mockData.staff.map((staff) => staff.name);

  const handleOnChange = (event) => {
    setCurrentStaff(event.target.value);
  };

  return (
    <>
      <div className="staff-page">
        <NavContainer />
        <main className="staff-page__body">
          <div className="staff-page__container">
            <PageHeader
              heading="Staff"
              headerType="headingButtonDropdown"
         
              optionsArr={allStaffMembers}
              handleOnChange={handleOnChange}
            />
            <StaffOverview currentStaff={currentStaff} />
          </div>
        </main>
      </div>
      <HomeButton />
    </>
  );
};

export default Staff;
