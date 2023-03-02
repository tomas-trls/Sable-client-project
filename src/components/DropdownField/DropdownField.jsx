import React from "react";
import "./DropdownField.scss";

const DropdownField = ({
  label,
  placeholderText,
  id,
  handleInput,
  optionsJSX,
}) => {
  const JSX = optionsJSX.map((option, index) => {
    return <option key={index + 1}>{option}</option>;
  });

  return (
    <div className="dropdown-field">
      <label className="dropdown-field__label" htmlFor={id}>
        {label}
      </label>
      <select
        className="dropdown-field__input"
        id={id}
        placeholder={placeholderText}
        onChange={handleInput}
      >
        {JSX}
      </select>
    </div>
  );
};

export default DropdownField;
