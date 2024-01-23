import style from "../details/Details.module.css";
import * as userService from "../../services/componentService";

import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import AuthContext from "../../contexts/authContexts";

import { ADD, DLT, REMOVE } from "../../redux/actions/action";

import Path from "../../path/path";
import { dark } from "@mui/material/styles/createPalette";
import CartModalItem from "../cartModal/cartModalItem";

const Details = () => {
  const { shoseId } = useParams();
  const { isAuthenticated, userId } = useContext(AuthContext);
  const navigate = useNavigate();

  const [price, setPrice] = useState(0);
  const [selectShose, setShose] = useState({});

  const getData = useSelector((state) => state.cartreducer.carts);
  const dispach = useDispatch();

  useEffect(() => {
    userService.getOne(shoseId).then((result) => setShose(result));
  }, [shoseId]);


  const clickCart = async () => {
    const carts = await userService.getOne(shoseId);
    dispach(ADD(carts));
    // navigate(Path.Product);
  };

  const sendRemove = (iteam) => {
    dispach(REMOVE(iteam));
  };

  const sendPrice = (item) => {
    dispach(ADD(item));
  };

  const total = () => {
    let price = 0;
    getData.map((data, k) => {
      price = parseInt(data.price) * data.quantity + price;
    });
    setPrice(price.toFixed(2));
  };

  useEffect(() => {
    total();
  }, [total]);


  const onDelProduct = async () => {
    const delItem = confirm("Сигурен ли сте че искате да изтриете този продукт !!!");

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

          <Card sx={{ width: 770, display: 'flex', marginLeft: -28 }}>
            <CardActionArea>
              <div className="content-details-name">
                <div className="content_half float_r">
                  <h3 className="sneakers-name-details">{selectShose.sneacersName}</h3>
                  <table>
                    <tr>
                      <td>Цена:</td>
                      <div className={style["price-details"]}>
                        <span>{selectShose.price}лв</span>
                      </div>
                    </tr>
                    <tr>
                      <td>Наличност:</td>
                      <span>{selectShose.availablity}</span>
                    </tr>
                    <tr>
                      <td>Модел:</td>
                      <span>{selectShose.model}</span>
                    </tr>
                    <tr>
                      <td>Производител:</td>
                      <span>{selectShose.manifacture}</span>
                    </tr>
                  </table>
                  {
                    (isAuthenticated && isOwner && (

                      <div className={style['btnCart']}
                        onClick={clickCart}>
                        <i class="bi bi-cart2" style={{
                          fontSize: 19,
                          float: 'left',
                          display: 'block',
                          marginRight: 5,
                          marginLeft:34,
                        }}>
                        </i>
                        <span>
                          Добави в количката
                        </span>
                      </div>
                    ))
                  }
                </div>
              </div>
              <CardMedia
                component="img"
                height="340"
                style={{ width: 250, padding: 13, marginLeft: 2 }}
                image={selectShose.imageUrl}
                alt="green iguana"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Информация за продукта
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <div className="content-details-name2">
                    <span className={style["text-description"]}>
                      <p>{selectShose.description}</p>

                      <div className={style['btnProduct']}>
                        <Link to={`/product/sneakers`}>
                          <span>Към продукти</span>
                        </Link>
                      </div>
                    </span>
                  </div>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          {isAuthenticated && isOwner && (
            <div className={style['btnContent']}>
              <div className={style['btnDel']} onClick={onDelProduct}>
                <span>Премахни</span>
              </div>

              <div className={style['btnEdit']}>
                <Link to={`/edit/${shoseId}`}>
                  <span>Промени</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

  );
};

export default Details;
