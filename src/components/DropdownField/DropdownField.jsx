import React from 'react'
import "./DropdownField.scss"

const DropdownField = (props) => {
  const {label, placeholderText, id, handleInput, options} = props
return (
  <div className='dropdown-field'>
      <label className='dropdown-field__label' htmlFor={id}>{label}</label>
      <select className="dropdown-field__input" id={id} placeholder={placeholderText}  onChange={handleInput}/>
  </div>
)
}

export default DropdownField