import React, { useState } from 'react';

import Layout from '../components/Layout';
import FormGroupData from '../components/FormGroupData';
import Button from '../components/Button';
import SEO from '../components/seo'
import './../theme/globals.scss';
import TitleHighlight from './../components/TitleHighlight'
import FormValidator from './../services/FormValidator';
const pageTitle = 'Contact';
const formSchema = {
  name: { 
    label:'Name',
    value: '',
    type: 'text' ,
    validations: ['required'],
  },
  email: { 
    label:'Email',
    value: '',
    type: 'text' ,
    validations: ['required', 'email'],
  },
  phone: { 
    label:'Phone Number',
    value: '',
    type: 'text' ,
  },
  message: { 
    label:'Message',
    value: '',
    type: 'textfield',
  },
}

const IndexPage = () => {
  const [ formData, setFormData ] = useState(formSchema);

  const handleInputData = (event) => {
    const { value, name } = event.target;
    const target = FormValidator.validateInput({ ...formData[name], value });
    setFormData({ ...formData, [name]: target });
  }

  const isFormValid = () => {
    const validatedFormData = FormValidator.validateFormSection(formData);
    const hasErrors = !FormValidator.isFormSectionValid(validatedFormData);
    setFormData({ ...validatedFormData });
    return !hasErrors;
}

  const processForm = (event) => {
    event.preventDefault();
    if(!isFormValid()) {
      // TODO: Add Alert Service and push error
      return;
    }
    console.log('Process Form', formData)
  }
  // TODO: update Layout according to Design Specs
  return (
    <Layout pageTitle={pageTitle}>
      <SEO title={pageTitle} />
      <div className="ui-col-12">
        <TitleHighlight text='Get in touch'/>
        <p>If you have any questions, please do not hesitate to send us a message. We reply within 24 hours.</p>
        <form className="" autoComplete="off" onSubmit={processForm}>
            <FormGroupData data={formData} section="contact" handleInputData={ handleInputData } />
            <Button text='Submit' onClick={processForm}/>
          </form>
      </div>
    </Layout>
  )
}

export default IndexPage
