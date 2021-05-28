import { FETCH_CAT_ALL_PROD, GET_CATOGORIES, SHOW_CAT_ITEMS } from "../Type";

export const catogories = (
  state = {
    catAllProd: [],
    catogoryName: [],
    categoryItems: [],
  },
  action
) => {
  switch (action.type) {
    case FETCH_CAT_ALL_PROD:
      return {
        ...state,
        catAllProd: action.payload,
      };
    case GET_CATOGORIES:
      return {
        ...state,
        catogoryName: action.payload,
      };

    case SHOW_CAT_ITEMS:
      return {
        ...state,
        categoryItems: action.payload,
      };

    default:
      return state;
  }
};
