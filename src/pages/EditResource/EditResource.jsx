import React from "react";
import ResourceForm from "../../components/ResourceForm/ResourceForm";
import HomeButton from "../../components/HomeButton/HomeButton";
import Layout from "../../components/Layout/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import NavContainer from "../../containers/NavContainer/NavContainer";
import "./EditResource.scss";
import { useParams } from 'react-router-dom';

const EditResource = ({ resources }) => {
  let { id } = useParams();
  const currentResource = resources.find((resource) => {
    return resource.id == id 
  })
  return (
    <div className="edit-resource-container">
      <NavContainer />
      <Layout>
        <PageHeader
          headerType="headingButton"
          heading="Edit Resource"
          buttonStyle="isHeader"
          text="Save"
          isPlus={true}
        />
        <div className="edit-resource-container__form">
          <ResourceForm
            formPage={"editResource"}
            resource={currentResource}
            optionsArr={[]}
            text="Save"
          />
        </div>
        <HomeButton />
      </Layout>
    </div>
  );
};

export default EditResource;
