import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';           
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
// const Product = ({props,handleAddToCart}) => {
    // const {product,handleAddToCart} = props;
    const {name, img, seller, price, ratings} = props.product;
    // console.log(props)
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className="product-name">{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            {/* add to cart button with set up wrapped so not be automatic   OutPut */}
            <button onClick={ () => props.handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
            </button>
        </div>
    );
};

export default Product;