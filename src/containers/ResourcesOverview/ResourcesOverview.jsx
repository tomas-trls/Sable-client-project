import React from "react";
import "./ResourcesOverview.scss";
import StaffResourcesContainer from "../StaffResourcesContainer/StaffResourcesContainer";
import FilterBar from "../../components/FilterBar/FilterBar";
import mockData from "../../data/mockData";
import { useState } from "react";
const ResourcesOverview = ({ isAdmin }) => {
  const [query, setQuery] = useState("");
  const [filteredResources, setFilteredResources] = useState([]);
  const [SearchInUse, setSearchInUse] = useState(true);

  const handleFilter = (event) => {
    if (event.target.value == "AutoPurchase") {
      const resources = mockData.resourcesRequest.filter((element) => {
        return element.autoPurchase == "yes";
      });
      setFilteredResources(resources);
      setSearchInUse(false);
    } else if (event.target.value == "All Resources") {
      setFilteredResources(mockData.resourcesRequest);
      setSearchInUse(true);
    }
  };
  let searchFilterArr = [];
  SearchInUse
    ? (searchFilterArr = mockData.resourcesRequest.filter((element) => {
        return element.resources.toLowerCase().includes(query.toLowerCase());
      }))
    : (searchFilterArr = filteredResources);
  const handleInputSearch = (event) => {
    setFilteredResources([]);
    setSearchInUse(true);
    setQuery(event.target.value);
  };

  return (
    <div className="resources-overview">
      <div className="resources-overview__filters">
        {!isAdmin ? (
          <FilterBar
            title={"Health Products"}
            handleInputSearch={handleInputSearch}
            handleSelect={handleFilter}
            optionsArr={["All Resources", "AutoPurchase"]}
          />
        ) : (
          <FilterBar
            title={"Admin"}
            handleInputSearch={handleInputSearch}
            handleSelect={handleFilter}
            optionsArr={["All Resources", "AutoPurchase"]}
          />
        )}
      </div>

      {isAdmin ? (
        <StaffResourcesContainer isAdmin={true} dataArr={searchFilterArr} />
      ) : (
        <StaffResourcesContainer isAdmin={false} dataArr={searchFilterArr} />
      )}
    </div>
  );
};

export default ResourcesOverview;
