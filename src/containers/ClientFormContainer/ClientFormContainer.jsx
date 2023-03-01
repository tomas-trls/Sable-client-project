import React from 'react'
import InputField from '../../components/InputField/InputField'
import DropdownField from '../../components/DropdownField/DropdownField'
import './ClientFormContainer.scss'
import Thumbnail from '../../assets/images/functional-icons/thumbnail-icon.png'
import Button from '../../components/Button/Button'
import UserProfileCard from '../../components/UserProfileCard/UserProfileCard'
import defaultUser from '../../assets/images/users/Ellipse.png'
import ClientProfile from '../../assets/images/users/client-picture.png'

const ClientFormContainer = ({handleDropdown, isEditClient}) => {
  return (

    <form className='client-form'>
        <div className='client-form__mobile-thumbnail'>
            <UserProfileCard image={defaultUser} name = "Client 01"/>
        </div>
        <section className='client-form__input-container'>
            {isEditClient ? <InputField label = "First Name" id="first-name" editValue={"Jina"}/> : <InputField label = "First Name" id="first-name"/>}
            {isEditClient ? <InputField label = "Last Name" id="last-name" editValue={"Youssef"}/> : <InputField label = "Last Name" id="last-name"/>}
            {isEditClient ? <InputField label = "Date Of Birth" id="date-birth" editValue={"19/03/1999"}/> : <InputField label = "Date Of Birth" id="date-birth"/>}
            {isEditClient ? <InputField label = "Email Address" id="email" editValue={"testeremial@gmail.com"}/> : <InputField label = "Email Address" id="email"/>}
            {isEditClient ? <InputField label = "Mobile Number" id="number" editValue={"09817383781"}/> : <InputField label = "Mobile Number" id="number"/>}
            {isEditClient ? <DropdownField id="employed" label="Employed Post Course:" handleInput={handleDropdown} selected = "No" 
            optionsJSX = {
                    <>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    </>
                }/> 
                : <DropdownField id="employed" label="Employed Post Course:" handleInput={handleDropdown}
                optionsJSX = {
                <>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                </>
            }/>}

        </section>
        <section className='client-form__right-container'>
            <div className='client-form__thumbnail-container'>
            <h2 className='client-form__image-text'>Client Thumbnail</h2> 

            <div className='client-form__thumbnail-mobile'>
                <div className='client-form__image-container'>
                    {isEditClient ? <img src = {ClientProfile} alt = "thumbnail" className='client-form__user-image'/> : <img src = {Thumbnail} alt = "thumbnail" className='client-form__image'/>}
                    <img src = {Thumbnail} alt = "thumbnail" className='client-form__mobile-image'/>
                </div>
                <div className='client-form__upload-button'>
                    <Button buttonStyle="isUpload" buttonText= "Upload"/>
                </div>
            </div>
            
            </div>
            {isEditClient ? <InputField label = "Employer" id="employer" editValue={"nology"}/> : <InputField label = "Employer" id="employer"/>}
            {isEditClient ? <InputField label = "Role" id="role" editValue={"developer"}/> : <InputField label = "Role" id="role"/>}
            <div>
            <div className='client-form__form-buttons'>
              <Button buttonText="Cancel" buttonStyle = "isCancel--purple"/>
              <Button buttonText="Save"/> 
            </div>
               {isEditClient ? <a className='client-form__text' href='#'>Delete User</a>: null}
            </div>
            <div className='client-form__mobile-button'>
                <Button buttonText="Submit" buttonStyle = "isMobileDefault"/>
            </div>
        </section>
    </form>
  )
}

export default ClientFormContainer