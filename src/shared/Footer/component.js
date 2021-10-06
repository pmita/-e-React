import React from 'react';
import logo from '../../assets/images/crispLogo.png';
import { Link } from 'react-router-dom';
import './style.scss';

const Footer = () => {
    return(
        <footer>
            <div className='footerSection'>
                <div className='footerSection_grid'>
                    <img src={logo} alt='brand logo in black and white' />
                </div>
                <div className='footerSection_grid'>
                   <h4>Features</h4>
                   <ul className='footerSection_options'>
                       <Link to='/'>
                           Men
                       </Link>
                       <Link to='/'>
                           Women
                       </Link>
                       <Link to='/'>
                           New Arrivals
                       </Link>
                       <Link to='/'>
                           Shoes
                       </Link>
                       <Link to='/'>
                           Accessories
                       </Link>
                   </ul>
                </div>
                <div className='footerSection_grid'>
                   <h4>Menu</h4>
                   <ul className='footerSection_options'>
                       <Link to='/'>
                           Home
                       </Link>
                       <Link to='/shop'>
                           Shop
                       </Link>
                       <Link to='/blog'>
                           Blog
                       </Link>
                       <Link to='/sale'>
                           Sale
                       </Link>
                       <Link to='/contact'>
                           Contact Us
                       </Link>
                   </ul>
                </div>
                <div className='footerSection_grid'>
                   <h4>Follow Us</h4>
                   <ul className='footerSection_options'>
                       <Link to='/'>
                           Facebook
                       </Link>
                       <Link to='/'>
                           TWITTER
                       </Link>
                       <Link to='/'>
                           Instragram
                       </Link>
                   </ul>
                </div>
                <div className='footerSection_grid'>
                   <h4>Join Us</h4>
                   <form onSubmit={console.log('it works')}>
                       <input type='text' value='Enter Email' placeholder='Email' />
                   </form>
                       <button>Subscribe</button>
                </div>
            </div>
            <p>2021. Crisp E-comerce</p>
        </footer>
    );
}

export default Footer;