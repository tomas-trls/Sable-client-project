import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import NavContainer from "../../containers/NavContainer/NavContainer";
import "./ClientDetail.scss";
import ActiveClientOverview from "../../containers/ActiveClientOverview/ActiveClientOverview";
import Button from "../../components/Button/Button";
import HomeButton from "../../components/HomeButton/HomeButton";
import { useNavigate } from "react-router-dom";
const ClientDetail = () => {
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    navigate("/client/edit-client");
  };

  return (
    <div className="client-detail">
      <NavContainer />
      <main className="client-detail__main">
        <PageHeader
          heading="Client Details"
          text="Edit"
          headerType="headingButton"
          buttonStyle="isHeader"
          handleClick={handleClick}
          isPlus={true}
        />
        <div className="client-detail__content">
          <ActiveClientOverview isClientDetails={true} />
          <div className="client-detail__mobile-button">
            <Button buttonText="Edit Client" buttonStyle="isMobileDefault" />
          </div>
        </div>
        <HomeButton />
      </main>
    </div>
  );
};

export default ClientDetail;