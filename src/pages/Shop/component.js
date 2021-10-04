/* eslint-disable no-unused-vars */
import React from 'react';
import './style.scss';
import { useSelector, useDispatch } from 'react-redux'; // import redux for state
import { filterAscPrice, filterDescPrice } from '../../actions';
// import our components
import ProductItem from '../../shared/ProductItem/component';

const ShopPage = () => {
    // locally bind redux state to component
    const products = useSelector(state => state.womenProducts.products);
    
    // set our dispatch
    const dispatch = useDispatch();

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
        <section className='shopProducts_section'>
            <div className='shopProducts_left'>
                <button onClick={() => dispatch(filterAscPrice())}>Price Ascending</button>
                <button onClick={() => dispatch(filterDescPrice())}>Price Descending</button>
            </div>
            <div className='shopProducts_right'>
                {renderProductItems}
            </div>
        </section>
    );
}

export default ShopPage;