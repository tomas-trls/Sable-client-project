import React from "react";
import { NavLink } from "react-router-dom";
import LineBreak from "../../assets/images/functional-icons/calendar-divide-icon.png";
import CompanyLogo from "../../assets/images/logo/logo-white.png";
import BookIcon from "../../assets/images/navbar-icons/bookings-icon.png";
import ClientIcon from "../../assets/images/navbar-icons/clients-icon.png";
import HomeIcon from "../../assets/images/navbar-icons/home-icon.png";
import ResourcesIcon from "../../assets/images/navbar-icons/resources-icon.png";
import SettingsIcon from "../../assets/images/navbar-icons/settings-icon.png";
import StaffIcon from "../../assets/images/navbar-icons/staff-icon.png";
import NavItem from "../../components/NavItem/NavItem";
import "./NavContainer.scss";

const NavContainer = () => {
  return (
    <nav className="nav-container">
      <div className="nav-container__logo-container">
        <img className="nav-container__logo" src={CompanyLogo} alt="Company logo" />
      </div>
      <main className="nav-container__menu-options">
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          <NavItem image={HomeIcon} itemText={"Home"} />
        </NavLink>
        <NavLink
          to="/booking"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          <NavItem image={BookIcon} itemText={"Book Appointment"} />
        </NavLink>
        <NavLink
          to="/staff"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          <NavItem image={StaffIcon} itemText={"Staff"} />
        </NavLink>
        <NavLink
          to="/client"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          <NavItem image={ClientIcon} itemText={"Clients"} />
        </NavLink>
        <NavLink
          to="/resources"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          <NavItem image={ResourcesIcon} itemText={"Resources"} />
        </NavLink>
      </main>
      <div className="nav-container__line-break-container">
        <img
          className="nav-container__line-break"
          src={LineBreak}
          alt="Divider Line"
        />
      </div>
      <div className="nav-container__settings">
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          <NavItem image={SettingsIcon} itemText={"Settings"} />
        </NavLink>
      </div>
    </nav>
  );
};

export default NavContainer;
