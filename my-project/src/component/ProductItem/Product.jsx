import { useEffect, useState } from "react";
import * as userService from "../../services/componentService";
import ProductItem from "./ProductItem";
import { useDispatch } from "react-redux";
import { ADD } from "../../redux/actions/action";

const Product = () => {
  const [userProduct, setProduct] = useState([]);

  useEffect(() => {
    userService
      .getAll()
      .then((result) => setProduct(result))
      .catch((error) => console.log(error));
  }, []);

  const dispach = useDispatch();

  const clickCart = (e) => {
    dispach(ADD(e));
  };

  return (
    <div className="templatemo_main">
      {userProduct.map((prod) => {
        return (
          <ProductItem
            key={prod._id}
            {...prod}
            prod={prod}
            clickCart={clickCart}
          />
        );
      })}

      {userProduct.length === 0 && <h3>No articles yet</h3>}
    </div>
  );
};

export default Product;
