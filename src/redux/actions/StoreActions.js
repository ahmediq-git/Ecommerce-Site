import {GET_STORE, UPDATE_STORE, GET_STORE_WITH_FILTERS} from '../enums';

export const getItems = () => {
  return {
    type: GET_STORE,
  };
};

export const updateStore = (cart) => {
  return {
    type: UPDATE_STORE,
    payload:{
        cart
    }
  };
};

export const getStoreWithFilters = (name, minPrice, maxPrice, colors) => {
  return {
    type: GET_STORE_WITH_FILTERS,
    payload:{
      name,
      minPrice,
      maxPrice,
      colors
    }
  }
}