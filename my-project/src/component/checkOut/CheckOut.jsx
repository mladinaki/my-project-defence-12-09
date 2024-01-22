/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import style from "../checkOut/checkOut.module.css";

import { Button } from "@mui/material";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const checkOutItem = () => {
  const [price, setPrice] = useState(0);
  const { shoseId } = useParams()

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
    <div id="templatemo-main-checout" key={shoseId}>
      <div id="" className="float_r">
        <div id="templatemo_main"></div>
        <div className={style["form-check"]}>
          <form action="">
            <h2>Разплащане</h2>
            <h5>
              <strong>Данни за плащане</strong>
            </h5>
            <div className="content_half float_l checkout">

              <input type="text" name="name" placeholder="Имейл адрес" />

              <input type="text" name="name" placeholder="Име и фамилия" />

              <input type="text" name="name" placeholder="Град" />

              <input type="text" name="name" placeholder="Област" />

              <input type="text" name="name" placeholder="Пощенски код" />

              <input type="text" name="addres" placeholder="Адрес" />

              <input type="text" name="city" placeholder="Град" />

              <input type="text" name="phone" placeholder="Телефон" />

              <Button type="submit" style={{
                marginLeft: 7,
                width: '94%',
                height: 40,
                borderRadius: 4,
                backgroundColor: "#10BBCF",
                color: "#FFFFFF"
              }}>Поръчай</Button>
            </div>
          </form>
          <tr>
            <th>Снимка</th>
            <th>Име на продукта</th>
            <th>Количство</th>
            <th>Обща сума</th>
          </tr>
        </div>
        {getData.map((check) => {

          return (
            <div className="cont">
              <div className="che-output-container">
                <table>

                  <td>
                    <tr><img src={check.imageUrl} style={{ width: 50 }} /></tr>
                  </td>

                  <td>
                    <tr>{check.sneacersName}</tr>
                  </td>

                  <td>
                    <tr>{check.quantity}бр</tr>
                  </td>

                  <td>
                    <tr>{check.price}</tr>
                  </td>

                </table>
              </div>
            </div>
          );
        })}

        <div className={style["price-total-check"]}>
          <span>Всичко {price.toFixed(2)}лв.</span>
          <Button
            style={{ border: "1px solid black", marginLeft: 15, fontSize: 10 }}
          >
            Завърши поръчката
          </Button>
        </div>
      </div>
    </div>
  );
};

export default checkOutItem;
