import { ADD_TO_CART, REMOVE_FROM_CART, GET_CART } from "../enums";
import {searchObject} from '../../utils/searchObject.js'
import data from '../../data/data.json'

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let foundobj= searchObject(data, 'sku', action.payload.sku)

      // TODO: TEST FOR CORRECTNESS
      // not found
      if (!foundobj){
        let newCartEntry={name: foundobj.name, quantity:1, price: foundobj.price, sku: foundobj.sku}
        return {
          ...state,
          cart:  [...state.cart, newCartEntry],
        }
      }

      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.sku === action.payload.sku) {
            if (item.quantity<=foundobj.available_quantity){
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            }
          }
          return item;
        }),
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.sku === action.payload.sku) {
            if (item.quantity>1){
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            }
            return null
          }
          return item;
        }).filter(item => item !== null ),
      }

    case GET_CART:
      return state.cart; 

    default:
      return state;
  }
};

export default cartReducer;