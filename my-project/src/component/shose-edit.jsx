import * as userService from "../services/componentService";
import { useNavigate, useParams } from "react-router-dom";
import Path from "../path/path";
import Button from '@mui/material/Button';

import style from "./Create/Create.module.css";
import { useEffect, useState } from "react";

const ShoseEdit = () => {
  const { shoseId } = useParams();
  const navigate = useNavigate();

  const [selectEdit, seteEdit] = useState({
    sneacersName: "",
    price: "",
    availablity: "",
    model: "",
    manifacture: "",
    imageUrl: "",
    description: "",
  });


  useEffect(() => {
    userService.getOne(shoseId).then((result) => seteEdit(result));
  }, [shoseId]);

  const editHendler = async (e) => {
    e.preventDefault();

    const selectEdit = Object.fromEntries(new FormData(e.currentTarget))

    try {
      await userService.edit(shoseId, selectEdit);
      navigate(Path.Product);
      
    } catch (error) {
      return error;
    }
  };

  const onChange = (e) => {
    seteEdit(state => ({
      ...state, [e.target.name]: e.target.value
    }))
  }

  return (
    <div id="templatemo_main_addProduct" className={style["add-content"]}>
      <div className={style["addItem-content"]}>
        <h1>Contact Us</h1>
        <div className="content_half float_l">
          <div id="contact_htmlFor">
            <form onSubmit={editHendler}>
              <label htmlFor="author" className={style["label-login"]}>
                Sneacers Name
              </label>{" "}
              <input
                type="text"
                id="author"
                name="sneacersName"
                value={selectEdit.sneacersName}
                onChange={onChange}
                className="required input_field"
              />
              <div className="cleaner h10"></div>
              <label htmlFor="phone" className={style["label-login"]}>
                Price
              </label>{" "}
              <input
                type="text"
                name="price"
                value={selectEdit.price}
                onChange={onChange}
                id="phone"
                className="input_field"
              />
              <div className="cleaner h10"></div>
              <label htmlFor="phone" className={style["label-login"]}>
                Availablity
              </label>{" "}
              <input
                type="text"
                name="availablity"
                value={selectEdit.availablity}
                onChange={onChange}
                id="phone"
                className="input_field"
              />
              <div className="cleaner h10"></div>
              <label htmlFor="phone" className={style["label-login"]}>
                Model
              </label>{" "}
              <input
                type="text"
                name="model"
                value={selectEdit.model}
                onChange={onChange}
                id="phone"
                className="input_field"
              />
              <div className="cleaner h10"></div>
              <label htmlFor="phone" className={style["label-login"]}>
                Manifacture
              </label>{" "}
              <input
                type="text"
                name="manifacture"
                value={selectEdit.manifacture}
                onChange={onChange}
                id="phone"
                className="input_field"
              />
              <div className="cleaner h10"></div>
              <label htmlFor="phone" className={style["label-login"]}>
                Image
              </label>{" "}
              <input
                type="text"
                name="imageUrl"
                value={selectEdit.imageUrl}
                onChange={onChange}
                id="phone"
                className="input_field"
              />
              <div className="cleaner h10"></div>
              <label htmlFor="phone" className={style["label-login"]}>
                Description
              </label>{" "}
              <textarea
                type="text"
                name="description"
                value={selectEdit.description}
                onChange={onChange}
                id="phone"
                className="input_field"
              />
              <Button
                type="submit"

                fullWidth
                style={{ backgroundColor: "#10BBCF", color: "#FFFFFF" }}
                className={style["btn"]}
              >
                Edit cart
              </Button>
            </form>
          </div>
        </div>

        {/* <div className="cleaner h40"></div> */}
      </div>
    </div>
  );
};
export default ShoseEdit;
