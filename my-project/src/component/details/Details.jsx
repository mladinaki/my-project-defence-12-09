import style from "../details/Details.module.css";
import * as userService from "../../services/componentService";
import * as commentServices from "../../services/commentServices";

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
import useComment from "../hooks/useComment";
import reducer from "../Reducer/Reducer";

const Details = () => {
  const { isAuthenticated, userId, username, email } = useContext(AuthContext);
  const { shoseId } = useParams();
  const navigate = useNavigate();

  const [key, setKey] = useState('home');
  const [price, setPrice] = useState(0);
  const [selectShose, setShose] = useState({});
  const [comments, dispaches] = useReducer(reducer, []);

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

  const onDelProduct = async (shoseId) => {
    const delItem = confirm("Сигурен ли сте че искате да изтриете този продукт !!!");

    if (delItem) {
      await userService.removeOne(shoseId);
      navigate(Path.Product);
    }
  };

  const isOwner = userId === selectShose._ownerId;

  const addCommentHednler = async (values) => {
    const newComment = await commentServices.create(
      shoseId,
      values.comment
    );

    dispaches({
      type: 'ADD_COMMENT',
      peyload: newComment
    })
  }

  const { values, onChange, onSubmit } = useComment(addCommentHednler, {
    comment: ''
  })

  const delComment = async (shoseId) => {
    const confirmItem = confirm(`Сигурен ли сте че искате да истриете`);

    if (confirmItem) {
      const res = await commentServices.removeComment(shoseId);
      navigate(`/details/${shoseId}`)
    }
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
                  <li>
                    Цена:
                    {selectShose.price}лв
                  </li>

                  <li>
                    Наличност:
                    {selectShose.availablity}
                  </li>

                  <li>
                    Модел:
                    {selectShose.model}
                  </li>

                  <li>
                    Производител:
                    {selectShose.manifacture}
                    {selectShose.shoseData}
                  </li>
                </div>

                <div className="phone-contact">
                  <span>Бърза поръчка - 0885 008 735</span>
                </div>
                {
                  (isAuthenticated && isOwner && (

                    <div className={style['btnCart']} onClick={clickCart}>
                      <i className="bi bi-cart2"></i>
                      Добави в количката
                    </div>
                  ))
                }
              </div>
            </div>

            <CardMedia
              component="img"
              height="250"
              style={{ width: 300, padding: 13, marginLeft: 15 }}
              image={selectShose.imageUrl}
              alt="green iguana"
            />

            {
              isAuthenticated && isOwner && (

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
              )
            }

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
                    <Tab eventKey="home" title="Детайли">
                      <div className={style["text-description"]}>
                        {selectShose.description}
                      </div>
                    </Tab>

                    <Tab eventKey="profile" title="Таблица с размери">
                      <img src="https://kjcustomm.com/image/cache/catalog/Stylmartin/size-550x550h.jpg" />
                    </Tab>

                    <Tab eventKey="contact" title="Коментари">
                      {isAuthenticated && isOwner && (
                        <form onSubmit={onSubmit} key={shoseId}>
                          <h4>Напиши коментар</h4>

                          <textarea
                            type="text"
                            name="comment"
                            value={values.comment}
                            onChange={onChange}

                            id="comment"
                            className="input_field"
                            placeholder="* Вашият коментар"
                          />

                          <Button type="submit" className={style["btnComment"]}>
                            Коментирай
                          </Button>

                          {comments.map(({ shoseData, _id }) => {
                            return (
                              <div key={_id} {...comments} shoseData={_id} className="comentContent">
                                <div className="commentItem">
                                  <i className="bi bi-person-circle"></i>
                                  <ul>
                                    <li className="emailComment">{username} </li>
                                    <Link to={`/comment-edit/${_id}`}>
                                      <i className="bi bi-pencil"
                                        style={{
                                          cursor: 'pointer',
                                          float: 'right',
                                          fontSize: '14px',
                                          marginTop: '-38px',
                                          margin: 10,
                                          color: 'black',

                                        }}></i>
                                    </Link>
                                    <p>{shoseData}</p>

                                  </ul>
                                  <i onClick={() => delComment(_id)} className="bi bi-trash" style={{
                                    cursor: 'pointer',
                                    width: '20px',
                                    height: '25px',
                                    fontSize: '14px',
                                    marginTop: '-56px',
                                    color: 'red',
                                    marginLeft: 385,
                                    display: 'inline-block',
                                    // padding: 4,
                                  }}></i>
                                </div>
                              </div>
                            )
                          })}
                        </form>
                      )}

                      <div className={style['btnProduct']}>
                        <Link to={`/product/catalog`}>
                          <span>Към продукти</span>
                        </Link>
                      </div>
                    </Tab>
                  </Tabs>
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
