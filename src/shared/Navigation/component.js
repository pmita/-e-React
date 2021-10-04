import React, { useState } from 'react';
import './style.scss';
// import our assets
import logo from '../../assets/images/crispLogo.png';
import { Link } from 'react-router-dom';

const Navigation = () => {
    // define our state
    const [searchInpuy, setSearchInput] = useState('');

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
                    <Link to='/'>Basket</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;