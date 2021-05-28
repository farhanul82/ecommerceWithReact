import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import Rendercomments from "./Rendercomments";
import StarRating from "./StarRating";

import { useSelector, useDispatch } from "react-redux";
import { COMMENTS } from "../DATA/Comments";
import format from "../format";
import { addToCart, fetchComments, addComment } from "../Redux/Reducer/action";
import { useForm } from "react-hook-form";

const RenderProdView = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="row">
      <div className="col-6 col-md-6">
        <div className="prodViewImgDiv">
          <img className="prodViewImg" src={item.image}></img>
        </div>
      </div>

      <div className="col-6 col-md-6">
        <div className="prodViewTittle">{item.title}</div>
        <br></br>

        <div>{item.description}</div>

        <div className="prodViewPrice">{format(item.price)}</div>

        <div className="prodViewBtn">
          {" "}
          <button
            className="btn viewBtn"
            onClick={() => dispatch(addToCart(item))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const Productview = () => {
  const dispatch = useDispatch();
  const { prodId } = useParams();

  // useEffect(() => {
  //   dispatch(fetchComments(COMMENTS));
  // }, [COMMENTS]);

  const products = useSelector((state) => state.product.productItems);
  const prodComments = useSelector((state) => state.comment.comments);
  console.log(prodComments);

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    e.preventDefault();
    dispatch(addComment(prodId, data.name, data.comment));
  };
  return (
    <div className="container-fluid prodViewDiv">
      <div className="row">
        {products
          .filter((items) => items.id === prodId)
          .map((item) => {
            // console.log(items);
            return <RenderProdView item={item}> </RenderProdView>;
          })}
      </div>

      <div className="row">
        <div>
          <StarRating></StarRating>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6 m-1">
          <h3>Commemnts</h3>
          <ul>
            {prodComments
              .filter((com) => com.id === prodId)
              .map((comment) => {
                return <Rendercomments comment={comment}></Rendercomments>;
              })}
          </ul>
        </div>

        <div className="col-12 col-md-6 m-1">
          <div className="commentForm">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                className="form-control comment "
                name="name"
                placeholder="Name"
                ref={register({ required: true })}
              />
              <textarea
                type="text"
                className="form-control comment"
                name="comment"
                placeholder="Comment your opinion"
                ref={register({ required: true })}
              />

              {/* <input className="btn btn-danger w-100" type="submit" /> */}

              <Button className="btn btn-danger commentBtn" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productview;
