import { INCREMENT_QUANTITY, DECREMENT_QUANTITY, GET_ITEMS } from "./enums";
import data from '../../data/data.json'

const initialState = {
  products: data
};


const quantityReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_QUANTITY:
      const incrementedProduct = state.products.map((product) => {
        if (product.sku===action.payload.sku){
            return {
                ...product,
                available_quantity: product.available_quantity+1
            }
        }
        return product
      })

      return {
        ...state,
        products: incrementedProduct
      };

    case DECREMENT_QUANTITY:
        const decrementedProduct = state.products.map((product) => {
            if (product.sku===action.payload.sku){
                return {
                    ...product,
                    available_quantity: product.available_quantity+1
                }
            }
            return product
          })
    
          return {
            ...state,
            products: decrementedProduct
          };
          
    case GET_ITEMS:
        return {
            ...state,
        }
    default:
      return state;
  }
};

export default quantityReducer;