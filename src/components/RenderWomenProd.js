import React from "react";
import { Card, Button } from "react-bootstrap";
import format from "../format";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { addToCart, totalAmount } from "../Redux/Reducer/action";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import Tada from "react-reveal/Tada";

const RenderMenProd = ({ items }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="col-4 col-md-4  m-1  store-item " key={items.id}>
        <Card style={{ width: "18rem" }}>
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
      </div>
    </div>
  );
};

export default RenderMenProd;
