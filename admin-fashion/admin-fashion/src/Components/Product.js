import React from 'react';
import { connect } from 'react-redux';
import { deleteProduct } from '../states/action';
import { Link } from 'react-router-dom';
import { BiDetail, BiTrash } from 'react-icons/bi';

const Product = ({ product, deleteProduct }) => {
  const onDelete = () => {
    alert(`are you sure to delete ${product.title}?`);

    deleteProduct(product.id);
  };

  return (
    <div className='product'>
      <div className='product-name'>
        <img src={product.image} alt='product' />
        <span className='name'>{product.title}</span>
      </div>
      <div className='quantity'>{product.stock}</div>
      <div className='price'>{product.price}</div>
      <Link className='detail' to={{ pathname: `/edit-product/${product.id}` }}>
        <BiDetail />
      </Link>
      <BiTrash
        className='delete'
        style={{ cursor: 'pointer', color: '#0d6efd' }}
        onClick={onDelete}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteProduct: (id) => dispatch(deleteProduct(id)),
});

export default connect(null, mapDispatchToProps)(Product);
