import styles from "../Navigate/Navbar.module.css";

import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Path from "../../path/path";

import Avatar from "@mui/material/Avatar";

import AuthContext from "../../contexts/authContexts";
import { useContext } from "react";

const NavBar = ({ data }) => {
  const { isAuthenticated, username } = useContext(AuthContext);

  return (
    <div id="templatemo_menubar">

      <div id="top_nav" className="ddsmoothmenu">
        <ul>
          <li>
            <Nav.Link as={Link} to="/" className="selected">
              Начало
            </Nav.Link>
          </li>

          <li>
            <Nav.Link as={Link} to="/product/catalog">
              Продукти
            </Nav.Link>
          </li>

          {isAuthenticated && (
            <div className="user">
              <li>
                <Nav.Link as={Link} to="/add/sneakers">
                  Добавяне на продукт
                </Nav.Link>
              </li>
              <li>
                <Nav.Link as={Link} to={Path.Logout}>
                  Изход
                </Nav.Link>
              </li>
            </div>
          )}

          {!isAuthenticated && (
            <div className="guest">
              <li>
                <Nav.Link as={Link} to="/login">
                  Вход
                </Nav.Link>
              </li>
              <li>
                <Nav.Link as={Link} to="/register">
                  Регистрация
                </Nav.Link>
              </li>
            </div>
          )}

          <li>
            <Nav.Link as={Link} to="/contact">
              Контакти
            </Nav.Link>
          </li>
        </ul>
        {/* <br style="clear: left" /> */}
      </div>
      {isAuthenticated && (
        <div>
          <div className={styles["user-name-user"]}>
            Здравей!
            <span style={{ color: "black", fontSize: 13, paddingLeft: 5 }}>{username}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
