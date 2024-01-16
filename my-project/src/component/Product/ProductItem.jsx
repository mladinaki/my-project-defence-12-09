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
      <p>Mens sports shoes.</p>
      <a href="productdetail.html">
        <img src={imageUrl} alt="Shose 2" />
      </a>
      <p className={style["price-item"]}>От {price} лв.</p>

      <div className="buttons">
        <Link to={`/details/${_id}`} className="cart-buy">
          <FaCartPlus className="icons-cart"></FaCartPlus>
          <span style={{ fontSize: 13, letterSpacing: 2 }}>КУПИ</span>
        </Link>
      </div>
    </div>
  );
};

export default productItem;
