import { createContext } from "react";
import * as authService from "../services/authService";

import { useNavigate } from "react-router-dom";
import Path from "../path/path";
import { usePersistedState } from "../component/hooks/usePersistedState";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = usePersistedState("auth", {});

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);

    setAuth(result);
    localStorage.setItem("accessToken", result.accessToken);
    navigate(Path.Home);
  };

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(values.email, values.password);

    setAuth(result);
    localStorage.setItem("accessToken", result.accessToken);
    navigate(Path.Home);
  };

  const logoutSubmitHandler = () => {
    setAuth({});
    localStorage.removeItem("accessToken");
    window.location.reload();
    navigate(Path.Home);
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutSubmitHandler,
    username: auth.username || auth.email,
    email: auth.email,
    userId: auth._id,
    isAuthenticated: !!auth.email,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
