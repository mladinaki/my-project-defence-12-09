import { useEffect, useState } from "react";
import * as userService from "../../services/componentService";
import ProductItem from "../Product/ProductItem";

const Product = ({ _id }) => {
  const [userProduct, setProduct] = useState([]);
  console.log(userProduct._id);

  useEffect(() => {
    userService
      .getAll()
      .then((result) => setProduct(result))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3030/data/catalog`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilterData(data);
      });
  }, []);

  const [filterData, setFilterData] = useState([]);
  const [data, setData] = useState([]);

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
          return (
            <ProductItem
              key={product._id}
              searchHandler={searchHandler}
              {...product}
            />
          );
        })}
      </div>

      {data.length === 0 && <h3>No articles yet</h3>}
    </div>
  );
};

export default Product;
