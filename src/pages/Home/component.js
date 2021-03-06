import React from 'react';
import './style.scss';
// COMPONENTS
import Banner from '../../shared/Banner';
import Footer from '../../shared/Footer/component';
// ASSETS
import banners from '../../assets/data/banners';

const HomePage = () => {
    return(
        <>
            <Banner
                bannerTitle={banners[1].title}
                bannerText={banners[1].text}
                bannerImg={banners[1].img}
                buttonLink={banners[1].link}
            />
            <Footer />
        </>
    );
}

export default HomePage;