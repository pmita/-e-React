import React from 'react';
import './style.scss';
import { AiOutlineHeart, AiOutlineClose } from 'react-icons/ai';

const CartItem = ({
    img,
    title,
    price,
    quantity
}) => {
    return (
        <div className='cartItem'>
            <img src={img} alt='product item in size selected' />
            <div className='cartItem_details'>
                <h4 className='cartItem_title'>{title}</h4>
                <h6>Price: {price} $</h6>
                <div className='cartItem_quantity'>
                    <h6>Quantity: </h6>
                    <button className='btnAction'>-</button> 
                    <span>{quantity}</span>
                    <button className='btnAction'>+</button>
                </div>
                <div className='cartItem_actions'>
                    <AiOutlineHeart />
                    <AiOutlineClose />
                </div>
            </div>
        </div>
    );
}

export default CartItem;