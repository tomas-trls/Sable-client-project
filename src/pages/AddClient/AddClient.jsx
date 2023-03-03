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

  //Displays the "Success" overlay
  const handleSubmit = (event) => {
    event.preventDefault(); 
    setShowOverlay(true)
  }
  
  const navigate = useNavigate();
  //Is for the home button in the overlay
  const handleSubmitClick = (event) => {
      event.preventDefault(); 
      navigate("/home");
  }

  //Is for the cancel button
  const handleCancel = (event) => {
    event.preventDefault(); 
    navigate("/client");
}

  //Is for the upload button
  const handleUpload = (event) => {
    event.preventDefault(); 
    console.log("this will upload an image")
  }


  return (
    <div className="add-client">
      {showOverlay && <ConfirmationOverlay  overlayType={"overlayOneButton"} text="Success" buttonTextOne={"Home"} handleClick={handleSubmitClick}/>}
      <NavContainer />
      <Layout>
        <PageHeader
          heading="Add Client"
          headerType="headingButton"
          text="Save"
          handleClick={handleSubmit}

        />
        <ClientFormContainer isEditClient={false} handleUpload={handleUpload} handleSubmit={handleSubmit} handleClick={handleCancel} />
        <div>
          <HomeButton />
        </div>
      </Layout>
    </div>
  );
};

export default AddClient;