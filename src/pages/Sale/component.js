import React from 'react';
import Banner from '../../shared/Banner';
import Footer from '../../shared/Footer';
import banners from '../../assets/data/banners';
import './style.scss';

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