import React from 'react'
import "./InputField.scss"

const InputField = ({label, placeholderText, id, handleInput, readOnly, editValue}) => {
  return (
    <div className='input-field'>
        <label className='input-field__label' htmlFor={id}>{label}</label>
        <input className="input-field__input" readOnly={readOnly} id={id} type="text" placeholder={placeholderText} onChange={handleInput} defaultValue={editValue}/>
    </div>
  )
}

export default InputField 