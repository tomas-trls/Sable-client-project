import React from "react";
import ResourceForm from "../../components/ResourceForm/ResourceForm";
import HomeButton from "../../components/HomeButton/HomeButton";
import Layout from "../../components/Layout/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import NavContainer from "../../containers/NavContainer/NavContainer";
import "./RequestResource.scss";

const RequestResource = ({ staff, category, resourceName }) => {
  return (
    <div className="request-resource-container">
      <NavContainer />
      <Layout>
        <PageHeader
          headerType="headingButton"
          heading="Request Resource"
          buttonStyle="isHeader"
          text="Save"
          isPlus={true}
        />
        <div className="request-resource-container__form">
          <ResourceForm
            formPage={"requestResource"}
            staff={staff}
            category={category}
            resourceName={resourceName}
            optionsArr={["Syringe", "Bandage"]}
            text="Request"
          />
        </div>
        <HomeButton />
      </Layout>
    </div>
  );
};

export default RequestResource;
