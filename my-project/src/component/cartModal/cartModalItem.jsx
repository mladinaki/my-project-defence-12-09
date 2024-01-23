/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";

import styles from "../cartModal/cartModal.module.css";

import { ADD, DLT, REMOVE } from "../../redux/actions/action";

import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/authContexts";

export default function CartModalItem({ _id }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { isAuthenticated, userId } = useContext(AuthContext);

  const { shoseId } = useParams();

  const getData = useSelector((state) => state.cartreducer.carts);
  const dispach = useDispatch()

  const onClose = () => {
    setOpen(false);
  };

  const sendRemove = (iteam) => {
    dispach(REMOVE(iteam));
  };

  const sendPrice = (item) => {
    dispach(ADD(item));
  };

  return (
    <div>
      {isAuthenticated && (
        <Button onClick={handleOpen}>

          <div className={styles["cart-icon"]} >
            <i className="bi bi-cart" style={{ display: 'inline' }}></i>
          </div>

          <Badge badgeContent={getData.length} color="error"
            style={{ padding: 2, marginBottom: 23 }}>
          </Badge>
        </Button>
      )}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{ backdrop: { timeout: 1000 }, }}>

        <div className={styles["contents-modal"]}>
          <Fade in={open}>
            <Box className={styles['contentBox']}>
              <i
                className="bi bi-x-square"
                style={{ fontSize: 19, float: "right", cursor: "pointer" }}
                onClick={onClose}
              ></i>

              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              ></Typography>

              <Typography id="transition-modal-description">
                <table>
                  {getData.map((data) => {
                    return (

                      <div key={data._id} className="content-cart">
                        <div className="content-item">
                          <td
                            style={{
                              display: "flex",
                              padding: 5,
                            }}
                          >
                            <div className={styles["contentModal"]}>
                              <div className={styles["cartItem-image"]}>
                                <Link to={`/shoping/cart`}>
                                  <img
                                    src={data.imageUrl}
                                    alt="image 3"
                                    onClick={() => onClose(shoseId)}
                                  />
                                </Link>
                              </div>
                              <div className={styles["name-content"]}>
                                <th>{data.sneacersName}</th>
                                <span>Mens sports shoes.</span>
                              </div>

                              <div className={styles["price-cartcontent"]}>
                                <span> {data.price}лв.</span>
                              </div>
                              <div className={styles["price-count"]}>
                                <div className="mt-5 d-flex justify-content-between align-items-center">
                                  <div className={styles["contentBtn"]}>
                                    <span className={styles["btn-count"]}
                                      onClick={data.quantity <= 1
                                        ? () => DLT(data._id)
                                        : () => sendRemove(data)
                                      }>-</span>

                                    <span style={{ color: 'rgba(34, 34, 34, 1)', background: '#fff' }}>{data.quantity}</span>

                                    <span className={styles["btn-count"]}
                                      onClick={() => sendPrice(data)}>+</span>
                                  </div>
                                </div>
                              </div>

                              <div className={styles["price-cartcontent"]}>
                                <td>
                                  {" "}
                                  <span>
                                    Общо:{data.price * data.quantity}лв.
                                  </span>
                                </td>
                              </div>
                            </div>
                          </td>
                        </div>

                      </div>
                    );
                  })}
                  { /*<span>Всичко: {price}</span>*/}
                </table>

                {getData.length === 0 && <span></span> ? (
                  <h3
                    style={{
                      textAlign: "center",
                      fontWeight: "540",
                      fontSize: 15,
                      display: "inline-block",
                    }}
                  >
                    <i className="bi bi-cart-dash"
                      style={{
                        fontSize: 20,
                        textAlign: 'center',
                        display: "inline",
                        float: 'left',
                      }}></i>
                    Количката е празна.
                    <div
                      className="shop-text"
                      style={{ display: "flex", marginLeft: "103px" }}
                    >
                      Все още нямате добавен продукт!
                    </div>
                  </h3>
                ) : (
                  <div className={styles["price-cartcontent"]} key={_id}>

                  </div>
                )}
              </Typography>
            </Box>
          </Fade>
        </div>
      </Modal>


    </div>
  );
}
