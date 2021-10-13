import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux'; //import our state from redux
import './style.scss';
import logo from '../../assets/images/crispLogo.png'; // import our assets
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
// import { IoCartOutline } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navigation = () => {
    // STATE & VARIABLES
    const [searchInpuy, setSearchInput] = useState('');
    const cart = useSelector(state => state.womenProducts.cart);
    const productsFavourites = useSelector(state => state.womenProducts.favourites);

    // EVENT HANDLERS
    const changeTextHandler = useCallback((e) => {
        setSearchInput(e.target.value);
    }, []);

    return(
        <nav>
            <Link to='/'>
                <img id='logo' src={logo} alt='Crisp brand logo, white logo dark background' />
            </Link>
            <ul className='navLinks focus'>
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/sale'>Sale</Link>
                <Link to='/contact'>Contact</Link>
                <form className='searchSection'>
                    <input 
                        type='text' 
                        placeholder='Search'
                        value={searchInpuy} 
                        onChange={changeTextHandler} 
                    />
                </form>
            </ul>
            <ul className='navLinks'>
                <li>
                    <Link to='/'>Create An Account</Link>
                </li>
                <li>
                    <Link 
                        className='nav_absolute'
                        to='/'
                    >
                        <AiOutlineHeart /> <span>{productsFavourites.length}</span>
                    </Link>
                </li>
                <li>
                    <Link 
                        className='nav_absolute'
                        to='/cart'
                    >
                        <AiOutlineShoppingCart /> <span>{cart.length}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;