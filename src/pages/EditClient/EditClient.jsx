import React from "react";
import "./EditClient.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import NavContainer from "../../containers/NavContainer/NavContainer";
import Layout from "../../components/Layout/Layout";
import ClientFormContainer from "../../containers/ClientFormContainer/ClientFormContainer";
import HomeButton from "../../components/HomeButton/HomeButton";
import { useState } from "react";
import ConfirmationOverlay from "../../components/ConfirmationOverlay/ConfirmationOverlay";
import { useNavigate, useParams } from "react-router-dom";
import mockData from "../../data/mockData";
const EditClient = () => {
  const { clientId } = useParams();
  const getClient = mockData.clients.find((client) => {
    return client.id == clientId;
  });

  const [showOverlay, setShowOverlay] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowOverlay(true);
  };

  const handleUpload = (event) => {
    event.preventDefault();
    console.log("Upload");
  };

  const navigate = useNavigate();
  const handleCancel = (event) => {
    event.preventDefault();
    navigate("/home");
  };

  return (
    <div className="edit-client">
      {showOverlay && (
        <ConfirmationOverlay
          overlayType={"overlayOneButton"}
          text="Success"
          buttonTextOne={"Home"}
          handleClick={handleCancel}
        />
      )}
      <NavContainer />
      <Layout>
        <PageHeader
          heading="Edit Client"
          headerType="headingButton"
          text="Save"
          handleClick={handleSubmit}
        />
        <ClientFormContainer
          isEditClient={true}
          handleClick={handleCancel}
          handleSubmit={handleSubmit}
          handleUpload={handleUpload}
          client={getClient}
        />
        <div>
          <HomeButton />
        </div>
      </Layout>
    </div>
  );
};

export default EditClient;
