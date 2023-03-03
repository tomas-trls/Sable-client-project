import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import DatePicker from "react-date-picker";
import Button from "../../components/Button/Button";
import DropdownField from "../../components/DropdownField/DropdownField";
import InputField from "../../components/InputField/InputField";
import mockData from "../../data/mockData";
import "./BookingOverview.scss";
import ConfirmationOverlay from "../../components/ConfirmationOverlay/ConfirmationOverlay";
import { useNavigate } from "react-router-dom";
import plus from "../../assets/images/functional-icons/plus-icon.png";
const UserInfoContainer = () => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    navigate("/home");
  };
  const [error, setError] = useState("");
  const [day, setDay] = useState(new Date());
  const [showOverlay, setShowOverlay] = useState(false);
  const [time, setTime] = useState("09:00");
  const time_slots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
  ];
  const staffMembers = mockData.staff.map((staffMember) => {
    return staffMember.name;
  });
  const handleInput = (event) => {
    switch (event.target.id) {
      case "time":
        setTime(event.target.value);
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const firstName = event.target[0].value;
    const lastName = event.target[1].value;
    const email = event.target[2].value;
    const number = event.target[3].value;
    const checkIfEmailIsValid =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const checkIfSpecialCharacters = /^[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/;
    if (firstName == "" || lastName == "" || email == "" || number == "") {
      setError("Error, please ensure each field isn't empty");
    } else if (/\d/.test(firstName) || /\d/.test(lastName)) {
      setError("Error, names should not contain numbers or special characters");
    } else if (/[a-zA-Z]/g.test(number)) {
      setError("Error, phone number most only contain numbers");
    } else if (!checkIfEmailIsValid.test(email)) {
      setError("Error, email is not valid");
    } else if (
      checkIfSpecialCharacters.test(firstName) ||
      checkIfSpecialCharacters.test(lastName)
    ) {
      setError("Error, names cannot contain special characters");
    } else {
      const objectToSubmit = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        number: number,
        staff: event.target[4].value,
        bookingDate: day,
        bookingTime: time,
      };
      console.log(objectToSubmit);
      event.target.reset();
      setShowOverlay(true);
    }
  };

  return (
    <>
      {" "}
      {error && (
        <div className="login-form__validation" id="validation--error">
          {error}
          <button
            className="cross"
            onClick={(event) => {
              event.preventDefault;
              setError("");
            }}
          >
            <img className="cross-image" src={plus} alt="an icon of a cross" />
          </button>
        </div>
      )}
      <form className="input-field-container" onSubmit={handleSubmit}>
        {showOverlay && (
          <ConfirmationOverlay
            text="Request Complete"
            overlayType={"overlayOneButton"}
            buttonTextOne={"Home"}
            handleClick={handleClick}
          />
        )}
        <div className="input-field-container__firstName">
          <InputField id="first-name" label="First Name" type={"text"} />
        </div>
        <div className="input-field-container__lastName">
          <InputField id="last-name" label="Last Name" type={"text"} />
        </div>
        <div className="input-field-container__email">
          <InputField id="email" label="Email Address" />
        </div>
        <div className="input-field-container__mobile">
          <InputField id="number" label="Mobile Number" type={"number"} />
        </div>
        <div className="input-field-container__staff-dropdown">
          <DropdownField
            id="staff"
            label="Staff Member"
            handleInput={handleInput}
            optionsJSX={staffMembers}
          />
        </div>
        <div id="datePicker" className="input-field-container__date-picker">
          <label
            htmlFor="datePicker"
            className="input-field-container__date-picker--label"
          >
            Date
          </label>
          <DatePicker
            onChange={setDay}
            value={day}
            format={"d/M/y"}
            minDate={new Date()}
            dayPlaceholder={"dd"}
            monthPlaceholder={"mm"}
            yearPlaceholder={"yyyy"}
            maxDate={new Date("2026/12/31")}
            minDetail={"decade"}
            required
          />
        </div>
        <div className="input-field-container__calendar">
          <Calendar
            onChange={setDay}
            value={day}
            minDate={new Date()}
            maxDate={new Date("2026/12/31")}
            minDetail={"decade"}
            required
          />
        </div>
        <div className="input-field-container__time-dropdown">
          <DropdownField
            id="time"
            label="Time"
            handleInput={handleInput}
            optionsJSX={time_slots}
          />
        </div>
        <div className="input-field-container__submit">
          <Button buttonText="Submit" buttonStyle="isMobileDefault" />
        </div>
        <div className="input-field-container__buttons">
          <Button buttonText="Save" />
        </div>
      </form>
    </>
  );
};

export default UserInfoContainer;
