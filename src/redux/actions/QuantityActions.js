import {INCREMENT_QUANTITY, DECREMENT_QUANTITY,GET_ITEMS} from './enums';

export const increment = (sku) => {
  return {
    type: INCREMENT_QUANTITY,
    payload: {
        sku
    }
  };
};

export const decrement = (sku) => {
  return {
    type: DECREMENT_QUANTITY,
    payload: {
        sku
    }
  };
};

export const getItems = () => {
  return {
    type: GET_ITEMS,
  };
};
