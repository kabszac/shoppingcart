import React, {useEffect, useContext, useState } from 'react';
import { cartContext } from '../RouteSwitch';
import CartRender from './CartRender';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import '../css/cart.css'




const Cart = () => {
    const cart = useContext(cartContext)
    const [total, settotal] = useState()
    useEffect(() => {
        settotal(
          cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
        );
      }, [cart]);
    console.log(cart)
    return (
        <div> 
            <Navbar length={cart.length}/>
            <div className='cart-all'>
                <div className='cart-items'>
                    {
                        cart.map((item) => <CartRender item={item} key = {item.id} total = {total} />)
                    }
                </div>
                <div className='cart-total'>
                    <div className='cart-total-text'>
                        TOTAL : ${total}
                    </div>
                    <div className='btn-checkout'>
                        <button> Checkout</button>
                    </div>
                    <div className='btn-products'>
                        <button><Link to='/products'>  Products</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;