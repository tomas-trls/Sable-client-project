import React from 'react'
import "./NewAppointment.scss"
import UserInfoContainer from '../../containers/UserInfoContainer/UserInfoContainer'
import NavContainer from '../../containers/NavContainer/NavContainer'
import PageHeader from '../../components/PageHeader/PageHeader'

const NewAppointment = () => {
  return (
    <div className="new-appointment">
        <NavContainer />
        <div className='header'>
            <PageHeader headerType="headingOnly" heading="Book Appointments"/>
        </div>
        <div className='info-container'>
          <UserInfoContainer />
        </div>
    </div>
  )
}

export default NewAppointment