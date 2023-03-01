import React from "react";
import "./EditClient.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import NavContainer from "../../containers/NavContainer/NavContainer";
import Layout from "../../components/Layout/Layout";
import ClientFormContainer from "../../containers/ClientFormContainer/ClientFormContainer";
import HomeButton from "../../components/HomeButton/HomeButton";

const EditClient = () => {
  return (
    <div className="edit-client">
      <NavContainer />
      <Layout>
        <PageHeader
          heading="Edit Client"
          headerType="headingButton"
          text="Save"
        />
        <ClientFormContainer isEditClient={true} />
        <div>
          <HomeButton />
        </div>
      </Layout>
    </div>
  );
};

export default EditClient;
