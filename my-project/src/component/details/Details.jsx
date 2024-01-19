import style from "../details/Details.module.css";
import * as userService from "../../services/componentService";

import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

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
    const carts = await userService.getOne(shoseId);
    dispach(ADD(carts));

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
                      <div>
                        <Button
                          variant="outlined"
                          color="success"
                          onClick={() => clickCart()}
                        // handleOpen={handleOpen}
                        >
                          <span style={{ fontSize: 10, width: 170, float: 'left' }}>
                            Добави в количката
                          </span>
                        </Button>
                        <div style={{ float: 'left', marginTop: 14 }}>
                          <span style={{ marginRight: 30 }}>MLADINAKI</span>
                        </div>
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

                      <Button
                        color="success"
                        variant="outlined"
                      >
                        <Link to={`/product/sneakers`}>
                          <span>Към продукти</span>
                        </Link>
                      </Button>
                    </span>
                  </div>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          {isAuthenticated && isOwner && (
            <div>
              <Button
                style={{
                  marginLeft: 85,
                  height: 26,
                  fontSize: 11,
                  width: "30%",
                  fontWeight: "bold",
                }}
                variant="outlined"
                color="error"
                onClick={onDelProduct}
              >
                Премахни
              </Button>

              <Button
                variant="outlined"
                color="success"
                style={{
                  marginLeft: 10,
                  width: "30%",
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
      </div>
    </div>

  );
};

export default Details;
