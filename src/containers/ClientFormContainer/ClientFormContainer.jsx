import React from 'react'
import InputField from '../../components/InputField/InputField'
import DropdownField from '../../components/DropdownField/DropdownField'
import './ClientFormContainer.scss'
import Thumbnail from '../../assets/images/functional-icons/thumbnail-icon.png'
import Button from '../../components/Button/Button'

const ClientFormContainer = (handleDropdown) => {

  return (
    <form className='client-form'>
        <section className='client-form__input-container'>
            <InputField label = "First Name" id="first-name"/>
            <InputField label = "Last Name" id="last-name"/>
            <InputField label = "Date Of Birth" id="date-birth"/>
            <InputField label = "Email Address" id="email" />
            <InputField label = "Mobile Number" id="number"/>
            <DropdownField id="employed" label="Employed Post Course:" handleInput={handleDropdown}
            optionsJSX = {
                    <>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    </>
                }
             />
            
        </section>
        <section className='client-form__right-container'>
            <div className='client-form__thumbnail-container'>
            <h2 className='client-form__image-text'>Client Thumbnail</h2> 
            <div className='client-form__image-container'>
                <img src = {Thumbnail} alt = "thumbnail" className='client-form__image'/>
            </div>
            <div className='client-form__upload-button'>
            <Button buttonStyle="isUpload" buttonText= "Upload"/>
            </div>
            </div>
            <InputField label = "Employer" id="employer"/>
            <InputField label = "Role" id="role"/>
            <div>
            <div className='client-form__form-buttons'>
              <Button buttonText="Cancel" buttonStyle = "isCancel--purple"/>
              <Button buttonText="Save"/> 
            </div>
            <a  className='text' href='#'>delete</a>
            </div>
        </section>
    </form>
  )
}

export default ClientFormContainer