import React from 'react'
import "./NewAppointment.scss"
import UserInfoContainer from '../../containers/UserInfoContainer/UserInfoContainer'
import NavContainer from '../../containers/NavContainer/NavContainer'
import PageHeader from '../../components/PageHeader/PageHeader'
import HomeButton from '../../components/HomeButton/HomeButton'

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
        <HomeButton/>
    </div>
  )
}

export default NewAppointment