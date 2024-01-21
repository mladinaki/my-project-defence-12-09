/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import style from "../shopcart/ShopCart.module.css";
import * as userService from "../../services/componentService";

import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import DeleteUser from "../DeleteUser";
import { useEffect, useState } from "react";
import * as React from "react";
import { Button } from "@mui/material";
import { DLT } from "../../redux/actions/action";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
];

const ShopingCart = ({ _id }) => {
  const [price, setPrice] = useState(0);

  const getData = useSelector((state) => state.cartreducer.carts);
  const dispach = useDispatch()

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

  useEffect(() => {
    userService.getAll()
      .then((user) => console.log(user));
  }, [])

  const removeItem = (_id) => {
    getData.map((data, k) => {
      dispach(DLT(data._id));
    })
  }

  return (

    <div className="templatemo_main_shop_cart">
      <div id="content" className="float_r">

        {getData.length === 0 && <div></div> ? (
          <h2 style={{
            marginLeft: '42%',
            padding: '5%',
            height: 50,
            border: '1px solid rgb(230, 230, 230)',
            fontFamily:'verdana',
            display: 'inline-block',
            fontSize: 25
          }}>
            Няма добавени артикли!
          </h2>
        ) : (
          <div>
            <h3
              style={{
                display: "inline",
                margin: '10px',
                height: '20px',
                textTransform: 'uppercase',
                float: 'left',
                marginLeft: 20, fontFamily: 'verdana',
              }}>Пазарска количка</h3>
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
                  <span>{price.toFixed(2)} </span>
                </div>

                <div className={style["total-end"]}>
                  <p>Обща сума</p>
                  <span>{price.toFixed(2)}</span>
                </div>
                <button style={{
                  width: '100%',
                  marginTop: 4,
                  height: 33,
                  backgroundColor: "#10BBCF",
                }}>
                  <Link to={`/checout/cart`} style={{
                    color: '#2F2F2F',
                    fontWeight: 'bold',
                    fontSize: 11
                  }}>Към разплащане</Link>
                </button>
              </div>
              {getData.map((data, k) => {

                return (
                  <tr key={data._id} data={data}>
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
                      {data.price}{" "}
                    </td>

                    <td align="center" style={{ fontSize: 15 }}>
                      {parseInt(data.price) * data.quantity}{" "}
                    </td>
                    <td align="center" key={data.k}  >
                      <DeleteUser key={data._id} {...data} />
                    </td>

                  </tr>
                );
              })}

            </table>

            <div className={style["button-shoping"]}>
              <button style={{
                marginLeft: 68,
                marginTop: 12,
                width: '17%',
                height: 34,
                fontSize: 11,
              }}
                sx={{ mt: 1, mb: 3 }}
              >
                <Link to={'/product/sneakers'}
                  style={{
                    color: "#000",
                    fontWeight: "bold",
                  }}><span>Продължи с пазаруването</span></Link></button>

              <button type="submit" name='updateCart' style={{
                marginBottom: 20,
                marginLeft: 23,
                width: '17%',
                height: 34,
                fontSize: 11,
                fontWeight: "bold",

              }}
                onClick={removeItem}
                sx={{ mt: 1, mb: 3 }}
              ><span>Изчисти количкатa</span></button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ShopingCart;
