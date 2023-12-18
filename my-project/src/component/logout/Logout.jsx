/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";

import * as authService from "../../services/authService";
import { useNavigate } from "react-router-dom";
import Path from "../../path/path";
import AuthContext from "../../contexts/authContexts";

export default function Logout() {
  const navigate = useNavigate();
  const { logoutSubmitHandler } = useContext(AuthContext);

  useEffect(() => {
    authService
      .logout()
      .then(() => {
        logoutSubmitHandler();
        navigate(Path.Home);
      })
      .catch(() => {
        logoutSubmitHandler();
        navigate("/login");
      });
  }, []);
  return null;
}
