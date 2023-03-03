import React from "react";
import "./StaffResourcesContainer.scss";
import StaffResources from "../../components/StaffResources/StaffResources";
import { mockData } from "../../data/mockData";
const StaffResourcesContainer = ({ isAdmin, dataArr }) => {
  const staffResourceList = (isAdmin) => {
    let category = "";
    isAdmin ? (category = "Admin") : (category = "Health");
    const arrayOfStaff = mockData.staff.map((staff) => {
      const staffResources = dataArr.filter((resourcesRequest) => {
        return (
          resourcesRequest.staffMember == staff.name &&
          resourcesRequest.category == category
        );
      });
      return [staff.name, staffResources];
    });
    const staffRequests = arrayOfStaff.filter((staff) => {
      return staff[1].length != 0;
    });
    return staffRequests;
  };

  const staffJSX = staffResourceList(isAdmin).map((staff, index) => {
    return (
      <StaffResources
        key={index}
        staffName={staff[0]}
        cardsArray={staff[1]}
        id={index}
      />
    );
  });

  return <div className="staff-resource-container">{staffJSX}</div>;
};
export default StaffResourcesContainer;
