import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PRODUCTS } from "../DATA/data";
import { fetchCategoryProducts, showCatItems } from "../Redux/Reducer/action";
import RendercatItems from "./RendercatItems";

const Showcategoritems = () => {
  const { catNames } = useParams();
  console.log(catNames);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryProducts(PRODUCTS));
  }, [PRODUCTS]);
  const catProd = useSelector((state) => state.catogorie.categoryItems);
  const products = useSelector((state) => state.product.productItems);
  //   console.log(products);

  return (
    <div className="container-fluid">
      <div className="row categoryBackground">
        {catProd.map((items) => {
          return <RendercatItems items={items}></RendercatItems>;
        })}
      </div>
    </div>
  );
};

export default Showcategoritems;
