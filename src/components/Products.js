import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../Redux/Reducer/action";
import { PRODUCTS } from "../DATA/data";
import ProdItems from "./ProdItems";
import Filter from "./Filter";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(PRODUCTS));
  }, [PRODUCTS]);

  const products = useSelector((state) => state.product.productItems);

  return (
    <div className="container-fluid">
      <div>
        <Filter></Filter>
      </div>
      <div className="row productBackground">
        <div className="col-12 col-md-12  ">
          <div className="row d-flex justify-content-between ">
            {products.map((items) => {
              // console.log(items);
              return <ProdItems items={items}></ProdItems>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
