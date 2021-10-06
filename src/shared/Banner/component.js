import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Banner = ({
    bannerTitle,
    bannerText,
    bannerImg,
    buttonLink
}) => {
    return(
        <section className='bannerSection'>
            <div className='bannerSection_left'>
                <h1>{bannerTitle}</h1>
                <p>
                    {bannerText}
                </p>
                <Link 
                    className='btn'
                    onClick={console.log('it works')}
                    to={buttonLink}
                >     
                    SHOP NOW
                </Link>
            </div>
            <div className='bannerSection_right'>
                <img 
                    src={bannerImg} 
                    alt='model posiing for our banner section' 
                />
            </div>
        </section>
    );
}

export default Banner;