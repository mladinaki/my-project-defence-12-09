import style from "../login/Login.module.css";
import useForm from "../hooks/useForm";
import { useContext, useMemo } from "react";
import AuthContext from "../../contexts/authContexts";

const loginFormKyes = {
  Email: "email",
  Password: "password",
};

export default function Login() {
  const { loginSubmitHandler } = useContext(AuthContext);
  
const initialValue = useMemo(()=>({
  [loginFormKyes.Email]: "",
  [loginFormKyes.Password]: "",

}),[]) 
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, initialValue);

  return (
    <div id="templatemo_main-login" className={style["login-content"]}>
      <div id="content" className="float_r">
        <h1>Login</h1>

        <div className="content_half float_l">
          <p>Enter your email or password!</p>
          <div id="contact_htmlFor">
            <form name="login" onSubmit={onSubmit}>
              <label className={style["label-login"]} htmlFor="author">
                Email
              </label>
              <input
                type="text"
                id="author"
                name={loginFormKyes.Email}
                onChange={onChange}
                value={values[loginFormKyes.Email]}
                className="required input_field"
              />
              <div className="cleaner h10"></div>
              <label className={style["label-login"]} htmlFor="email">
                Password
              </label>
              <input
                type="password"
                id="password"
                name={loginFormKyes.Password}
                onChange={onChange}
                value={values[loginFormKyes.Password]}
                className="validate-email required input_field"
              />
              <div className="cleaner h30"></div>
              <button
                type="submit"
                className={style["btn"]}
                name="submit"
                id="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="cleaner"></div>
    </div>
  );
}
