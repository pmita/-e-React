/* eslint-disable no-unused-vars */
import React from 'react';
import style from './style.module.scss';
import { useSelector, useDispatch } from 'react-redux'; // import redux for state
import { filterByPrice, filterBySize, filterByBrand } from '../../actions';
// import our components
import ProductItem from '../../shared/ProductItem/component';

const ShopPage = () => {
    // state from Redux
    const products = useSelector(state => state.womenProducts.productsFiltered);
    const dispatch = useDispatch();

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
                            <button 
                                className={item.active ? `${style.btn_filter} ${style.active}` : `${style.btn_filter}`}
                                onClick={() => dispatch(filterByBrand(item.brand))}
                            >
                                {item.brand}
                            </button>
                        );
                    })}
                </div>
                <div className={style.productsFilters}>
                    <h4>Price</h4>
                    {priceFilters.map(item => {
                        return (
                            <button 
                                className={item.active ? `${style.btn_filter} ${style.active}` : `${style.btn_filter}`}
                                onClick={() => dispatch(filterByPrice(item.price))}
                            >
                                {item.price}
                            </button>
                        );
                    })}
                </div>
                <div className={style.productsFilters}>
                    <h4>Size (UK)</h4>
                    {sizeFilters.map(item => {
                        return (
                            <button 
                                className={item.active ? `${style.btn_filter} ${style.active}` : `${style.btn_filter}`}
                                onClick={() => dispatch(filterBySize(item.size))}
                            >
                                {item.size}
                            </button>
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