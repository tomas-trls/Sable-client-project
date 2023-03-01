import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import NavContainer from "../../containers/NavContainer/NavContainer";
import ResourcesOverview from "../../containers/ResourcesOverview/ResourcesOverview";
import "./Resources.scss";
const Resource = () => {
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
            />
          </div>
          <div className="resources-page__cards-container">
            <ResourcesOverview isAdmin={false} />
            <ResourcesOverview isAdmin={true} />
          </div>
        </main>
      </div>
    </>
  );
};

export default Resource;
