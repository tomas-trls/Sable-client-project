import React from "react";
import ResourceForm from "../../components/ResourceForm/ResourceForm";
import HomeButton from "../../components/HomeButton/HomeButton";
import Layout from "../../components/Layout/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import NavContainer from "../../containers/NavContainer/NavContainer";
import "./RequestResource.scss";
import ConfirmationOverlay from "../../components/ConfirmationOverlay/ConfirmationOverlay";
import { useState } from "react";

const RequestResource = ({ staff, category, resourceName }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setShowOverlay(!showOverlay);
    setIsActive(!isActive);
  };

  return (
    <div className="request-resource-container">
      <NavContainer />
      <Layout>
        <div
          className={
            isActive
              ? "request-resource-container__overlay + active"
              : "request-resource-container__overlay"
          }
        >
          <PageHeader headerType="headingOnly" heading="Request Resource" />
          <div className="request-resource-container__form">
            <ResourceForm
              handleToggle={handleToggle}
              formPage={"requestResource"}
              staff={staff}
              category={category}
              resourceName={resourceName}
              optionsArr={["Syringe", "Bandage"]}
              text="Request"
            />
            <HomeButton />
          </div>
        </div>
        {showOverlay && (
          <ConfirmationOverlay
            overlayType="overlayLogin"
            text="Request Complete"
            buttonStyleOne="isMobilePopup"
            buttonTextOne="Home"
          />
        )}
      </Layout>
    </div>
  );
};

export default RequestResource;
