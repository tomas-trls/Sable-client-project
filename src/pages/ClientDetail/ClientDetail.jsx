import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import NavContainer from "../../containers/NavContainer/NavContainer";
import "./ClientDetail.scss";
import ActiveClientOverview from "../../containers/ActiveClientOverview/ActiveClientOverview";
import Button from "../../components/Button/Button";
import HomeButton from "../../components/HomeButton/HomeButton";
import mockData from "../../data/mockData";
import { useNavigate, useParams } from "react-router-dom";
const ClientDetail = () => {
  const { clientId } = useParams();
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    navigate(`/client/${clientId}/edit-client`);
  };

  const getClient = mockData.clients.find((client) => {
    return client.id == clientId;
  });

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
          <ActiveClientOverview isClientDetails={true} client={getClient} />
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
