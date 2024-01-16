import style from "../details/Details.module.css";
import * as userService from "../../services/componentService";

import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import AuthContext from "../../contexts/authContexts";

import { ADD, DLT } from "../../redux/actions/action";

import Path from "../../path/path";

const Details = () => {
  const { shoseId } = useParams();
  const { isAuthenticated, userId } = useContext(AuthContext);
  const navigate = useNavigate();

  const [selectShose, setShose] = useState({});

  useEffect(() => {
    userService.getOne(shoseId).then((result) => setShose(result));
  }, [shoseId]);

  const dispach = useDispatch();

  const clickCart = async () => {
    const cart = await userService.getOne(shoseId);
    dispach(ADD(cart));

    navigate(Path.Product);
  };

  // const handleOpen = () => {
  //   setShose(true);
  // };
  const onDelProduct = async () => {
    const delItem = confirm("Are you sure you want to delete this product?");

    if (delItem) {
      await userService.removeOne(shoseId);
      navigate(Path.Product);
    }
  };

  const isOwner = userId === selectShose._ownerId;

  return (
    <div id="templatemo-main-details" key={shoseId}>
      <div id="content-details" className="float_r">
        <div className="content_half float_l">
          <a href="images/product/10_l.jpg">
            <img src={selectShose.imageUrl} alt="image" />
          </a>
          {isAuthenticated && isOwner && (
            <div>
              <Button
                style={{
                  marginRight: 9,
                  height: 26,
                  fontSize: 11,
                  width: "40%",
                  fontWeight: "bold",
                }}
                variant="outlined"
                color="error"
                Error
                onClick={onDelProduct}
              >
                Премахни
              </Button>

              <Button
                variant="outlined"
                color="success"
                style={{
                  marginLeft: 5,
                  width: "40%",
                  height: 26,
                  fontSize: 11,
                  fontWeight: 'bold',
                }}
              >
                <Link to={`/edit/${shoseId}`}>
                  <span>Промени</span>
                </Link>
              </Button>
            </div>
          )}
        </div>

        <div className="content_half float_r">
          <h3 className="sneakers-name-details">{selectShose.sneacersName}</h3>
          <table>
            <tr>
              <td>Цена:</td>
              <div className={style["price-details"]}>
                <td>{selectShose.price}лв</td>
              </div>
            </tr>
            <tr>
              <td>Наличност:</td>
              <td>{selectShose.availablity}</td>
            </tr>
            <tr>
              <td>Модел:</td>
              <td>{selectShose.model}</td>
            </tr>
            <tr>
              <td>Производител:</td>
              <td>{selectShose.manifacture}</td>
            </tr>
          </table>

          {
            (isAuthenticated && isOwner && (
              <Button
                color="success"
                variant="outlined"
                onClick={() => clickCart()}
                // handleOpen={handleOpen}
              >
                <span style={{ fontSize: 11,display:'grid', width:'175px'}}>
                  Добави в количката
                </span>
              </Button>
            ))
          }

        </div>
        <div className="cleaner h30"></div>
        <span className={style["text-description"]}>
          <h5>Информация за продукта</h5>
          <p>{selectShose.description}</p>

          <Button
            color="success"
            variant="outlined"
            style={{
              padding: 5,
              marginTop: 20,
              width: "100%",
              fontSize: 12,
              fontWeight: 'bold',
              // display: 'flex'
            }}
          >
            <Link to={`/product/sneakers`}>
              <span>Към продукти</span>
            </Link>
          </Button>
        </span>
      </div>
    </div>

  );
};

export default Details;
