import { ORDER } from "../Type";

export const Order = (
  state = {
    name: " ",
    email: " ",
    address: " ",
    mobile: " ",
  },
  action
) => {
  switch (action.type) {
    case ORDER:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        address: action.payload.address,
        mobile: action.payload.mobile,
      };

    default:
      return state;
  }
};
