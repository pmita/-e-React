import * as actionTypes from './actionTypes';
// FILTERING
export const filterByPrice = filterOption => {
    return {
        type : actionTypes.FILTER_BY_PRICE,
        payload : filterOption
    };
};
export const filterBySize = filterOption => {
    return {
        type : actionTypes.FILTER_BY_SIZE,
        payload : filterOption
    };
};
export const filterByBrand = filterOption => {
    return {
        type : actionTypes.FILTER_BY_BRAND,
        payload : filterOption
    };
};

// FAVOURITES
export const addToFavourites = (id) => {
    return {
        type : actionTypes.ADD_TO_FAVOURITES,
        payload : id
    };
};

// CART
export const addToCart = (id) => {
    return {
        type : actionTypes.ADD_TO_CART,
        payload : id
    };
};
export const incrementQuantity = (id) => {
    return {
        type : actionTypes.INCREMENT_QUANTITY,
        payload : id
    };
};
export const decrementQuantity = (id) => {
    return {
        type : actionTypes.DECREMENT_QUANTITY,
        payload : id
    };
};
export const removeFromCart = (id) => {
    return {
        type : actionTypes.REMOVE_FROM_CART,
        payload : id
    };
};

