import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

import style from "./ProductItem.module.css";

const productItem = ({ _id, sneacersName, price, imageUrl }) => {

  return (
    <div className={style["product-item"]}>
      <span data-v-15daad44="" data-v-3f0d782d="" className="percent">
        -26%
      </span>

      <h3>{sneacersName}</h3>
      <span>Mens sports shoes.</span>

      <Link to={`/details/${_id}`}>
        <img style={{ maxWidth: 110 }} src={imageUrl} alt="Shose 2" />
      </Link>

      <div className={style["price-item"]}>От {price} лв.</div>

      <div className="buttons">
        <Link to={`/details/${_id}`} className="cart-buy">
          <span style={{ fontSize: 14, letterSpacing: 1 }}>преглед</span>
        </Link>
      </div>
    </div>
  );
};

export default productItem;
