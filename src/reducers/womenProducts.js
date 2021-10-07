// import our assets
import mockData from '../assets/data/mockData';
import { filterItems } from '../assets/functions/utilFunctions';

let initialState = {
    products : mockData,
    productsFiltered : mockData,
    productsFavourites: [],
    cartItems : []
}

const womenProductsReducer = (state = initialState, action) => {
    const {products} = state;
    switch (action.type){
        case 'FILTER_BY_PRICE':
            const productsInNewOrder = filterItems(action.payload, products);
            return {...state, productsFiltered : productsInNewOrder}
        case 'FILTER_BY_SIZE':
            const productsInNewOrderTwo = products.slice().filter(item => item.sizes.includes(action.payload)) 
            return {...state, productsFiltered : productsInNewOrderTwo}
        case 'FILTER_BY_BRAND':
            const productFilteredByBrand = products.slice().filter(item => item.brand === action.payload);
            return {...state, productsFiltered : productFilteredByBrand}
        case 'ADD_TO_FAVOURITES':
            const productsFavouritesUpdated = products.filter(item => item.id === action.payload);
            return {...state, productsFavourites : [...state.productsFavourites, productsFavouritesUpdated[0]]};
        case 'ADD_TO_CART':
            const addToCartProducts = products.filter(item => item.id === action.payload);
            return {...state, cartItems : [...state.cartItems, addToCartProducts[0]]};
        default :
            return {...state};
    }
}

export default womenProductsReducer;