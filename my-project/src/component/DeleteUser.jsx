/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import styles from "./shopcart/ShopCart.module.css";

import { DLT } from "../redux/actions/action";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

import * as userService from "../services/componentService";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 340,
  height: 310,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  borderRadius: 4,
  p: 4,
};

const DeleteUser = ({ _id, sneacersName, price, imageUrl, quantity }) => {
  const { shoseId } = useParams();

  const [open, setOpen] = useState(false);

  const dispach = useDispatch();

  const handleOpen = async () => setOpen(true);

  const onCancelDel = async () => setOpen(false);
  // const handleClose = () => setOpen(false);

  useEffect(() => {
    userService.getOne(shoseId).then((result) => setOpen(result));
  }, [shoseId]);

  const onRemove = (_id) => {
    dispach(DLT(_id));
  };

  return (
    <div>
      <i
        onClick={handleOpen}
        alt="image 2"
        style={{
          position: "relative",
          // padding: 2,
          fontSize: 15,
          display: "flex",
          color: "red",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        className="bi bi-trash"
      >
        <span
          className="del"
          style={{
            fontSize: 12,
            color: "rgb(133, 133, 133)",
            marginRight: 15,
            marginLeft: 10,
            fontFamily: "sans-serif",
          }}
        >
          Изтрий
        </span>
      </i>

      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <i className="bi bi-trash"></i>
            <span style={{ fontWeight: "bold", fontSize: 17 }}>
              {" "}
              Премахване на продуцт!
            </span>
            <p style={{ fontSize: 13, paddingTop: 10 }}>
              Сигурен ли си, че искаш да премахнеш този продукт от количката?{" "}
            </p>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <table className={styles["tableItem"]}>
              <div className={styles["image-sneaccers"]}>
                <img src={imageUrl} alt="image 2" />
              </div>
              <div className={styles["name-sneaccers-del"]}>{sneacersName}</div>
              <div className={styles["name-sneaccers-del"]}>{quantity}x</div>
              <div className={styles["price-sneaccers-del"]}>{price} лв.</div>
            </table>

            <div className={styles["btn-content-del"]}>
              <span onClick={() => onRemove(_id)}>Премахни</span>
            </div>

            <div className={styles["btn-content-cancel"]}>
              <span onClick={onCancelDel}>Откажи</span>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
export default DeleteUser;
