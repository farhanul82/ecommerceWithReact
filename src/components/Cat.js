import React, { useEffect } from "react";
import { getCatogories } from "../Redux/Reducer/action";
import { CATOGORIES } from "../DATA/Catogories";
import CatItems from "./CatItems";
import { useDispatch, useSelector } from "react-redux";

const Catogories = () => {
  console.log("farhanS");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatogories(CATOGORIES));
  }, [CATOGORIES]);

  const catogories = useSelector((state) => state.catogorie.catogoryName);

  return (
    <div className="row">
      {catogories.map((cat) => {
        return <CatItems cat={cat}></CatItems>;
      })}
    </div>
  );
};

export default Catogories;
