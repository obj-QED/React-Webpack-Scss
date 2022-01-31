import react, { useState } from 'react'
import HubspotForm from 'react-hubspot-form'

import '../assets/style/form.scss'

const HubspotContactForm = () => {
  return (
    <HubspotForm
      cssClass='api-form'
      cssRequired='api-form-required'
      portalId='885542'
      onSubmit={() => {
        console.log('Submittes')
      }}
      css=''
      formId='79a19461-e720-4cf1-a632-1528022454a8'
      translations={{
        en: {
          required: 'Please enter Email',
          submitText: 'Request full demo',
          submissionErrors: {
            MISSING_REQUIRED_FIELDS: 'Fields are not filled',
          },
        },
      }}
    />
  )
}

export default HubspotContactForm;