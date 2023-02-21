import React from "react";
import "../NavItem/NavItem.scss";

const NavItem = ({ image, itemText }) => {
  return (
    <div className="nav-item">
      <div className="nav-item__content">
        <div className="nav-item__image-container">
          <img className="nav-item__image" src={image} alt={itemText} />
        </div>
        <div className="nav-item__text-container">
          <p className="nav-item__text">{itemText}</p>
        </div>
      </div>
    </div>
  );
};

export default NavItem;
