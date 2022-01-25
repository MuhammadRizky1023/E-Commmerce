import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { IKContext, IKUpload } from 'imagekitio-react';
import { Link } from 'react-router-dom';
import '../css/NewProduct.css'
import useRouter from 'use-react-router';
import axios from 'axios';
const NewProducts = (props) => {
  const {history} = useRouter()
   
  const [productData, setProductData] = useState({
    id: '',
    title: '',
    description: '',
    image: '',
    price: '',
    stock: '',
    category_id: 0,
  })
  const publicKey = process.env.REACT_APP_IMAGEKIT_PUBLIC_KEY;
  const urlEndpoint = process.env.REACT_APP_IMAGEKIT_URL_ENDPOINT;
  const authenticationEndpoint = process.env.REACT_APP_IMAGEKIT_AUTHENTICATION_ENDPOINT;

  const onChangeField = (e) => {
    setProductData({
      ...productData,
      [e.target.id]: e.target.value,
    })
  }

  const onError = (Error) => {
    console.log(Error)
  }

  const onSuccess= (res) => {
    setProductData({
      ...productData,
      image: res.url,
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const request = await axios.post(
        'http://localhost:8000/product/new-product',
        productData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          }
        }
      );
      if (request.data.code === 200) {
        alert('product has been successfully');
        history.push('/admin/')
      }
    } catch (error) {
      console.log(error.message);
    }
  }

    return (
        <div className='form'>
        <h1>New Product</h1>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter product name'
                name='title'
                onChange={onChangeField}
                value = {productData.title}
              />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='product description'
                name='description'
               onChange={onChangeField}
               value= {productData.description}
              />
            </Form.Group>

            <Form.Group className='mb-3 image'>
                  <div className='current-image'>
                    <div>current image:</div>
                    <div
                      className='image'
                      style={{
                        backgroundImage: `url("${productData.image}")`,
                        width: '100px',
                        height: '150px',
                        backgroundSize: 'contain',
                      }}
                    >
                    </div>
                  </div>
            <IKContext
              publicKey={publicKey}
              urlEndpoint={urlEndpoint}
              authenticationEndpoint={authenticationEndpoint}
              >
                <Form.Label>choose product image</Form.Label>
                <br />
                <IKUpload
                fileName='test-image.jpg'
                onSuccess={onSuccess}
                onError={onError}
                />
              </IKContext>
              <div className='notice'>
                *the image you upload will appear above after some time
              </div>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>stock</Form.Label>
              <Form.Control
                type='number'
                placeholder='product stock'
                name='stock'
               onChange={onChangeField}
               value={productData.stock}
              />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Product Price (in $)</Form.Label>
              <Form.Control
                type='number'
                placeholder='product price'
                name='price'
                onCange={onChangeField}
                value={productData.price}
              />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Category</Form.Label>
              <Form.Select
                aria-label='category'
                name='category_id'
                value={productData.category_id}
                onChange={onChangeField}
              >
                <option>Choose a category</option>
                <option value='1'>Pakaian</option>
                <option value='2'>Jam</option>
                <option value='3'>Kacamata</option>
                <option value='4'>Sepatu</option>
                <option value="5">Topi</option>
              </Form.Select>
            </Form.Group>

            <div className='buttons'>
              <Link to={{ pathname: '/admin/' }}>
                <Button variant='danger' type='submit'>
                  Back
                </Button>
              </Link>
              <Button variant='primary' type='submit' onClick={onSubmit} >
                Submit
              </Button>
            </div>
          </Form>
            </div>
    )
}
export {NewProducts}