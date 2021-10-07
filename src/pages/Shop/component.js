import React, { useMemo } from 'react';
import style from './style.module.scss';
import { useSelector } from 'react-redux'; // redux for state
// Components
import Banner from '../../shared/Banner';
import Footer from '../../shared/Footer';
import ProductItem from '../../shared/ProductItem/component';
import FilterContainer from '../../shared/FiltersContainer/component';
import banners from '../../assets/data/banners';// import assets

const ShopPage = () => {
    // variables and state
    const products = useSelector(state => state.womenProducts.productsFiltered); 

    // memoized components
    const renderProductItems = useMemo(() => products.map(item => {
        return (
            <ProductItem 
                key={item.id}
                title={item.title}
                price={item.price}
                brand={item.brand}
                sizes={item.sizes}
                img={item.img}
                id={item.id}
            />
        );
    }), [products]);
    return(
        <>
            <Banner 
                bannerTitle={banners[0].title}
                bannerText={banners[0].text}
                bannerImg={banners[0].img}
                buttonLink={banners[0].link}
            />
            <main className={style.shopProducts_section}>
                <aside className={style.shopProducts_left}>
                    <FilterContainer />
                </aside>
                <section className={style.shopProducts_right}>
                    {renderProductItems}
                </section>
            </main>
            <Footer />
        </>
    );
}

export default ShopPage;