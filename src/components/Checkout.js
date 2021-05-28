import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import format from "../format";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";
import { removeFromCart, setOrder, clearCart } from "../Redux/Reducer/action";
import Flash from "react-reveal/Flash";
import RubberBand from "react-reveal/RubberBand";
import Zoom from "react-reveal/Zoom";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Geolocation from "./Geolocation";
import MyMapComponent from "./MyMapComponent";

const Checkoutitems = ({ items }) => {
  console.log("heckout");
  const dispatch = useDispatch();
  return (
    <Fade top>
      <li className="checkOutList">
        <div className="cart-item d-flex justify-content-between text-capitalize my-3">
          <img
            src={items.image}
            className=" checkout-Item-Img img-fluid rounded-circle"
            id="item-img"
            alt=""
          ></img>
          <div className="checkout-item-title">
            <p id="checkout-item-title" className="font-weight-bold mb-0">
              {items.title}
            </p>

            <div className="priceTag">
              <span
                id="checkout-item-price"
                className="cart-item-price"
                className="mb-0"
              >
                <span className="Price">{format(items.price)}</span> x{" "}
                <span className="Price"> {items.count}</span>
              </span>
            </div>
          </div>
          <a
            onClick={() => dispatch(removeFromCart(items))}
            id="cart-item-remove"
            className="cart-item-remove"
          >
            <FontAwesomeIcon className="checkoutremoveItems" icon={faTrash} />
          </a>
        </div>
        <hr></hr>
      </li>
    </Fade>
  );
};

const Checkout = () => {
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const length = cartItems.length;
  console.log(length);
  let history = useHistory();
  // const name = useSelector((state) => state.order.name);
  // const email = useSelector((state) => state.order.email);
  // const mobile = useSelector((state) => state.order.mobile);
  // const address = useSelector((state) => state.order.address);

  // const [Name, setName] = useState(" ");
  // const [Email, setEmail] = useState(" ");
  // const [Mobile, setMobile] = useState(" ");
  // const [Address, setAddress] = useState(" ");

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(setOrder(data.name, data.email, data.mobile, data.address));
  };

  // function handleClick() {
  //   history.push("/order");
  // }
  return (
    <div className="container-fluid">
      <div className="row checkoutRow">
        <div className="col-12 col-md-12">
          <Flash>
            <ul className="chekout">
              {cartItems.map((items) => {
                return <Checkoutitems items={items}></Checkoutitems>;
              })}
            </ul>
          </Flash>
        </div>
      </div>

      <div className="row">
        <RubberBand>
          <div className="checkOutTotal  d-flex justify-content-around">
            <div>
              <h4>Total Amount :</h4>
            </div>

            <div className="checkOutTotalPrice">
              <h5>
                <strong id="cart-total" className="font-weight-bold">
                  {format(totalAmount)}
                </strong>
              </h5>
            </div>
          </div>
        </RubberBand>
      </div>

      <div>
        <MyMapComponent></MyMapComponent>
      </div>

      <div className="row checkoutFormRow">
        <div className="col-6 col-md-6 ">
          <img className="checkoutGif" src="/images/checkout/1.gif"></img>
        </div>

        <div className="col-6 col-md-6">
          <div className="contact-section">
            <Zoom bottom>
              {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Name"
                  ref={register({ required: true })}
                />
                {errors.area && (
                  <small className="text-danger">This field is required</small>
                )}{" "}
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  ref={register({ required: true })}
                />
                {errors.street && (
                  <small className="text-danger">This field is required</small>
                )}{" "}
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="mobile"
                  placeholder="Phone number"
                  ref={register({ required: true })}
                />
                {errors.mobile && (
                  <small className="text-danger">This field is required</small>
                )}
                <br />
                <textarea
                  className="form-control"
                  rows="3"
                  name="address"
                  placeholder="Adsress"
                  ref={register({ required: true })}
                ></textarea>
                {errors.instruction && (
                  <small className="text-danger">This field is required</small>
                )}
                <br />
                <div className=" d-flex justify-content-between paymentBtn">
                  <button>Mobile banking</button>
                  <button>Card</button>
                  <button>Cash On Delevery</button>
                </div>
                <div className=" d-flex justify-content-between ">
                  {" "}
                  <Button className="btn  submit" type="submit">
                    Submit
                  </Button>
                  <Link
                    to="/order"
                    className=" btn placeOrderBtn"
                    onClick={() => dispatch(clearCart())}
                  >
                    Place Order
                  </Link>
                </div>
              </form>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
