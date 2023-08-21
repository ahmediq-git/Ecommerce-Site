import { UPDATE_STORE, GET_STORE_WITH_FILTERS } from "../enums";
import data from '../../data/data.json';

const fulldata=data

const initialState = {
  products: fulldata
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STORE:
      // It's better to create a new copy of the state and modify that instead of modifying the original state directly
      const updatedProducts = state.products.map(product => {
        const matchingCartItem = action.payload.cart.find(cartItem => cartItem.sku === product.sku);
        if (matchingCartItem) {
          return {
            ...product,
            quantity: product.quantity - matchingCartItem.quantity
          };
        }
        return product;
      });
      return { ...state, products: updatedProducts }; // Return the updated state

    case GET_STORE_WITH_FILTERS:

      if (!action.payload.name){
        return {...state, products: fulldata}
      }
      return {
        ...state,
        products: state.products.filter(product => {
          console.log(action.payload.minPrice, action.payload.maxPrice)
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
