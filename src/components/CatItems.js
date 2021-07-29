import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { showCatItems } from "../Redux/Reducer/action";
import { useDispatch } from "react-redux";
import Flip from "react-reveal/Flip";

const CatItems = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="col-md-4  d-flex justify-content-center " key={props.cat.id}>
      <Flip top>
        <Card className="p-3 categoryCard" style={{ width: "15rem" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>{props.cat.name}</Card.Title>
            <Link
              onClick={() => dispatch(showCatItems(props.cat.name))}
              className="btn categoryBtn"
              to={`/category/${props.cat.name}`}
            >
              View More
            </Link>
          </Card.Body>
        </Card>
      </Flip>
    </div>




  );
};

export default CatItems;
