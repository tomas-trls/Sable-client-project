import React from "react";
import Button from "../../components/Button/Button";
import PageHeader from "../../components/PageHeader/PageHeader";
import ClientOverview from "../../containers/ClientOverview/ClientOverview";
import NavContainer from "../../containers/NavContainer/NavContainer";
import HomeButton from "../../components/HomeButton/HomeButton"

import "./Client.scss";
const Client = () => {
  return (
    <div className="client-page">
      <NavContainer />
      <main className="client-page__content">
        <PageHeader heading="Client" text="Create" headerType="headingButton"
            buttonStyle= "isHeader"
            isPlus= {true} />
        <ClientOverview />
        <div className="client-page__button">
          <Button
            buttonText={"Create client"}
            handleClick={() => console.log("Create")}
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
