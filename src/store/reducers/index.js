import { combineReducers } from "redux";
import womenProductsReducer from "./womenProducts";

const allReducers = combineReducers({
    womenProducts : womenProductsReducer,
});

export default allReducers;