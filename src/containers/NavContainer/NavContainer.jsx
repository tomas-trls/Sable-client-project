import React from "react";
import NavItem from "../../components/NavItem/NavItem";
import "./NavContainer.scss";
import HomeIcon from "../../assets/images/navbar-icons/home-icon.png";
import BookIcon from "../../assets/images/navbar-icons/bookings-icon.png";
import StaffIcon from "../../assets/images/navbar-icons/staff-icon.png";
import ClientIcon from "../../assets/images/navbar-icons/clients-icon.png";
import ResourcesIcon from "../../assets/images/navbar-icons/resources-icon.png";


const NavContainer = () => {
  return (
    <nav className="nav-container">
      <div className="nav-container__logo-container">Logo</div>
      <main className="nav-container__menu-options">
        <NavItem image={HomeIcon} itemText={"Home"} />
        <NavItem image={BookIcon} itemText={"Book Appointment"} />
        <NavItem image={StaffIcon} itemText={"Staff"} />
        <NavItem image={ClientIcon} itemText={"Clients"} />
        <NavItem image={ResourcesIcon} itemText={"Resources"} />
      </main>
      <div className="nav-container__line-break-container">Line break</div>
      <div className="nav-container__settings">Setting options</div>
    </nav>
  );
};

export default NavContainer;
