import {combineReducers} from '@reduxjs/toolkit'
import cart from './reducers/CartReducers'
import retrieve from './reducers/GetReducers'
import quantity from './reducers/QuantityReducers'

const rootReducer = combineReducers({
    cart,
    retrieve,
    quantity,
});

export default rootReducer;