import {ADD_TO_CART, REMOVE_FROM_CART, GET_CART} from '../enums';

// Adds sku to cart, if sku is already in cart, it will increase the quantity
export const addToCart = (sku) => {
  return {
    type: ADD_TO_CART,
    payload:{
        sku
    }
  };
};

// Removes sku from cart if 0, else increments
export const removeFromCart = (sku) => {
    return {
      type: REMOVE_FROM_CART,
      payload:{
          sku
      }
    };
  };

  export const getCart = () => {
    return {
      type: GET_CART
    };
  };
