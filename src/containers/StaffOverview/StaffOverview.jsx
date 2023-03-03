import { React, useEffect, useState } from "react";
import DataCard from "../../components/DataCard/DataCard";
import EmployeeOverviewCard from "../../components/EmployeeOverviewCard/EmployeeOverviewCard.jsx";
import UserProfile from "../../components/UserProfileCard/UserProfileCard.jsx";
import FilterBar from "../../components/FilterBar/FilterBar";
import { mockData } from "../../data/mockData";
import "./StaffOverview.scss";
const StaffOverview = ({ currentStaff }) => {
  const currentStaffBookings = mockData.bookings.filter(
    (booking) => booking.staff === currentStaff
  );
  const currentStaffObject = mockData.staff.filter(
    (object) => object.name === currentStaff
  );
  const [query, setQuery] = useState("");
  const [click, setClick] = useState(0);
  const [dataArr, setDataArr] = useState(currentStaffBookings);
  const [filteredClients, setFilteredClients] = useState([]);
  const [SearchInUse, setSearchInUse] = useState([]);
  useEffect(() => {
    setDataArr(currentStaffBookings);
    setFilteredClients([]);
    setSearchInUse(true);
  }, [currentStaff]);

  const handleSort = () => {
    if (click == 0) {
      setDataArr(
        dataArr.sort((x, y) => {
          let a = x.client.toUpperCase(),
            b = y.client.toUpperCase();
          return a == b ? 0 : a < b ? 1 : -1;
        })
      );
      setClick(1);
    } else if (click == 1) {
      setDataArr(
        dataArr.sort((x, y) => {
          let a = x.client.toUpperCase(),
            b = y.client.toUpperCase();
          return a == b ? 0 : a > b ? 1 : -1;
        })
      );
      setClick(2);
    } else if (click == 2) {
      setDataArr(currentStaffBookings);
      setClick(0);
    }
  };
  const handlefilter = (event) => {
    if (event.target.value == "Confirmed") {
      const clients = dataArr.filter((element) => {
        return element.confirmed;
      });
      setFilteredClients(clients);
      setSearchInUse(false);
    } else if (event.target.value == "Unconfirmed") {
      const clients = dataArr.filter((element) => {
        return !element.confirmed;
      });
      setFilteredClients(clients);
      setSearchInUse(false);
    } else if (event.target.value == "All Clients") {
      setFilteredClients(currentStaffBookings);
      setSearchInUse(true);
    }
  };

  const searchFilterArr = dataArr.filter((element) => {
    return element.client.toLowerCase().includes(query.toLowerCase());
  });

  const handleInputSearch = (event) => {
    setFilteredClients([]);
    setSearchInUse(true);
    setQuery(event.target.value);
  };

  let clientsListJSX = [];
  if (searchFilterArr.length > 0) {
    clientsListJSX = searchFilterArr.map((booking, index) => {
      return <DataCard key={index} cardType="booking" cardObject={booking} />;
    });
  } else {
    clientsListJSX = [];
  }
  let filteredClientListJSX;
  if (filteredClients.length > 0) {
    filteredClientListJSX = filteredClients.map((booking, index) => {
      return <DataCard key={index} cardType="booking" cardObject={booking} />;
    });
  } else {
    filteredClientListJSX = [];
  }

  return (
    <div className="staff-overview">
      <h2 className="staff-overview__title">Overview</h2>
      <div className="staff-overview__card-container">
        <UserProfile
          image={currentStaffObject[0].image}
          name={currentStaff}
          role={currentStaffObject[0].role}
        />
        <EmployeeOverviewCard
          startDate={currentStaffObject[0].startDate}
          courseCompletion={currentStaffObject[0].contractEndDate}
          manager={currentStaffObject[0].manager}
          description={currentStaffObject[0].overview}
        />
      </div>
      <FilterBar
        title={"Bookings List"}
        handleInputSearch={handleInputSearch}
        handleSort={handleSort}
        handleSelect={handlefilter}
        optionsArr={["All Clients", "Confirmed", "Unconfirmed"]}
      />
      <div className="staff-overview__booking-container--labels booking-container--labels">
        <p className="booking-container__label">Client Name</p>
        <p className="booking-container__label">Email Address</p>
        <p className="booking-container__label">Mobile Number</p>
        <p className="booking-container__label">Booking Date</p>
        <p className="booking-container__label">Booking Time</p>
      </div>
      <div className="staff-overview__mobile-subheader">Bookings</div>
      <div className="staff-overview__booking-container">
        {SearchInUse ? clientsListJSX : filteredClientListJSX}
      </div>
    </div>
  );
};

export default StaffOverview;
