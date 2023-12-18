import { useContext, useMemo } from "react";
import style from "../register/Register.module.css";
import AuthContext from "../../contexts/authContexts";
import useForm from "../hooks/useForm";

const RegisterFormKeys = {
  Username: "username",
  Email: "email",
  Password: "password",
  RepeatPassword: "confirm-password",
};

const Register = () => {
  const { registerSubmitHandler } = useContext(AuthContext);

  const initialValue = useMemo(
    () => ({
      [RegisterFormKeys.Username]: "",
      [RegisterFormKeys.Email]: "",
      [RegisterFormKeys.Password]: "",
      [RegisterFormKeys.RepeatPassword]: "",
    }),
    []
  );

  const { values, onChange, onSubmit } = useForm(
    registerSubmitHandler,
    initialValue
  );

  return (
    <div id="templatemo_main-register" className={style["login-content"]}>
      <div id="content" className="float_r">
        <h2>Register</h2>
        <div className="content_half float_l">
          <p>Enter your email or password!</p>
          <div id="contact_htmlFor">
            <form onSubmit={onSubmit}>
              <div className="cleaner h10"></div>
              <label className={style["label-login"]} htmlFor="email">
                Name
              </label>
              <input
                type="text"
                id="username"
                name={RegisterFormKeys.Username}
                onChange={onChange}
                value={values[RegisterFormKeys.Username]}
                className="validate-email required input_field"
              />
              <div className="cleaner h10"></div>
              <label className={style["label-login"]} htmlFor="email">
                Email
              </label>
              <input
                type="text"
                id="email"
                name={RegisterFormKeys.Email}
                onChange={onChange}
                value={values[RegisterFormKeys.Email]}
                className="validate-email required input_field"
              />
              <div className="cleaner h10"></div>
              <label htmlFor="phone" className={style["label-login"]}>
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="input_field"
                name={RegisterFormKeys.Password}
                onChange={onChange}
                values={values[RegisterFormKeys.Password]}
              />
              <div className="cleaner h10"></div>
              <div className="cleaner h10"></div>
              <label htmlFor="phone" className={style["label-login"]}>
                Repeat Password:
              </label>
              <input
                type="password"
                id="phone"
                className="input_field"
                name={RegisterFormKeys.RepeatPassword}
                onChange={onChange}
                values={values[RegisterFormKeys.RepeatPassword]}
              />
              <div className="cleaner h10"></div>
              <button
                type="submit"
                className={style["btn"]}
                value="Register"
                id="submit"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="cleaner"></div>
    </div>
  );
};

export default Register;
