import React from 'react';
import './style.scss';
// COMPONENT
import Banner from '../../shared/Banner';
import Footer from '../../shared/Footer';
// ASSETS
import banners from '../../assets/data/banners';

const SalePage = () => {
    return(
        <>
            <Banner
                bannerTitle={banners[2].title}
                bannerText={banners[2].text}
                bannerImg={banners[2].img}
                buttonLink={banners[2].link}
            />
            <Footer />
        </>
    );
}

export default SalePage;