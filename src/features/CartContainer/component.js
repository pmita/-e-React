import React, { useState, useEffect } from 'react';
import './style.scss';
import CartItem from '../CartItem/component';
import womenImg_1 from '../../assets/images/women/img-1.png';
import womenImg_2 from '../../assets/images/women/img-2.png';

const CartContainer = () => {
        // STATE
        const [cart, setCart] = useState([]);

        // USEFFECT HOOK
        useEffect(()=> {
            setCart([
                {
                    title : 'Angels malu zip jeans slim black used',
                    price : 139.00,
                    brand : 'BARDOT',
                    details : 'Cool off this summer in the Mini Ruffle Smocked Tank Top from our very own LA Hearts. This tank features a smocked body, adjustable straps, scoop neckline, ruffled hems, and a cropped fit.',
                    advantages : [
                        'Smocked body',
                        'Scoop neckline',
                        'Ruffled hems',
                        'Cropped length',
                        'Model is wearing a small',
                        '100% rayone',
                        'Machine washable'
                    ],
                    sizes : ['S', 'M', 'L'],
                    img : womenImg_1,
                    gender : 'female',
                    id : 12222,
                    quantity : 2
                },
                {
                    title : 'Angels malu zip jeans slim black used',
                    price : 135.00,
                    brand : 'BARDOT',
                    details : 'Cool off this summer in the Mini Ruffle Smocked Tank Top from our very own LA Hearts. This tank features a smocked body, adjustable straps, scoop neckline, ruffled hems, and a cropped fit.',
                    advantages : [
                        'Smocked body',
                        'Scoop neckline',
                        'Ruffled hems',
                        'Cropped length',
                        'Model is wearing a small',
                        '100% rayone',
                        'Machine washable'
                    ],
                    sizes : ['S', 'M', 'L'],
                    img : womenImg_2,
                    gender : 'female',
                    id : 12289,
                    quantity : 1
                },
            ])
        }, []);
    return (
        <>
            <h1>Shopping Cart</h1>
            <section className='cartSection'>
                <div className='cartSection_products'>
                    {cart.map(item => {
                        return (
                            <CartItem 
                                img={item.img}
                                title={item.title}
                                price={item.price}
                                quantity={item.quantity}        
                            />
                        );
                    })}
                </div>
                <div className='cartSection_price'>
                    <h2>Apply Discount Code</h2>
                    <h4>Subtotal 1000 $</h4>
                    <h4>Tax</h4>
                    <h2>Order Total</h2>
                    <button className='btnAction'>PROCEED TO CHECKOUT</button>
                </div>
            </section> 
        </>
    );
}

export default CartContainer;