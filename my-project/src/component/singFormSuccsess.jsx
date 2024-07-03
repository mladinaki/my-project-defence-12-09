import { Button } from "@mui/material";
import style from "./register/Register.module.css";
import { Link } from "react-router-dom";

const SingFormSuccsess = () => {

    return (
        <div id="templatemo_main-register">
            <div className="succsessForm">
                <img src="images/check-mark.png"
                    style={{
                        margin: '10% auto',
                        width: 80,
                        height: 80
                    }}
                />
                Успешна регистрация!
                <Button color="success" variant="outlined" style={{ marginTop: 10 ,width:'80%',marginRight:20}}>
                    <Link to={'/product/catalog'}
                        style={{
                            display: 'inline',
                            fontSize: '11px',
                            fontWeight: 'bold',
                            position: 'relative',
                            padding: 2
                        }}>Затвори прозореца</Link>
                </Button>
            </div>
        </div>
    )
}

export default SingFormSuccsess;