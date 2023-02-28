import React from 'react'
import InputField from '../../components/InputField/InputField'
import './ClientFormContainer.scss'

const ClientFormContainer = () => {
  return (
    <form>
        <InputField label = "First Name" id="first-name"/>
        <InputField label = "Last Name" id="last-name"/>
        <InputField label = "Date Of Birth" id="date-birth"/>
        <InputField label = "Email Address" id="email" />
        <InputField label = "Mobile Number" id="number"/>
    </form>
  )
}

export default ClientFormContainer