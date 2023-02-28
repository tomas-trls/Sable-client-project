import React from 'react'
import InputField from '../../components/InputField/InputField'
import './ClientFormContainer.scss'
import Thumbnail from '../../assets/images/functional-icons/thumbnail-icon.png'

const ClientFormContainer = () => {
  return (
    <form className='client-form'>
        <div className='client-form__input-container'>
            <InputField label = "First Name" id="first-name"/>
            <InputField label = "Last Name" id="last-name"/>
            <InputField label = "Date Of Birth" id="date-birth"/>
            <InputField label = "Email Address" id="email" />
            <InputField label = "Mobile Number" id="number"/>
        </div>
        <div className='client-form__input-container'>
            <h2 className='client-form__image-text'>Client Thumbnail</h2> 
            <div className='client-form__image-container'>
                <img src = {Thumbnail} alt = "thumbnail" className='client-form__image'/>
            </div>
        </div>
    </form>
  )
}

export default ClientFormContainer