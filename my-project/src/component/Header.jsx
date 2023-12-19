import CartModalItem from "./cartModal/cartModalItem";

import { useParams } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const { shoseId } = useParams();

  const [cart, setCart] = useState([]);

  return (
    <div id="templatemo_header" key={shoseId}>
      <div id="site_title">
        <h1>
          <a href="/product/sneakers">Online Shoes Store</a>
        </h1>
      </div>
      <div id="header_right">
        <p>
          <div className="cart-header">
            <CartModalItem key={cart._id} />
          </div>
        </p>
      </div>
    </div>
  );
};

export default Header;
