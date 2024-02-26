import { Button } from "@mui/material";
import style from "../details/Details.module.css";


const Comment = () => {
    return (
        <div id="templatemo_main_addProduct" className={style["add-content"]}>
            <div className={style["addItem-content-comment"]}>
                <div className="content_half float_l">
                    <div id="contact_htmlFor">
                        <form style={{ display: 'inline-block', marginLeft: "300PX" }}>
                        <h3>Промени коментар</h3>
                        <textarea
                                style={{ width: '290px', height: '150px' }}
                                type="text"
                                name="description"
                                id="phone"
                                className="input_field"
                                placeholder="Описание"

                            />
                            <Button
                                style={{
                                    width: '100%',
                                    height: 35,
                                    borderRadius: 2,
                                    backgroundColor: "#10BBCF",
                                    color: "#000"
                                }}
                                sx={{ mt: 0, mb: 3 }}
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

export default Comment;