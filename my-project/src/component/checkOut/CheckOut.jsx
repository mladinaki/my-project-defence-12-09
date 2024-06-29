/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import style from "../checkOut/checkOut.module.css";

import { Button } from "@mui/material";
import * as userService from "../../services/commponentAddres";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const CheckOut = () => {

  const { shoseId } = useParams();

  const [price, setPrice] = useState(0);
  const getData = useSelector((state) => state.cartreducer.carts);

  const navigate = useNavigate()

  const total = () => {
    let price = 0;
    getData.map((data, k) => {
      price = (data.price) * data.quantity + price;
    });
    setPrice(Number(price.toFixed(2)));
  };

  useEffect(() => {
    total();
  }, [total]);

  const onHendlerCheck = async (e) => {
    e.preventDefault();

    const dataForm = Object.fromEntries(new FormData(e.currentTarget))

    const res = await userService.cerateAddress(dataForm);
    console.log(res);
    // navigate(`/check/user`)
  }

  return (
    <div id="templatemo-main-checout" key={shoseId}>
      <div id="" className="float_r">
        <div className={style["form-check"]}>

          {getData.length === 0 && <div></div> ? (
            <div className={style["content-messageCheck"]}>
              <h3>Кошницата е празна!</h3>
            </div>

          ) : (
            <div className="checkOutContent">
              <h2>Поръчка</h2>
              <form onSubmit={onHendlerCheck}>
                <div className="content_half float_l checkout">

                  <input type="text" name="email" placeholder="Имейл адрес" />

                  <input type="text" name="firstName" placeholder="Име и фамилия" />

                  <input type="text" name="city" placeholder="Град" />

                  <input type="text" name="area" placeholder="Област" />

                  <input type="text" name="postCode" placeholder="Пощенски код" />

                  <input type="text" name="addres" placeholder="Адрес" />

                  <input type="text" name="city" placeholder="Град" />

                  <input type="text" name="phone" placeholder="Телефон" />

                  <Button
                    type="submit"
                    name="submit"
                    value="send"
                    style={{
                      marginLeft: 7,
                      width: '90.5%',
                      borderRadius: 4,
                      backgroundColor: "#10BBCF",
                      color: "#000",
                      marginLeft: 5,
                      fontFamily: 'verdana'
                    }}>Поръчай</Button>
                </div>
              </form>

              <table>
                <tr>
                  <th>Снимка</th>
                  <th>Име</th>
                  <th>Количство</th>
                  <th>Ед. цена</th>
                  <th>Обща сума</th>
                </tr>
              </table>
              {getData.map((check) => {

                return (
                  <div className="cont" key={check._id}>
                    <div className="che-output-container">

                      <table>
                        <tr>
                          <td><img src={check.imageUrl} style={{ width: 50 }} /></td>
                        </tr>

                        <tr>
                          <td>{check.sneacersName}</td>
                        </tr>

                        <tr>
                          <td>{check.quantity}бр</td>
                        </tr>

                        <tr>
                          <td>{check.price}лв.</td>
                        </tr>

                        <tr>
                          <td>{check.price * check.quantity}лв.</td>
                        </tr>
                      </table>

                    </div>
                  </div>
                );
              })}
              <div className={style["price-total-check"]}>
                <table>
                  <tr>
                    <td >Всичко: {price.toFixed(2)}лв.</td>
                  </tr>
                </table>

              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
