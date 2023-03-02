import React from "react";
import FilterIcon from "../../assets/images/functional-icons/filter-icon.png";
import gridview from "../../assets/images/functional-icons/gridview-icon.png";
import listview from "../../assets/images/functional-icons/listview-icon.png";
import SortIcon from "../../assets/images/functional-icons/sort-icon.png";
import DataCard from "../../components/DataCard/DataCard";
import EmployeeOverviewCard from "../../components/EmployeeOverviewCard/EmployeeOverviewCard.jsx";
import UserProfile from "../../components/UserProfileCard/UserProfileCard.jsx";
import { mockData } from "../../data/mockData"
import "./StaffOverview.scss";
const StaffOverview = ({ currentStaff }) => {
  const filteredBooking = mockData.bookings.filter(
    (booking) => booking.staff == currentStaff
  );

  const currentStaffObject = mockData.staff.filter((object) => object.name == currentStaff)
  const jsx = filteredBooking.map((booking, index) => {
    return <DataCard key={index} cardType="booking" cardObject={booking} />;
  });

  return (
    <div className="staff-overview">
      <h2 className="staff-overview__title">Overview</h2>
      <div className="staff-overview__card-container">
        <UserProfile image={currentStaffObject[0].image} name={currentStaff} role={currentStaffObject[0].role} />
        <EmployeeOverviewCard
          startDate={currentStaffObject[0].startDate}
          courseCompletion={currentStaffObject[0].contractEndDate}
          manager={currentStaffObject[0].manager}
          description={
            currentStaffObject[0].overview
          }
        />
      </div>
      <div className="staff-overview__display-view">
        <h2 className="staff-overview__title">Staff bookings</h2>
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
      <div className="staff-overview__booking-container--labels booking-container--labels">
        <p className="booking-container__label">Client Name</p>
        <p className="booking-container__label">Email Address</p>
        <p className="booking-container__label">Mobile Number</p>
        <p className="booking-container__label">Booking Date</p>
        <p className="booking-container__label">Booking Time</p>
      </div>
      <div className="staff-overview__mobile-subheader">Bookings</div>
      <div className="staff-overview__booking-container">{jsx}</div>
    </div>
  );
};

export default StaffOverview;
