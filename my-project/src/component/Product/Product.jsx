import { useEffect, useState } from "react";
import * as userService from "../../services/componentService";
import ProductItem from "../Product/ProductItem";

import style from "../Product/ProductItem.module.css";
import Search from "../Search";

const Product = () => {
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

      <div className="containerSearch">
        <div className="search">
          <Search searchHandler={searchHandler} data={data} />
        </div>
      </div>

      {data.map((product) => {
        return <ProductItem key={product._id} {...product} searchHandler={searchHandler} />;
      })}

      <div className={style["no-faund"]}>
        {data.length === 0 && <span>Няма намерен продукт!</span>}
      </div>
    </div>
  );
};

export default Product;
