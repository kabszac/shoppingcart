import React, {useContext} from 'react';
import { onAddContext } from '../RouteSwitch';
import '../css/product.css'


const ProductRender = ({product,}) => {
    const onAdd = useContext(onAddContext)
    return (
        <div className = 'product-item'>
            <div>
            <img src={product.image} alt='' className = 'img-product'></img>
            </div>
            <div className='product-name'>
                {product.name}
            </div>
            <div className='product-price'>
                ${product.price}
            </div>
            <div className = 'product-add'>
                <button onClick={() => onAdd(product)} > Add to cart</button>
            </div>

        </div>
    );
};

export default ProductRender;