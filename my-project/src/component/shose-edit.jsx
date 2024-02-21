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
    userService.getOne(shoseId)
      .then((result) => seteEdit(result));
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
        <h3>Промени продукт</h3>
        <div className="content_half float_l">
          <div id="contact_htmlFor">
            <form onSubmit={editHendler}>

              <input
                type="text"
                id="author"
                name="sneacersName"
                value={selectEdit.sneacersName}
                onChange={onChange}
                className="required input_field"
                placeholder="Име"

              />
              <div className="cleaner h5"></div>

              <input
                type="text"
                name="price"
                value={selectEdit.price}
                onChange={onChange}
                id="price"
                className="input_field"
                placeholder="Цена"
              />
              <div className="cleaner h5"></div>

              <input
                type="text"
                name="availablity"
                value={selectEdit.availablity}
                onChange={onChange}
                id="phone"
                className="input_field"
                placeholder="Вналияност"

              />
              <div className="cleaner h5"></div>

              <input
                type="text"
                name="model"
                value={selectEdit.model}
                onChange={onChange}
                id="phone"
                className="input_field"
                placeholder="Модел"

              />
              <div className="cleaner h5"></div>

              <input
                type="text"
                name="manifacture"
                value={selectEdit.manifacture}
                onChange={onChange}
                id="phone"
                className="input_field"
                placeholder="Производител"
              />
              <div className="cleaner h5"></div>

              <input
                type="text"
                name="imageUrl"
                value={selectEdit.imageUrl}
                onChange={onChange}
                id="phone"
                className="input_field"
                placeholder="Снимка"
              />
              <div className="cleaner h5"></div>

              <textarea
                type="text"
                name="description"
                value={selectEdit.description}
                onChange={onChange}
                id="phone"
                className="input_field"
                placeholder="Описание"
              />
              <Button
                style={{
                  marginLeft: 7,
                  width: '95%',
                  height: 35,
                  borderRadius: 2,
                  backgroundColor: "#10BBCF",
                  color: "#000"
                }}
                sx={{ mt: 2, mb: 3 }}
                type="submit"
                className={style["btn"]}
              >
                Обнови
              </Button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};
export default ShoseEdit;
