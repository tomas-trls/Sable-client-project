import React from 'react'
import './AddClient.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import NavContainer from '../../containers/NavContainer/NavContainer'
import Layout from '../../components/Layout/Layout'
import ClientFormContainer from '../../containers/ClientFormContainer/ClientFormContainer'

const AddClient = () => {
  return (
    <div className='add-client'>
    <NavContainer /> 
    <Layout>
      <PageHeader heading="Add Client" headerType="headingButton" text="Save"/>
      <ClientFormContainer isEditClient={true}/>
    </Layout>
    </div>
  )
}

export default AddClient