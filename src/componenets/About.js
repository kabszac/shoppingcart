import React, {useContext} from 'react';
import Navbar from './Navbar';
import '../css/about.css'
import bmodel from '../imgs/bmodel.jpg'
import { cartContext } from '../RouteSwitch';

const About = () => {
    const cart = useContext(cartContext)
    return (
        <div>
            <Navbar length={cart.length}/>
            <div className='image-about'>
                <img src = {bmodel} alt = 'bmodel' className='image-model'/> 
            </div>
            <div className='text-div'>
                <div className='text1-div'>
                    <h2>SIMPLICITY IN DESIGN</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution </p>
                </div>
                <div className='text2-div'>
                    <h2>CONFIDENCE IN COMFORT</h2>
                    <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution </p>
                </div>
                <div className='text3-div'>
                    <h2>MADE FROM NATURE</h2>
                    <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution </p>
                </div>
            </div>
        </div>
    );
};

export default About;