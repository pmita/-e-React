import React from 'react';
import Filters from './Filters'; // import components
import { filterByPrice, filterBySize, filterByBrand } from '../../actions'; // actions for redux
import productFilters from '../../assets/data/productFilters'; // import assets
import style from './style.module.scss';

const FilterContainer = () => {
    // state and variables
    const {brandFilters, priceFilters, sizeFilters} = productFilters; 
    
    return (
        <>
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
        </>
    );
}

export default FilterContainer;