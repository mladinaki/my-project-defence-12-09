import { useContext } from "react";
import AuthContext from "../../contexts/authContexts";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthGard(props) {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}
