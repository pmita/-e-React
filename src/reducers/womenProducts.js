// import our assets
import mockData from '../assets/data/mockData';

let initialState = {
    products : mockData,
}

const womenProductsReducer = (state = initialState, action) => {
    switch (action.type){
        case 'FILTER_ASC_PRICE' :
            const ascendingProducts = state.products.slice().sort((a,b) => {
                return a.price - b.price;
            });
            return {...state, products : ascendingProducts};
        case 'FILTER_DESC_PRICE' : 
            const descendingProducts = state.products.slice().sort((a,b) => {
                return b.price - a.price;
            });
            return {...state, products : descendingProducts};
        default :
            return {...state};
    }
}

export default womenProductsReducer;