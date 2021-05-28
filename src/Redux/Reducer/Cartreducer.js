import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  TOTAL_AMOUNT,
  CLEAR_CART,
} from "../Type";

export const Cartreducer = (
  state = {
    cartItems: [],
    totalAmount: 0.0,
  },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: action.payload.cartItems,
        totalAmount: action.payload.total,
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: action.payload.cartItems,
        totalAmount: action.payload.total,
      };

    case CLEAR_CART:
      return {
        ...state,
        cartItems: action.payload.cartItems,
        totalAmount: action.payload.total,
      };

    default:
      return state;
  }
};
