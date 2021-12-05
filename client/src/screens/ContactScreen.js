import React from 'react'
import FormContainer from '../components/FormContainer'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const ContactScreen = () => {
    return (
        <FormContainer>
       
      
      <h1>Get In Touch</h1>
  
        <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter address'
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter city'
           
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='postalCode'>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter postal code'
           
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='country'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter country'
          
          ></Form.Control>
        </Form.Group>
        <Link to="Contact">
        <Button type='submit'  variant='primary'>
          Submit
        </Button>
        </Link>

        </FormContainer>
    )
}

export default ContactScreen
