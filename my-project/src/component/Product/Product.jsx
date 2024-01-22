import { useEffect, useState } from "react";
import * as userService from "../../services/componentService";
import ProductItem from "../Product/ProductItem";

import style from "../Product/ProductItem.module.css";

const Product = ({ _id }) => {
  const [filterData, setFilterData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    userService
      .getAll()
      .then((result) => setData(result))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    userService
      .getAll()
      .then((data) => setFilterData(data))
      .catch((error) => console.log(error));
  }, []);

  const searchHandler = (value) => {
    const res = filterData.filter((f) =>
      f.sneacersName.toLowerCase().includes(value)
    );
    setData(res);
  };

  return (
    <div className="templatemo_main">
      <div className="user-name">
        <div className="search">
          <form>
            <input
              type="text"
              placeholder="Search...."
              onChange={(e) => searchHandler(e.target.value)}
            />
          </form>
        </div>

        {data.map((product) => {
          return <ProductItem key={product._id} {...product} />;
        })}
        <div className={style["no-faund"]}>
          {data.length === 0 && <span>Няма намерен продукт!</span>}
        </div>
      </div>
    </div>
  );
};

export default Product;
