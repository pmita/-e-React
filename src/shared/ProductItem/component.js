/* eslint-disable no-unused-vars */
import React, { useCallback } from 'react';
import './style.scss';
// REDUX
import { useDispatch } from 'react-redux';
import { addToFavourites, addToCart } from '../../store/actions';

const ProductItem = ({product}) => {
    // PROPS
    const {title, price, brand, details, advantages, sizes, img, gender, id} = product;

    // REDUX
    const dispatch = useDispatch();// dispatch for redux actions

    // EVENT HANDLERS
    const addToFavouritesHandler = useCallback(() => dispatch(addToFavourites(id)), [dispatch, id]);
    const addToCartHandler = useCallback(() => dispatch(addToCart(id)), [dispatch, id]);

    return(
        <div className='productItem_section'>
            <img src={img} alt='product images' />
            <h4>{title}</h4>
            <h2>{brand} - {price}</h2>
            <ul className='productItem_sizes'>
                {sizes.map((item,index) => {
                    return(
                        <li key={index}>{item}</li>
                    );
                })}
            </ul>
            <button
                className='btn btn_favourites'
                onClick={addToFavouritesHandler}
            >
                Love
            </button>
            <button
                className='btn'
                onClick={addToCartHandler}
            >
                Add To Cart
            </button>
        </div>
    );
}

export default ProductItem;