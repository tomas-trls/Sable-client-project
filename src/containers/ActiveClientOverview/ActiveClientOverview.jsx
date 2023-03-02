import React from 'react'
import ContactDetailsCard from '../../components/ContactDetailsCard/ContactDetailsCard'
import UserProfileCard from '../../components/UserProfileCard/UserProfileCard'
import BookingDetailsCard from '../../components/BookingDetailsCard'
import './ActiveClientOverview.scss'

const ActiveClientOverview = () => {
  return (
    <div>
        <UserProfileCard/>
        <ContactDetailsCard/>
        <BookingDetailsCard/>
    </div>
  )
}

export default ActiveClientOverview
