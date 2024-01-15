import style from "../create/Create.module.css";

import * as userService from "../../services/componentService";
import { useNavigate } from "react-router-dom";
import Path from "../../path/path";

const AddProduct = () => {
  const navigate = useNavigate();

  const createHendler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const shoseData = Object.fromEntries(formData);
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
        <h1>Contact Us</h1>
        <div className="content_half float_l">
          <div id="contact_htmlFor">
            <form onSubmit={createHendler}>
              <label htmlFor="author" className={style["label-login"]}>
                Име на продуцт
              </label>{" "}
              <input
                type="text"
                id="author"
                name="sneacersName"
                className="required input_field"
              />

              <div className="cleaner h10"></div>
              <label htmlFor="phone" className={style["label-login"]}>
                Цена
              </label>{" "}
              <input
                type="text"
                name="price"
                id="phone"
                className="input_field"
              />

              <div className="cleaner h10"></div>
              <label htmlFor="phone" className={style["label-login"]}>
                Наличност
              </label>{" "}
              <input
                type="text"
                name="availablity"
                id="phone"
                className="input_field"
              />
              <div className="cleaner h10"></div>
              <label htmlFor="phone" className={style["label-login"]}>
                Модел
              </label>{" "}
              <input
                type="text"
                name="model"
                id="phone"
                className="input_field"
              />
              <div className="cleaner h10"></div>
              <label htmlFor="phone" className={style["label-login"]}>
                Производител
              </label>{" "}
              <input
                type="text"
                name="manifacture"
                id="phone"
                className="input_field"
              />
              <div className="cleaner h10"></div>
              <label htmlFor="phone" className={style["label-login"]}>
                Снимка
              </label>{" "}
              <input
                type="text"
                name="imageUrl"
                id="phone"
                className="input_field"
              />

              <div className="cleaner h10"></div>
              <label htmlFor="phone" className={style["label-login"]}>
                Описание
              </label>{" "}
              <textarea
                type="text"
                name="description"
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
                Създай
              </button>
            </form>
          </div>
        </div>

        {/* <div className="cleaner h40"></div> */}
      </div>
    </div>
  );
};
export default AddProduct;
