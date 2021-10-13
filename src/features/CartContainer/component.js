import React from 'react';
import './style.scss';
import CartItem from '../CartItem/component';
import { useSelector } from 'react-redux';

const CartContainer = () => {
        // STATE & REDUX
        const cart = useSelector((state) => state.womenProducts.cart);

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
                            <form>
                                <input type='text' value='Enter discount code' />
                                <button>APPLY DISCOUNT</button>
                            </form>
                        </div>
                        <div className='cartSection_price'>
                            <h4>Subtotal 1000 $</h4>
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