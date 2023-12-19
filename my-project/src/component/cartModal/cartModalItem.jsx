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

import { Link, Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { ADD, DLT, REMOVE } from "../../redux/actions/action";
import AuthContext from "../../contexts/authContexts";

const style = {
  position: "relative",
  top: "65%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  border: "1px solid rgb(229, 229, 229)",
  boxShadow: 24,
  p: 2,
  borderRadius: 4,
};

export default function CartModalItem({ _id }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { isAuthenticated, userId } = useContext(AuthContext);

  const [price, setPrice] = useState(0);
  const { shoseId } = useParams();

  // const navigate = useNavigate();
  const dispach = useDispatch();

  const getData = useSelector((state) => state.cartreducer.carts);

  const onClose = () => {
    setOpen(false);
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

    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <div>
      {isAuthenticated && (
        <Button onClick={handleOpen}>
          <Badge badgeContent={getData.length} color="success">
            <div className={styles["cart-icon"]}>
              <i className="bi bi-cart"></i>
            </div>
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
        slotProps={{
          backdrop: {
            timeout: 1000,
          },
        }}
      >
        <div className={styles["contents-modal"]}>
          <Fade in={open}>
            <Box sx={style}>
              <i
                className="bi bi-x-square"
                style={{ fontSize: 23, float: "right", cursor: "pointer" }}
                onClick={onClose}
              ></i>

              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              ></Typography>

              <Typography id="transition-modal-description">
                <h2
                  style={{
                    display: "inline",
                    marginLeft: "102px",
                    fontSize: 21,
                    paddingBottom: 10,
                    color: "#11BCD0",
                  }}
                >
                  <i className="bi bi-cart2" style={{ paddingRight: 12 }}></i>
                  Количка{" "}
                </h2>

                <table>
                  {getData.map((data) => {
                    return (
                      <div key={data._id} className="content-cart">
                        <div className="content-item">
                          <td
                            style={{
                              display: "flex",
                              margin: 20,
                              borderRadius: 20,
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
                                <p>Mens sports shoes.</p>
                              </div>

                              <div className={styles["price-cartcontent"]}>
                                <td> {data.price}лв.</td>
                              </div>
                              <div className={styles["price-count"]}>
                                <div className="mt-5 d-flex justify-content-between align-items-center">
                                  <span
                                    onClick={
                                      data.quantity <= 1
                                        ? () => DLT(data._id)
                                        : () => sendRemove(data)
                                    }
                                  >
                                    -
                                  </span>
                                  <span>{data.quantity}</span>
                                  <span onClick={() => sendPrice(data)}>+</span>
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
                  {/* <span>Всичко: {price}</span> */}
                </table>

                {getData.length === 0 && <></> ? (
                  <h3
                    style={{
                      textAlign: "center",
                      fontWeight: "540",
                      fontSize: 15,

                      display: "inline-block",
                    }}
                  >
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
                    <Link
                      to={`/shoping/cart`}
                      onClick={() => onClose()}
                      className={styles["btn-cartModal"]}
                    >
                      <span>Към количката</span>
                    </Link>
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
