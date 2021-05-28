import {
  GET_PRODUCT,
  SORT_PRODUCT,
  SORT_PRODUCT_MEN,
  SORT_PRODUCT_WOMEN,
  NEW_MEN_PROD,
  NEW_WOMEN_PROD,
} from "../Type";

export const products = (
  state = {
    productItems: [],
    menProdNew: [],
    womenProdNew: [],
    sort: "",
    size: "",
  },
  action
) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        productItems: action.payload,
      };
    case SORT_PRODUCT:
      return {
        ...state,
        sort: action.payload.sort,
        productItems: action.payload.productItems,
      };

    case SORT_PRODUCT_MEN:
      return {
        ...state,
        productItems: action.payload,
      };

    case SORT_PRODUCT_WOMEN:
      return {
        ...state,
        productItems: action.payload,
      };
    case NEW_MEN_PROD:
      return {
        ...state,
        menProdNew: action.payload,
      };

    case NEW_WOMEN_PROD:
      return {
        ...state,
        womenProdNew: action.payload,
      };

    default:
      return state;
  }
};
