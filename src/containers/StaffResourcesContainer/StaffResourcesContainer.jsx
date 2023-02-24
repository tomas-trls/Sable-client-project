import React from 'react'
import './StaffResourcesContainer.scss'
import StaffResources from '../../components/StaffResources/StaffResources'

const StaffResourcesContainer = () => {
 

  return (
    <div>
        <StaffResources staffName={"Staff 01"} renderLabels={true}/>
        <StaffResources staffName={"Staff 02"} />
        <StaffResources staffName={"Staff 03"} />
        <StaffResources staffName={"Staff 01"} />
        <StaffResources staffName={"Staff 02"} />
        <StaffResources staffName={"Staff 03"} />
        <StaffResources staffName={"Staff 01"} />
        <StaffResources staffName={"Staff 02"} />
        <StaffResources staffName={"Staff 03"}/>
    </div>
  )
}

export default StaffResourcesContainer