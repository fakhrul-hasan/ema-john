import React from 'react';
import './Product.css';
import { CartFill } from 'react-bootstrap-icons';

const Product = (props) => {
    const {name, price, seller, ratings, img} = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>Add to cart <CartFill></CartFill></button>
        </div>
    );
};

export default Product;