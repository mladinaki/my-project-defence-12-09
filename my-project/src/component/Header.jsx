import styles from "./Navigate/Navbar.module.css";
import style from "../component/header/Header.module.css";

import CartModalItem from "./cartModal/cartModalItem";

import { useParams } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";

import AuthContext from "../contexts/authContexts";

const Header = () => {
  const { shoseId } = useParams();

  const [cart, setCart] = useState([]);

  return (
    <div id="templatemo_header" key={shoseId}>
      <div id="site_title">
        <h1>
          <a href="/product">Online Shoes Store</a>
        </h1>
      </div>
      <div id="header_right">
        <p>
          <div className="cart-header">
            <CartModalItem key={cart._id} />
          </div>
        </p>
        <div className={style["navLink"]}>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
