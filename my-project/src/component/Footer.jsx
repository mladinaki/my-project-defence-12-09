import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Path from "../path/path";

const Footer = () => {
  return (
    <div id="templatemo_footer">

      <p>
        <Nav.Link style={{ color: 'white' }} as={Link} to={Path.Home}>Начало</Nav.Link> |{" "}
        <Nav.Link style={{ color: 'white' }} as={Link} to={Path.Product}>Продукти</Nav.Link>{" "}
        | <Nav.Link style={{ color: 'white' }} as={Link} to="/checout/cart">Прегледай</Nav.Link> |{" "}
        <Nav.Link  style={{color:'white'}} as={Link} to={Path.Contact}>Контакти</Nav.Link>
      </p>

      <span>Copyright © 2022{" "}SoftUni defence React-exam. All rights reserved</span>
    </div>
  );
};

export default Footer;
