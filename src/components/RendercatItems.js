import React from "react";
import { Card, Button } from "react-bootstrap";
import format from "../format";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { addToCart, totalAmount } from "../Redux/Reducer/action";
import { useDispatch } from "react-redux";
import Tada from "react-reveal/Tada";
import Flip from "react-reveal/Flip";
import { Link, useHistory } from "react-router-dom";

const RendercatItems = ({ items }) => {
  const dispatch = useDispatch();
  console.log(items);
  return (
    <div className="col-md-4  ">
      <Flip left>
        <Card>
          <div className="img-container">
            <Card.Img
              className="store-img"
              variant="top"
              src={items.image}
            ></Card.Img>

            <a
              className="addCartBtn"
              onClick={() => dispatch(addToCart(items))}
            >
              <span class="store-item-icon">
                <FontAwesomeIcon className="cartIcon" icon={faShoppingCart} />
              </span>
            </a>
          </div>

          <Card.Body>
            <Tada>
              <Card.Title className="cartTitlr">{items.title}</Card.Title>
            </Tada>

            <div className="d-flex justify-content-between">
              <div>{format(items.price)}</div>
              <div>
                {" "}
                <Link
                  className="btn"
                  to={`/${items.id}`}
                  // to={`/products/${items.id}`}
                >
                  Have a look
                </Link>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Flip>
    </div>
  );
};

export default RendercatItems;
