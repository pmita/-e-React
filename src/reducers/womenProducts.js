// import our assets
import mockData from '../assets/data/mockData';

let initialState = {
    products : mockData,
    productsFiltered : mockData
}

const womenProductsReducer = (state = initialState, action) => {
    switch (action.type){
        case 'FILTER_BY_PRICE':
            let productsInNewOrder ;
            if (action.payload === 'ascending'){
                productsInNewOrder = state.products.slice().sort((a,b) => a.price - b.price);
            } else if (action.payload === 'descending'){
                productsInNewOrder = state.products.slice().sort((a,b) => b.price - a.price );
            }
            return {...state, productsFiltered : productsInNewOrder}
        case 'FILTER_BY_SIZE':
            const productsInNewOrderTwo = state.products.slice().filter(item => item.sizes.includes(action.payload)) 
            return {...state, productsFiltered : productsInNewOrderTwo}
        case 'FILTER_BY_BRAND':
            const productFilteredByBrand = state.products.slice().filter(item => item.brand === action.payload);
            return {...state, productsFiltered : productFilteredByBrand}
        default :
            return {...state};
    }
}

export default womenProductsReducer;