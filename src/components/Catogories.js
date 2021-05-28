import React, { useEffect } from "react";
import { getCatogories } from "../Redux/Reducer/action";
import { CATOGORIES } from "../DATA/Catogories";
import CatItems from "./CatItems";
import { useDispatch, useSelector } from "react-redux";

const Catogories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatogories(CATOGORIES));
  }, [CATOGORIES]);

  const catogories = useSelector((state) => state.catogorie.catogoryName);

  return (
    <div
      className="container-fluid categoryDiv"
      style={{ background: "antiquewhite" }}
    >
      <div className="row">
        {catogories.map((cat) => {
          return <CatItems cat={cat}></CatItems>;
        })}
      </div>
    </div>
  );
};

export default Catogories;
