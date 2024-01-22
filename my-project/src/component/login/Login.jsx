import style from "../login/Login.module.css";

import useForms from "../hooks/useForm";
import { useContext } from "react";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import AuthContext from "../../contexts/authContexts";
import validateform from "../validateForm/validateform";

const loginFormKyes = {
  Username: "username",
  Email: "email",
  Password: "password",
};

const defaultTheme = createTheme();

const Login = ({ submitForm }) => {
  const { loginSubmitHandler } = useContext(AuthContext);

  const { values, onChange, handleSubmit, err } = useForms(
    submitForm,
    validateform,
    loginSubmitHandler,
  );

  return (
    <div id="templatemo_main-login" className={style["login-content"]}>
      <div id="content-login" className="float_r">

        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />

            <Box
              sx={{
                marginTop: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar style={{ backgroundColor: "#2F2F2F" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Влизане
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
              >

                <TextField
                  style={{ marginBottom: 7 }}
                  fullWidth
                  placeholder="Име*"
                  label={err.username && <span style={{ color: 'red', fontSize: '13px' }}>{err.username}</span>}
                  name='username'
                  value={values[loginFormKyes.Username]}
                  onChange={onChange}
                />

                <TextField
                  style={{ marginBottom: 7 }}
                  fullWidth
                  label={err.email && <span style={{ color: 'red', fontSize: '13px' }}>{err.email}</span>}
                  placeholder="Имейл*"
                  onChange={onChange}
                  name="email"
                  value={values[loginFormKyes.Email]}
                />

                <TextField
                  style={{ marginBottom: 7 }}
                  fullWidth
                  name='password'
                  placeholder="Парола*"
                  label={err.password && <span style={{ color: 'red', fontSize: '13px' }}>{err.password}</span>}
                  type="password"
                  value={values[loginSubmitHandler.Password]}
                  onChange={onChange}
                />

                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  // variant="contained"
                  style={{ backgroundColor: "#10BBCF", color: "#FFFFFF" }}
                  sx={{ mt: 1, mb: 0 }}
                >
                  Sign In
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>

        {/* <form name="login" onSubmit={onSubmit}>
              <label className={style["label-login"]} htmlFor="author">
                Имейл
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
                Прола
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
            </form> */}
      </div>
      {/* <div className="cleaner"></div> */}
    </div>
  );
}

export default Login
