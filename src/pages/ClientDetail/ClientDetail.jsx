import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import NavContainer from '../../containers/NavContainer/NavContainer'
import './ClientDetail.scss'
import { useNavigate } from 'react-router-dom'
const ClientDetail = () => {
   
    const navigate = useNavigate();
    const handleClick = (event) => {
        event.preventDefault();
        navigate("/client/edit-client");
    }

  return (
    <div className='client-detail'>
        <NavContainer />
        <main className='client-detail__main'>
            <PageHeader heading="Client Details" text="Edit" headerType="headingButton" 
            buttonStyle= "isHeader"
            handleClick ={ handleClick}
            isPlus= {true} />
            <div className='client-detail__REPLACEWITHCONTAINER'>
            </div>
        </main>
    </div>
  )
}

export default ClientDetail