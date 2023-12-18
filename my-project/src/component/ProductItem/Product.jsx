import { useEffect, useState } from "react";
import * as userService from "../../services/componentService";
import ProductItem from "./ProductItem";

const Product = () => {
  const [userProduct, setProduct] = useState([]);

  useEffect(() => {
    userService
      .getAll()
      .then((result) => setProduct(result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="templatemo_main">
      {userProduct.map((prod) => {
        return <ProductItem key={prod._id} {...prod} prod={prod} />;
      })}

      {userProduct.length === 0 && <h3>No articles yet</h3>}
    </div>
  );
};

export default Product;
