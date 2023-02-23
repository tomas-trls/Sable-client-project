import React from 'react'
import "./Button.scss"
import Plus from "../../assets/images/functional-icons/plus-icon.png";

const Button = (props) => {
  const {
    buttonText,
    handleClick,
    handleSubmit,
    buttonStyle,
    isPlus,
    isInputIncomplete,
  } = props;

  let buttonName = "button";
  let plus = "noPlus";

  if (isInputIncomplete) {
    buttonName += " inputIncomplete";
  }

  if (isPlus) {
    plus = "isPlus";
  } else {
    plus = "noPlus";
  }

  buttonName += " " + buttonStyle;

 return (
   <button
    className= {buttonName} 
    onClick= {handleClick}
    onSubmit= {handleSubmit}>
    <span className={plus}><img src={Plus} alt="" /></span>
    {buttonText}
   </button>
  )
}

export default Button;
