import React from "react";
import format from "../format";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../Redux/Reducer/action";

const Cartitems = ({ items }) => {
  const dispatch = useDispatch();
  return (
    <li className="cartItemsList">
      <div className="cart-item d-flex justify-content-between text-capitalize my-3">
        <img
          src={items.image}
          className=" cartItemImg img-fluid rounded-circle"
          id="item-img"
          alt=""
        ></img>
        <div className="item-text">
          <p id="cart-item-title" className="font-weight-bold mb-0">
            {items.title}
          </p>

          <span
            id="cart-item-price"
            className="cart-item-price"
            className="mb-0"
          >
            {format(items.price)} x {items.count}
          </span>
        </div>
        <a
          onClick={() => dispatch(removeFromCart(items))}
          id="cart-item-remove"
          className="cart-item-remove"
        >
          <FontAwesomeIcon className="removeItems" icon={faTrash} />
        </a>
      </div>
    </li>
  );
};

export default Cartitems;
