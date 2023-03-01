import Layout from "../../components/Layout/Layout";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import NavContainer from "../../containers/NavContainer/NavContainer";
import SettingsCard from "../../components/SettingsCard/SettingsCard";
import "../Settings/Settings.scss";
import Button from "../../components/Button/Button";
import HomeButton from "../../components/HomeButton/HomeButton";

const Settings = ({setUser}) => {
  return (
    <div className="settings-container">
      <NavContainer />
      <Layout>
        <PageHeader heading="Settings" headerType="headingOnly" />
        <div className="settings-page__content">
          <SettingsCard />
          <div className="settings-page__button-container">
            <Button
              className="settings-page__button"
              buttonText="Log out"
              buttonStyle="isLogout"
              handleClick={setUser}
            />
          </div>
        </div>
        <div className="home-button-container">
            <HomeButton />
          </div>
      </Layout>
    </div>
  );
};

export default Settings;
