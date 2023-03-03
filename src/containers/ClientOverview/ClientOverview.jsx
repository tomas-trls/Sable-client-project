import React, { useState } from "react";
import DataCard from "../../components/DataCard/DataCard";
import FilterBar from "../../components/FilterBar/FilterBar";
import mockData from "../../data/mockData";
import { useNavigate } from "react-router-dom";
import "./ClientOverview.scss";
const Client = () => {
  const [query, setQuery] = useState("");
  const [click, setClick] = useState(0);
  const [dataArr, setDataArr] = useState([...mockData.clients]);
  const [filteredClients, setFilteredClients] = useState([]);

  const handleSort = () => {
    if (click == 0) {
      setClick(1);
      setDataArr(
        dataArr.sort((x, y) => {
          let a = x.lastName.toUpperCase(),
            b = y.lastName.toUpperCase();
          return a == b ? 0 : a < b ? 1 : -1;
        })
      );
    } else if (click == 1) {
      setClick(2);
      setDataArr(
        dataArr.sort((x, y) => {
          let a = x.lastName.toUpperCase(),
            b = y.lastName.toUpperCase();
          return a == b ? 0 : a > b ? 1 : -1;
        })
      );
    } else {
      setDataArr([...mockData.clients]);
      setClick(0);
    }
  };

  const handlefilter = (event) => {
    if (event.target.value == "Consultant") {
      const consultants = dataArr.filter((element) => {
        return element.query.includes("consultant");
      });
      setFilteredClients(consultants);
    } else if (event.target.value == "Consumer") {
      const consumers = dataArr.filter((element) => {
        return element.query.includes("consumer");
      });
      setFilteredClients(consumers);
    } else if (event.target.value == "Confirmed") {
      const confirmed = dataArr.filter((element) => {
        return element.confirmedAppoinment;
      });
      setFilteredClients(confirmed);
    }
  };

  const filterArr = dataArr.filter((element) => {
    return (
      element.firstName.toLowerCase().includes(query.toLowerCase()) ||
      element.lastName.toLowerCase().includes(query.toLowerCase())
    );
  });
  const handleInputSearch = (event) => {
    setFilteredClients([]);
    setQuery(event.target.value);
  };

  const navigate =useNavigate();

  const handleClick = (event) => {
   event.preventDefault();
   navigate("/client/detail");
  }

  const clientsListJSX = filterArr.map((client, index) => {
    return <DataCard key={index + 1} cardType="client" cardObject={client} handleClick={handleClick} />;
  });
  const filteredClientListJSX = filteredClients.map((client, index) => {
    return <DataCard key={index + 1} cardType="client" cardObject={client}  handleClick={handleClick}/>;
  });
  return (
    <div className="client-overview">
      <FilterBar
        title={"Client List"}
        handleInputSearch={handleInputSearch}
        handleSort={handleSort}
        handleSelect={handlefilter}
        optionsArr={["Consumer", "Consultant", "Confirmed"]}
      />
      <div className="client-overview__label-container">
        <p className="client-overview__label">Client Name</p>
        <p className="client-overview__label" id="email-label">Email Address</p>
        <p className="client-overview__label">Mobile Number</p>
        <p className="client-overview__label">Consumer/Consultancy</p>
        <p className="client-overview__label">Confirmed</p>
        <p className="client-overview__label">Staff Name</p>
      </div>
      <div className="client-overview__cards-container">
        {filteredClientListJSX.length > 0
          ? filteredClientListJSX
          : clientsListJSX}
      </div>
    </div>
  );
};

export default Client;
