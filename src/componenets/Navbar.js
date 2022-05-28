import React from 'react';
import { NavLink } from 'react-router-dom'
import {  FaShoppingCart} from 'react-icons/fa'
import '../css/navbar.css'

const Navbar = ({length}) => {
    return (

        <nav className='primary-nav'>
            <div className='nav-title'>
                <span className='span1'>NG</span>
                <span className='span2'>UO</span>
            </div>
            <div className='nav-links' >
                <NavLink to='/' className='links'>Home</NavLink>
                <NavLink to='/about' className='links'>About</NavLink>
                <NavLink to = '/products' className='links '> Products</NavLink>
                <NavLink to='/cart' className='links-cart'> <FaShoppingCart/>{length}</NavLink> 
            </div>
        </nav>
    );
};

export default Navbar;