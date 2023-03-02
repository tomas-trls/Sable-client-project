import React from "react";
import Logo from "../../assets/images/logo/logo-white.png";
import Button from "../Button/Button";
import "./PageHeader.scss";

const PageHeader = ({
  headerType,
  heading,
  text,
  buttonStyle,
  isPlus,
  isInputIncomplete,
  optionsArr,
  handleOnChange,
  handleClick,
}) => {
  const HeadingOnlyJSX = () => (
    <div className="heading-only">
      <img src={Logo} alt="logo" className="heading-only__logo" />
      <h1 className="heading-only__heading">{heading}</h1>
    </div>
  );

  const LogoOnlyJSX = () => (
    <div className="logo-only">
      <img src={Logo} alt="logo" className="logo-only__logo" />
    </div>
  );

  const HeadingButtonJSX = () => (
    <div className="heading-button">
      <img src={Logo} alt="logo" className="heading-button__logo" />
      <h1 className="heading-button__heading">{heading}</h1>
      <div className="header-button">
        <Button
          buttonText={text}
          buttonStyle={buttonStyle}
          isPlus={isPlus}
          isInputIncomplete={isInputIncomplete}
          handleClick={handleClick}
        />
      </div>
    </div>
  );

  const HeadingButtonDropdownJSX = () => {
    const optionsJSX = optionsArr.map((option, index) => {
      return (
        <option className="option" value={option} key={index}>
          {option}
        </option>
      );
    });
    return (
      <div className="heading-button-dropdown">
        <div className="heading-button-dropdown__main">
          <img
            src={Logo}
            alt="logo"
            className="heading-button-dropdown__logo"
          />
          <h1 className="heading-button-dropdown__heading">{heading}</h1>
          <div className="header-button">
            <Button
              buttonText={text}
              buttonStyle={buttonStyle}
              isPlus={isPlus}
              isInputIncomplete={isInputIncomplete}
              handleClick={handleClick}
            />
          </div>
        </div>
        <div className="heading-button-dropdown__dropdown">
          <select onChange={handleOnChange} id="dropdown">
            {optionsJSX}
          </select>
        </div>
      </div>
    );
  };

  return (
    <>
      {   headerType === "headingOnly"
        ? HeadingOnlyJSX()
        : headerType === "headingButton"
        ? HeadingButtonJSX()
        : headerType === "headingButtonDropdown"
        ? HeadingButtonDropdownJSX()
        : headerType === "logoOnly"
        ? LogoOnlyJSX()
        : alert("unknown header")}
    </>
  );
};

export default PageHeader;
