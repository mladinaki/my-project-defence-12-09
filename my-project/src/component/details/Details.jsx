import style from "../details/Details.module.css";
import * as userService from "../../services/componentService";
import * as commentServices from "../../services/commentServices";

import * as React from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

import AuthContext from "../../contexts/authContexts";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { ADD } from "../../redux/actions/action";

import Path from "../../path/path";
import { useReducer } from "react";


const reducer = (state, action) => {
  switch (action?.type) {
    case 'GET_ALL_GAMES':
      return [...action.peyload];

    case 'ADD_COMMENT':
      return [...state, action.peyload];
    default:
      return state
  }
}

const Details = () => {
  const navigate = useNavigate();

  const { isAuthenticated, userId, username, email } = useContext(AuthContext);


  const [key, setKey] = useState('home');
  const [price, setPrice] = useState(0);
  const [selectShose, setShose] = useState({});
  // const [comments, setComments] = useState([]);

  const [comments, dispaches] = useReducer(reducer, []);

  const { shoseId } = useParams();

  const getData = useSelector((state) => state.cartreducer.carts);
  const dispach = useDispatch();

  useEffect(() => {
    try {
      userService.getOne(shoseId)
        .then(setShose);

      commentServices.getAll(shoseId)
        .then(result => {
          dispaches({
            type: 'GET_ALL_GAMES',
            peyload: result
          })
        })

    } catch (error) {
      console.log(error);
    }
  }, [shoseId]);


  const clickCart = async () => {
    const carts = await userService.getOne(shoseId);
    dispach(ADD(carts));
    // navigate(Path.Product);
  };

  const total = () => {
    let price = 0;
    getData.map((data, k) => {
      price = parseInt(data.price) * data.quantity + price;
    });
    setPrice(Number(price.toFixed(2)));
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

  const addCommentHednler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    // const data = Object.values(formData);

    const newComment = await commentServices.create(
      shoseId,
      formData.get("comment")
    );

    dispaches({
      type: 'ADD_COMMENT',
      peyload: newComment
    })
  }

  return (
    <div id="templatemo-main-details">
      <div id="content-details">
        <div className="content_half float_l">

          <Card sx={{ width: 950, marginLeft: -39 }}>

            <div className="content-details-name">
              <div className="content_half float_r">
                <h3 className="sneakers-name-details">{selectShose.sneacersName}</h3>

                <div className={style["price-details"]}>

                  <table>
                    <tbody>
                      <tr>
                        <td>Цена:</td>
                        <td>{selectShose.price}лв</td>
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

                    </tbody>
                  </table>
                </div>

                <div className="phone-contact">
                  <span>Бърза поръчка - 0885 008 735</span>
                </div>
                {
                  (isAuthenticated && isOwner && (

                    <div className={style['btnCart']} onClick={clickCart}>
                      <i className="bi bi-cart2"></i>
                      Поръчай
                    </div>
                  ))
                }
              </div>
            </div>

            <CardMedia
              component="img"
              height="340"
              style={{ width: 300, padding: 13, marginLeft: 15 }}
              image={selectShose.imageUrl}
              alt="green iguana"
            />

            {isAuthenticated && isOwner && (

              <div className={style['btnContent']}>
                <div className={style['btnDel']} onClick={onDelProduct}>
                  Премахни
                </div>

                <div className={style['btnEdit']}>
                  <Link to={`/edit/${shoseId}`}>
                    Промени
                  </Link>
                </div>
              </div>
            )}

            <CardContent>
              <h4>Информация за продукта</h4>
              <Typography variant="body2" color="text.secondary">
                <div className={style["contentTab"]}>
                  <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-7"
                  >
                    <Tab eventKey="home" title="Детайли" >
                      <div className={style["text-description"]}>
                        {selectShose.description}
                      </div>
                    </Tab>
                    <Tab eventKey="profile" title="Таблица с размери">
                      <img src="https://kjcustomm.com/image/cache/catalog/Stylmartin/size-550x550h.jpg" />
                    </Tab>

                    <Tab eventKey="contact" title="Коментари">
                      {isAuthenticated && isOwner && (
                        <form onSubmit={addCommentHednler}>
                          <h4>Напиши коментар</h4>

                          <div className="cleaner h5"></div>

                          <textarea
                            type="text"
                            name="comment"
                            id="phone"
                            className="input_field"
                            placeholder="* Вашият коментар"
                          />

                          <Button
                            style={{
                              marginLeft: 2,
                              width: '50%',
                              fontSize: '11px',
                              height: 30,
                              borderRadius: 2,
                              backgroundColor: "#000",
                              color: "#fff",
                            }}
                            sx={{ mt: 1, mb: 0 }}
                            type="submit"
                            className={style["btn"]}
                          >
                            Коментирай
                          </Button>
                          <h2>Comment</h2>
                          {comments.map(({ _id, text, }) => (

                            <div key={_id} className="commentItem">
                              <tr>
                                <td className="emailComment">Имейл: {email} </td>
                                <td className="emailComment">Име: {username} </td>
                              </tr>
                              <p>{text}</p>
                            </div>
                          ))}
                        </form>
                      )}

                    </Tab>
                  </Tabs>
                </div>

                <div className={style['btnProduct']}>
                  <Link to={`/product/catalog`}>
                    <span>Към продукти</span>
                  </Link>
                </div>

              </Typography>
            </CardContent>
          </Card>


        </div>
      </div>
    </div>

  );
};

export default Details;
