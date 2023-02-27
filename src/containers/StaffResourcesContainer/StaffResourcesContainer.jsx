import React from "react";
import "./StaffResourcesContainer.scss";
import StaffResources from "../../components/StaffResources/StaffResources";
import { resourceData } from "../../mockData.js";
const StaffResourcesContainer = () => {
  let resourceDataCopy = [...resourceData];
  return (
    <div className="staff-resource-container">
      <StaffResources
        staffName={"Staff 01"}
        renderLabels={true}
        cardsArray={resourceDataCopy}
      />
      <StaffResources staffName={"Staff 02"} cardsArray={resourceDataCopy} />
    </div>
  );
};

export default StaffResourcesContainer;
