import React from 'react';
import { addToDb } from '../../utilities/fakedb';//to mangage localStorage data v-4
import { useEffect } from 'react';
import { getStoredCart } from '../../utilities/fakedb';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([])//first stats for container cart
     // stats for container cartContainer 
     const [cart, setCart] = useState([]);//second stats for container cart
    useEffect( ()=>{
        // console.log('first useEffect')
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    useEffect( () =>{//first step to display localStorage to 'UI' from v-6 
        const storedCart = getStoredCart();
        const saveCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
            setCart(saveCart);
        } 
    },[products])//dependency injecsection 

    // button from event handler products 
    const handleAddToCart = (selectedProduct) =>{
        // console.log(selectedProduct)
        let newCart = [];
        const exists = cart.find(product => product.id = selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart,selectedProduct];
        }else{
            // const newCart = [...cart,selectedProduct]
            const rest = cart.filter(product => product.id != selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest,exists];     
            // newCart = [...rest,exists];     
        }
        // cart push product
        setCart(newCart);
        addToDb(selectedProduct.id); // to mangage localStorage data v-4 
    } 
    return (
        <div className='shop-container'>
            <div className="products-container">
               {
                products.map(product => <Product 
                    key={product.id}
                    product ={product}
                    handleAddToCart={handleAddToCart} //button eventHandler 
                    ></Product>)
               }
            </div>
            <div className="cart-container"> {/* button eventHandler */}
               {/* all cart details are set to Cart file */}
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;