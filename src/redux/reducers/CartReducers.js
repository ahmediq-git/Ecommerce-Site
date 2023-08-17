import { ADD_TO_CART, REMOVE_FROM_CART, GET_CART } from "../enums";
import {searchObject} from '../../utils/searchObject.js'

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.sku === action.payload.sku) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
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