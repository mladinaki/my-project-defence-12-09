import style from "../create/Create.module.css";

import * as userService from "../../services/componentService";
import { useNavigate } from "react-router-dom";
import Path from "../../path/path";
import useCreate from "../hooks/useCreate";
import { useState } from "react";
import validate from "../validatecreate/validatecreate";

const Create = ({ submitCreateForm }) => {
  const navigate = useNavigate();

  const createSubmit = async (values) => {

    try {
      await userService.cerate(values);
    }
    catch (error) {
      console.log(error);
    }
  };

  const { onChange, values, handleSubmit, err } = useCreate(
    submitCreateForm,
    validate,
    createSubmit
  )

  return (
    <div id="templatemo_main_addProduct" className={style["add-content"]}>
      <div className={style["addItem-content"]}>

        <h3>Добавяне на продукт</h3>

        <div className="content_half float_l">
          <div id="contact_htmlFor">
            <form onSubmit={handleSubmit}>
              <input
              type="text"
              id="sneacersName"
              name="sneacersName"
              value={values.sneacersName}
              onChange={onChange}
              />
              {err.sneacersName && <span className="errMSG">{err.sneacersName}</span>}

              <input
                type="text"
                id="price"
                name="price"
                value={values.price}
                onChange={onChange}
                placeholder="Цена"
              />
              {err.price && <span className="errMSG">{err.price}</span>}

              <input
                type="text"
                name="availablity"
                id="availablity"
                value={values.availablity}
                onChange={onChange}
                placeholder="Наличност"
              />
              {err.availablity && <span className="errMSG">{err.availablity}</span>}

              <input
                type="text"
                name="model"
                id="model"
                value={values.model}
                onChange={onChange}
                className="input_field"
                placeholder="Модел"
              />
              {err.model && <span className="errMSG">{err.model}</span>}

              <input
                type="text"
                name="manifacture"
                id="manifacture"
                value={values.manifacture}
                onChange={onChange}
                className="input_field"
                placeholder="Производител"
              />
              {err.manifacture && <span className="errMSG">{err.manifacture}</span>}

              <input
                type="text"
                name="imageUrl"
                id="imageUrl"
                value={values.imageUrl}
                onChange={onChange}
                className="input_field"
                placeholder="Снимка"
              />
              {err.imageUrl && <span className="errMSG">{err.imageUrl}</span>}

              <textarea
                type="text"
                name="description"
                value={values.description}
                id="description"
                onChange={onChange}
                className="input_field"
                placeholder="Описание"
                />
                {err.description && <span className="errMSG">{err.description}</span>}


              <button
                type="submit"
                name="submit"
                id="submit"
                value="Send"
                className={style["btn"]}
              >
                Създай
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Create;
