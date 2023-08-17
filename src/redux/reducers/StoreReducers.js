import { GET_STORE, UPDATE_STORE } from "../enums";
import data from '../../data/data.json'

const initialState = {
  products: data
};

//TODO: FIX, increment should be according to add and remove from cart.
const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STORE:
      return state.products

    // runs when the state is 
    case UPDATE_STORE:
      for (let i = 0; i < state.products.length; i++) {
        for (let j=0; j< action.payload.cart.length; j++){
          if (state.products[i].sku === action.payload.cart[j].sku) {
            state.products[i].available_quantity -= action.payload.cart[j].quantity
          }
        }
      }
    
    default:
      return state;
  }
};

export default storeReducer;