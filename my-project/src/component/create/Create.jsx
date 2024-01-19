import style from "../create/Create.module.css";

import * as userService from "../../services/componentService";
import { useNavigate } from "react-router-dom";
import Path from "../../path/path";
import { Button } from "@mui/material";

const AddProduct = () => {
  const navigate = useNavigate();

  const createHendler = async (e) => {
    e.preventDefault();

    const shoseData = Object.fromEntries(new FormData(e.currentTarget));
    try {
      await userService.cerate(shoseData);
      navigate(Path.Product);
    }
    catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="templatemo_main_addProduct" className={style["add-content"]}>
      <div className={style["addItem-content"]}>

        <h3>Добавяне на продукт</h3>
        
        <div className="content_half float_l">
          <div id="contact_htmlFor">
            <form onSubmit={createHendler}>
              <input
                type="text"
                id="sneacersName"
                name="sneacersName"
                placeholder="Име на продукта"
              />

              <input
                type="text"
                name="price"
                id="price"
                placeholder="Цена"
              />

              <input
                type="text"
                name="availablity"
                id="availablity"
                placeholder="Наличност"
              />

              <input
                type="text"
                name="model"
                id="model"
                className="input_field"
                placeholder="Модел"
              />

              <input
                type="text"
                name="manifacture"
                id="manifacture"
                className="input_field"
                placeholder="Производител"
              />

              <input
                type="text"
                name="imageUrl"
                id="imageUrl"
                className="input_field"
                placeholder="Снимка"
              />

              <textarea
                type="text"
                name="description"
                id="description"
                className="input_field"
                placeholder="Описание"
              />

              <Button
                type="submit"
                name="submit"
                id="submit"
                value="Send"
                className={style["btn"]}
                style={{
                  marginLeft: 7,
                  width: '97%',
                  height: 40,
                  borderRadius: 2,
                  backgroundColor: "#10BBCF",
                  color: "#FFFFFF"
                }}
                sx={{ mt: 2, mb: 3 }}
              >
                Създай
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddProduct;
