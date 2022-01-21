import React from 'react'
import { Layout } from '../component/Layout';
import { Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BankBni from '../images/bni.png';
import BankBri from '../images/bri.png'
import BankBCA from '../images/bca.jpg';
import BankMandiri from '../images/mandiri.png';
import OVO from '../images/OVO.png';
import Gopay from '../images/gopay.png';
import axios from 'axios';
import useRouter from 'use-react-router';
import { useState } from 'react';

export const Checkout = () => {
  
    return (
        <Layout>
        <div className="payment">
        <Card>
          <Card.Header>Checkout</Card.Header>
          <Card.Body>
            <Form>
              <div className='double-input'>
                <Form.Group className='mb-3 half-input'>
                  <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='First Name'
                    />
                </Form.Group>
                <Form.Group className='mb-3 half-input'>
                  <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Last Name'
                    />
                </Form.Group>
              </div>
              <Form.Group className='mb-3 first-name'>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as='textarea'
                  style={{ height: '100px' }}
                  placeholder='Your Address'
                />
              </Form.Group>
              <div className='double-input'>
                <Form.Group className='mb-3 half-input'>
                  <Form.Label>State/Province</Form.Label>
                  <Form.Control type='text' placeholder='State or Province' />
                </Form.Group>
                <Form.Group className='mb-3 half-input'>
                  <Form.Label>City</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='City'
                    />
                </Form.Group>
              </div>
              <div className='double-input'>
                <Form.Group className='mb-3 half-input'>
                  <Form.Label>Zip/Postal Code</Form.Label>
                  <Form.Control
                    type='number'
                    placeholder='Zip or Postal Code'
                  />
                </Form.Group>
                <Form.Group className='mb-3 half-input'>
                  <Form.Label>phone</Form.Label>
                    <Form.Control
                      type='number'
                      placeholder='phone'
                    />
                </Form.Group>
              </div>
              <div className='payment-method'>
                <div className='payment-source'>
                    <p>Payments</p>
                    <Form.Check type='radio' name='payment-method' label='bni' />
                    <img src={BankBni} style={{ width: '100px' }} />
                    <Form.Check type='radio' name='payment-method' label='bri' />
                    <img src={BankBri} style={{ width: '80px' }} />
                    <Form.Check type='radio' name='payment-method' label='bca' />
                    <img src={BankBCA} style={{ width: '80px' }} />
                    <Form.Check type='radio' name='payment-method' label='Mandiri' />
                    <img src={BankMandiri} style={{ width: '100px' }} />
                    <Form.Check type='radio' name='payment-method' label='OVO' />
                    <img src={OVO} style={{ width: '100px' }} />
                    <Form.Check type='radio' name='payment-method' label='Gopay' />
                    <img src={Gopay} style={{ width: '100px' }} />
                </div>
              </div>
            </Form>
            <div className='payment-btn'>
            <Link to="/status"><Button variant='primary'>Proceed</Button></Link>
             <Link to="/cart"> <Button variant='danger'>Go Back</Button></Link>
            </div>
          </Card.Body>
        </Card>
            </div>
            </Layout>
    )
}
