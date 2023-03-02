import React from "react";
import "./AddClient.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import NavContainer from "../../containers/NavContainer/NavContainer";
import Layout from "../../components/Layout/Layout";
import ClientFormContainer from "../../containers/ClientFormContainer/ClientFormContainer";
import HomeButton from "../../components/HomeButton/HomeButton";
import ConfirmationOverlay from "../../components/ConfirmationOverlay/ConfirmationOverlay";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddClient = () => {

  const [showOverlay, setShowOverlay] = useState(false)
  const handleSubmit = (event) => {
    event.preventDefault(); 
    setShowOverlay(true)
  }
  
  const navigate = useNavigate();
  const handleClick = (event) => {
      event.preventDefault(); 
      navigate("/home");
  }

  return (
    <div className="add-client">
      {showOverlay && <ConfirmationOverlay  overlayType={"overlayOneButton"} text="Success" buttonTextOne={"Home"} handleClick={handleClick}/>}
      <NavContainer />
      <Layout>
        <PageHeader
          heading="Add Client"
          headerType="headingButton"
          text="Save"
          handleClick={handleSubmit}

        />
        <ClientFormContainer isEditClient={false} handleClick={handleSubmit} />
        <div>
          <HomeButton />
        </div>
      </Layout>
    </div>
  );
};

export default AddClient;
