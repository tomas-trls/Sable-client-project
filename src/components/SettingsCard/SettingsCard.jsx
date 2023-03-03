import "./SettingsCard.scss";
import Button from "../Button/Button";
import Sun from "../../assets/images/lightmode/sun-light.png";
import Moon from "../../assets/images/lightmode/moon-light.png";
import React, { useState } from "react";

const SettingsCard = () => {
  const [selectRadio, setSelectRadio] = useState("modern");
  const changeRadio = (e) => {
    setSelectRadio(e.target.value);
  };
  return (
    <main className="settings-card-container">
      <div className="settings-card">
        <div className="settings-card__content">
          <section className="settings-card__mode">
            <h1 className="settings-card__option">Light/Dark Mode:</h1>
            <div className="settings-card__toggle-container">
              <img className="settings-card__toggle-sun" src={Sun} alt="Sun" />
              <label className="settings-card__toggle-switch">
                <input type="checkbox" id="toggle-switch" />
                <span className="settings-card__toggle-slider round"></span>
              </label>
              <img
                className="settings-card__toggle-moon"
                src={Moon}
                alt="Moon"
              />
            </div>
          </section>
          <section className="settings-card__theme">
            <h1 className="settings-card__option">Select Theme:</h1>
            <div className="settings-card__checkbox-container">
              <div className="settings-card__modern">
                <label
                  htmlFor="settings-card__optionOne"
                  className="settings-card__checkbox-label"
                >
                  Modern
                </label>
                <input
                  className="settings-card__checkbox"
                  id="settings-card__optionOne"
                  type="radio"
                  onChange={changeRadio}
                  value="modern"
                  checked={selectRadio === "modern"}
                />
              </div>
              <div className="settings-card__tech">
                <label
                  htmlFor="settings-card__optionTwo"
                  className="settings-card__checkbox-label"
                >
                  Tech
                </label>
                <input
                  className="settings-card__checkbox"
                  id="settings-card__optionTwo"
                  type="radio"
                  onChange={changeRadio}
                  value="tech"
                  checked={selectRadio === "tech"}
                />
              </div>
            </div>
          </section>
        </div>
        <section className="settings-card__button-container">
          <Button buttonText={"Apply"}  />
        </section>
      </div>
    </main>
  );
};

export default SettingsCard;
