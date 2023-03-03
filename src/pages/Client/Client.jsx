import React from "react";
import Button from "../../components/Button/Button";
import PageHeader from "../../components/PageHeader/PageHeader";
import ClientOverview from "../../containers/ClientOverview/ClientOverview";
import NavContainer from "../../containers/NavContainer/NavContainer";
import HomeButton from "../../components/HomeButton/HomeButton"
import { useNavigate } from "react-router-dom";

import "./Client.scss";
const Client = () => {

  const navigate = useNavigate();
  
  const handleClick = (event)=>{
    event.preventDefault();
    navigate("/client/add-client");
  } 
  return (
    <div className="client-page">
      <NavContainer />
      <main className="client-page__content">
        <PageHeader heading="Client" text="Create" headerType="headingButton"
            handleClick={handleClick}
            buttonStyle= "isHeader"
            isPlus= {true} />
        <ClientOverview />
        <div className="client-page__button">
          <Button
            buttonText={"Create client"}
            isPlus={false}
          />
        </div>
        <footer className="client-page__footer">
          <HomeButton/>
        </footer>
      </main>
    </div>
  );
};

export default Client;
