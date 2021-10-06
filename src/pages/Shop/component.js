import React from 'react';
import style from './style.module.scss';
import { useSelector } from 'react-redux'; // import redux for state
import { filterByPrice, filterBySize, filterByBrand } from '../../actions';
// Components
import ProductItem from '../../shared/ProductItem/component';
import FilterButtons from '../../shared/Filters/components';

const ShopPage = () => {
    // state from Redux
    const products = useSelector(state => state.womenProducts.productsFiltered);

    // product filter variables
    const brandFilters = [
        {brand : 'BARDOT', active : true},
        {brand : 'COOPER', active : false},
        {brand : 'ALFANI', active : false},
        {brand : 'TEST', active : false},
    ]
    const priceFilters = [
        {price : 'ascending', active : true},
        {price : 'descending', active : false},
    ]
    const sizeFilters = [
        {size : 'S', active : true},
        {size : 'M', active : false},
        {size : 'L', active : false},
        {size : 'XL', active : false},
    ]

    const renderProductItems = products.map(item => {
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
    });
    return(
        <section className={style.shopProducts_section}>
            <div className={style.shopProducts_left}>
                <div className={style.productsFilters}>
                    <h4>Brand</h4>
                    {brandFilters.map(item => {
                        return (
                            <FilterButtons
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
                            <FilterButtons
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
                            <FilterButtons
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
    );
}

export default ShopPage;