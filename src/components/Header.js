import React, { useEffect, useState } from "react";
import {
  Nav,
  Navbar,
  Form,
  NavbarBrand,
  FormControl,
  Button,
} from "react-bootstrap";

import { HiShoppingCart } from "react-icons/hi";

import Cartitems from "./Cartitems";

import { useSelector, useDispatch } from "react-redux";

import { removeFromCart, setOrder, clearCart } from "../Redux/Reducer/action";

import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";

import format from "../format";

export default function Header() {
  const [cart, setCart] = useState(false);
  const showCartItems = () => {
    setCart(!cart);
  };

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto nav ">
            <NavLink
              className="  navLink navLink1"
              activeClassName="navbar__link--active"
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              activeClassName="navbar__link--active"
              className=" navLink navLink2"
              to="/products"
            >
              Products
            </NavLink>

            <NavLink
              activeClassName="navbar__link--active"
              className=" navLink navLink3"
              to="/category"
            >
              Categories
            </NavLink>

            <NavLink
              activeClassName="navbar__link--active"
              className=" navLink navLink4"
              to="/what-new"
            >
              What's New
            </NavLink>

            <div class="animation start-home"></div>
          </Nav>

          <div>
            <button className="btn cartBtn" onClick={showCartItems}>
              CART ITEMS
              <span class="reactCartIcon">
                <HiShoppingCart />
                <span className="cartNum">({cartItems.length})</span>
              </span>
            </button>
          </div>

          {cart && cartItems.length && (
            <div id="cart" className="cart  ">
              <ul>
                {cartItems.map((items) => {
                  return <Cartitems items={items}></Cartitems>;
                })}
              </ul>

              <div className="cart-total-container d-flex justify-content-around text-capitalize mt-5">
                <h5>TOTAL :</h5>
                <h5>
                  <strong id="cart-total" className="font-weight-bold">
                    {format(totalAmount)}
                  </strong>
                </h5>
              </div>

              <div className="cart-buttons-container mt-3 d-flex justify-content-between">
                <a
                  onClick={() => dispatch(clearCart())}
                  id="clear-cart"
                  className="btn btn-outline-secondary btn-black text-uppercase"
                >
                  clear cart
                </a>
                <Link
                  to={"/check"}
                  className="btn btn-outline-secondary text-uppercase btn-pink"
                >
                  checkout
                </Link>
              </div>
            </div>
          )}
        </Navbar>
      </>
    </div>
  );
}
