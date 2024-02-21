import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Path from "../path/path";

const Footer = () => {
  return (
    <div id="templatemo_footer">

      <p>
        <Nav.Link as={Link} to={Path.Home}><span>Начало</span></Nav.Link> |{" "}
        <Nav.Link as={Link} to={Path.Product}><span>Продукти</span></Nav.Link>{" "}
        | <Nav.Link as={Link} to="/checout/cart"><span>Прегледай</span></Nav.Link>  |
        <Nav.Link as={Link} to={Path.Contact}><span>Контакти</span></Nav.Link>
      </p>

      <span>Copyright © 2022{" "}SoftUni defence React-exam. All rights reserved</span>
    </div>
  );
};

export default Footer;
