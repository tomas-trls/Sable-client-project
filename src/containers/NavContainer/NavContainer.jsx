import React from "react";
import NavItem from "../../components/NavItem/NavItem";
import "./NavContainer.scss";
import HomeIcon from "../../assets/images/navbar-icons/home-icon.png";
import BookIcon from "../../assets/images/navbar-icons/bookings-icon.png";
import StaffIcon from "../../assets/images/navbar-icons/staff-icon.png";
import ClientIcon from "../../assets/images/navbar-icons/clients-icon.png";
import ResourcesIcon from "../../assets/images/navbar-icons/resources-icon.png";
import LineBreak from "../../assets/images/functional-icons/calendar-divide-icon.png";
import SettingsIcon from "../../assets/images/navbar-icons/settings-icon.png";

const NavContainer = () => {
  return (
    <nav className="nav-container">
      <div className="nav-container__logo-container"></div>
      <main className="nav-container__menu-options">
        <NavItem image={HomeIcon} itemText={"Home"} />
        <NavItem image={BookIcon} itemText={"Book Appointment"} />
        <NavItem image={StaffIcon} itemText={"Staff"} />
        <NavItem image={ClientIcon} itemText={"Clients"} />
        <NavItem image={ResourcesIcon} itemText={"Resources"} />
      </main>
      <div className="nav-container__line-break-container">
        <img
          className="nav-container__line-break"
          src={LineBreak}
          alt="Divider Line"
        />
      </div>
      <div className="nav-container__settings">
        <NavItem image={SettingsIcon} itemText={"Settings"} />
      </div>
    </nav>
  );
};

export default NavContainer;
