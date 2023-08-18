import { GET_STORE, UPDATE_STORE, GET_STORE_WITH_FILTERS } from "../enums";
import data from '../../data/data.json';

const initialState = {
  products: data
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STORE:
      // console.log(state)
      console.log(state.products)
      return state;

    case UPDATE_STORE:
      // It's better to create a new copy of the state and modify that instead of modifying the original state directly
      const updatedProducts = state.products.map(product => {
        const matchingCartItem = action.payload.cart.find(cartItem => cartItem.sku === product.sku);
        if (matchingCartItem) {
          return {
            ...product,
            available_quantity: product.available_quantity - matchingCartItem.quantity
          };
        }
        return product;
      });
      return { ...state, products: updatedProducts }; // Return the updated state

    case GET_STORE_WITH_FILTERS:
      return {
        ...state,
        products: state.products.filter(product => {
          return (
            (!action.payload.name || product.name.includes(action.payload.name)) &&
            (!action.payload.minPrice || product.price >= action.payload.minPrice) &&
            (!action.payload.maxPrice || product.price <= action.payload.maxPrice) &&
            (!action.payload.colors || action.payload.colors.includes(product.color))
          );
        })
      }; 

    default:
      return state;
  }
};

export default storeReducer;