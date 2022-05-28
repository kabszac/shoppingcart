import React, {useContext} from 'react';
import { onAddContext, onDeleteContext } from '../RouteSwitch';
import '../css/cart.css'


const CartRender = ({item, total}) => {
    const onAdd = useContext(onAddContext)
    const onDelete = useContext(onDeleteContext)
    

    return (
        <>
            <div className='cart-item'>
                <div>
                    <img src={item.image}  alt = '' className='item-image'/>
                </div> 
                <div className='item-name'>
                    {item.name}
                </div>  
                <div className='item-price'>
                    ${item.price}
                </div>

                <div className='item-buttons'>
                    <button onClick={() => onAdd(item)} className= 'add'> + </button>  
                    <button onClick={() => onDelete(item)}> - </button>
                </div>

                <div  className='item-qty'>
                    Quantity:{item.qty}
                </div>
            </div>

            
        </>
    );
};

export default CartRender;