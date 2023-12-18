/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import style from "../shopcart/ShopCart.module.css";
import * as userService from "../../services/componentService";

import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Path from "../../path/path";

import DeleteUser from "../DeleteUser";
import { useEffect, useState } from "react";
import { ADD } from "../../redux/actions/action";

const ShopingCart = ({ _id }) => {
  const { shoseId } = useParams();
  const [price, setPrice] = useState(0);

  const dispach = useDispatch();

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

  const onCheckout = async (e) => {
    dispach(ADD(e));
  };

  return (
    <div className="templatemo_main_shop_cart">
      <div id="content" className="float_r">
        {getData.length === 0 && <h3></h3> ? (
          <h2 style={{ textAlign: "center", marginLeft: 100, fontSize: 22 }}>
            Няма добавени артикли!
          </h2>
        ) : (
          <h2 style={{ textAlign: "left" }}>Моята поръчка</h2>
        )}
        <table style={{ width: "123%" }}>
          <tr>
            <th>Image</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Remove</th>
            <th>Edit</th>
          </tr>

          {getData.map((data) => {
            return (
              <tr key={shoseId}>
                <td>
                  <div className={style["cartItem-image"]}>
                    <img src={data.imageUrl} alt="image 2" />
                  </div>
                </td>

                <div
                  className="name-sneaccers"
                  style={{
                    marginTop: 47,
                    fontSize: 15,
                    color: "black",
                    borderBottom: "1px solid black",
                    width: 52,
                  }}
                >
                  {data.sneacersName}
                </div>
                <td align="center" style={{ fontSize: 15 }}>
                  <p>{data.quantity} бр.</p>
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
          {getData.length === 0 ? null : (
            <Link className={style["btn-check"]} to={`/checout/cart`}>
              Завърши поръчка
            </Link>
          )}
          <tr>
            <td colSpan="3" align="right" height="50px">
              &nbsp;&nbsp;
            </td>
            <div className={style["total-end"]}>
              <p>Обща сума</p>
              <span>{price}лв.</span>
            </div>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default ShopingCart;
