import React from 'react'
import "./DropdownField.scss"

const DropdownField = (props) => {
  const {label, placeholderText, id, handleInput, optionsJSX, selected} = props
return (
  <div className='dropdown-field'>
      <label className='dropdown-field__label' htmlFor={id}>{label}</label>
      <select className="dropdown-field__input" id={id} placeholder={placeholderText}  onChange={handleInput} defaultValue = {selected}>{optionsJSX}</select> 
  </div>
)
}

export default DropdownField