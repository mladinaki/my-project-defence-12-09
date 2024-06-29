import { Button } from "@mui/material";
import style from "../details/Details.module.css";
import { useEffect, useState } from "react";
import * as commentServices from "../../services/commentServices"
import { useNavigate, useParams } from "react-router-dom";

const Comment = () => {
    const { shoseId } = useParams();
    const navigate = useNavigate();

    const [comm, setComment] = useState({ shoseData: "" })

    useEffect(() => {
        commentServices.getOne(shoseId)
            .then((result) => setComment(result));
    }, [shoseId]);

    const editHendler = async (e) => {
        e.preventDefault();
        const comm = Object.fromEntries(new FormData(e.currentTarget))
        try {
            const res = await commentServices.edit(shoseId, comm);
            console.log(res);

            setComment(state => state.map(comment => comment._id === shoseId ? res : comment));
            navigate(`/product/catalog`);

        } catch (error) {
            return error;
        }
    }

    const onChange = (e) => {
        setComment(state => ({
            ...state, [e.target.name]: e.target.value
        }))
    }
    return (
        <div id="templatemo_main_addProduct" className={style["add-content"]}>
            <div className={style["addItem-content-comment"]}>
                <div className="content_half float_l">
                    <div id="contact_htmlFor">
                        <form onSubmit={editHendler} style={{ display: 'inline-block', marginLeft: "300PX" }}>
                            <h3>Промени коментар</h3>
                            <textarea
                                style={{ width: '290px', height: '150px' }}
                                type="text"
                                name="shoseData"
                                value={comm.shoseData}
                                onChange={onChange}
                                id="phone"
                                className="required input_field"
                            // placeholder="Описание"
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