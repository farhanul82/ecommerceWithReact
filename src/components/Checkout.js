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

  const dispatch = useDispatch();
  return (
    <Fade top>
      <tr class="active-row">
        <td className=""> <img
          src={items.image}
          className=" checkoutImg"
          id="item-img"
          alt=""
        ></img></td>
        <td className="text-center">  <span className="prodname"> {items.title}</span> </td>
        <td className="text-center"> <span >{format(items.price)}</span> x{" "}
          <span > {items.count}</span></td>
        <td className="text-center">
          <a herf onClick={() => dispatch(removeFromCart(items))}><FontAwesomeIcon icon={faTrash} /></a>
      

        </td>
      </tr>
      
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


  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(setOrder(data.name, data.email, data.mobile, data.address));
  };


  return (
    <div className="container-fluid">
      <div className="row checkoutRow">
        <div className=" col-md-12">
          <Flash>
            <table class="content-table m-auto">
              <thead>
                <tr>
                  <th className="text-center">image</th>
                  <th className="text-center">Name</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((items) => {
                  return <Checkoutitems items={items}></Checkoutitems>;
                })}


              </tbody>
            </table>
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
        <div className=" col-md-6 d-flex justify-content-center ">
          <img className="checkoutGif" src="/images/checkout/1.gif"></img>
        </div>

        <div className=" col-md-6">
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
