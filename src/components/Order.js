import React from "react";
import { useSelector } from "react-redux";
import Shake from "react-reveal/Shake";

const Order = () => {
  const name = useSelector((state) => state.order.name);
  const email = useSelector((state) => state.order.email);
  const mobile = useSelector((state) => state.order.mobile);
  const address = useSelector((state) => state.order.address);
  console.log("farhan", name);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className=" col-6 col-md-6">
          <img className="orderGif" src="/images/checkout/2.gif"></img>
        </div>

        <div className=" col-6 col-md-6 d-flex justify-content-between">
          <div className="checkOutstraightLine"></div>
          <div className="orderTextdiv">
            Hello Mr. <span className="orderName">{name}</span>. Your order has
            been accepted. Your valuable order will be delevered within{" "}
            <Shake>
              <span className="orderTime"> 72</span>
            </Shake>{" "}
            hrs.<hr></hr> <span className="orderthnks">Thank You</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
