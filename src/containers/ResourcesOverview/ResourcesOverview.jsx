import React from "react";
import FilterIcon from "../../assets/images/functional-icons/filter-icon.png";
import gridview from "../../assets/images/functional-icons/gridview-icon.png";
import listview from "../../assets/images/functional-icons/listview-icon.png";
import SortIcon from "../../assets/images/functional-icons/sort-icon.png";
import "./ResourcesOverview.scss";
import StaffResourcesContainer from "../StaffResourcesContainer/StaffResourcesContainer";
import StaffResources from "../../components/StaffResources/StaffResources";
import { resourceData } from "../../mockData.js";
const ResourcesOverview = ({ isAdmin }) => {
  let resourceDataCopy = [...resourceData];
  return (
    <div className="resources-overview">
      <div className="resources-overview__filters">
        {!isAdmin && (
          <>
            <h2 className="resources-overview__title">Health Products</h2>
            <div className="resources-overview__display--icons">
              <img
                className="resources-overview__icon"
                src={listview}
                alt="List view icon"
              />
              <img
                className="resources-overview__icon"
                src={gridview}
                alt="Grid view icon"
              />
            </div>
            <input
              className="resources-overview__searchbar"
              type="text"
              name=""
              id=""
            />
            <div className="resources-overview__sort">
              <img
                className="resources-overview__icon"
                src={SortIcon}
                alt="sort icon"
              />
              <p className="resources-overview__subheading">Sort</p>
            </div>
            <div className="resources-overview__filter">
              <img
                className="resources-overview__icon"
                src={FilterIcon}
                alt="filter icon"
              />
              <p className="resources-overview__subheading">Filter</p>
            </div>
          </>
        )}
        {isAdmin && (
          <>
            <h2 className="resources-overview__title">Admin</h2>
          </>
        )}
      </div>

      {isAdmin ? (
        <>
          <StaffResources cardsArray={resourceDataCopy} />
        </>
      ) : (
        <StaffResourcesContainer />
      )}
    </div>
  );
};

export default ResourcesOverview;
