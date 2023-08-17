import {combineReducers} from '@reduxjs/toolkit'
import cart from './reducers/CartReducers'
import market from './reducers/StoreReducers'

const rootReducer = combineReducers({
    cart,
    market,
});

export default rootReducer;