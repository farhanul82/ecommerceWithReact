import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { products } from "../Reducer/Products";
import { catogories } from "../Reducer/Catogories";
import { Cartreducer } from "../Reducer/Cartreducer";
import { Order } from "../Reducer/Orderreducer";
import { CommentReducer } from "./CommentReducer";
// import { cartItems } from "../Reducer/addCart";

const store = createStore(
  combineReducers({
    product: products,
    catogorie: catogories,
    cart: Cartreducer,
    order: Order,
    comment: CommentReducer,
  }),
  composeWithDevTools()
);
export default store;
