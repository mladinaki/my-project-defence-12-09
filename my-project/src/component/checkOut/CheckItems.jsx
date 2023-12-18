import { Button } from "@mui/material";
import style from "../checkOut/checkOut.module.css";
// import style from "../ProductItem/ProductItem.module.css";

import { useParams } from "react-router-dom";

const ChecOut = ({ _id, sneacersName, imageUrl, price }) => {
  const { shoseId } = useParams();
  return (
        <div id="templatemo_main-check">
            <div className={style["check-content"]}>
              <div className={style["product-item-check"]}>
                <span data-v-15daad44="" data-v-3f0d782d="" className="percent">
                  -26%
                </span>

                <h3>{sneacersName}</h3>
                <p>Mens sports shoes.</p>
                <a href="productdetail.html">
                  <img src={imageUrl} alt="Shose 2" style={{ width: 100 }} />
                </a>
                <p className={style["price-item"]}>{price} лв.</p>
                <div className="buttons"></div>
                {/* <Link to={`/details/${_id}`} className="cart-buy">
          Детайли за продукта
        </Link> */}
              </div>
            </div>
          {/* <div id="templatemo_menubar"> */}

          {/* <div className="cleaner h50"></div>
          <h3>SHOPPING CART</h3>
          <h4>
            TOTAL AMOUNT: <strong>$240</strong>
          </h4>
          <p>
            <input type="checkbox" />I accept the <a href="#">terms of use</a>{" "}
            of this website.
          </p> */}
            {/* <tr>
              <td height="80px">
                {" "}
                <img src="images/paypal.gif" alt="paypal" />
              </td>
              <td width="400px;" style={{ padding: "0px 20px" }}>
                Recommended if you have a PayPal account. Fastest delivery time.
              </td>
              <td>
                <a href="#" className="more">
                  PAYPAL
                </a>
              </td>
            </tr>
            <tr>
              <td height="80px">
                <img src="images/2co.gif" alt="paypal" />
              </td>
              <td width="400px;" style={{ padding: "0px 20px" }}>
                2Checkout.com, Inc. is an authorized retailer of goods and
                services. 2CheckOut accepts customer orders via online checks,
                Visa, MasterCard, Discover, American Express, Diners, JCB and
                debit cards with the Visa, Mastercard logo. Validate{" "}
                <a
                  href="http://validator.w3.org/check?uri=referer"
                  rel="nofollow"
                >
                  XHTML
                </a>{" "}
                &amp;{" "}
                <a
                  href="http://jigsaw.w3.org/css-validator/check/referer"
                  rel="nofollow"
                >
                  CSS
                </a>
                .
              </td>
              <td>
                <a href="#" className="more">
                  2CHECKOUT
                </a>
              </td>
            </tr> */}
            </div>
  );
};

export default ChecOut;
