import React, {useContext} from 'react';
import { productsContext, cartContext  } from '../RouteSwitch';
import Navbar from './Navbar';
import ProductRender from './ProductRender';
import '../css/product.css'




const Product = () => {
    const products = useContext(productsContext)
    const cart = useContext(cartContext)
    return (
        
        <div>
            <Navbar length={cart.length}/>
            <div className='lst-div'>
                {
                    products.map((product) => <ProductRender product = {product}  key = {product.id}/>)
                }
            </div>

        </div>
    );
};

export default Product;

