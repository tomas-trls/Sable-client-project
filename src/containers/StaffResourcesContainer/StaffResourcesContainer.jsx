import React from 'react'
import './StaffResourcesContainer.scss'
import StaffResources from '../../components/StaffResources/StaffResources'

const StaffResourcesContainer = () => {
 

  return (
    <div className='staff-resource-container'>
        <StaffResources staffName={"Staff 01"} renderLabels={true}/>
        <StaffResources staffName={"Staff 02"} />
    </div>
  )
}

export default StaffResourcesContainer