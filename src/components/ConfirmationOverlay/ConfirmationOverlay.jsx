import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./ConfirmationOverlay.scss";

const ConfirmationOverlay = ({
  overlayType,
  text,
  buttonTextOne,
  buttonTextTwo,
  buttonStyleOne,
  buttonStyleTwo,
  handleClick,
  setUser,
  handleToggle,
}) => {
  const overlayOneButtonJSX = () => (
    <div className="overlayOneButton overlay">
      <div className="overlay-content">
        <h1 className="overlay-text">{text}</h1>
        <div className="overlay-buttons">
          <Button
            buttonText={buttonTextOne}
            buttonStyle={buttonStyleOne}
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );

  const overlayTwoButtonsJSX = () => (
    <div className="overlayTwoButtons overlay">
      <div className="overlay-content">
        <h1 className="overlay-text">{text}</h1>
        <div className="overlay-buttons">
          <Button
            buttonText={buttonTextOne}
            buttonStyle={buttonStyleOne}
            handleClick={handleClick}
          />
          <Button
            buttonText={buttonTextTwo}
            buttonStyle={buttonStyleTwo}
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );

  const overlayLogoutJSX = () => (
    <div className="overlayLogout overlay">
      <div className="overlay-content">
        <h1 className="overlay-text">{text}</h1>
        <div className="overlay-buttons">
          <Button
            buttonText={buttonTextOne}
            buttonStyle={buttonStyleOne}
            handleClick={setUser}
          />
          <Button
            buttonText={buttonTextTwo}
            buttonStyle={buttonStyleTwo}
            handleClick={handleToggle}
          />
        </div>
      </div>
    </div>
  );

  const overlayLoginJSX = () => (
    <div className="overlayLogin overlay">
      <div className="overlay-content">
        <h1 className="overlay-text">{text}</h1>
        <div className="overlay-buttons">
          <Link style={{ textDecoration: "none" }} to="/">
            <Button buttonText={buttonTextOne} buttonStyle={buttonStyleOne} />
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {overlayType === "overlayOneButton"
        ? overlayOneButtonJSX()
        : overlayType === "overlayTwoButtons"
        ? overlayTwoButtonsJSX()
        : overlayType === "overlayLogout"
        ? overlayLogoutJSX()
        : overlayType === "overlayLogin"
        ? overlayLoginJSX()
        : alert("unknown overlay")}
    </>
  );
};

export default ConfirmationOverlay;
