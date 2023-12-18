/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import CheckOutItems from "./CheckItems";
import style from "../checkOut/checkOut.module.css";

import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { Button } from "@mui/material";

const checkOutItem = () => {
  const [price, setPrice] = useState(0);

  const getData = useSelector((state) => state.cartreducer.carts);

  const total = () => {
    let price = 0;
    getData.map((data, k) => {
      price = parseInt(data.price) * data.quantity + price;
    });

    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <div id="templatemo-main-checout">
      <div id="" className="float_r">
        <div id="templatemo_main"></div>
        <div className={style["form-check"]}>
          <form action="">
            <h2>Разгледайте</h2>
            <h5>
              <strong>Данни за плащане</strong>
            </h5>
            <div className="content_half float_l checkout">
              <label htmlFor="name">Име и фамилия</label>
              <input type="text" name="name" />
              <br />
              <br />
              <label htmlFor="name">Адрес</label>:
              <input type="text" name="addres" />
              <br />
              <br />
              <label htmlFor="city">Град</label>:
              <input type="text" name="city" />
              <br />
              <br />
              <label htmlFor="country">Телефон</label>:
              <input type="text" name="phone" />
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
        {getData.map((check) => {
          return (
            <>
              <CheckOutItems key={check._id} {...check} />
            </>
          );
        })}
        <div className={style["price-total-check"]}>
          <span>Всичко {price}лв.</span>
          <Button
            style={{ border: "1px solid black", marginLeft: 15, fontSize: 12}}
          >
            Завърши поръчката
          </Button>
        </div>
      </div>
    </div>
  );  
};

export default checkOutItem;
