import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../Redux/Reducer/action";
import { PRODUCTS } from "../DATA/data";
import RenderWomenProd from "./RenderMenProd";
import Filter from "./Filter";

const WomenProd = () => {
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getProducts(PRODUCTS));
  //   }, [PRODUCTS]);

  const products = useSelector((state) => state.product.womenProdNew);

  return (
    <div className="container-fluid">
      <div className="row productBackground">
        <div className="col-12 col-md-12  ">
          <div className="row d-flex justify-content-between ">
            {products.map((items) => {
              // console.log(items);
              return <RenderWomenProd items={items}></RenderWomenProd>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomenProd;
