/* eslint-disable no-unused-vars */
// ASSETS
import * as actionTypes from '../actions/actionTypes';
import mockData from '../../assets/data/mockData';
import { filterItems } from '../../assets/functions/utilFunctions';

let initialState = {
    products : mockData,
    filteredProducts : mockData,
    favourites: [],
    cart : [],
    total : 0,
    discountApplied : false
}

const womenProductsReducer = (state = initialState, action) => {
    const {products, favourites, cart, total, discountApplied} = state;
    switch (action.type){
        case actionTypes.FILTER_BY_PRICE:
            const productsInNewOrder = filterItems(action.payload, products);
            return {...state, filteredProducts : productsInNewOrder}
        case actionTypes.FILTER_BY_SIZE:
            const productsInNewOrderTwo = products.slice().filter(item => item.sizes.includes(action.payload)) 
            return {...state, filteredProducts : productsInNewOrderTwo}
        case actionTypes.FILTER_BY_BRAND:
            const productFilteredByBrand = products.slice().filter(item => item.brand === action.payload);
            return {...state, filteredProducts : productFilteredByBrand}
        case actionTypes.ADD_TO_FAVOURITES:
            const favouriteItem = products.find(item => item.id === action.payload);
            return {...state, favourites : [...favourites, favouriteItem]};
        case actionTypes.ADD_TO_CART:
            const item = products.find(product => product.id === action.payload); 
            return {...state, cart : [...cart, {...item, qty : 1}]};
        case actionTypes.INCREMENT_QUANTITY:
            return {
                ...state, 
                cart : cart.map(item => 
                    item.id === action.payload
                        ? {...item, qty: item.qty + 1}
                        : item
                )
            };
        case actionTypes.DECREMENT_QUANTITY:
            return {
                ...state, 
                cart : cart.map(item => 
                    item.id === action.payload
                        ? (item.qty ? {...item, qty: item.qty - 1} : {...item, qty: 0})
                        : item
                )
            };
        case actionTypes.REMOVE_FROM_CART:
            return {...state, cart : cart.filter(item => item.id !== action.payload)}
        case actionTypes.CALCULATE_TOTAL:
            return {...state, total : cart.length
                ? cart.reduce((acc, curr) => acc + Math.floor((curr.price * curr.qty)), 0)
                : 0
            };
        case actionTypes.APPLY_DISCOUNT:
            if((action.payload === 'SAVE20' || action.payload === 'SUMMER') && !discountApplied){
                const totalUpdated = Math.floor(total * 0.8);
                const discountAppliedUpdated = true;
                return {...state, total : totalUpdated, discountApplied : discountAppliedUpdated}
            } else {
                return {...state};
            }
        default :
            return {...state};
    }
}

export default womenProductsReducer;