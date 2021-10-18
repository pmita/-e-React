import React, { useMemo } from 'react';
import './style.scss';
// ROUTER
import { Link } from 'react-router-dom';
// ASSETS
import footerInfo from '../../assets/data/footerInfo';
import logo from '../../assets/images/crispLogo.png';

const Footer = () => {

    const footerInfoComponent = useMemo(() => footerInfo.map(item => {
        return(
            <div className='footerSection_grid'>
                <h4>{item.title}</h4>
                <ul className='footerSection_options'>
                    {item.links.map(linkItem => {
                        return (
                            <Link to={linkItem.path}>
                                {linkItem.text}
                            </Link>
                        );
                    })}
                </ul>
            </div>
        );
    }), []);

    return(
        <footer>
            <div className='footerSection'>
                <div className='footerSection_grid'>
                    <img src={logo} alt='brand logo in black and white' />
                </div>
                {footerInfoComponent}
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