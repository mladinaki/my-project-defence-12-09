import * as userService from "../services/componentService";
import { useNavigate, useParams } from "react-router-dom";
import Path from "../path/path";

import style from "./Create/Create.module.css";
import useForm from "./hooks/useForm";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ShoseEdit = () => {
  const { shoseId } = useParams();
  const [selectEdit, seteEdit] = useState({
    sneacersName: "",
    price: "",
    quantity: "",
    availablity: "",
    model: "",
    manifacture: "",
    imageUrl: "",
    description: "",
  });
  const navigate = useNavigate();

  const getData = useSelector((state) => state.cartreducer.carts);

  useEffect(() => {
    userService.getOne(shoseId).then((result) => seteEdit(result));
  }, [shoseId]);

  const editHendler = async (values) => {
    try {
      await userService.edit(shoseId, values);

      navigate(Path.Product);
    } catch (error) {
      return error;
    }
  };

  const { values, onChange, onSubmit } = useForm(editHendler, selectEdit);

  return (
    <div id="templatemo_main_addProduct" className={style["add-content"]}>
      <div className={style["addItem-content"]}>
        <h1>Contact Us</h1>
        <div className="content_half float_l">
          <div id="contact_htmlFor">
            <form onSubmit={onSubmit}>
              <label htmlFor="author" className={style["label-login"]}>
                Sneacers Name
              </label>{" "}
              <input
                type="text"
                id="author"
                name="sneacersName"
                value={values.sneacersName}
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
                value={values.price}
                onChange={onChange}
                id="phone"
                className="input_field"
              />
              <label htmlFor="phone" className={style["label-login"]}>
                Quantity
              </label>{" "}
              <input
                type="text"
                name="quantity"
                value={values.quantity}
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
                value={values.availablity}
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
                value={values.model}
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
                value={values.manifacture}
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
                value={values.imageUrl}
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
                value={values.description}
                onChange={onChange}
                id="phone"
                className="input_field"
              />
              <button
                type="submit"
                name="submit"
                id="submit"
                value="Send"
                className={style["btn"]}
              >
                Edit cart
              </button>
            </form>
          </div>
        </div>

        {/* <div className="cleaner h40"></div> */}
      </div>
    </div>
  );
};
export default ShoseEdit;
