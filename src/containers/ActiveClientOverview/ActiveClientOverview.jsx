import React from 'react'
import ContactDetailsCard from '../../components/ContactDetailsCard/ContactDetailsCard'
import UserProfileCard from '../../components/UserProfileCard/UserProfileCard'
import BookingDetailsCard from '../../components/BookingDetailsCard/BookingDetailsCard'
import './ActiveClientOverview.scss'
import clientImage from'../../assets/images/users/client-picture.png'
import { mockData } from "../../data/mockData";


const ActiveClientOverview = () => {
  return (
    <div className='active-client-overview'>
        <UserProfileCard 
        image={clientImage} name = "Louis Thiel" role = "student" text = "Edit Client"/>
        <ContactDetailsCard cardObject={mockData.clients[0]}/>
        <BookingDetailsCard cardObject={mockData.bookings[0]}/>
    </div>
  )
}

export default ActiveClientOverview
