import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../Redux/Reducer/action";
import { PRODUCTS } from "../DATA/data";
import RenderMenProd from "./RenderMenProd";
import Filter from "./Filter";

const MenProd = () => {
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getProducts(PRODUCTS));
  //   }, [PRODUCTS]);

  const products = useSelector((state) => state.product.menProdNew);
  console.log(products);

  return (
    <div className="container-fluid">
      <div className="row productBackground">
        <div className=" col-md-12  ">
          <div className="row d-flex justify-content-center ">
            {products.map((items) => {
              // console.log(items);
              return <RenderMenProd items={items}></RenderMenProd>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenProd;
