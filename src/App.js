
import React, { useContext } from 'react';
import './App.css';
import Navbar from './componenets/Navbar';
import { cartContext } from './RouteSwitch';
import { Link } from "react-router-dom";
import lupita from './imgs/lupita2.jpg'
import 'animate.css';


function App() {
  const cart = useContext(cartContext)
  return (
    <div>
      <Navbar length={cart.length}/>
      <div className='body'>
        <div className='all-text'>
          <div className=' animate__animated animate__fadeInLeft main-text'>
            find the best style fashion for you
          </div>
          <div className='animate__animated animate__fadeInLeft animate__delay-1s description-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper congue eros, eget tincidunt ipsum eleifend ut. 
          </div>
          <div className='animate__animated animate__fadeInLeft animate__delay-1.3s button-products'>
            <button  className='button-home'> <Link to='/products' >  SHOP NOW </Link> </button>
          </div>
        </div>
        <div className='animate__animated animate__fadeInRightBig  animate__delay-1s image'>
          <img src={lupita} alt='lupita' className='image-lupita'></img>
        </div>
      </div>
    </div>
  );
}

export default App;

