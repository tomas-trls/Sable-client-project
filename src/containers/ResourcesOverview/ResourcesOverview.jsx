import React from "react";
import "./ResourcesOverview.scss";
import StaffResourcesContainer from "../StaffResourcesContainer/StaffResourcesContainer";
import FilterBar from "../../components/FilterBar/FilterBar";
const ResourcesOverview = ({ isAdmin }) => {
  return (
    <div className="resources-overview">
      <div className="resources-overview__filters">
        {!isAdmin ? (
          <FilterBar
            title={"Health Products"}
            optionsArr={["All Resource", "AutoPurchase"]}
          />
        ) : (
          <h2 className="resources-overview__title">Admin</h2>
        )}
      </div>

      {isAdmin ? (
        <>
          <StaffResourcesContainer isAdmin={true} />
        </>
      ) : (
        <StaffResourcesContainer isAdmin={false} />
      )}
    </div>
  );
};

export default ResourcesOverview;
