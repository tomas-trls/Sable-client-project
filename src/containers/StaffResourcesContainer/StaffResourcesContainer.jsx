import React from "react";
import "./StaffResourcesContainer.scss";
import StaffResources from "../../components/StaffResources/StaffResources";
import { mockData } from "../../data/mockData"
const StaffResourcesContainer = () => {
  return (
    <div className="staff-resource-container">
      <StaffResources
        staffName={"Staff 01"}
        renderLabels={true}
        cardsArray={mockData.resources}
      />
      <StaffResources staffName={"Staff 02"} cardsArray={mockData.resources} />
    </div>
  );
};
export default StaffResourcesContainer;