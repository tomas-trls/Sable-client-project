import React from 'react'
import InputField from '../../components/InputField/InputField'
import DropdownField from '../../components/DropdownField/DropdownField'
import './ClientFormContainer.scss'
import Thumbnail from '../../assets/images/functional-icons/thumbnail-icon.png'
import Button from '../../components/Button/Button'
import UserProfileCard from '../../components/UserProfileCard/UserProfileCard'
import defaultUser from '../../assets/images/users/Ellipse.png'

const ClientFormContainer = (handleDropdown) => {
  return (
    <form className='client-form'>
        <div className='client-form__mobile-thumbnail'>
            <UserProfileCard image={defaultUser} name = "Client 01"/>
        </div>
        <section className='client-form__input-container'>
            <InputField label = "First Name" id="first-name" readOnly={"Jina"}/>
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

            <div className='client-form__thumbnail-mobile'>
                <div className='client-form__image-container'>
                    <img src = {Thumbnail} alt = "thumbnail" className='client-form__image'/>
                </div>
                <div className='client-form__upload-button'>
                    <Button buttonStyle="isUpload" buttonText= "Upload"/>
                </div>
            </div>
            
            </div>
            <InputField label = "Employer" id="employer"/>
            <InputField label = "Role" id="role"/>
            <div>
            <div className='client-form__form-buttons'>
              <Button buttonText="Cancel" buttonStyle = "isCancel--purple"/>
              <Button buttonText="Save"/> 
            </div>
                <a className='client-form__text' href='#'>Delete User</a>
            </div>
            <div className='client-form__mobile-button'>
                <Button buttonText="Submit" buttonStyle = "isMobileDefault"/>
            </div>
        </section>
    </form>
  )
}

export default ClientFormContainer