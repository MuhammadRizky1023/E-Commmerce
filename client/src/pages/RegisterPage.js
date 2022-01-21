import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useRouter from 'use-react-router';
import { Form, Button } from 'react-bootstrap';
import '../css/Register.css';
import { Layout } from '../component/Layout';


const RegisterPage = () => {
  const { history } = useRouter();

  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    user_type_id: 1,
  });

  const [registerError, setRegisterError] = useState({})

  const onChangeField = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });

    setRegisterError(validate(registerData));
  };

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email ="Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password ="Password is required!";
    }else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if (!values.first_name) {
      errors.first_name ="First name is required!";
    }
    if (!values.last_name) {
      errors.last_name ="Last name is required!";
    }
    if (!values.phone_number) {
      errors.phone_number ="Phone number is required!"
    }
    return errors;
    
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('onSubmit')
    try {
      const res = await axios.post(
        'http://localhost:8000/auth/user/register',
        registerData
      );
      console.log(res, '<........')
      if (res.data.code === 201) {
        history.push('/login');
      } else {
        alert('error register');
      }

    } catch (error) {
      console.log(error.response)
      // if (error.response && error.response.data) {
      //   alert(error.response.data);
      //   console.log(error.response.data);
      // } else {
      //   alert(error.message);
      // }
    }
  };
  return (
    <Layout>
      <div className='form'>
        <h1>REGISTER</h1>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              name='email'
              onChange={onChangeField}
              value={registerData.name}
            />
            <p></p>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              name='password'
              onChange={onChangeField}
              value={registerData.password}
            />
            <p></p>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Your first name'
              name='first_name'
              onChange={onChangeField}
              value={registerData.first_name}
            />
            <p></p>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Your last name'
              name='last_name'
              onChange={onChangeField}
              value={registerData.last_name}
            />
            <p></p>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type='number'
              placeholder='Your phone number'
              name='phone_number'
              onChange={onChangeField}
              value={registerData.phone_number}
            />
            <p></p>
          </Form.Group>
          <Button variant='primary' type='submit' onClick={onSubmit}>
            Submit
          </Button>
        </Form>
      </div>
      </Layout>
  );
};

export {RegisterPage}
