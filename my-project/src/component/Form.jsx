import { useState } from "react"
import SingFormSuccsess from "./singFormSuccsess";
import Register from "./register/Register";
import { useNavigate } from "react-router-dom";
import Path from "../path/path";

const Form = () => {
    const [formIsubmited, setIsSubmited] = useState(false);
    const navigate = useNavigate();

    const submitForm = () => {
        setIsSubmited(true);
        setTimeout(() => {
            navigate(Path.Login)
        }, 2000);
    }

    return (
        <div>
            {!formIsubmited ? <Register submitForm={submitForm} /> : <SingFormSuccsess />}
        </div>
    )
}

export default Form;