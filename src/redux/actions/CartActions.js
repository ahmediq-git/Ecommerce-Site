import {ADD_TO_CART, REMOVE_FROM_CART} from './enums';

export const addToCart = (sku) => {
  return {
    type: ADD_TO_CART,
    payload:{
        sku
    }
  };
};

export const removeFromCart = (sku) => {
    return {
      type: REMOVE_FROM_CART,
      payload:{
          sku
      }
    };
  };

