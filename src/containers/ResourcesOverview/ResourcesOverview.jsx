import React from 'react'
import FilterIcon from "../../assets/images/functional-icons/filter-icon.png";
import gridview from "../../assets/images/functional-icons/gridview-icon.png";
import listview from "../../assets/images/functional-icons/listview-icon.png";
import SortIcon from "../../assets/images/functional-icons/sort-icon.png";
import StaffImage from "../../assets/images/users/staff-picture.png";
import DataCard from "../../components/DataCard/DataCard";
import "./ResourcesOverview.scss"
const ResourcesOverview = () => {
  return (
    <div className='resources-overview'>
    
        <div className="resources-overview__filters">
        <h2 className="resources-overview_title">Health Products</h2>
        <div className="staff-overview__display--icons">
          <img
            className="staff-overview__icon"
            src={listview}
            alt="List view icon"
          />
          <img
            className="staff-overview__icon"
            src={gridview}
            alt="Grid view icon"
          />
        </div>
        <input
          className="staff-overview__searchbar"
          type="text"
          name=""
          id=""
        />
        <div className="staff-overview__sort">
          <img
            className="staff-overview__icon"
            src={SortIcon}
            alt="sort icon"
          />
          <p className="staff-overview__subheading">Sort</p>
        </div>
        <div className="staff-overview__filter">
          <img
            className="staff-overview__icon"
            src={FilterIcon}
            alt="filter icon"
          />
          <p className="staff-overview__subheading">Filter</p>

     
        </div>
    </div>
  )
}

export default ResourcesOverview