import axios from 'axios'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import useRouter from 'use-react-router'
import { Layout } from '../component/Layout'
import '../css/Login.css'
const LoginPage= ({setIsLogin}) => {
  const { history } = useRouter()

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  const [loginError, setLoginError] = useState({})

  const onChangeField = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
    setLoginError(validate(loginError));
    
  }

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  }



  const onSubmit = async (e) => {
    e.preventDefault()
    // const users = JSON.parse(localStorage.getItem('users'))

    // if (!users || users.length === 0) {
    //   alert('wrong credentials')
    // } else {
    //   const index = users.findIndex(
    //     user => user.email === loginData.email && 
    //     user.password === loginData.password
    //   )
      
    //   if (index === -1) {
    //     alert('wrong credentials')
    //   } else {
    //     localStorage.setItem('isLogin', JSON.stringify(true))
    //     history.push('/admin/')
    //   }
    // }
    try {
      const res = await axios.post(
        'http://localhost:8000/auth/user/login',
        loginData
      );

      localStorage.setItem('isLogin', JSON.stringify(true));
        localStorage.setItem('token', res.data.data.access_token);

        history.push('/')


    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.error)
      } else {
        alert(error.massage)
      }
    }
  }
  
  return (
    <Layout>
      <div className='form'>
        <h1>LOGIN</h1>
        <Form >
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              name='email'
              onChange={onChangeField}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              name='password'
              onChange={onChangeField}
            />
          </Form.Group>
          <Button variant='primary' type='submit' onClick={onSubmit}>
            Login
          </Button>
        </Form>
      </div>
    </Layout>
  )
}

export { LoginPage }