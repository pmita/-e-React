import React, { useMemo } from 'react';
import style from './style.module.scss';
import { useSelector } from 'react-redux'; // import redux for state
import { filterByPrice, filterBySize, filterByBrand } from '../../actions';
// Components
import Banner from '../../shared/Banner';
import Footer from '../../shared/Footer';
import banners from '../../assets/data/banners';
import ProductItem from '../../shared/ProductItem/component';
import Filters from '../../shared/Filters/components';
import productFilters from '../../assets/data/productFilters';

const ShopPage = () => {
    // define our variablers & state
    const products = useSelector(state => state.womenProducts.productsFiltered); // state from Redux
    const {brandFilters, priceFilters, sizeFilters} = productFilters; // filters from our utilities

    const renderProductItems = useMemo(() => products.map(item => {
        return (
            <ProductItem 
                key={item.id}
                title={item.title}
                price={item.price}
                brand={item.brand}
                details={item.details}
                advantages={item.advantages}
                sizes={item.sizes}
                img={item.img}
                gender={item.gender}
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
            <section className={style.shopProducts_section}>
                <div className={style.shopProducts_left}>
                    <div className={style.productsFilters}>
                        <h4>Brand</h4>
                        {brandFilters.map(item => {
                            return (
                                <Filters
                                    reduxAction={filterByBrand}
                                    payload={item.brand}
                                    active={item.active}
                                />
                            );
                        })}
                    </div>
                    <div className={style.productsFilters}>
                        <h4>Price</h4>
                        {priceFilters.map(item => {
                            return (
                                <Filters
                                    reduxAction={filterByPrice}
                                    payload={item.price}
                                    active={item.active}
                                />
                            );
                        })}
                    </div>
                    <div className={style.productsFilters}>
                        <h4>Size (UK)</h4>
                        {sizeFilters.map(item => {
                            return (
                                <Filters
                                    reduxAction={filterBySize}
                                    payload={item.size}
                                    active={item.active}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className={style.shopProducts_right}>
                    {renderProductItems}
                </div>
            </section>
            <Footer />
        </>
    );
}

export default ShopPage;