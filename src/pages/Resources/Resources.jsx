import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import NavContainer from "../../containers/NavContainer/NavContainer";
import ResourcesOverview from "../../containers/ResourcesOverview/ResourcesOverview";
import "./Resources.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import HomeButton from "../../components/HomeButton/HomeButton";

const Resource = () => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    navigate("/resources/request");
  };

  return (
    <>
      <div className="resources-page">
        <NavContainer />
        <main className="resources-page__main-content">
          <div className="resources-page__header">
            <PageHeader
              heading="Resources"
              text="Create"
              headerType="headingButton"
              buttonStyle="isHeader"
              isPlus={true}
              handleClick={handleClick}
            />
          </div>
          <div className="resources-page__cards-container">
            <ResourcesOverview isAdmin={false} />
            <ResourcesOverview isAdmin={true} />

            <div className="resources-page__cards-container--button">
              <Button
                handleClick={handleClick}
                buttonText="Create"
                isPlus={true}
              />
            </div>
          </div>
        </main>
      </div>
      <footer className="client-page__footer">
        <HomeButton />
      </footer>
    </>
  );
};

export default Resource;
