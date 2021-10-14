import React, { useState, useEffect, useCallback } from 'react';
import './style.scss';
import CartItem from '../CartItem/component';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotal, applyDiscount } from '../../store/actions';

const CartContainer = () => {
        // STATE & REDUX
        const cart = useSelector((state) => state.womenProducts.cart);
        const total = useSelector((state) => state.womenProducts.total);
        const dispatch = useDispatch();
        const [input, setInput] = useState('');

        // EVENT HANDLERS
        const changeInputHandler = useCallback((e) => setInput(e.target.value), [setInput]);
        const submitHanlder = useCallback((e) => e.preventDefault(), []);
        const applyDiscountHandler = () => dispatch(applyDiscount(input));

        // USEEFFECT
        useEffect(() => {
            dispatch(calculateTotal());
        }, [cart, dispatch]);

    return (
        <>
            <h1>Shopping Cart</h1>
            <section className='cartSection'>
                    <aside className='cartSection_products'>
                        {cart.map(cartItem => {
                            return (
                                <CartItem 
                                    key={cartItem.id}
                                    product={cartItem} 
                                />
                            );
                        })}
                    </aside>
                    <aside className='cartSection_details'>
                        <div className='cartSection_discounts'>
                            <h2>Apply Discount Code</h2>
                            <form onSubmit={submitHanlder}>
                                <input 
                                    type='text' 
                                    name='discount'
                                    placeholder='Enter discount'
                                    value={input} 
                                    onChange={changeInputHandler}   
                                    required 
                                />
                                <button 
                                    className='btn'
                                    onClick={applyDiscountHandler}
                                >
                                    APPLY
                                </button>
                            </form>
                        </div>
                        <div className='cartSection_price'>
                            <h4>Subtotal {total} $</h4>
                            <h4>Tax</h4>
                            <h2>Order Total</h2>
                            <button className='btnAction'>PROCEED TO CHECKOUT</button>
                        </div>
                    </aside>
            </section> 
        </>
    );
}

export default CartContainer;