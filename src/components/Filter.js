import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sortProducts,
  sortProdMen,
  sortProdWomen,
} from "../Redux/Reducer/action";

const Filter = () => {
  const dispatch = useDispatch();

  const sort = useSelector((state) => state.product.sort);

  const men = "men";

  const women = "women";

  return (
    <div className="d-flex justify-content-around filter">
      <div>
        <select
          value={sort}
          onChange={(event) => dispatch(sortProducts(event.target.value))}
        >
          <option value="latest">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>

      <div>
        <button
          className="btn sortProdgender"
          onClick={() => dispatch(sortProdMen(men))}
        >
          MEN
        </button>

        <button
          className="btn sortProdgender"
          onClick={() => dispatch(sortProdWomen(women))}
        >
          WOMEN
        </button>
      </div>
    </div>
  );
};

export default Filter;
