import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, [])
    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product 
                        handleAddToCart = {handleAddToCart}
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h4>Order summary</h4>
                <p>items added: {cart.length}</p>
            </div>
            
        </div>
    );
};

export default Shop;