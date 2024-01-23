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
          <div className={style["content-message"]}>
            <h2> Няма добавени артикули!</h2>
          </div>
        ) : (
          <div className={style["content-cartTitle"]}>
            <h3>Пазарска количка</h3>
            <table>
              <tr>
                <th>Снимка</th>
                <th>Име на продукта</th>
                <th>Количество</th>
                <th>Ед. цена</th>
                <th>Сума</th>
                <th>Премахни</th>
              </tr>
              <div id={style['end-product-check']}>
                <th>Общо количество</th>

                <div className={style["total-end"]}>
                  <span>Междинна сума:</span>
                  <span>{price.toFixed(2)}лв. </span>
                </div>

                <div className={style["total-end"]}>
                  <span>Всичко:</span>
                  <span>{price.toFixed(2)}лв.</span>
                </div>
                <button style={{
                  width: '100%',
                  marginBottom: 5,
                  height: 32,
                  backgroundColor: '#EC3237',
                }}>
                  <Link to={`/checout/cart`} style={{
                    color: '#2F2F2F',
                    fontWeight: '550',
                    letterSpacing: '2px',
                    fontSize: 11,
                    color: '#fff'

                  }}>плащане</Link>
                </button>
                <button style={{
                  width: '100%',
                  height: 33,
                  backgroundColor: "#10BBCF",
                }}>
                  <Link to={'/product/sneakers'} style={{
                    color: '#2F2F2F',
                    fontWeight: '570',
                    letterSpacing: "2px",
                    fontSize: 11
                  }}>Продължи пазарауването</Link>
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
                    <td align="center" style={{ fontSize: 14,color:'#7B92A6', fontWeight:'500' }}>
                      <span>{data.quantity} бр.</span>
                    </td>

                    <td align="center" style={{ fontSize: 14,color:'#7B92A6', fontWeight:'500' }}>
                      {data.price}лв.
                    </td>

                    <td align="center" style={{ fontSize: 14,color:'#7B92A6', fontWeight:'500' }}>
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

              <div type="submit" name='updateCart' style={{
                marginBottom: 22,
                marginLeft: 20,
                textAlign: 'center',
                width: '23%',
                // float: 'right',
                height:23,
                fontSize: 11,
                fontWeight: "550",
                textTransform: 'uppercase',
                cursor: 'pointer',
                letterSpacing: 2

              }}
                onClick={removeItem}
              ><span>Изчисти количкатa</span></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ShopingCart;
