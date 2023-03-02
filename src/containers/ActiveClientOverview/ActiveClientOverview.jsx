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
        image={clientImage} name = "Mariah Chan" text = "Edit Client"/>
        <div className='active-client-overview__mobile-booking'>
          <h2 className='active-client-overview__mobile-heading'>Booking Details</h2>
          <div className='active-client-overview__contact-card'>
            <ContactDetailsCard cardObject={mockData.clients[0]}/>
          </div>
          <BookingDetailsCard cardObject={mockData}/>
        </div>
    </div>
  )
}

export default ActiveClientOverview
