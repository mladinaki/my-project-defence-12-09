import style from "../details/Details.module.css";
import * as userService from "../../services/componentService";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import AuthContext from "../../contexts/authContexts";

import { ADD, DLT } from "../../redux/actions/action";

import Path from "../../path/path";
import { Button } from "@mui/material";

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
    // alert(`Cart was successfully added`);
    navigate(Path.Product);
  };

  const handleOpen = () => {
    setShose(true);
  };

  const onDelProduct = async () => {
    const delItem = confirm("Are you sure you want to delete this product?");

    if (delItem) {
      await userService.removeOne(shoseId);
      navigate(Path.Product);
    }
    // setDelProduct((state) => state.filter((user) => user.id !== delProduct));
  };

  const isOwner = userId === selectShose._ownerId;

  return (
    <div id="templatemo-main-details" key={shoseId}>
      <div id="content-details" className="float_r">
        <div className="content_half float_l">
          <a href="images/product/10_l.jpg">
            <img src={selectShose.imageUrl} alt="image" />
          </a>
          <Button
            style={{
              border: "1px solid rgb(129, 129, 129)",
              fontSize: 10,
              height: 26,
              // width: "94px",
              background: "red",
              color: "white",
              marginRight: 8,
              marginBottom: 3,
              display: "inline",
              marginLeft: "18px",
            }}
            onClick={onDelProduct}
          >
            Премахни
          </Button>

          <Link
            to={`/edit/${shoseId}`}
            style={{
              display: "inline",
              fontSize: `12px`,
              textTransform: "uppercase",
              padding: 5,
              textAlign: "center",
              width: "60px",
              height: "15px",
              border: "1px solid rgb(129, 129, 129)",
              borderRadius: "3px",
              color: "black",
              marginLeft: 10,
            }}
          >
            <span>Промени</span>
          </Link>
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

          <div className="cleaner h20"></div>

          {
            (isAuthenticated,
            isOwner && (
              <>
                <Link
                  className="addtocart-details"
                  onClick={() => clickCart()}
                  handleOpen={handleOpen}
                >
                  <span style={{ fontSize: 13, textTransform: "uppercase" }}>
                    Добави в количката
                  </span>
                </Link>
              </>
            ))
          }
        </div>
        <div className="cleaner h30"></div>
        <span className={style["text-description"]}>
          <h5>Информация за продукта</h5>
          <p>{selectShose.description}</p>
        </span>

        <div className="cleaner h50"></div>
      </div>
    </div>
  );
};

export default Details;
