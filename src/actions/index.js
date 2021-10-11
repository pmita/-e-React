// filtering actions
export const filterByPrice = filterOption => {
    return {
        type : 'FILTER_BY_PRICE',
        payload : filterOption
    };
};

export const filterBySize = filterOption => {
    return {
        type : 'FILTER_BY_SIZE',
        payload : filterOption
    };
};

export const filterByBrand = filterOption => {
    return {
        type : 'FILTER_BY_BRAND',
        payload : filterOption
    };
};

// favourites actions
export const addToFavourites = (id) => {
    return {
        type : 'ADD_TO_FAVOURITES',
        payload : id
    };
};

// cart actions
export const addToCart = (id) => {
    return {
        type : 'ADD_TO_CART',
        payload : id
    };
};

