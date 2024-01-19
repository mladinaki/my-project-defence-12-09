/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import style from "../shopcart/ShopCart.module.css";

import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import DeleteUser from "../DeleteUser";
import { useEffect, useState } from "react";
import * as React from "react";
import { Button } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
];

const ShopingCart = ({ _id }) => {
  const { shoseId } = useParams();
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

    <div className="templatemo_main_shop_cart">
      <div id="content" className="float_r">

        {getData.length === 0 && <div></div> ? (
          <h2 style={{ textAlign: "center", marginLeft: 100, fontSize: 22 }}>
            Няма добавени артикли!
          </h2>
        ) : (
          <h3
            style={{
              display: "inline",
              margin: '10px',
              height: '20px',
              textTransform: 'uppercase',
              float: 'left',
              marginLeft: 20, fontFamily: 'verdana',
            }}>Пазарска количка</h3>
        )}
        <table>
          <tr>
            <th>Снимка</th>
            <th>Име на продукта</th>
            <th>Количество</th>
            <th>Единична цена</th>
            <th>Сума</th>
            <th>Премахни</th>
          </tr>
          <div id="end-product-check">
            <th>Общо количество</th>

            <div className={style["total-end"]}>
              <p>Сума</p>
              <span>{price.toFixed(2)} лв</span>
            </div>

            <div className={style["total-end"]}>
              <p>Обща сума</p>
              <span>{price.toFixed(2)} лв</span>
            </div>
            <Button style={{ width: '210px', marginBottom: '8px', marginLeft: 3 }}
              variant="outlined"
              color="success">
              <Link to={`/checout/cart`}>Към разплащане</Link>
            </Button>
          </div>
          {getData.map((data) => {

            return (
              <tr key={shoseId}>
                <td>
                  <div className={style["shoping-image"]}>
                    <img src={data.imageUrl} alt="image 2" />
                  </div>
                </td>

                <td>
                  <div
                    className="name-sneaccers"
                    style={{
                      marginTop: 47,
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: "black",
                      textAlign: "center",
                      margin: '5% auto'
                    }}
                  >
                    {data.sneacersName}
                  </div>
                </td>
                <td align="center" style={{ fontSize: 15 }}>
                  <span>{data.quantity} бр.</span>
                </td>

                <td align="center" style={{ fontSize: 15 }}>
                  {data.price} лв.{" "}
                </td>

                <td align="center" style={{ fontSize: 15 }}>
                  {parseInt(data.price) * data.quantity} лв.{" "}
                </td>

                <td align="center">
                  <DeleteUser key={data._id} {...data} />
                </td>
              </tr>
            );

          })}
        </table>
      </div>
    </div>
  );
};
export default ShopingCart;
