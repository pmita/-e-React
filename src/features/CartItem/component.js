import React from 'react';
import './style.scss';
import { AiOutlineHeart, AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addToFavourites, incrementQuantity, decrementQuantity, removeFromCart } from '../../store/actions';

const CartItem = ({product}) => {
    // PROPS
    const {img, title, price, id, qty} = product;
    
    // REDUX
    const dispatch = useDispatch();

    // HANDLERS
    const incrementItemHandler = () => dispatch(incrementQuantity(id));
    const decrementItemHandler = () => dispatch(decrementQuantity(id));
    const addToFavouritesHandler = () => dispatch(addToFavourites(id));
    const removeItemHandler = () => dispatch(removeFromCart(id));

    return (
        <div className='cartItem'>
            <img src={img} alt='product item in size selected' />
            <div className='cartItem_details'>
                <h4 className='cartItem_title'>{title}</h4>
                <h6>Price: {price} $</h6>
                <div className='cartItem_quantity'>
                    <h6>Quantity: </h6>
                    <button 
                        className='btnAction'
                        onClick={decrementItemHandler}
                    >
                        -
                    </button> 
                    <span>{qty}</span>
                    <button 
                        className='btnAction'
                        onClick={incrementItemHandler}
                    >
                        +
                    </button>
                </div>
                <div className='cartItem_actions'>
                    <button 
                        className='btnAction'
                        onClick={addToFavouritesHandler}
                    >
                        <AiOutlineHeart />
                    </button> 
                    <button 
                        className='btnAction'
                        onClick={removeItemHandler}
                    >
                        <AiOutlineClose />
                    </button> 
                </div>
            </div>
        </div>
    );
}

export default CartItem;