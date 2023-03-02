import React from "react";
import "./BackToLogin.scss";
import ConfirmationOverlay from "../../components/ConfirmationOverlay/ConfirmationOverlay";
import PageHeader from "../../components/PageHeader/PageHeader";

const BackToLogin = () => {
  return (
    <div>
      <div className="header-container">
        <PageHeader  headerType="logoOnly" />
      </div>

      <div className="content-container">
        <ConfirmationOverlay
          overlayType="overlayLogin"
          text="Logged out!"
          buttonStyleOne="isMobilePopup"
          buttonTextOne="Back to login"
        />
      </div>
    </div>
  );
};

export default BackToLogin;
