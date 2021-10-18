import React from 'react';
import style from './style.module.scss';
// REDUX
import { filterByPrice, filterBySize, filterByBrand } from '../../store/actions'; 
// COMPONENTS
import Filters from './Filters'; 
// ASSETS
import productFilters from '../../assets/data/productFilters'; 

const FilterContainer = () => {
    // VARIABLES
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