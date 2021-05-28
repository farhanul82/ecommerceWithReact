import { GET_PRODUCT } from "../Type";
import { GET_CATOGORIES, SHOW_CAT_ITEMS } from "../Type";
import {
  ADD_TO_CART,
  SORT_PRODUCT,
  REMOVE_FROM_CART,
  TOTAL_AMOUNT,
  ORDER,
  FETCH_CAT_ALL_PROD,
  FETCH_COMMENTS,
  ADD_COMMENT,
  SORT_PRODUCT_WOMEN,
  SORT_PRODUCT_MEN,
  CLEAR_CART,
  NEW_WOMEN_PROD,
  NEW_MEN_PROD,
} from "../Type";

import { PRODUCTS } from "../../DATA/data";

import store from "./combineReducer";

// export const fetchProducts = () => {
//   getProducts(PRODUCTS);
// };

export const getProducts = (PRODUCTS) => ({
  type: GET_PRODUCT,
  payload: PRODUCTS,
});

export const fetchCategoryProducts = (PRODUCTS) => ({
  type: FETCH_CAT_ALL_PROD,
  payload: PRODUCTS,
});

export const getCatogories = (catogories) => ({
  type: GET_CATOGORIES,
  payload: catogories,
});

export const showCatItems = (catNames) => {
  const categoryItems = store
    .getState()
    .product.productItems.filter((item) => item.category === catNames);
  return {
    type: SHOW_CAT_ITEMS,
    payload: categoryItems,
  };
};

export const addToCart = (product) => {
  const cartItems = store.getState().cart.cartItems.slice();

  let alreadyExists = false;
  cartItems.forEach((x) => {
    if (x.id === product.id) {
      alreadyExists = true;
      x.count++;
    }
  });
  if (!alreadyExists) {
    cartItems.push({ ...product, count: 1 });
  }

  const total = cartItems.reduce((a, c) => a + c.price * c.count, 0);

  return { type: ADD_TO_CART, payload: { cartItems: cartItems, total: total } };
};

export const sortProducts = (sort) => {
  const productItems = store
    .getState()
    .product.productItems.slice()
    .sort((a, b) =>
      sort === "highest"
        ? a.price < b.price
          ? 1
          : -1
        : sort === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : a.id < b.id
        ? 1
        : -1
    );
  return {
    type: SORT_PRODUCT,
    payload: {
      sort: sort,
      productItems: productItems,
    },
  };
};

export const sortProdMen = (men) => {
  // const productItems = store
  //   .getState()
  //   .product.productItems.slice()
  //   .filter((item) => item.gender === men);

  const products = PRODUCTS;

  const productItems = products.slice().filter((item) => item.gender === men);

  return {
    type: SORT_PRODUCT_MEN,
    payload: productItems,
  };
};

export const sortProdWomen = (women) => {
  // const productItems = store
  //   .getState()
  //   .product.productItems.slice()
  //   .filter((item) => item.gender === women);

  const products = PRODUCTS;

  const productItems = products.slice().filter((item) => item.gender === women);

  return {
    type: SORT_PRODUCT_WOMEN,
    payload: productItems,
  };
};

export const newMenProd = () => {
  const products = PRODUCTS;

  const menProdNew = products.slice().filter((item) => item.gender === "men");

  return {
    type: NEW_MEN_PROD,
    payload: menProdNew,
  };
};

export const newWomenProd = () => {
  const products = PRODUCTS;

  const womenProdNew = products
    .slice()
    .filter((item) => item.gender === "women");

  return {
    type: NEW_WOMEN_PROD,
    payload: womenProdNew,
  };
};

export const removeFromCart = (item) => {
  const cartItems = store
    .getState()
    .cart.cartItems.slice()
    .filter((x) => x.id !== item.id);

  const total = cartItems.reduce((a, c) => a + c.price * c.count, 0);

  return {
    type: REMOVE_FROM_CART,
    payload: { cartItems: cartItems, total: total },
  };
};

export const clearCart = (len) => {
  const cartItems = store.getState().cart.cartItems.slice();
  const length = len;
  const cart = cartItems.splice(0, length);
  const total = 0.0;
  return {
    type: CLEAR_CART,

    payload: { cartItems: cart, total: total },
  };
};

// export const totalAmount = () => {
//   const cartItems = store.getState().cart.cartItems;

//   return {
//     type: TOTAL_AMOUNT,
//     payload: total,
//   };
// };

export const setOrder = (name, email, mobile, address) => {
  return {
    type: ORDER,
    payload: {
      name: name,
      email: email,
      mobile: mobile,
      address: address,
    },
  };
};

// export const fetchComments = (comments) => ({
//   type: FETCH_COMMENTS,
//   payload: comments,
// });

export const addComment = (prodId, name, comment) => {
  const newComment = {
    id: prodId,

    name: name,
    comment: comment,
    date: new Date().toISOString(),
  };
  return {
    type: ADD_COMMENT,
    payload: newComment,
  };
};

// export const addComment = (prodId, name, com) => {
//   const prodComments = store.getState().state.comment.comments;
//   const newComment = {
//     id: prodId,

//     name: name,
//     comment: com,
//     date: new Date().toISOString(),
//   };

//   prodComments = [...prodComments, newComment];

//   return {
//     type: ADD_COMMENT,
//     payload: prodComments,
//   };
// };
