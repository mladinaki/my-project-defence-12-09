import { useContext, useMemo } from "react";
import style from "../register/Register.module.css";
import AuthContext from "../../contexts/authContexts";
import useForm from "../hooks/useForm";
//
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import validateform from "../validateForm/validateform";

const RegisterFormKeys = {
  Username: "username",
  Email: "email",
  Password: "password",
  ConfirmPassword: 'confirmPassword',
};

const defaultTheme = createTheme();

const Register = ({ submitForm }) => {
  const { registerSubmitHandler } = useContext(AuthContext);

  const { values, onChange, handleSubmit, err } = useForm(
    submitForm,
    validateform,
    registerSubmitHandler,
  );

  return (
    <div id="templatemo_main-register" className={style["login-content"]}>

      <div id="content" className="float_r">
        <div className="content_half float_l">
          {/* <p>Въведете своя имейл или парола!</p> */}
          <div id="contact_htmlFor">
            <div className="content_register-form">

              <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                  <CssBaseline />

                  <Box
                    sx={{
                      marginTop: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      // justifyContent: 'center',
                    }}
                  >
                    <Avatar style={{ backgroundColor: "#2F2F2F" }}>
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                      Регистриране
                    </Typography>
                    <Box component="form"
                      onSubmit={handleSubmit}
                    >

                      <TextField
                        style={{ marginBottom: 7 }}
                        placeholder="Име*"
                        label={err.username && <span style={{
                          color: 'red',
                          fontFamily: "verdana",
                          fontSize: '13px'
                        }}>{err.username}</span>}
                        name='username'
                        value={values[RegisterFormKeys.Username]}
                        onChange={onChange}
                      />

                      <TextField
                        style={{ marginBottom: 7 }}
                        label={err.email && <span style={{
                          color: 'red',
                          fontSize: '13px',
                          fontFamily: "verdana"
                        }}>{err.email}</span>}
                        placeholder="Имеайл адрес*"
                        onChange={onChange}
                        name="email"
                        value={values[RegisterFormKeys.Email]}
                      />

                      <TextField
                        style={{ marginBottom: 7 }}
                        name='password'
                        placeholder="Парола*"
                        label={err.password && <span style={{
                          color: 'red',
                          fontFamily: "verdana",
                          fontSize: '13px'
                        }}>{err.password}</span>}
                        type="password"
                        value={values[RegisterFormKeys.Password]}
                        onChange={onChange}
                      />

                      <TextField
                        style={{ marginBottom: 7 }}
                        name='confirmPassword'
                        placeholder="Потвърди паролата*"
                        value={values[RegisterFormKeys.ConfirmPassword]}
                        label={err.confirmPassword && <span style={{
                          color: 'red',
                          fontFamily: "verdana",
                          fontSize: '13px'
                        }}>{err.confirmPassword}</span>}
                        type="password"
                        onChange={onChange}
                      />

                      <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                      />

                      <Button
                        type="submit"
                        fullWidth
                        style={{ backgroundColor: "#10BBCF", color: "#FFFFFF" }}
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Регистриране
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </ThemeProvider>
            </div>
          </div>
        </div>
        <div className="cleaner"></div>
      </div>
    </div>
  );
};

export default Register;
