import {GET_STORE, UPDATE_STORE} from '../enums';

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
