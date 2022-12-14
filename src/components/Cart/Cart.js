import React from 'react'; // working from-49-v-1
import './Cart.css'

const Cart = (props) => {
  const {cart} = props;
  // console.log(cart)
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for(const product of cart){
    quantity = quantity + product.quantity; // from m-49 v-7
    total = total + product.price * product.quantity;// from m-49 v-7
    shipping = shipping + product.shipping ;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;
    // console.log(tax)
    return (
        <div className='cart'>
          <h4>Order Summery</h4>
          <p>Selected Items: {quantity} </p>
          <p>Total Price: ${total} </p>
          <p>Total shipping: ${shipping} </p>
          <p>Tax: ${+tax} </p>{/* to fixed are to use in here */}
          <h5>Grand Total: ${grandTotal.toFixed(2)} </h5>
        </div>
    );
};

export default Cart;