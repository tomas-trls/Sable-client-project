import React from 'react'
import './StaffResources.scss'
import DataCard from '../DataCard/DataCard'
//import resourceData from "../../mockData.js"

const StaffResources = ({staffName, renderLabels}) => {
  return (
    <div className='staff-resources'>
        <h1 className='staff-resources__staff-member'>{staffName}</h1>
      
        { renderLabels && <div className="staff-resources__labels">
            <p className="booking-container__label">Resource Name</p>
            <p className="booking-container__label">Quantity Remaining</p>
            <p className="booking-container__label">Cost per unit</p>
            <p className="booking-container__label">Auto-Purchase</p>
            <p className="booking-container__label">Auto-Purchase Level</p>
        </div>}
        <DataCard cardType={"resource"} cardObject={{resourceName: "Syringes",
        quantity: 580,
        cost: "£25.99",
        isAutoPurchase: true,
        autoPurchaseLevel: 300,
    }} />

    <DataCard cardType={"resource"} cardObject={{resourceName: "Syringes",
        quantity: 580,
        cost: "£25.99",
        isAutoPurchase: true,
        autoPurchaseLevel: 300,
    }} />

    <DataCard cardType={"resource"} cardObject={{resourceName: "Syringes",
        quantity: 580,
        cost: "£25.99",
        isAutoPurchase: true,
        autoPurchaseLevel: 300,
    }} />

     
    </div>
    )
}

export default StaffResources