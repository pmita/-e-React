import React, { useState } from 'react';
import { useSelector } from 'react-redux'; //import our state from redux
import './style.scss';
import logo from '../../assets/images/crispLogo.png'; // import our assets
import { Link } from 'react-router-dom';

const Navigation = () => {
    // define our state
    const [searchInpuy, setSearchInput] = useState('');
    const productsFavourites = useSelector(state => state.womenProducts.productsFavourites);

    // define our useEffect actions
    const changeTextHandler = (e) => {
        setSearchInput(e.target.value);
    }
    return(
        <nav className='navigationSection'>
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
                    <Link to='/'>Saved</Link>
                </li>
                <li>
                    <Link 
                        className='basketItems'
                        to='/'
                    >
                        Basket <span>{productsFavourites.length}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;