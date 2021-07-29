import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PRODUCTS } from "../DATA/data";
import Tada from "react-reveal/Tada";
import { newMenProd, newWomenProd, getProducts } from "../Redux/Reducer/action";

const WhatNew = () => {
  const dispatch = useDispatch();
  return (
    <div className="container-fluid " style={{ background: "teal" }}>
      <div className="row">
        <div className=" col-md-6  WhstNewCol">
          <Card className="WhstNewCard">
            <div className="img-container">
              <Card.Img
                className="store-img"
                variant="top"
                src="/images/men/3.jpg"
              ></Card.Img>
            </div>

            <Card.Body>
              <Tada>
                <Card.Title className="WhatNewCartTitle">
                  <Link
                    to="/what-new/MenProduct"
                    onClick={() => dispatch(newMenProd())}
                  >
                    MEN
                  </Link>
                </Card.Title>
              </Tada>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-6 WhstNewCol">
          <Card className="WhstNewCard">
            <div className="img-container">
              <Card.Img
                className="store-img"
                variant="top"
                src="/images/front/4.png"
              ></Card.Img>
            </div>

            <Card.Body>
              <Tada>
                <Card.Title className="WhatNewCartTitle">
                  <Link
                    to="/what-new/WomenProduct"
                    onClick={() => dispatch(newWomenProd())}
                  >
                    WOMEN
                  </Link>
                </Card.Title>
              </Tada>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WhatNew;
