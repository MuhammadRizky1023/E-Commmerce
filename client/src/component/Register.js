import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import useRouter from 'use-react-router'
import { Layout } from '../component/Layout'
import "../css/Register.css"


const Register = () => {
  const { history } = useRouter()

  const [registerData, setRegisterData] = useState({
    firstname: '',
    lastname:'',
    email: '',
    phonenumber:'',
    username: '',
    password: '',
  })

  const onChangeField = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('users'))

    if (!users || users.length === 0) {
      localStorage.setItem(
        'users', JSON.stringify([registerData])
      )
    } else {
      localStorage.setItem(
        'users', JSON.stringify([...users, registerData])
      )
    }
    history.push('/login')
  }
  
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
          </Form.Group>
          <Button variant='primary' type='submit' onClick={onSubmit}>
            Register
          </Button>
        </Form>
      </div>
    </Layout>
  )
}

export { Register } 