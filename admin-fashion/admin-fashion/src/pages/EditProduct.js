/** @format */

import React, { useEffect, useState } from "react";
import "../css/EditProducts.css";
import { Form, Button } from "react-bootstrap";
import { IKContext, IKUpload } from "imagekitio-react";
import { Link, useParams } from "react-router-dom";
import useRouter from "use-react-router";
import axios from 'axios'
import { useSelector } from "react-redux";
const EditProduct = () => {
  const { id } = useParams();
  const { history } = useRouter();
  const { product } = useSelector((state) => state.productReducer);

  const [productData, setProductData] = useState({
    id: "",
    title: "",
    description: "",
    image: "",
    price: "",
    stock: "",
    category_id: 0,
  });

  

  useEffect(() => {
    const products = product.find((product) => {
      return product.id === id;
    });

    if (
      product &&
      product.length !== 0 &&
      Object.keys(product).length !== 0
    ) {
      setProductData({
        id,
        title: products.title,
        description: products.description,
        image: products.image,
        price: products.price,
        stock: products.stock,
        product_id: products.product_id,
      });
    }
  }, [product, id]);

  const publicKey = process.env.REACT_APP_IMAGEKIT_PUBLIC_KEY;
  const urlEndpoint = process.env.REACT_APP_IMAGEKIT_URL_ENDPOINT;
  const authenticationEndpoint =
    process.env.REACT_APP_IMAGEKIT_AUTHENTICATION_ENDPOINT;

  const onChangeField = (e) => {
    setProductData({
      ...productData,
      [e.target.name] : e.target.value,
    })
  };

  const onError = (error) => {
    console.log(error);
  };

  const onSuccess = (res) => {
    setProductData({
      ...productData,
      image: res.url
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const request = await axios.post('http://localhost:8000/product/update-product',
        productData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          },
        },
      );
      if (request.data.code === 201) {
        alert('data has been updated successfully');
        history.push('/admin/');
      }

    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="form">
      <h1>Edit Product</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            name="title"
            value={productData.title}
            onChange={onChangeField}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="product description"
            name="description"
            value={productData.description}
            onChange={onChangeField}
          />
        </Form.Group>

        <Form.Group className="mb-3 image">
          <div className="current-image">
            <div>current image:</div>
            <div
              className="image"
              style={{
                backgroundImage: `url("${productData.image}")`,
                width: '100px',
                height: '150px',
                backgroundSize: 'contain',
              }}
            ></div>
          </div>
          <IKContext
            publicKey={publicKey}
            urlEndpoint={urlEndpoint}
            authenticationEndpoint={authenticationEndpoint}
          >
            <Form.Label>update product image</Form.Label>
            <br />
            <IKUpload
              fileName="test-image.jpg"
              onSuccess={onSuccess}
              onDelete={onError}
            />
          </IKContext>
          <div className="notice">
            *the image you upload will appear above after some time
          </div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>stock</Form.Label>
          <Form.Control
            type="number"
            placeholder="product stock"
            name="stock"
            value={productData.stock}
            onChange={onChangeField}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="product price"
            name="price"
            value={productData.price}
            onChange={onChangeField}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select
            aria-label="category"
            name="category_id"
            value={productData.category_id}
            onChange={onChangeField}
          >
            <option>Choose a category</option>
            <option value="1">Pakaian</option>
            <option value="2">Jam</option>
            <option value="3">Kacamat</option>
            <option value="4">Sepatu</option>
            <option value="5">Topi</option>
          </Form.Select>
        </Form.Group>

        <div className="buttons">
          <Link to={{ pathname: "/" }}>
            <Button variant="danger" type="submit">
              Back
            </Button>
          </Link>
          <Button variant="primary" type="submit" onClick={onSubmit}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default EditProduct;
