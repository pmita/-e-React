// import our assets
import mockData from '../assets/data/mockData';
import { filterItems } from '../assets/functions/utilFunctions';

let initialState = {
    products : mockData,
    filteredProducts : mockData,
    favourites: [],
    cart : []
}

const womenProductsReducer = (state = initialState, action) => {
    // eslint-disable-next-line no-unused-vars
    const {products, filteredProducts, favourites, cart} = state;
    switch (action.type){
        case 'FILTER_BY_PRICE':
            const productsInNewOrder = filterItems(action.payload, products);
            return {...state, filteredProducts : productsInNewOrder}
        case 'FILTER_BY_SIZE':
            const productsInNewOrderTwo = products.slice().filter(item => item.sizes.includes(action.payload)) 
            return {...state, filteredProducts : productsInNewOrderTwo}
        case 'FILTER_BY_BRAND':
            const productFilteredByBrand = products.slice().filter(item => item.brand === action.payload);
            return {...state, filteredProducts : productFilteredByBrand}
        case 'ADD_TO_FAVOURITES':
            const favouriteItem = products.find(item => item.id === action.payload);
            return {...state, favourites : [...favourites, favouriteItem]};
        case 'ADD_TO_CART':
            const item = products.find(product => product.id === action.payload); 
            return {...state, cart : [...cart, {...item, qty : 1}]};
        case 'INCREMENT_QUANTITY':
            return {
                ...state, 
                cart : cart.map(item => 
                    item.id === action.payload
                        ? {...item, qty: item.qty + 1}
                        : item
                )
            };
        case 'DECREMENT_QUANTITY':
            return {
                ...state, 
                cart : cart.map(item => 
                    item.id === action.payload
                        ? (item.qty ? {...item, qty: item.qty - 1} : {...item, qty: 0})
                        : item
                )
            };
        case 'REMOVE_FROM_CART':
            return {...state, cart : cart.filter(item => item.id !== action.payload)}
        default :
            return {...state};
    }
}

export default womenProductsReducer;