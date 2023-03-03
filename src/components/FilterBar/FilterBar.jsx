import React from "react";

import sortIcon from "../../assets/images/functional-icons/sort-icon.png";
import "./FilterBar.scss";

const FilterBar = ({
  handleInputSearch,
  title,
  handleSort,
  optionsArr,
  handleSelect,
}) => {
  const optionsJSX = optionsArr.map((option, index) => {
    return (
      <option className="filters__option" value={option} key={index}>
        {option}
      </option>
    );
  });
  return (
    <div className="filters">
      <h2 className="filters--label">{title}</h2>
      <div className="filters__logic">
        <input className="filters--search" onChange={handleInputSearch}></input>
        <div className="filters--sort" onClick={handleSort}>
          <img src={sortIcon} alt="sort icon" />
          <p className="filters--sort-label">Sort</p>
        </div>
        <div className="filters--filter-dropdown">
          <select
            className="filters__select--dropdown"
            id="clientFilter"
            onChange={handleSelect}
          >
            <option
              hidden
              value=""
              disabled
              selected
              className="filters__option"
            >
              Filter
            </option>
            {optionsJSX}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
