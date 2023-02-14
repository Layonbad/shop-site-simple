import React from 'react';
import './Product.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Product = (props) => {
  const {name, img, seller, price, ratings} = props.product;

  return (
    <div className='product'>
      <img src={img} alt=""/>
      <div className='product-info'>
        <p className='product-name'>{name}</p>
        <p>Price : ${price}</p>
        <p><small>Seller: {seller}</small></p>
        <p><small>Ratings: {ratings} stars</small></p>
      </div>
      <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
        <p className='btn-text'>Add to Cart</p>
        <ShoppingCartIcon></ShoppingCartIcon>
      </button>
    </div>
  );
};

export default Product;
